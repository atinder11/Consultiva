import React, { useState, useRef } from "react";
import {
  GoogleMap,
  LoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import { Autocomplete } from "@react-google-maps/api";
import Header1 from "../pages/Header1";

const mapContainerStyle = {
  height: "500px",
  width: "100%",
};

const center = {
  lat: 28.5707583,
  lng: 77.3260756,
};

const FindDoctorMap = () => {
  const [map, setMap] = useState(null);
  const [selectedPlace, setSelectedPlace] = useState(null);
  const [places, setPlaces] = useState([]);
  const autocompleteRef = useRef(null);

  const onLoad = (autocomplete) => {
    autocompleteRef.current = autocomplete;
  };

  const onPlacesChanged = () => {
    if (autocompleteRef.current) {
      const place = autocompleteRef.current.getPlace();
      if (!place.geometry) {
        console.log("Returned place contains no geometry");
        return;
      }

      const request = {
        location: place.geometry.location,
        radius: "1500",
        type: ["hospital"],
      };

      const service = new window.google.maps.places.PlacesService(map);
      service.nearbySearch(request, (results, status) => {
        if (status === window.google.maps.places.PlacesServiceStatus.OK) {
          setPlaces(results);
          if (results.length > 0) {
            map.fitBounds(results[0].geometry.viewport);
          }
        }
      });
    }
  };

  const handleMarkerClick = (place) => {
    setSelectedPlace(place);
  };

  return (
    <>
      <LoadScript
        googleMapsApiKey="AIzaSyAVTcUKRj2qcVI6ZY5zTAkkR-1jubl-6LQ"
        libraries={["places"]}
      >
        <div>
          <Header1 />
          <h1 className="text-center my-4">Find the Hospitals</h1>
          <div className="container container-fluid">
            <div className="row justify-content-center">
              <div className="col-md-8">
                <Autocomplete onLoad={onLoad} onPlaceChanged={onPlacesChanged}>
                  <input
                    className="form-control mb-3"
                    type="text"
                    placeholder="Search for a location"
                  />
                </Autocomplete>
              </div>
            </div>
            <div>
              <GoogleMap
                mapContainerStyle={mapContainerStyle}
                center={center}
                zoom={15}
                onLoad={(map) => setMap(map)}
              >
                {places.map((place) => (
                  <Marker
                    key={place.place_id}
                    position={place.geometry.location}
                    onClick={() => handleMarkerClick(place)}
                  />
                ))}
                {selectedPlace && (
                  <InfoWindow
                    position={selectedPlace.geometry.location}
                    onCloseClick={() => setSelectedPlace(null)}
                  >
                    <div className="info-content card">
                      <div className="card-body">
                        <h5 className="card-title">{selectedPlace.name}</h5>
                        <p className="card-text">{selectedPlace.vicinity}</p>
                        {selectedPlace.photos &&
                          selectedPlace.photos.length > 0 && (
                            <img
                              src={selectedPlace.photos[0].getUrl({
                                maxWidth: 200,
                                maxHeight: 200,
                              })}
                              alt={selectedPlace.name}
                              className="img-fluid mb-2"
                            />
                          )}
                        <div className="d-flex justify-content-between">
                          <a
                            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                              selectedPlace.name
                            )}&query_place_id=${selectedPlace.place_id}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-primary"
                          >
                            Get Info
                          </a>
                          <a
                            href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
                              selectedPlace.name
                            )}&destination_place_id=${selectedPlace.place_id}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-secondary"
                          >
                            Get Directions
                          </a>
                        </div>
                      </div>
                    </div>
                  </InfoWindow>
                )}
              </GoogleMap>
            </div>
          </div>
        </div>
      </LoadScript>
    </>
  );
};

export default FindDoctorMap;
