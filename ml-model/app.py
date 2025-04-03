from flask import Flask, request, jsonify
import numpy as np
import joblib
import logging
import pandas as pd
import google.generativeai as genai
from flask_cors import CORS
from sklearn.preprocessing import LabelEncoder
import os
from dotenv import load_dotenv

load_dotenv()

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*"}}, supports_credentials=True)

# Configure logging
logging.basicConfig(level=logging.INFO)

# Load ML model and label encoder
try:
    label_encoder = joblib.load("label_encoder.joblib")
    model = joblib.load("model.joblib")
    logging.info(f"Model loaded. Expecting {model.n_features_in_} features")
except Exception as e:
    logging.error(f"Model loading error: {e}")
    raise e

# Load disease descriptions
try:
    disease_data = pd.read_csv("disease_description.csv")
    disease_dict = dict(zip(disease_data["Disease"], disease_data["Description"]))
    logging.info(f"Loaded descriptions for {len(disease_dict)} diseases")
except Exception as e:
    logging.error(f"Error loading disease descriptions: {e}")
    disease_dict = {}

# Configure Gemini API
try:
    genai.configure(api_key=os.getenv("GEMINI_API_KEY"))
except Exception as e:
    logging.error(f"Gemini config error: {e}")
    raise e

def generate_gemini_response(prompt):
    """Helper function to generate Gemini responses"""
    try:
        response = genai.GenerativeModel("gemini-1.5-pro").generate_content(prompt)
        return response.text if hasattr(response, 'text') else None
    except Exception as e:
        logging.error(f"Gemini error: {e}")
        return None

@app.after_request
def add_cors_headers(response):
    response.headers['Access-Control-Max-Age'] = '3600'  # Cache preflight requests
    return response

@app.route('/predict', methods=['POST'])
def predict():
    """Handle disease prediction"""
    try:
        data = request.json
        input_symptoms = np.array(data.get('input', []))
        
        if input_symptoms.shape[0] != model.n_features_in_:
            return jsonify({"error": f"Expected {model.n_features_in_} features, got {len(input_symptoms)}"}), 400
        
        prediction = model.predict(input_symptoms.reshape(1, -1))
        disease = label_encoder.inverse_transform(prediction)[0]
        description = disease_dict.get(disease, "Description not available")
        
        return jsonify({"predicted_disease": disease, "description": description})
        
    except Exception as e:
        logging.error(f"Prediction error: {e}")
        return jsonify({"error": str(e)}), 500

@app.route('/prevention', methods=['POST'])
def prevention():
    try:
        disease = request.json.get("disease", "")
        if not disease:
            return jsonify({"error": "Disease parameter is required"}), 400
        
        prompt = f"Provide 5 key prevention measures for {disease} in concise bullet points."
        return jsonify({"prevention": generate_gemini_response(prompt) or "No prevention measures available"})
        
    except Exception as e:
        logging.error(f"Prevention error: {e}")
        return jsonify({"error": str(e)}), 500

@app.route('/diet', methods=['POST'])
def diet():
    try:
        disease = request.json.get("disease", "")
        if not disease:
            return jsonify({"error": "Disease parameter is required"}), 400
        
        prompt = f"""Generate a diet & lifestyle guide for {disease} with:
- **Daily Water Intake**
- **Homeopathic Remedies**
- **Do's & Don'ts**
- **Additional Tips**
(Focus on Indian dietary habits.)"""
        
        return jsonify({"diet_chart": generate_gemini_response(prompt) or "No diet chart available"})
        
    except Exception as e:
        logging.error(f"Diet error: {e}")
        return jsonify({"error": str(e)}), 500

@app.route('/homeopathic', methods=['POST'])
def homeopathic():
    try:
        disease = request.json.get("disease", "")
        if not disease:
            return jsonify({"error": "Disease parameter is required"}), 400
        
        prompt = f"Provide natural/homeopathic recommendations for {disease} in bullet points and dont used ** and ## within the text of paragraph."
        return jsonify({"homeopathic": generate_gemini_response(prompt) or "No homeopathic recommendations available"})
        
    except Exception as e:
        logging.error(f"Homeopathic error: {e}")
        return jsonify({"error": str(e)}), 500

@app.route('/tips', methods=['POST'])
def tips():
    try:
        disease = request.json.get("disease", "")
        if not disease:
            return jsonify({"error": "Disease parameter is required"}), 400
        
        prompt = f"Provide 3 lifestyle tips for managing {disease} in bullet points."
        return jsonify({"tips": generate_gemini_response(prompt) or "No additional tips available"})
        
    except Exception as e:
        logging.error(f"Tips error: {e}")
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
