const cursor = document.querySelector(".follow-cursor");

cursor.addEventListener("mousemove", (event) => {
  const x = Math.random() * 100;
  console.log(x);
  const y = Math.random() * 100;
  console.log(y);
  cursor.style.left = (x + "px");
  cursor.style.top = y + "px";
  cursor.style.zIndex = "5";
});