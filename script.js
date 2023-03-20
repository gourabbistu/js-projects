console.log("WElcome to Tic Tac Toe");
let music = new Audio('audio/music.mp3');
let turnMusic= new Audio('audio/ting.mp3');
let gameover=new Audio('audio/gameover.mp3');
let turn = "X";
let isgameOver = false;
let gameFinish = true;

// Function to change turn
const changeTurn = ()=>{
    return turn === "X"? "0": "X";
}
// Function to change win
const checkWin = ()=>{
    let boxtexts= document.getElementsByClassName('boxtext');
    let wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ]
    wins.forEach(e=>{
        if ((boxtexts[e[0]].innerText === boxtexts[e[1]].innerText)&&(boxtexts[e[1]].innerText === boxtexts[e[2]].innerText)&&(boxtexts[e[0]].innerText !== "")&&(gameFinish === true)){
            document.getElementById('status').innerText= boxtexts[e[0]].innerText + "'s won";
            console.log(gameFinish);
            isgameOver=true;
            gameFinish=false;
            document.querySelector('.imgGif').getElementsByTagName('img')[0].style.width = "100px";
            // music.play();
            gameFinish=true;
        }
    })
}


//game 


let boxes = document.getElementsByClassName('cell');
Array.from(boxes).forEach(element =>{
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click',()=>{
        if (boxtext.innerHTML === "") {
            boxtext.innerText = turn;
            turn=changeTurn();
            turnMusic.play();
            checkWin();
            if (!isgameOver) {
                
                document.getElementById('status').innerHTML= "Turn for "+turn;
            }
        }
    })
})

restart.addEventListener('click', ()=>{
    let boxtexts = document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element => {
        element.innerText = "";
    });
    turn = "X"; 
    isgameOver = false;
    document.getElementById("status").innerText  = "Turn for " + turn;
    document.querySelector('.imgGif').getElementsByTagName('img')[0].style.width = "0px"
    music.pause()
})

