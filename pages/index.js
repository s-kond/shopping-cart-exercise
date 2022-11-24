import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useEffect, useState } from "react";

const products = [
  { id: "ps5-1", name: "Playstation 5", price: 499 },
  { id: "ps5-2", name: "PS5 Controller", price: 69 },
  { id: "ps5-3", name: "60 TV Fernsehen", price: 899 },
];

export default function Home() {
  const [shoppingCard, setShoppingCard] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    addPrices();
  }, [shoppingCard]);

  function addToCard(product) {
    setShoppingCard([{ ...product, amount: 1 }, ...shoppingCard]);
  }

  function addPrices() {
    let sum = 0;
    shoppingCard.forEach((item) => (sum += item.price));
    setTotalPrice(sum);
  }

  function increaseAmount(product) {
    return (product.amount += 1);
  }

  return (
    <div className={styles.container}>
      <h1>Shopping centre</h1>
      <section>
        <h2>Items</h2>
        <div>
          {products.map((product) => {
            return (
              <div key={product.id}>
                <p>{product.name}</p>
                <p>{product.price}€</p>
                <button onClick={() => addToCard(product)}>add to card</button>
              </div>
            );
          })}
        </div>
      </section>
      <hr />
      <section style={{ marginTop: "50px", textAlign: "right" }}>
        <h2>Warenkorb</h2>
        <div>
          {shoppingCard.map((product) => {
            return (
              <>
                <p key={product.id}>{product.name}</p>
                <button>-</button>
                <span>{product.amount}</span>
                <button onClick={increaseAmount}>+</button>
                <button>x</button>
              </>
            );
          })}
        </div>
        <hr />
        <p>Summe: {totalPrice}€</p>
      </section>
    </div>
  );
}
