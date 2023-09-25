const fontSizeSlider = document.getElementById("font-size-control");
const textSpan = document.getElementById("text");

fontSizeSlider.addEventListener("input", () => {
  const fontSize = fontSizeSlider.value + "px";
  textSpan.style.fontSize = fontSize;
});
