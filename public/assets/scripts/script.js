const param = window.location.search;

if (param == "?sort=name:asc") {
  document.querySelector(".name-asc").classList.toggle("active");
} else if (param == "?sort=name:desc") {
  document.querySelector(".name-desc").classList.toggle("active");
} else if (param == "?sort=age:asc") {
  document.querySelector(".age-asc").classList.toggle("active");
} else if (param == "?sort=age:desc") {
  document.querySelector(".age-desc").classList.toggle("active");
}