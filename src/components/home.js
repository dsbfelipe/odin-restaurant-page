import homeBackground from "../../public/images/home-background.jpg";

const weekday = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

function getCurrentDay() {
  const date = new Date();
  return weekday[date.getDay()].toUpperCase();
}

function getTomorrow() {
  const date = new Date();
  return weekday[date.getDay() + 1];
}

function createHome() {
  const home = `
    <div id="home-content-container">
        <div id="text-container">
          <h3 id="home-adress">
            <img src="../public/svg/adress.svg" alt="" />
            1234 Flavor Street Burger Town, BT 56789 United States
          </h3>
          <h1 id="home-center-text">THE BEST BURGUER EVER MADE</h1>
        </div>
        <div id="home-lower">
          <div id="schedules">
            <div id="current-schedule">
              <p id="day">${getCurrentDay()}</p>
              <p id="time">10:00-22:00</p>
            </div>
            <div id="next-schedule">
              <p id="day">${getTomorrow()}</p>
              <p id="time">10:00-22:00</p>
            </div>
          </div>
          <p id="hero-text">
            Whether you’re a classic cheeseburger lover or an adventurous foodie
            craving unique combinations, our handcrafted burgers are designed to
            delight your taste buds. Join us in our cozy atmosphere, and let’s
            make every bite a celebration!
          </p>
        </div>
      </div>
  `;
  return home;
}

export function appendHome(element) {
  const body = document.querySelector("body");
  element.innerHTML = "";

  body.style.backgroundImage = `url(${homeBackground})`;
  body.style.backgroundSize = "cover";
  element.innerHTML = createHome();

  const contentContainer = document.getElementById("home-content-container");
  contentContainer.style.background =
    "linear-gradient(0deg, #0206176b, transparent)";
}
