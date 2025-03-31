import React, { useState } from "react";
import axios from "axios";
import Header1 from "./Header1";
import "../assets/css/pagecss/Prediction.css";

const symptoms = [
  "itching", "skin_rash", "nodal_skin_eruptions", "continuous_sneezing", "shivering", "chills", "joint_pain", "stomach_pain", "acidity", "ulcers_on_tongue", "muscle_wasting", "vomiting", "burning_micturition", "spotting_urination", "fatigue", "weight_gain", "anxiety", "cold_hands_and_feets", "mood_swings", "weight_loss", "restlessness", "lethargy", "patches_in_throat", "irregular_sugar_level", "cough", "high_fever", "sunken_eyes", "breathlessness", "sweating", "dehydration", "indigestion", "headache", "yellowish_skin", "dark_urine", "nausea", "loss_of_appetite", "pain_behind_the_eyes", "back_pain", "constipation", "abdominal_pain", "diarrhoea", "mild_fever", "yellow_urine", "yellowing_of_eyes", "acute_liver_failure", "fluid_overload", "swelling_of_stomach", "swelled_lymph_nodes", "malaise", "blurred_and_distorted_vision", "phlegm", "throat_irritation", "redness_of_eyes", "sinus_pressure", "runny_nose", "congestion", "chest_pain", "weakness_in_limbs", "fast_heart_rate", "pain_during_bowel_movements", "pain_in_anal_region", "bloody_stool", "irritation_in_anus", "neck_pain", "dizziness", "cramps", "bruising", "obesity", "swollen_legs", "swollen_blood_vessels", "puffy_face_and_eyes", "enlarged_thyroid", "brittle_nails", "swollen_extremeties", "excessive_hunger", "extra_marital_contacts", "drying_and_tingling_lips", "slurred_speech", "knee_pain", "hip_joint_pain", "muscle_weakness", "stiff_neck", "swelling_joints", "movement_stiffness", "spinning_movements", "loss_of_balance", "unsteadiness", "weakness_of_one_body_side", "loss_of_smell", "bladder_discomfort", "foul_smell_of_urine", "continuous_feel_of_urine", "passage_of_gases", "internal_itching", "toxic_look_(typhos)", "depression", "irritability", "muscle_pain", "altered_sensorium", "red_spots_over_body", "belly_pain", "abnormal_menstruation", "dischromic_patches", "watering_from_eyes", "increased_appetite", "polyuria", "family_history", "mucoid_sputum", "rusty_sputum", "lack_of_concentration", "visual_disturbances", "receiving_blood_transfusion", "receiving_unsterile_injections", "coma", "stomach_bleeding", "distention_of_abdomen", "history_of_alcohol_consumption", "fluid_overload", "blood_in_sputum", "prominent_veins_on_calf", "palpitations", "painful_walking", "pus_filled_pimples", "blackheads", "scurring", "skin_peeling", "silver_like_dusting", "small_dents_in_nails", "inflammatory_nails", "blister", "red_sore_around_nose", "yellow_crust_ooze"
];

const Prediction = () => {
  const [selectedSymptoms, setSelectedSymptoms] = useState(new Array(symptoms.length).fill(false));
  const [prediction, setPrediction] = useState(null);
  const [description, setDescription] = useState(null);
  const [prevention, setPrevention] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (index) => {
    const updatedSymptoms = [...selectedSymptoms];
    updatedSymptoms[index] = !updatedSymptoms[index];
    setSelectedSymptoms(updatedSymptoms);
  };

  const fetchPrevention = async (disease) => {
    setLoading(true);
    try {
      const response = await axios.post("https://consultivapredict.onrender.com/gemini", { disease }, {
        headers: { "Content-Type": "application/json" }
      });
      setPrevention(response.data.prevention);
    } catch (error) {
      console.error("Error fetching prevention measures:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const inputArray = selectedSymptoms.map((symptom) => (symptom ? 1 : 0));
    try {
      const response = await axios.post("https://consultivapredict.onrender.com/predict", { input: inputArray });
      setPrediction(response.data.predicted_disease);
      setDescription(response.data.description);
      fetchPrevention(response.data.predicted_disease);
    } catch (error) {
      console.error("Error predicting disease:", error);
    }
  };

  return (
    <>
      <Header1 />
      <div className="container container-fluid">
        <h1>Disease Prediction</h1>
        <div className="row justify-content-center">
          <div className="col-md-6">
            <form className="predict-form" onSubmit={handleSubmit}>
              {symptoms.map((symptom, index) => (
                <div className="symptom-checkbox" key={index}>
                  <label>
                    <input
                      type="checkbox"
                      checked={selectedSymptoms[index]}
                      onChange={() => handleChange(index)}
                    />
                    {symptom.replace(/_/g, " ")}
                  </label>
                </div>
              ))}
              <br />
              <button className="btn btn-primary" type="submit">Predict</button>
            </form>
          </div>
        </div>

        {prediction && (
          <div className="container container-fluid text-center mt-4">
            <h1 className="text-success">Prediction Result</h1>
            <h4>
              <strong className="text-danger">Disease:</strong> <b>{prediction.replace(/_/g, " ")}</b>
            </h4>
            {description && <p className="text-start">{description}</p>}
            {loading ? (
              <div className="mt-4 p-3 bg-light rounded text-center">
                <strong>Loading prevention measures...</strong>
              </div>
            ) : prevention && (
              <div className="mt-4 p-3 rounded">
                <h4 className="fw-bold mb-3">Prevention Measures:</h4>
                <ul className="list-group text-start">
                  {prevention.replace(/\*/g, "").split(/\d+\./).filter(item => item.trim()).map((item, index) => {
                    const [title, ...desc] = item.trim().split(":");
                    return (
                      <li key={index} className="list-group-item border-0 ps-0">
                        <strong>{index + 1}. {title.trim()}:</strong> {desc.join(":").trim()}
                      </li>
                    );
                  })}
                </ul>
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default Prediction;
