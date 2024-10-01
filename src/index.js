import "./style.css";
import { appendHome } from "./components/home.js";

const content = document.getElementById("content");
const homeButton = document.getElementById("home-button");
const menuButton = document.getElementById("menu-button");
const aboutButton = document.getElementById("about-button");
const orderButton = document.getElementById("order-button");

appendHome(content);

homeButton.addEventListener("click", () => appendHome(content));
