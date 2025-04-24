document.getElementById("convert-btn").
addEventListener("click", function() {
  const numInput = document.getElementById("number").value;
  const output = document.getElementById("output");

  if (numInput === "") {
      output.textContent = "Please enter a valid number";
      return;
  }

  const num = parseInt(numInput);

  if (num < 1) {
      output.textContent = "Please enter a number greater than or equal to 1";
      return;
  }
  if (num >= 4000) {
      output.textContent = "Please enter a number less than or equal to 3999";
      return;
  }

  output.textContent = convertToRoman(num);
});

