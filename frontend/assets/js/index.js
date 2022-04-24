"use strict";

const latestSituationDropdown = document.getElementById(
  "latestSituationDropdown"
);
const latestSituationButton = document.getElementById("latestSituationButton");

let isOpened = false;

const ocSituationDropdown = (e) => {
  isOpened = !isOpened;
  isOpened
    ? (latestSituationDropdown.style.display = "initial")
    : (latestSituationDropdown.style.display = "none");
};

latestSituationButton.addEventListener("click", function (e) {
  ocSituationDropdown();
});
