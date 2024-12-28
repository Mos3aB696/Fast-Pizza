import Pizza from "./Pizza";
import pizzaData from "../data.js";

export default function Menu() {
  const pizzas = pizzaData;
  // const pizzas = [];
  return (
    <main className="menu">
      <h2>Our Menu</h2>
      {pizzas.length > 0 ? (
        <>
          <p>
            Authentic Italian cuisine. {pizzas.length} creative dishes to choose
            from. All from our stone oven, all organic, all delicious.
          </p>
          <ul className="pizzas">
            {pizzas.map((pizza) => {
              return (
                <Pizza
                  key={pizza.name}
                  name={pizza.name}
                  description={pizza.ingredients}
                  photoName={pizza.photoName}
                  price={pizza.price}
                  soldOut={pizza.soldOut}
                />
              );
            })}
          </ul>
        </>
      ) : (
        <p>We're still working on our menu. Please check back later:)</p>
      )}
    </main>
  );
}
