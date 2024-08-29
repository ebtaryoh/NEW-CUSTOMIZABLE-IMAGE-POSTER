const imageInput = document.getElementById("image-upload");
const nameInput = document.getElementById("name-input");
const nameText = document.getElementById("custom-name");
const customImage = document.getElementById("custom-image");
const downloadButton = document.getElementById("download-button");
const poster = document.getElementById("poster");

// Update image when a new one is selected
imageInput.addEventListener("change", (event) => {
  const reader = new FileReader();
  reader.onload = () => {
    customImage.src = reader.result;
  };
  reader.readAsDataURL(event.target.files[0]);
});

// Update name text as user types
nameInput.addEventListener("input", (event) => {
  nameText.textContent = event.target.value || "Your Name Here";
});

// Download the poster as an image
downloadButton.addEventListener("click", () => {
  html2canvas(poster).then((canvas) => {
    const link = document.createElement("a");
    link.download = "singles-hangout-poster.png";
    link.href = canvas.toDataURL("image/png");
    link.click();
  });
});
