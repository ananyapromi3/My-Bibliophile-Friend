// OfferModal.js
import React from "react";
import Modal from "react-modal";
import OfferSmall from "./offerSmall";

Modal.setAppElement("#__next");

export default function OfferModal({ isOpen, onRequestClose, offers, notification1 }) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Offer Details"
    >
      <h2>Offer Details</h2>
      {offers.map((offer) => (
        <OfferSmall key={offer.OFFERID} offer={offer} notification1={notification1} />
      ))}
      <button onClick={onRequestClose}>Close</button>
    </Modal>
  );
}
