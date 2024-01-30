function Person(name, age, email) {
    this.name = name;
    this.age = age;
    this.email = email;
  }

  function saveToLocalStorage(person) {
    if (localStorage) {
      let personsList = JSON.parse(localStorage.getItem('persons')) || [];

      personsList.push(person);

      localStorage.setItem('persons', JSON.stringify(personsList));
    } else {
      alert('Trình duyệt không hỗ trợ local storage.');
    }
  }

  function displayFromLocalStorage() {
    let personsList = JSON.parse(localStorage.getItem('persons')) || [];

    personsList.forEach(person => {
      console.log('Name:', person.name);
      console.log('Age:', person.age);
      console.log('Email:', person.email);
      console.log('------------------------');
    });
  }

  let name = prompt('Nhập họ tên:');
  let age = prompt('Nhập tuổi:');
  let email = prompt('Nhập email:');

  let newPerson = new Person(name, age, email);
  saveToLocalStorage(newPerson);

  displayFromLocalStorage();