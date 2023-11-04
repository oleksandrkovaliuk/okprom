const cursor = document.querySelector(".follow-cursor");

cursor.addEventListener("mousemove", (event) => {
  const x = event.clientX;
  console.log(x);
  const y = event.clientY;
  console.log(y);
  cursor.style.left = (x + "px") / 2;
  cursor.style.top = y + "px";
  cursor.style.zIndex = "5";
});
