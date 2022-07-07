let wallURL =
  "https://fast-dawn-89938.herokuapp.com/https://wallhaven.cc/api/v1/search?q=ghibli&categories=110&purity=100&atleast=1920x1080&ratios=landscape&sorting=relevance&order=desc&page=2";
let body = document.body;

let $wallChoice = $("#wall-choice");

$.get(wallURL, (data) => {
  let result = data;

  let forwardButton = $('button[class="forward-img"]');
  let prevButton = $('button[class="prev-img"]');
  let rainGifButton = $('button[class="rain-img"]');

  let imageNum = 0;
  let bgImage = result.data[imageNum].path;

  forwardButton.on("click", (event) => {
    event.preventDefault();

    let imgPlacePlus = result.data[(imageNum += 1)].path;

    body.style.backgroundImage = `url(${result.data[imageNum].path})`;
    body.style.backgroundSize = "cover";
  });

  prevButton.on("click", (event) => {
    event.preventDefault();

    let imgPlaceMinus = result.data[(imageNum -= 1)].path;

    body.style.backgroundImage = `url(${result.data[imageNum].path})`;
    body.style.backgroundSize = "cover";
  });
  rainGifButton.on("click", (event) => {
    event.preventDefault();

    body.style.backgroundImage = `url("rain2.gif")`;
    body.style.backgroundSize = "cover";
  });
});
