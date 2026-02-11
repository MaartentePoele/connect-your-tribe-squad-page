let dropdown = document.querySelector("select");
dropdown.onchange = function () {
  window.open(this.options[this.selectedIndex].value, "_self");
};
