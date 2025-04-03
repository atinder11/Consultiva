import React, { useState } from "react";
import axios from "axios";
import Header1 from "./Header1";
import "../assets/css/pagecss/Prediction.css";

const symptoms = [
  "itching", "skin_rash", "nodal_skin_eruptions", "continuous_sneezing", "shivering", 
  "chills", "joint_pain", "stomach_pain", "acidity", "ulcers_on_tongue", 
  "muscle_wasting", "vomiting", "burning_micturition", "spotting_urination", 
  "fatigue", "weight_gain", "anxiety", "cold_hands_and_feets", "mood_swings", 
  "weight_loss", "restlessness", "lethargy", "patches_in_throat", "irregular_sugar_level", 
  "cough", "high_fever", "sunken_eyes", "breathlessness", "sweating", "dehydration", 
  "indigestion", "headache", "yellowish_skin", "dark_urine", "nausea", "loss_of_appetite", 
  "pain_behind_the_eyes", "back_pain", "constipation", "abdominal_pain", "diarrhoea", 
  "mild_fever", "yellow_urine", "yellowing_of_eyes", "acute_liver_failure", 
  "fluid_overload", "swelling_of_stomach", "swelled_lymph_nodes", "malaise", 
  "blurred_and_distorted_vision", "phlegm", "throat_irritation", "redness_of_eyes", 
  "sinus_pressure", "runny_nose", "congestion", "chest_pain", "weakness_in_limbs", 
  "fast_heart_rate", "pain_during_bowel_movements", "pain_in_anal_region", "bloody_stool", 
  "irritation_in_anus", "neck_pain", "dizziness", "cramps", "bruising", "obesity", 
  "swollen_legs", "swollen_blood_vessels", "puffy_face_and_eyes", "enlarged_thyroid", 
  "brittle_nails", "swollen_extremeties", "excessive_hunger", "extra_marital_contacts", 
  "drying_and_tingling_lips", "slurred_speech", "knee_pain", "hip_joint_pain", 
  "muscle_weakness", "stiff_neck", "swelling_joints", "movement_stiffness", 
  "spinning_movements", "loss_of_balance", "unsteadiness", "weakness_of_one_body_side", 
  "loss_of_smell", "bladder_discomfort", "foul_smell_of_urine", "continuous_feel_of_urine", 
  "passage_of_gases", "internal_itching", "toxic_look_(typhos)", "depression", 
  "irritability", "muscle_pain", "altered_sensorium", "red_spots_over_body", 
  "belly_pain", "abnormal_menstruation", "dischromic_patches", "watering_from_eyes", 
  "increased_appetite", "polyuria", "family_history", "mucoid_sputum", "rusty_sputum", 
  "lack_of_concentration", "visual_disturbances", "receiving_blood_transfusion", 
  "receiving_unsterile_injections", "coma", "stomach_bleeding", "distention_of_abdomen", 
  "history_of_alcohol_consumption", "fluid_overload", "blood_in_sputum", 
  "prominent_veins_on_calf", "palpitations", "painful_walking", "pus_filled_pimples", 
  "blackheads", "scurring", "skin_peeling", "silver_like_dusting", "small_dents_in_nails", 
  "inflammatory_nails", "blister", "red_sore_around_nose", "yellow_crust_ooze"
];

const Prediction = () => {
  const [selectedSymptoms, setSelectedSymptoms] = useState(new Array(symptoms.length).fill(false));
  const [result, setResult] = useState({
    disease: "",
    description: "",
    prevention: "",
    diet: "",
    homeopathic: "",
    tips: ""
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [waitingForOthers, setWaitingForOthers] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  
  // Filtered symptoms based on search query
  const uniqueSymptoms = [...new Set(symptoms)];
  const filteredSymptoms = uniqueSymptoms.filter(symptom => 
    symptom.toLowerCase().includes(searchQuery.toLowerCase())
  );
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleCheckboxChange = (symptom) => {
    const index = symptoms.indexOf(symptom);
    if (index !== -1) {
      const newSelectedSymptoms = [...selectedSymptoms];
      newSelectedSymptoms[index] = !newSelectedSymptoms[index];
      setSelectedSymptoms(newSelectedSymptoms);
    }
  };

  const formatText = (text) => {
    if (!text) return null;
    return text.split('\n').map((paragraph, i) => (
      <p key={i} className="mb-2">{paragraph}</p>
    ));
  };

  const formatRecommendations = (text) => {
    if (!text) return null;

    // Helper function to process formatting
    const processFormattedText = (str) => {
        // Process bold (**bold**), italic (*italic*), and headings (##heading)
        const parts = str.split(/(\*\*.*?\*\*|\*.*?\*|##.*)/g);
        return parts.map((part, i) => {
            if (part.startsWith('**') && part.endsWith('**')) {
                return <strong key={i}>{part.slice(2, -2)}</strong>;
            }
            if (part.startsWith('*') && part.endsWith('*') && part.length > 1) {
                return <em key={i}>{part.slice(1, -1)}</em>;
            }
            if (part.startsWith('##')) {
                return <h3 key={i}>{part.slice(2).trim()}</h3>;
            }
            return part;
        });
    };

    return (
        <div className="recommendations-content">
            {text.split('\n').map((paragraph, i) => {
                paragraph = paragraph.trim();
                if (!paragraph) return null;

                // Format main heading (##)
                if (paragraph.startsWith('## ')) {
                    return (
                        <h2 key={i} className="recommendation-main-heading">
                            {paragraph.replace('## ', '')}
                        </h2>
                    );
                }

                // Format sub-headings (ending with :)
                if (paragraph.endsWith(':')) {
                    return (
                        <h3 key={i} className="recommendation-subheading">
                            {paragraph}
                        </h3>
                    );
                }

                // Format bullet points (either • or starting with -/*)
                if (paragraph === '•' || paragraph.startsWith('- ') || paragraph.startsWith('* ')) {
                    if (paragraph === '•') return null; // Skip standalone bullet markers
                    
                    const content = paragraph.substring(2).trim();
                    return (
                        <div key={i} className="recommendation-item">
                            <span className="bullet">•</span>
                            <span>{processFormattedText(content)}</span>
                        </div>
                    );
                }

                // Format remedy lists (item: *remedy*, *remedy*)
                if (paragraph.includes(': *')) {
                    const [condition, remedies] = paragraph.split(':');
                    return (
                        <div key={i} className="recommendation-item">
                            <span className="bullet">•</span>
                            <span>
                                <strong>{condition.trim()}:</strong>
                                {processFormattedText(remedies.trim())}
                            </span>
                        </div>
                    );
                }

                // Regular paragraphs
                return (
                    <p key={i} className="recommendation-text">
                        {processFormattedText(paragraph)}
                    </p>
                );
            })}
        </div>
    );
};

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setResult({
      disease: "",
      description: "",
      prevention: "",
      diet: "",
      homeopathic: "",
      tips: ""
    });
    setWaitingForOthers(true);
  
    try {
      const inputArray = symptoms.map((_, index) => selectedSymptoms[index] ? 1 : 0);
      const predictionResponse = await axios.post("https://consultivapredict.onrender.com/predict", {
        input: inputArray
      });
  
      const disease = predictionResponse.data.predicted_disease;
      const description = predictionResponse.data.description;
  
      setResult(prevResult => ({
        ...prevResult,
        disease,
        description
      }));
  
      // Fetch other data in parallel, but update individually
      const preventionRes = axios.post("https://consultivapredict.onrender.com/prevention", { disease });
      const dietRes = axios.post("https://consultivapredict.onrender.com/diet", { disease });
      const homeopathicRes = axios.post("https://consultivapredict.onrender.com/homeopathic", { disease });
      const tipsRes = axios.post("https://consultivapredict.onrender.com/tips", { disease });
  
      // Update the result state as responses come in
      preventionRes.then(res => {
        setResult(prevResult => ({
          ...prevResult,
          prevention: res.data.prevention
        }));
      });
      dietRes.then(res => {
        setResult(prevResult => ({
          ...prevResult,
          diet: res.data.diet_chart || res.data.message
        }));
      });
      homeopathicRes.then(res => {
        setResult(prevResult => ({
          ...prevResult,
          homeopathic: res.data.homeopathic
        }));
      });
      tipsRes.then(res => {
        setResult(prevResult => ({
          ...prevResult,
          tips: res.data.tips
        }));
      });
  
      // Once all responses are fetched, update the waiting state
      await Promise.all([preventionRes, dietRes, homeopathicRes, tipsRes]);
  
      // After all responses, stop loading and waiting state
      setWaitingForOthers(false);
  
    } catch (err) {
      console.error("Error:", err);
      setError(err.response?.data?.error || "Failed to fetch data. Please try again.");
      setWaitingForOthers(false);
    } finally {
      setLoading(false); // Stop the loader once all requests are finished
    }
  };

  return (
    <div>
    <div className="prediction-container">
      <Header1 />
      <div className="container container-fluid">
        <h1 className="text-center">Disease Prediction</h1>
        <div className="mb-3">
          {error && <div className="alert alert-danger">{error}</div>}
  
          <form onSubmit={handleSubmit} className="symptoms-form">
            {/* Search Bar */}
            <div className="mb-3 search-bar">
              <input
                type="text"
                className="form-control"
                placeholder="Search symptoms..."
                value={searchQuery}
                onChange={handleSearchChange}
              />
            </div>
            
            <div className="container d-flex flex-column align-items-start" >
            {filteredSymptoms.map((symptom) => {
              const index = symptoms.indexOf(symptom);
              return (
    <div className="form-check mb-3" key={index}>
      <input
        className="form-check-input"
        type="checkbox"
        id={`symptom-${index}`}
        checked={selectedSymptoms[index]}
        onChange={() => handleCheckboxChange(symptom)}
        disabled={loading}
      />
      <label className="form-check-label" htmlFor={`symptom-${index}`}>
        {symptom.replace(/_/g, " ")}
      </label>
    </div>
  );
})}
</div>

  
            <button 
              type="submit" 
              className="btn btn-primary d-block mx-auto mt-2 mb-2"
              disabled={loading || selectedSymptoms.every(s => !s)}
            >
              {loading ? (
                <>
                  <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                  Predicting...
                </>
              ) : "Predict Disease"}
            </button>
        </form>

        {result.disease && (
          <div className="results-container ">
            <div className="result-section diagnosis-section">
              <h1 className="text-center ">
                Result: <b className="text-danger text-strong">{result.disease.replace(/_/g, " ")}</b>
              </h1>
              <div className="description">{formatText(result.description)}</div>
            </div>

            {waitingForOthers && <h3 className="text-center">
            <i>Waiting for additional GenAI responses...</i></h3>}

            <div className="result-section">
              <h1>🛡️ Prevention Measures</h1>
              <div className="prevention">{formatRecommendations(result.prevention)}</div>
            </div>

            <div className="result-section">
              <h1>🍎 Diet & Lifestyle Recommendations</h1>
              <div className="diet">{formatRecommendations(result.diet)}</div>
            </div>

            <div className="result-section">
              <h1>🌿 Homeopathic/Natural Recommendations</h1>
              <div className="homeopathic">{formatRecommendations(result.homeopathic)}</div>
            </div>

            <div className="result-section">
              <h1>💡 Additional Tips</h1>
              <div className="tips">{formatRecommendations(result.tips)}</div>
            </div>
          </div>
        )}
      </div>
      <div className="d-flex justify-content-center mt-4">
        <br/>
    <strong className="mb-0">AI-generated, for reference only</strong>
  </div>

    </div>
    </div>
    </div>
    
  );
};

export default Prediction;
