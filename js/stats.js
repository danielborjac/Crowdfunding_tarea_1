
let value = Number(localStorage.getItem("value"));
let partner = Number(localStorage.getItem("partner"));

let goal = 70000
let total = 10000 + value

let CircularBar = document.querySelector(".circular-bar");
let PercentValue = document.querySelector(".percent");

let InitialValue = 0;
//let finaleValue = 46;
let finaleValue = (total * 100)/goal;
let speed = 10;

let timer = setInterval(() => {
  InitialValue += 1;

  CircularBar.style.background = `conic-gradient(#578E49 ${InitialValue/100 * 360}deg, #e8f0f7 0deg)`;
  PercentValue.innerHTML = InitialValue+"%";

  if(InitialValue >= finaleValue){
    clearInterval(timer);
  }
}, speed)

document.getElementById("value").innerHTML = "$ "+total;
document.getElementById("goal").innerHTML = "Meta de $ "+goal;
document.getElementById("partner").innerHTML = 100 + partner;



var end = new Date('02/23/2025 10:1 AM');

  var _second = 1000;
  var _minute = _second * 60;
  var _hour = _minute * 60;
  var _day = _hour * 24;
  var time;

  function showRemaining() {
      var now = new Date();
      var distance = end - now;
      if (distance < 0) {

          clearInterval(time);
          document.getElementById('countdown').innerHTML = 'SE HA ACABADO LA RECAUDACIÓN!';

          return;
      }
      var days = Math.floor(distance / _day);
      var hours = Math.floor((distance % _day) / _hour);
      var minutes = Math.floor((distance % _hour) / _minute);
      var seconds = Math.floor((distance % _minute) / _second);

      document.getElementById('countdown').innerHTML = days + 'd ';
      document.getElementById('countdown').innerHTML += hours + 'h ';
      document.getElementById('countdown').innerHTML += minutes + 'm ';
      document.getElementById('countdown').innerHTML += seconds + 's';
  }

  time = setInterval(showRemaining, 1000);