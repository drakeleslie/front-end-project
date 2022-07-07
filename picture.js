let $submit = $("#chooser");
let $userChoice = $("#user-choice");
let $input = $('select[name="images"]');

let selector = $("#images");
$userChoice.submit((event) => {
  event.preventDefault();

  let userInput = $input.val();

  let URL = `https://ghibliapi.herokuapp.com/films/${userInput}`;

  $.get(URL, (data) => {
    let result = data;

    let canvasBack = $(".bg-container");
    let infoBox = $(".image-container");
    infoBox.on("mouseover", () => {
      infoBox.addClass("opacity");
    });

    let movieTitle = $(`<h2>${result.original_title_romanised}</h2>`).appendTo(
      infoBox
    );
    let movieDirector = $(`<h3>${result.director}</h3>`).appendTo(infoBox);
    let movieDate = $(`<h3>${result.release_date}<h3>`).appendTo(infoBox);
    let movieDesc = $(`<p>${result.description}</p>`).appendTo(infoBox);
    let movieImg = $(`<img src=${result.image}>`)
      .addClass("img-resize")
      .appendTo(infoBox);
    var backgroundImg = $(`<img src=${result.image}>`)
      .addClass("bg-resize")
      .appendTo(canvasBack);

    $submit.on("click", () => {
      $(infoBox).empty();
      $(canvasBack).empty();
    });
  });
});
