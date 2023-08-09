import DeliveryOffer from "../../components/deliveryoffer";

export default function DeliveryNews() {
  const offers = ["first offer", "second offer"];

  // some function to call the database
  // fill up offers with text

  return (
    <div>
      {offers.map((offer) => (
        <div key={offer}>
          <DeliveryOffer text={offer} />
        </div>
      ))}
    </div>
  );
}
