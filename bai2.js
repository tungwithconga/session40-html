function addPlayer() {
    let playerNameInput = document.getElementById('playerName');
    let playerName = playerNameInput.value.trim();

    if (playerName === "") {
      alert("Vui lòng nhập tên cầu thủ!");
      return;
    }

    let playerId = Date.now().toString();

    localStorage.setItem(playerId, playerName);

    displayPlayers();

    playerNameInput.value = "";
  }

  function displayPlayers() {
    let playerListDiv = document.getElementById('playerList');
    playerListDiv.innerHTML = "";

    let keys = Object.keys(localStorage);

    keys.forEach(function(key) {
      let playerName = localStorage.getItem(key);

      let playerDiv = document.createElement('div');
      playerDiv.textContent = playerName;

      playerListDiv.appendChild(playerDiv);
    });
  }

  displayPlayers();