function myFirstApp(name, age) {
  alert("Привет, меня зовут " + name + " и это моя первая программа!")

  // let age = prompt("Сколько Вам лет");

  function checkAge() {
    let age = prompt("Сколько Вам лет");
    if (age >= 18) {
      alert("Ты уже взрослый - заходи");

    } else {
      alert("Маловат еще, посмотри мультики");
      window.location.href = "http://onlinemultfilmy.ru";
    }
    
  }
  checkAge();


  function showSkills() {
    let skills = ["Вот что я могу:", "HTML", "CSS", "SASS", "JQuery", "GIT", "И МНОГОЕ ДРУГОЕ))"
    ];

    for (let i = 0; i < skills.length; i++) {
      document.write(skills[i], "<br>");
    }
  }

  showSkills();
 
 

  function calcPow(num) {
    document.write("квадрат ", num, " = ", num * num)
  }
  calcPow(4);
}

myFirstApp("Mikail");