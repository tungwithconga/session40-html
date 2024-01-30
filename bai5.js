function registerUser() {
    let usernameInput = document.getElementById('username');
    let emailInput = document.getElementById('email');
    let passwordInput = document.getElementById('password');

    let username = usernameInput.value.trim();
    let email = emailInput.value.trim();
    let password = passwordInput.value.trim();

    if (username === "" || email === "" || password === "") {
      alert("Vui lòng nhập đầy đủ thông tin!");
      return;
    }

    let userList = JSON.parse(localStorage.getItem('userList')) || [];

    if (userList.some(user => user.email === email)) {
      alert("Email đã được sử dụng. Vui lòng chọn email khác.");
      return;
    }

    userList.push({ username, email, password });

    localStorage.setItem('userList', JSON.stringify(userList));

    displayUserList();

    usernameInput.value = "";
    emailInput.value = "";
    passwordInput.value = "";
  }

  function displayUserList() {
    let userListDiv = document.getElementById('userList');
    userListDiv.innerHTML = "";

    let userList = JSON.parse(localStorage.getItem('userList')) || [];

    userList.forEach(function(user) {
      let listItem = document.createElement('li');
      listItem.textContent = `Tên người dùng: ${user.username}, Email: ${user.email}, Mật khẩu: ${user.password}`;
      userListDiv.appendChild(listItem);
    });
  }

  displayUserList();