const link = document.getElementsByTagName("a");
const currentWork = document.getElementById("currentWork");
const currentPlay = document.getElementById("currentPlay");
const currentStudy = document.getElementById("currentStudy");
const currentExercise = document.getElementById("currentExercise");
const currentSocial = document.getElementById("currentSocial");
const currentSelfCare = document.getElementById("currentSelfCare");
const previousWork = document.getElementById("previousWork");
const previousPlay = document.getElementById("previousPlay");
const previousStudy = document.getElementById("previousStudy");
const previousExercise = document.getElementById("previousExercise");
const previousSocial = document.getElementById("previousSocial");
const previousSelfCare = document.getElementById("previousSelfCare");

display();
click();
load();

function display() {
  fetch("./data.json")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      data.forEach((element) => {
        switch (element.title) {
          case "Work":
            const titleWork = document.getElementById("titleWork");
            titleWork.innerText = element.title;
            break;
          case "Play":
            const titlePlay = document.getElementById("titlePlay");
            titlePlay.innerText = element.title;
            break;
          case "Study":
            const titleStudy = document.getElementById("titleStudy");
            titleStudy.innerText = element.title;
            break;
          case "Exercise":
            const titleExercise = document.getElementById("titleExercise");
            titleExercise.innerText = element.title;
            break;
          case "Social":
            const titleSocial = document.getElementById("titleSocial");
            titleSocial.innerText = element.title;
            break;
          case "Self Care":
            const titleSelfCare = document.getElementById("titleSelfCare");
            titleSelfCare.innerText = element.title;
            break;
        }
      });
    })
    .catch((error) => console.error(error));
}

function click(value) {
  fetch("./data.json")
    .then((response) => response.json())
    .then((data) => {
      data.forEach((element) => {
        for (let i = 0; i < link.length; i++) {
          link[i].addEventListener("click", function (e) {
            e.preventDefault();
            if (link[i].innerText === "Daily") {
              switch (element.title) {
                case "Work":
                  currentWork.innerText = `${element.timeframes.daily.current} hrs`;
                  previousWork.innerText = `Last Work - ${element.timeframes.daily.previous} hrs`;
                  break;
                case "Play":
                  currentPlay.innerText = `${element.timeframes.daily.current} hrs`;
                  previousPlay.innerText = `Last Work - ${element.timeframes.daily.previous} hrs`;
                  break;
                case "Study":
                  currentStudy.innerText = `${element.timeframes.daily.current} hrs`;
                  previousStudy.innerText = `Last Work - ${element.timeframes.daily.previous} hrs`;
                  break;
                case "Exercise":
                  currentExercise.innerText = `${element.timeframes.daily.current} hrs`;
                  previousExercise.innerText = `Last Work - ${element.timeframes.daily.previous} hrs`;
                  break;
                case "Social":
                  currentSocial.innerText = `${element.timeframes.daily.current} hrs`;
                  previousSocial.innerText = `Last Work - ${element.timeframes.daily.previous} hrs`;
                  break;
                case "Self Care":
                  currentSelfCare.innerText = `${element.timeframes.daily.current} hrs`;
                  previousSelfCare.innerText = `Last Work - ${element.timeframes.daily.previous} hrs`;
                  break;
              }
            }
            if (link[i].innerText === "Weekly") {
              switch (element.title) {
                case "Work":
                  currentWork.innerText = `${element.timeframes.weekly.current} hrs`;
                  previousWork.innerText = `Last Work - ${element.timeframes.weekly.previous} hrs`;
                  break;
                case "Play":
                  currentPlay.innerText = `${element.timeframes.weekly.current} hrs`;
                  previousPlay.innerText = `Last Work - ${element.timeframes.weekly.previous}hrs`;
                  break;
                case "Study":
                  currentStudy.innerText = `${element.timeframes.weekly.current} hrs`;
                  previousStudy.innerText = `Last Work - ${element.timeframes.weekly.previous} hrs`;
                  break;
                case "Exercise":
                  currentExercise.innerText = `${element.timeframes.weekly.current} hrs`;
                  previousExercise.innerText = `Last Work - ${element.timeframes.weekly.previous}hrs`;
                  break;
                case "Social":
                  currentSocial.innerText = `${element.timeframes.weekly.current} hrs`;
                  previousSocial.innerText = `Last Work - ${element.timeframes.weekly.previous}hrs`;
                  break;
                case "Self Care":
                  currentSelfCare.innerText = `${element.timeframes.weekly.current} hrs`;
                  previousSelfCare.innerText = `Last Work - ${element.timeframes.weekly.previous}hrs`;
                  break;
              }
            }
            if (link[i].innerText === "Monthly") {
              switch (element.title) {
                case "Work":
                  currentWork.innerText = `${element.timeframes.monthly.current} hrs`;
                  previousWork.innerText = `Last Work - ${element.timeframes.monthly.previous} hrs`;
                  break;
                case "Play":
                  currentPlay.innerText = `${element.timeframes.monthly.current} hrs`;
                  previousPlay.innerText = `Last Work - ${element.timeframes.monthly.previous} hrs`;
                  break;
                case "Study":
                  currentStudy.innerText = `${element.timeframes.monthly.current} hrs`;
                  previousStudy.innerText = `Last Work - ${element.timeframes.weekly.previous} hrs`;
                  break;
                case "Exercise":
                  currentExercise.innerText = `${element.timeframes.monthly.current} hrs`;
                  previousExercise.innerText = `Last Work - ${element.timeframes.monthly.previous}hrs`;
                  break;
                case "Social":
                  currentSocial.innerText = `${element.timeframes.monthly.current} hrs`;
                  previousSocial.innerText = `Last Work - ${element.timeframes.monthly.previous} hrs`;
                  break;
                case "Self Care":
                  currentSelfCare.innerText = `${element.timeframes.monthly.current} hrs`;
                  previousSelfCare.innerText = `Last Work - ${element.timeframes.monthly.previous} hrs`;
                  break;
              }
            }
          });
        }
      });
    })
    .catch((error) => console.error(error));
}

function load() {
  window.addEventListener("DOMContentLoaded", (event) => {
    fetch("./data.json")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        data.forEach((element) => {
          switch (element.title) {
            case "Work":
              currentWork.innerText = `${element.timeframes.weekly.current} hrs`;
              previousWork.innerText = `Last Work - ${element.timeframes.weekly.previous} hrs`;
              break;
            case "Play":
              currentPlay.innerText = `${element.timeframes.weekly.current} hrs`;
              previousPlay.innerText = `Last Work - ${element.timeframes.weekly.previous} hrs`;
              break;
            case "Study":
              currentStudy.innerText = `${element.timeframes.weekly.current} hrs`;
              previousStudy.innerText = `Last Work - ${element.timeframes.weekly.previous} hrs`;
              break;
            case "Exercise":
              currentExercise.innerText = `${element.timeframes.weekly.current} hrs`;
              previousExercise.innerText = `Last Work - ${element.timeframes.weekly.previous} hrs`;
              break;
            case "Social":
              currentSocial.innerText = `${element.timeframes.weekly.current} hrs`;
              previousSocial.innerText = `Last Work - ${element.timeframes.weekly.previous}hrs`;
              break;
            case "Self Care":
              currentSelfCare.innerText = `${element.timeframes.weekly.current} hrs`;
              previousSelfCare.innerText = `Last Work - ${element.timeframes.weekly.previous} hrs`;
              break;
          }
        });
      })
      .catch((error) => console.error(error));
  });
}
