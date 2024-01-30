function deletePlayer() {
    let deletePlayerIdInput = document.getElementById('deletePlayerId');
    let playerIdToDelete = deletePlayerIdInput.value.trim();

    if (playerIdToDelete === "") {
      alert("Vui lòng nhập ID cầu thủ để xóa!");
      return;
    }

    if (confirm(`Bạn có chắc chắn muốn xóa cầu thủ có ID: ${playerIdToDelete}?`)) {
      removePlayerById(playerIdToDelete);
    }

    deletePlayerIdInput.value = "";
  }

  function removePlayerById(playerId) {
    if (!localStorage.getItem(playerId)) {
      alert("Không tìm thấy cầu thủ với ID đã nhập!");
      return;
    }

    localStorage.removeItem(playerId);

    displayPlayers();
  }

  function displayPlayers() {
    let playerListDiv = document.getElementById('playerList');
    playerListDiv.innerHTML = "";

    let keys = Object.keys(localStorage);

    keys.forEach(function(key) {
      let playerName = localStorage.getItem(key);

      let playerDiv = document.createElement('div');
      playerDiv.textContent = `ID: ${key}, Tên: ${playerName}`;

      playerListDiv.appendChild(playerDiv);
    });
  }

  displayPlayers();