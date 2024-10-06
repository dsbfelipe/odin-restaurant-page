import star from "../../public/svg/star.svg"
import email from "../../public/svg/email.svg"
import phone from "../../public/svg/phone.svg"

function createMenu() {
    const menu = `
      <h1 id="menu-h1">
        BURGERS CRAFTED TO PERFECTION. FRESH, BOLD, AND DELICIOUS.
      </h1>
      <p id="menu-description">
        Explore our mouthwatering selection of burgers, hot dogs, and 
        sides—crafted with fresh ingredients and bold flavors. Whether you're 
        craving something classic or adventurous, our menu is packed with 
        delicious options that are sure to satisfy. Dive in and discover your 
        next favorite meal!
      </p>
      <div id="menu-container">
        <div class="menu-item">
          <img
            src="https://images.pexels.com/photos/6940999/pexels-photo-6940999.jpeg"
            alt=""
          />
          <h4>The Big Breakfast Stack</h4>
          <p>
            A juicy cheeseburger paired with perfectly cooked eggs, crispy
            fries, and golden onion rings for a breakfast that’s hearty, savory,
            and satisfying.
          </p>
          <div class="line"></div>
          <div class="star-price">
            <div class="stars">
              <img src="${star}" alt="" />
              <img src="${star}" alt="" />
              <img src="${star}" alt="" />
              <img src="${star}" alt="" />
              <img src="${star}" alt="" />
            </div>
            <div class="price">$14,99</div>
          </div>
        </div>
        <div class="menu-item">
          <img
            src="https://images.pexels.com/photos/27220878/pexels-photo-27220878/free-photo-of-legumes-vegetais-refeicao-comida.jpeg"
            alt=""
          />
          <h4>The Sunrise Burger</h4>
          <p>
            A juicy patty topped with melted cheese, crispy bacon, fresh
            lettuce, ripe tomato, and a perfectly fried egg. It’s a hearty,
            mouthwatering combination that brings bold flavors in every bite!
          </p>
          <div class="line"></div>
          <div class="star-price">
            <div class="stars">
              <img src="${star}" alt="" />
              <img src="${star}" alt="" />
              <img src="${star}" alt="" />
              <img src="${star}" alt="" />
            </div>
            <div class="price">$19,99</div>
          </div>
        </div>
        <div class="menu-item">
          <img
            src="https://images.pexels.com/photos/19259150/pexels-photo-19259150/free-photo-of-refeicao-comida-pouco-saudavel-insalubre.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
          />
          <h4>Cheddar Lover’s Dream!</h4>
          <p>
            A juicy burger topped with melted cheddar and crispy bacon, all
            nestled in a bun covered in even more melted cheddar and bacon. This
            cheesy, savory masterpiece is the ultimate indulgence for bacon and
            cheese fans!
          </p>
          <div class="line"></div>
          <div class="star-price">
            <div class="stars">
              <img src="${star}" alt="" />
              <img src="${star}" alt="" />
              <img src="${star}" alt="" />
              <img src="${star}" alt="" />
              <img src="${star}" alt="" />
            </div>
            <div class="price">$16,99</div>
          </div>
        </div>
        <div class="menu-item">
          <img
            src="https://images.pexels.com/photos/19345996/pexels-photo-19345996/free-photo-of-pouco-saudavel-insalubre-carne-delicioso.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
          />
          <h4>The Sweet & Savory Smash</h4>
          <p>
            Enjoy a crispy chicken fillet seasoned with bold spices, topped with
            zesty pickles, creamy cheese mayo, and crunchy cabbage. This 
            flavor-packed sandwich will keep your taste buds wanting more!
          </p>
          <div class="line"></div>
          <div class="star-price">
            <div class="stars">
              <img src="${star}" alt="" />
              <img src="${star}" alt="" />
              <img src="${star}" alt="" />
              <img src="${star}" alt="" />
              <img src="${star}" alt="" />
            </div>
            <div class="price">$19,99</div>
          </div>
        </div>
        <div class="menu-item">
          <img
            src="https://images.pexels.com/photos/6896379/pexels-photo-6896379.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
          />
          <h4>Crispy Spicy Chicken</h4>
          <p>
            A juicy cheeseburger paired with perfectly cooked eggs, crispy
            fries, and golden onion rings for a breakfast that’s hearty, savory,
            and satisfying.
          </p>
          <div class="line"></div>
          <div class="star-price">
            <div class="stars">
              <img src="${star}" alt="" />
              <img src="${star}" alt="" />
              <img src="${star}" alt="" />
              <img src="${star}" alt="" />
              <img src="${star}" alt="" />
            </div>
            <div class="price">$17,99</div>
          </div>
        </div>
        <div class="menu-item">
          <img
            src="https://images.pexels.com/photos/8946521/pexels-photo-8946521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
          />
          <h4>The Loaded Crunch Dog</h4>
          <p>
            Smothered in melted cheddar, crispy bacon, savory minced meat, and 
            topped with golden fries, this is the ultimate comfort food in 
            every bite.
          </p>
          <div class="line"></div>
          <div class="star-price">
            <div class="stars">
              <img src="${star}" alt="" />
              <img src="${star}" alt="" />
              <img src="${star}" alt="" />
            </div>
            <div class="price">$11,99</div>
          </div>
        </div>
      </div>
      <footer>
        <div id="full-footer-container">
          <div id="left-side">
            <h2>BURGBUG</h2>
            <div id="contact">
              <p><img src="${email}" alt="">contact@burgbug.com</p>
              <p><img src="${phone}" alt="">(123)456-7890</p>
            </div>
            <button id="footer-button">Order Online</button>
          </div>
          <div id="right-side"> 
            <div id="column-one">
              <p id="current-page" class="footer-title">Menu</p>
              <p>About</p>
              <p>Home</p>
            </div>
            <div id="column-two">
              <p class="footer-title">Open At</p>
              <div class="time">
                <p>Monday</p>
                <p>10:00-22:00</p>
              </div>
              <div class="time">
                <p>Tuesday</p>
                <p>10:00-22:00</p>
              </div>
              <div class="time">
                <p>Wednesday</p>
                <p>10:00-22:00</p>
              </div>
              <div class="time">
                <p>Thursday</p>
                <p>10:00-22:00</p>
              </div>
              <div class="time">
                <p>Friday</p>
                <p>10:00-22:00</p>
              </div>
              <div class="time">
                <p>Saturday</p>
                <p>10:00-22:00</p>
              </div>
              <div class="time">
                <p>Sunday</p>
                <p>10:00-22:00</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    `;
    return menu;
}

export function appendMenu(content) {
  const body = document.querySelector("body");
  content.innerHTML = "";

  body.style.backgroundImage = "";
  body.style.height = "";

  content.innerHTML = createMenu();
}
