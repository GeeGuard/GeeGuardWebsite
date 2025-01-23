document.getElementById('loginBtn').addEventListener('click', function() {
  let username = document.getElementById('username').value;
  let password = document.getElementById('password').value;

  if (username && password) {
    alert(`Welcome, ${username}!`);
  } else {
    alert('Please enter both username and password.');
  }
});
