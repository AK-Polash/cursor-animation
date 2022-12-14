let body = document.querySelector("body");

function cursorAni(e) {
  let circleDiv = document.createElement("div");
  circleDiv.classList = "circle";

  let circleList = document.querySelectorAll(".circle");
  let circleListArr = Array.from(circleList);

  body.appendChild(circleDiv);

  if (circleListArr.length > 30) {
    circleListArr.map((item) => {
      item.remove();
    });
  }

  circleDiv.style.transition = "all linear 0.31s";
  circleDiv.style.left = e.clientX + "px";
  circleDiv.style.top = e.clientY + "px";
  circleDiv.style.left = circleDiv.offsetLeft - 30 + "px";
  circleDiv.style.top = circleDiv.offsetTop - 30 + "px";
  circleDiv.style.visibility = "hidden";
}

document.addEventListener("mousemove", (e) => {
  cursorAni(e);
});
