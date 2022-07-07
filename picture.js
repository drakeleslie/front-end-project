let $submit = $("#chooser");
let $userChoice = $("#user-choice");
let $input = $("select[name='images']");
let selector = $("#images");
$userChoice.submit((event) => {
  event.preventDefault();

  let userInput = $input.val();
  let URL = `https://ghibliapi.herokuapp.com/films/${userInput}`;
  console.log(URL);

  $.get(URL, (data) => {
    var result = data;
    console.log(result);
    let canvasBack = document.querySelector(".bg-container");
    var infoBox = document.querySelector(".image-container");
    let movieTitle = document.createElement("h2");
    let movieDirector = document.createElement("h3");
    let movieDate = document.createElement("h3");
    let movieDesc = document.createElement("p");
    let movieImg = document.createElement("img");
    var backgroundImg = document.createElement("img");
    movieImg.classList.add("img-resize");
    backgroundImg.classList.add("bg-resize");

    movieTitle.innerText = result.original_title_romanised;
    movieDirector.innerHTML = `<b>${result.director}</b>`;
    movieDate.innerText = result.release_date;
    movieDesc.innerText = result.description;
    movieImg.src = result.image;
    backgroundImg.src = result.image;

    infoBox.append(movieTitle);
    infoBox.append(movieDirector);
    infoBox.append(movieDate);
    infoBox.append(movieDesc);

    infoBox.append(movieImg);
    var bgImage = document.querySelector(".bg-resize");
    canvasBack.append(backgroundImg);

    $submit.on("click", () => {
      $(infoBox).empty();
      $(canvasBack).empty();
    });
  });
});
