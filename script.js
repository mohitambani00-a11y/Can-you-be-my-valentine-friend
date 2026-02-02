const noBtn = document.getElementById("no");
const yesBtn = document.getElementById("yes");
const msg = document.getElementById("msg");

// Move NO button randomly
noBtn.addEventListener("mouseover", () => {
  const x = Math.random() * (window.innerWidth - 120);
  const y = Math.random() * (window.innerHeight - 60);

  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";
});

// Yes button action
yesBtn.addEventListener("click", () => {
  msg.innerText = "Yayyy! Best Valentine friend ever 💖✨";
});
