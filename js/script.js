var colors = ["#1C476D", "#8EC2FF", "#FFE600"];
var numberOfSquares = 100;
var squares = [];
    for (var i = 0; i < numberOfSquares; i++) {
var square = document.createElement("div");
    square.classList.add("float-square");
    square.style.background =    colors[Math.floor(Math.random() * colors.length)];
    square.style.left = `${Math.floor(Math.random() * 100)}vw`;
    square.style.top = `${Math.floor(Math.random() * 100)}vh`;
    square.style.transform = `scale(${Math.random()})`;
                square.style.width = `${Math.random()}em`;
    square.style.height = square.style.width;

      squares.push(square);
      document.body.append(square);
  }

      squares.forEach((el, i, ra) => {
      var to = {
          x: Math.random() * (i % 2 === 0 ? -11 : 11),
          y: Math.random() * 12
               };

      var anim = el.animate(
                   [
       { transform: "translate(0, 0)" },
                        { transform: `translate(${to.x}rem, ${to.y}rem)` }
                    ],
                    {
                        duration: (Math.random() + 1) * 2000, // random duration
                        direction: "alternate",
                        fill: "both",
                        iterations: Infinity,
                        easing: "ease-in-out"
                    }
                );
            });


//-----------------------------------------------------------------------------------//

//Typing Effect
var TxtType = function(el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};

TxtType.prototype.tick = function() {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
  this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
  this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

  var that = this;
  var delta = 200 - Math.random() * 100;

  if (this.isDeleting) { delta /= 2; }

  if (!this.isDeleting && this.txt === fullTxt) {
  delta = this.period;
  this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
  this.isDeleting = false;
  this.loopNum++;
  delta = 500;
  }

  setTimeout(function() {
  that.tick();
  }, delta);
};

window.onload = function() {
  var elements = document.getElementsByClassName('typewrite');
  for (var i=0; i<elements.length; i++) {
      var toRotate = elements[i].getAttribute('data-type');
      var period = elements[i].getAttribute('data-period');
      if (toRotate) {
        new TxtType(elements[i], JSON.parse(toRotate), period);
      }
  }
  // INJECT CSS
  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
  document.body.appendChild(css);
};

//-----------------------------------------------------------------------------------//


//User Data Display
function userCard(user) {
  return `
  <div class="profile-card">
  <div class="profile-image"><img src="${user.userImage}" alt="${user.userName}" width=200/></div>
  <figcaption>
    <h3>${user.userName}</h3>
    <h5>${user.userDesignation}</h5>
    <p>${user.userBio}</p>
    <div class="icons">
      <a href="https://twitter.com/${user.twitterID}" targert="blank"> <img src="https://img.icons8.com/color/50/000000/twitter-circled.png"/></i></i></a>
      <a href="https://linkedin.com/in/${user.linkedinID}"> <img src="https://img.icons8.com/color/48/000000/linkedin-circled.png"/></i></a>
    </div>
  </figcaption>
  </div>
`;
}

document.getElementById("app").innerHTML = `
${userData.map(userCard).join("")}
`;