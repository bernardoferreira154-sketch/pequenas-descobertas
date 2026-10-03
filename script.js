const enterButton = document.getElementById("enter");
const content = document.getElementById("content");

if (enterButton) {
  enterButton.addEventListener("click", () => {
    enterButton.disabled = true;
    content.classList.add("fade");

    setTimeout(() => {
      window.location.href = "index.html";
    }, 450);
  });
}