export default function Pizza(props) {
  return (
    <li className={props.soldOut ? "pizza sold-out" : "pizza"}>
      <img src={props.photoName} alt={props.name} />
      <div>
        <h3>{props.name}</h3>
        <p>{props.description}</p>
        <span>{props.soldOut ? "SOLD OUT" : props.price}</span>
      </div>
    </li>
  );
}
