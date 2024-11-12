import Image from "next/image";
import styles from "./page.module.css";
import Greeting from "./greeting";
import App from "./app";
import Counter from "./Counter";
import ProductList from "./productList";
import App2 from "./app2";
export default function Home() {
  return (
    <div>
      <Greeting name ="Paco"/>
      <App/>
      <Counter/>
      <ProductList/>
      <App2/>
    </div>
  );
}
