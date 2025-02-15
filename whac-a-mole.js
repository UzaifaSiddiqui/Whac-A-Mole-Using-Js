let squares = document.querySelectorAll(".square");
let results = document.querySelector(".score");
let time = document.querySelector(".time");

let hitPosition;
let result = 0 ;
let timer = Number(time.innerText);
let interval;
let intervalTime;

function randomSquare(){
    squares.forEach(square => {
        square.classList.remove("mole");
    })

    let random = Math.floor(Math.random()*9);
    let randomSquare = squares[random];
    randomSquare.classList.add("mole");

    hitPosition = randomSquare.getAttribute("id");


}

function onHit(){
    for (let i =0 ; i<squares.length ; i++){
        squares[i].addEventListener("click" , function (){
            if (squares[i].getAttribute("id") === hitPosition){
                console.log("hit");
                result ++;
                results.innerText = String(result);
                hitPosition = null;
            }
        })
    }
}

function watch(){
    intervalTime = setInterval(function(){
        timer -=10;
        time.innerText = String(timer);
        if (timer <= 0){
            stopTimer();
        }
},1000)
}


function stopTimer(){
    clearInterval(intervalTime);
    clearInterval(interval);
    alert("Game Over!")
    results.innerText = String(0);
    result = 0;

    timer = 60;
    time.innerText = String(60);
    
    startGame();
}


function startGame(){
    interval = setInterval(randomSquare , 1000);
    onHit();
    watch();
}

startGame();