import React, { useEffect } from "react";
import L from "leaflet";

// Import necessary Leaflet CSS here

export default function DelivaryMapModal({
  isOpen,
  onClose,
  lat,
  lng,
  lat2,
  lng2,
}) {
  useEffect(() => {
    if (isOpen) {
      // Create and initialize the map
      const map = L.map("map").setView([lat, lng], 10);
      const layer = L.tileLayer(
        "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      ).addTo(map);

      // Add markers for the two locations
      L.marker([lat, lng]).addTo(map);
      L.marker([lat2, lng2]).addTo(map);
    }
  }, [isOpen, lat, lng, lat2, lng2]);

  return (
    <div className={`modal ${isOpen ? "is-active" : ""}`}>
      <div className="modal-background"></div>
      <div className="modal-content">
        <div id="map" style={{ width: "100%", height: "400px" }}></div>
      </div>
      <button
        className="modal-close is-large"
        aria-label="close"
        onClick={onClose}
      ></button>
    </div>
  );
}

// export default DelivaryMapModal;
