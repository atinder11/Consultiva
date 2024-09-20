import numpy as np
import pandas as pd
import warnings
import joblib
from sklearn.model_selection import train_test_split
from sklearn.ensemble import VotingClassifier 
from sklearn.preprocessing import LabelEncoder
from sklearn.ensemble import RandomForestClassifier
from sklearn.naive_bayes import GaussianNB
from sklearn.svm import SVC
from sklearn.metrics import accuracy_score

# Suppress specific sklearn warnings
warnings.filterwarnings("ignore", category=UserWarning, module="sklearn")

# Load the dataset
df = pd.read_csv('dataset.csv')

# Ensure the last column is dropped as it is empty in our database
df = df.iloc[:, :-1]

# The second-last column is the disease, and the rest are symptoms
symptoms = df.iloc[:, :-1]
disease = df.iloc[:, -1]

# Ensure all symptom columns contain only numeric values (0 or 1)
symptoms = symptoms.apply(pd.to_numeric, errors='coerce').fillna(0)

# Encode the disease labels
label_encoder = LabelEncoder()
disease = label_encoder.fit_transform(disease)

# Split the dataset into training and testing sets
X_train, X_test, y_train, y_test = train_test_split(symptoms, disease, test_size=0.2, random_state=42)

# Initialize the models
rf_model = RandomForestClassifier(random_state=42)
nb_model = GaussianNB()
svm_model = SVC(probability=True, random_state=42)

# Initialize the voting classifier with the base models
voting_clf = VotingClassifier(estimators=[
    ('rf', rf_model),
    ('nb', nb_model),
    ('svm', svm_model)
], voting='hard')  # Use 'hard' voting for majority rule

# Train the voting classifier
voting_clf.fit(X_train, y_train)

joblib.dump(voting_clf, 'model.joblib')
joblib.dump(label_encoder, 'label_encoder.joblib')

# ---------------- following is code for the model to run as a stand alone prediction app ----------------

# Predict using the voting classifier
#voting_pred = voting_clf.predict(X_test)

# Calculate accuracy
#voting_accuracy = accuracy_score(y_test, voting_pred)
#print(f"Voting Classifier Accuracy: {voting_accuracy}")

# Load disease descriptions from a new CSV file
#df_description = pd.read_csv('disease_description.csv')  

# Create a dictionary mapping disease codes to descriptions
#disease_map = dict(zip(df_description['Disease'], df_description['Description']))

#def predict_disease(input_symptoms):
#    input_symptoms = np.array(input_symptoms).reshape(1, -1)
    
    # Ensure the input has the correct shape
#    if input_symptoms.shape[1] != X_train.shape[1]:
#        raise ValueError("Input symptoms should have the same number of features as the training data.")
    
    # Predict using the voting classifier
#    voting_input_pred = voting_clf.predict(input_symptoms)
    
    # Convert prediction to disease name
#    predicted_disease_name = label_encoder.inverse_transform(voting_input_pred)[0]
    
#    disease_description = disease_map.get(predicted_disease_name, "Description not available")
    
#    return {
#        "Predicted Disease": predicted_disease_name,
#        "Disease Description": disease_description
#    }
    
#if __name__ == "__main__":
    # Check if command-line argument is provided
#    if len(sys.argv) < 2:
#        print("Usage: python recommend.py '<binary_values>'")
#        sys.exit(1)
    
    # Load input symptoms from command-line argument
#    input_symptoms = json.loads(sys.argv[1])
    
    # Predict disease based on input symptoms
#    predicted_disease = predict_disease(input_symptoms)
#    print(predicted_disease)

# Example usage with a new input
#input_data=[0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]

#how to run: open command line and write : python3 recommend.py ' Symptoms array '