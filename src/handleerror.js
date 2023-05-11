export function handleError(err) {
  console.log(err);
  const errorMessage = document.createElement("h3");
  errorMessage.classList.add("error-message");
  errorMessage.textContent = "Something went wrong...";
  document.querySelector(".main-content").appendChild(errorMessage);
}