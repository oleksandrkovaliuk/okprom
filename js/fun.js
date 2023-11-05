const cursor = document.querySelector(".follow-cursor");

cursor.addEventListener("mousemove", () => {
  const x = Math.random() * 100;
  const y = Math.random() * 100;
  cursor.style.left = x + "px";
  cursor.style.top = y + "px";
  cursor.style.zIndex = "5";
});