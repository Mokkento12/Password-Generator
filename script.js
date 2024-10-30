document.getElementById("generate").addEventListener("click", function () {
  const length = parseInt(document.getElementById("length").value);
  const includeSymbols = document.getElementById("includeSymbols").checked;

  const letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numbers = "0123456789";
  const symbol = "!@#$%^&*()_+[]{}|;:,.<>?";

  let characterSet = letters + numbers;

  if (includeSymbols) {
    characterSet += symbol;
  }

  let generatedPassword = "";

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characterSet.length);

    generatedPassword += characterSet[randomIndex];
  }

  document.getElementById("result").textContent = generatedPassword;
});
