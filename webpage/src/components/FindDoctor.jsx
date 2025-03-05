import React, { useState, useRef } from "react";
import {
  GoogleMap,
  LoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import { Autocomplete } from "@react-google-maps/api";

const mapContainerStyle = { height: "500px", width: "100%" };
const center = { lat: 28.5707583, lng: 77.3260756 };

const FindDoctorMap = () => {
  const [map, setMap] = useState(null);
  const [selectedPlace, setSelectedPlace] = useState(null);
  const [places, setPlaces] = useState([]);
  const autocompleteRef = useRef(null);

  const onLoad = (autocomplete) => {
    autocompleteRef.current = autocomplete;
  };

  const onPlacesChanged = () => {
    if (!autocompleteRef.current || !map) return;

    const place = autocompleteRef.current.getPlace();
    if (!place || !place.geometry) return;

    map.setCenter(place.geometry.location);
    map.setZoom(14);

    const request = {
      location: place.geometry.location,
      radius: 1000,
      type: "hospital",
    };

    const service = new window.google.maps.places.PlacesService(map);
    service.nearbySearch(request, (results, status) => {
      if (status === window.google.maps.places.PlacesServiceStatus.OK) {
        setPlaces(results);
        const bounds = new window.google.maps.LatLngBounds();
        results.forEach((place) => bounds.extend(place.geometry.location));
        map.fitBounds(bounds);
      }
    });
  };

  return (
    <LoadScript googleMapsApiKey="AIzaSyDdxxqlAXwH6UGl3TzgyAr2Rw3gppU1C80" libraries={["places"]}>
      <div>
        <h1 className="text-center my-4">Find Nearby Hospitals</h1>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8">
              <Autocomplete onLoad={onLoad} onPlaceChanged={onPlacesChanged}>
                <input className="form-control mb-3" type="text" placeholder="Search location" />
              </Autocomplete>
            </div>
          </div>
          <GoogleMap
            mapContainerStyle={mapContainerStyle}
            center={center}
            zoom={14}
            onLoad={setMap}
          >
            {places.map((place) => (
              <Marker
                key={place.place_id}
                position={place.geometry.location}
                icon={{
                  url: "data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='48' height='48' viewBox='0 0 24 24' fill='%23D32F2F' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 2C8.134 2 5 5.134 5 9c0 3.866 4.934 10.433 6.318 12.265a1 1 0 0 0 1.364 0C14.066 19.433 19 12.866 19 9c0-3.866-3.134-7-7-7z'/%3E%3Ccircle cx='12' cy='9' r='3' fill='white'/%3E%3C/svg%3E",
                  scaledSize: new window.google.maps.Size(40, 40),
                }}
                onClick={() => setSelectedPlace(place)}
              />
            ))}
            {selectedPlace && (
              <InfoWindow
                position={selectedPlace.geometry.location}
                onCloseClick={() => setSelectedPlace(null)}
              >
                <div
                  style={{
                    width: "250px",
                    borderRadius: "8px",
                    boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
                    padding: "12px",
                    textAlign: "center",
                  }}
                >
                  <h5 style={{ fontWeight: "bold", color: "#333" }}>
                    {selectedPlace.name}
                  </h5>
                  {selectedPlace.photos?.length > 0 && (
                    <img
                      src={selectedPlace.photos[0].getUrl({ maxWidth: 200, maxHeight: 150 })}
                      alt={selectedPlace.name}
                      style={{
                        width: "100%",
                        height: "120px",
                        objectFit: "cover",
                        borderRadius: "6px",
                        margin: "8px 0",
                      }}
                    />
                  )}
                  <p style={{ fontSize: "14px", color: "#666" }}>
                    {selectedPlace.vicinity}
                  </p>
                  <div style={{ display: "flex", justifyContent: "center", gap: "8px" }}>
                    <a
                      href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                        selectedPlace.name
                      )}&query_place_id=${selectedPlace.place_id}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary btn-sm"
                    >
                      Get Info
                    </a>
                    <a
                      href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
                        selectedPlace.name
                      )}&destination_place_id=${selectedPlace.place_id}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-secondary btn-sm"
                    >
                      Get Directions
                    </a>
                  </div>
                </div>
              </InfoWindow>
            )}
          </GoogleMap>
        </div>
      </div>
    </LoadScript>
  );
};

export default FindDoctorMap;
