from flask import Flask, request, jsonify
import numpy as np
import joblib
import logging
import warnings
import pandas as pd
import google.generativeai as genai
from flask_cors import CORS
from sklearn.preprocessing import LabelEncoder
import os
from dotenv import load_dotenv

load_dotenv()  # Load environment variables

app = Flask(__name__)
CORS(app)

# Load the machine learning model and label encoder
label_encoder = joblib.load("./label_encoder.joblib")
model = joblib.load("./model.joblib")

# Load disease descriptions
try:
    disease_data = pd.read_csv("disease_description.csv")
    disease_dict = dict(zip(disease_data["Disease"], disease_data["Description"]))
except Exception as e:
    logging.error("Error loading disease description CSV: %s", str(e))
    disease_dict = {}

# Configure Gemini API
API_KEY = os.getenv("GEMINI_API_KEY")
genai.configure(api_key=API_KEY)

def fetch_prevention_measures(disease_name):
    try:
        model = genai.GenerativeModel("gemini-1.5-pro")  # Use an available model
        prompt = f"Provide 5 key prevention measures for {disease_name} in points."
        response = model.generate_content(prompt)
        
        if response and hasattr(response, 'text'):
            return response.text.strip()
        return "No prevention measures available."
    
    except Exception as e:
        logging.error("Gemini API error: %s", str(e))
        return "No prevention measures available."

@app.route('/predict', methods=['POST'])
def predict():
    try:
        data = request.json
        input_symptoms = np.array(data['input']).reshape(1, -1)
        prediction = model.predict(input_symptoms)
        predicted_disease = label_encoder.inverse_transform(prediction)[0]

        disease_description = disease_dict.get(predicted_disease, "Description not available.")

        response = {
            "predicted_disease": predicted_disease,
            "description": disease_description
        }
        return jsonify(response), 200

    except Exception as e:
        logging.error('Prediction error: %s', str(e))
        return jsonify({'error': 'Internal Server Error'}), 500

@app.route('/gemini', methods=['POST'])
def gemini():
    try:
        data = request.json
        disease_name = data.get("disease", "")
        prevention_measures = fetch_prevention_measures(disease_name)
        return jsonify({"prevention": prevention_measures}), 200
    except Exception as e:
        logging.error("Gemini API error: %s", str(e))
        return jsonify({"error": "Internal Server Error"}), 500

if __name__ == '__main__':
    app.run(debug=True)
