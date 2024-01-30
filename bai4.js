function displayLocalStorageValues() {
    let keys = Object.keys(localStorage);

    let localStorageValuesList = document.getElementById('localStorageValues');

    keys.forEach(function(key) {
      let value = localStorage.getItem(key);

      let listItem = document.createElement('li');
      listItem.textContent = `Key: ${key}, Value: ${value}`;

      localStorageValuesList.appendChild(listItem);
    });
  }

  displayLocalStorageValues();