import { Product } from "./product";

const products = ["prodotto 1", "prodotto 2", "prodotto 3"];

export const List = () => {
  return (
    <section>
      <ul className="grid">
        {products.map((item, index) => (
          <li key={index}>
            <Product />
          </li>
        ))}
      </ul>
    </section>
  );
};