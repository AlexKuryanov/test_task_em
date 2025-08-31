const cardsWrapper = document.querySelector(".content-cards");
const searchInput = document.getElementById("search-input");
const searchButton = document.getElementById("search-button");
const movies = [
  {
    id: 0,
    title: "Марсианин 1",
    original: "The Martian 2015",
    category: "Фантастика, приключения",
    rating: 7.8,
    link: "movie.html",
    img: "./images/poster_1.png",
  },
  {
    id: 1,
    title: "Марсианин 2",
    original: "The Martian 2015",
    category: "Фантастика, приключения",
    rating: 7.8,
    link: "movie.html",
    img: "./images/poster_2.png",
  },
  {
    id: 2,
    title: "Марсианин 3",
    original: "The Martian 2015",
    category: "Фантастика, приключения",
    rating: 7.8,
    link: "movie.html",
    img: "./images/poster_3.png",
  },
  {
    id: 3,
    title: "Марсианин 1",
    original: "The Martian 2015",
    category: "Фантастика, приключения",
    rating: 7.8,
    link: "movie.html",
    img: "./images/poster_4.png",
  },
  {
    id: 4,
    title: "Марсианин 2",
    original: "The Martian 2015",
    category: "Фантастика, приключения",
    rating: 7.8,
    link: "movie.html",
    img: "./images/poster_5.png",
  },
  {
    id: 5,
    title: "Марсианин 3",
    original: "The Martian 2015",
    category: "Фантастика, приключения",
    rating: 7.8,
    link: "movie.html",
    img: "./images/poster_6.png",
  },
];

const renderCards = (array) => {
  console.log(array);

  cardsWrapper.innerHTML = "";
  array.forEach((movie) => {
    cardsWrapper.insertAdjacentHTML(
      "beforeend",
      `
      <a href="${movie.link}" class="content-card">
        <div class="card__img-wrapper">
          <img class="card__img" src="${movie.img}" width="264" height="376" alt="Постер фильма 1">
        </div>
        <h3 class="card__title">
          <strong>${movie.title},</strong> <span class="title_en">${movie.original}</span>
        </h3>
        <p class="card__description">${movie.category}</p>
        <p class="card__rating">${movie.rating}</p>
      </a>
      `
    );
  });
};

searchButton.addEventListener("click", () => {
  renderCards(
    movies.filter((movie) => movie.title.includes(searchInput.value))
  );
});
renderCards(movies);
