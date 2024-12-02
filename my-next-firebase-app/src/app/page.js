"use client"
import Image from "next/image";
import styles from "./page.module.css";
import Greeting from "./greeting";
import App from "./app";
import Counter from "./Counter";
import ProductList from "./productList";
import App2 from "./app2";
import ToggleSwitch from "./ToggleSwitch";
import ToDoList from "./ToDoList";
import LoginControl from "./LoginControl";
import App3 from "./app3";
import ContactForm from "./ContactForm";
import App4 from "./app4";
import App5 from "./app5";
import ImageGallery from "./ImageGallery";
export default function Home() {
  return (
    <div>
      <Greeting name ="Paco"/>
      <br></br>
      <br></br>
      <App/>
      <br></br>
      <br></br>
      <Counter/>
      <br></br>
      <br></br>
      <ProductList/>
      <br></br>
      <br></br>
      <App2/>
      <br></br>
      <br></br>
      <ToggleSwitch/>
      <br></br>
      <br></br>
      <ToDoList/>
      <br></br>
      <br></br>
      <Counter/>
      <br></br>
      <br></br>
      <LoginControl/>
      <br></br>
      <br></br>
      <App3/>
      <br></br>
      <br></br>
      <ContactForm/>
      <br></br>
      <br></br>
      <App4/>
      <br></br>
      <br></br>
      <App5/>
      <br></br>
      <br></br>
      <ImageGallery/>
    </div>
  );
}
