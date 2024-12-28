import Button from "./Button";

export default function Open() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour < closeHour;
  return (
    <div className="order">
      <h2>
        {isOpen
          ? `We are open from ${openHour}:00 to ${closeHour}:00`
          : `We are`}{" "}
        {isOpen === false ? <span style={{ color: "red" }}>closed</span> : null}
      </h2>
      <p style={{ fontSize: "14px" }}>
        {isOpen ? "Order your pizza now!" : "We are open from 12:00 to 22:00"}
      </p>

      <Button isOpen={isOpen} />
    </div>
  );
}
