export default function Button(props) {
  return (
    <button
      className={props.isOpen ? "btn" : "close"}
      onClick={() => {
        if (props.isOpen) {
          alert(
            "Can't order, because this is not really a pizza place, ويلا  امشي  من هنا  (^_^)"
          );
        }
      }}
    >
      Order
    </button>
  );
}
