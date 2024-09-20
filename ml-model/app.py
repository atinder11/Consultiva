from flask import Flask, request, jsonify
import numpy as np
import joblib
import logging
import warnings
from flask_cors import CORS
from sklearn.preprocessing import LabelEncoder

app = Flask(__name__)
CORS(app)

label_encoder = joblib.load("./label_encoder.joblib")
model = joblib.load("./model.joblib")

warnings.filterwarnings("ignore", category=UserWarning, module="sklearn")
logging.basicConfig(level=logging.DEBUG)

# Define the prediction endpoint
@app.route('/predict', methods=['POST'])
def predict():
    
    try:
        data = request.json
        input_symptoms = np.array(data['input']).reshape(1, -1)
        prediction = model.predict(input_symptoms)

        predicted_disease = label_encoder.inverse_transform(prediction)[0]

        response = {
            "predicted_disease": predicted_disease
        }
        print(response)
        return jsonify(response),200

    except Exception as e:
        logging.error('Prediction error: %s', str(e))
        return jsonify({'error': 'Internal Server Error'}), 500

if __name__ == '__main__':
    app.run(debug=True)
