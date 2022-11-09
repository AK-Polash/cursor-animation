let body = document.querySelector("body");

function cursorAni(e) {
  let circleDiv = document.createElement("div");
  circleDiv.classList = "circle";

  let circleList = document.querySelectorAll(".circle");
  let circleListArr = Array.from(circleList);

  body.appendChild(circleDiv);

  if (circleListArr.length == 20) {
    body.removeChild(circleDiv);
  }

  circleDiv.style.transition = "all linear 0.3s";
  circleDiv.style.left = e.clientX + "px";
  circleDiv.style.top = e.clientY + "px";
  circleDiv.style.left = circleDiv.offsetLeft - 10 + "px";
  circleDiv.style.top = circleDiv.offsetTop - 10 + "px";
  circleDiv.style.visibility = "hidden";
}

document.addEventListener("mousemove", (e) => {
  cursorAni(e);
});
