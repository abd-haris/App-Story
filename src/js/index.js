// Import our custom CSS
import "../sass/main.scss";
import "./components/index";

import Dashboard from "./page/dashboard";
import AddStory from "./page/add-story";
import * as bootstrap from "bootstrap";

const routes = {
  "/": Dashboard,
  "/add-story.html": AddStory,
};

const detectRoute = () => routes[window.location.pathname];

const initPage = () => {
  const header = document.querySelector("header");
  const main = document.querySelector("main");

  if (header && main) {
    main.style.minHeight = `calc(100vh - ${header.clientHeight}px)`;
  }
};

window.addEventListener("DOMContentLoaded", async () => {
  initPage();

  const route = detectRoute();
  route.init();
});
