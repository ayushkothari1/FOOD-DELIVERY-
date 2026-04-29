var swiper = new Swiper(".mySwiper", {
  loop: true,
  navigation: {
    nextEl: "#next",
    prevEl: "#prev",
  },
});

const cartIcon = document.querySelector(".cart-icon");
const cartTab = document.querySelector(".cart-tab");
const cardList = document.querySelector(".card-list");
const closeBtn = document.querySelector(".close-btn");

cartIcon.addEventListener("click", () => {
  cartTab.classList.add("cart-tab-active");
  // console.log("eventListener working");
});

closeBtn.addEventListener("click", () =>
  cartTab.classList.remove("cart-tab-active"),
);

let porductList = [];

const showCards = () => {
  porductList.forEach((product) => {
    const orderCard = document.createElement("div");
    orderCard.classList.add("order-card");
    orderCard.innerHTML = `
      <div class="caerd-image">
        <img src="${product.image}">
      </div>
      <h4>${product.name}</h4>
      <h4 class="price">${product.Price}</h4>
      <a href="#" class="btn">Add to Cart</a>
    `;
    cardList.appendChild(orderCard);
  });
};

const initApp = () => {
  fetch("product.json")
    .then((response) => response.json())
    .then((data) => {
      porductList = data;
      // console.log(porductList);
      showCards();
    });
};

initApp();
