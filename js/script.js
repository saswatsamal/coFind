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