const container = document.getElementById("container");
const colors = ["#ff6347", "#ffa500", "#32cd32", "#1e90ff", "#8a2be2"];
const CIRCLES = 598;

const getRandomColor = () => colors[Math.floor(Math.random() * colors.length)];

const setColor = (circle) => {
  const color = getRandomColor();
  circle.style.background = color;
  circle.style.boxShadow = `0 0 6px ${color}, 0 0 12px ${color}`;
};

const removeColor = (circle) => {
  circle.style.background = "#1d1d1d";
  circle.style.boxShadow = "0 0 4px #000";
};

for (let i = 0; i < CIRCLES; i++) {
  const circle = document.createElement("div");
  circle.classList.add("circle");
  circle.addEventListener("mouseover", () => setColor(circle));
  circle.addEventListener("mouseout", () => removeColor(circle));
  container.appendChild(circle);
}
