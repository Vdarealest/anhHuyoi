
let password = "";
const correctPass = "2911";
let attempts = 5;

function press(num) {
  if (password.length < 10) {
    password += num;
    document.getElementById("passDisplay").value = "*".repeat(password.length);
  }
}

function clearPass() {
  password = "";
  document.getElementById("passDisplay").value = "";
  document.getElementById("errorMsg").textContent = "";
}

function submitPass() {
  if (password === correctPass) {
    window.location.href = "main.html";
  } else {
    attempts--;
    if (attempts <= 0) {
      document.getElementById("errorMsg").textContent = "Bạn đã hết lượt thử 😢";
    } else {
      document.getElementById("errorMsg").textContent = "Mật khẩu sai. Bạn còn " + attempts + " lần thử lại.";
    }
    password = "";
    document.getElementById("passDisplay").value = "";
  }
}
