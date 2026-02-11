document.querySelector("select").onchange = function () {
  window.open(this.options[this.selectedIndex].value, "_self");
};
