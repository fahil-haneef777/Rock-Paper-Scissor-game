//strict mode

let computerScore = document.querySelector('.cscore');
let yourscore = document.querySelector('.yscore');

let gamePlay = document.querySelector('.game');

let rulesbtn = document.querySelector('.btn-Rules');
let closeIcon = document.querySelector('#close-Icon');
let gameRules = document.querySelector('.gamerules');
let gamebtn = document.querySelectorAll('.game button');

let winner = document.querySelector('.winner');
let playAgain = document.querySelector('.playagain');

let playAgainbtn = document.querySelector('.playagain-btn');

let computerChoice_btn = document.querySelector('.right-play');
let yourChoice_btn = document.querySelector('.left-play');

let nextBtn = document.querySelector('.next');

let cscore = 0;
let pscore = 0;

const computerOptions = ['Rock', 'Paper', 'Scissor']

gamebtn.forEach((option) => {
    option.addEventListener('click', function () {
        let computerNumber = Math.floor(Math.random() * 3);
        let computerChoice = computerOptions[computerNumber];
        let userChoice = this.value;
        gamePlay.classList.toggle('close');
        playAgain.classList.toggle('open');
        compare(computerChoice, userChoice);
        bothButton(computerChoice, userChoice);
        computerScore.textContent = cscore;
        yourscore.textContent = pscore;
        Next();


        console.log(userChoice);
        console.log(computerChoice);







    })
})

playAgainbtn.addEventListener('click', function () {
    setTimeout(() => {
        gamePlay.classList.toggle('close');
        playAgain.classList.toggle('open');
    }, 200)




})


//function used to compare between computerChoice and userChoice

const compare = (computerChoice, userchoice) => {
    //check for tie
    if (computerChoice === userchoice) {
        winner.textContent = 'TIE UP ';
        return;
    }
    //check for rock
    if (userchoice === 'Rock') {
        if (computerChoice === 'Scissor') {
            winner.textContent = 'YOU WIN'
            pscore++;
        } else {
            winner.textContent = 'YOU LOST';
            cscore++;
        }
    }

    //check for Scissor
    if (userchoice === 'Scissor') {
        if (computerChoice === 'Paper') {
            winner.textContent = 'YOU WIN'
            pscore++;;
        } else {
            winner.textContent = 'YOU LOST';
            cscore++;
        }
    }
    //check for Paper
    if (userchoice === 'Paper') {
        if (computerChoice === 'Rock') {
            winner.textContent = 'YOU WIN';
            pscore++;;
        } else {
            winner.textContent = 'YOU LOST';
            cscore++;
        }
    }


}

let bothButton = (computerChoice, userChoice) => {
    // //Rockimage
    // imgR = document.createElement('IMG')
    // imgR.src = "images/rock.png"
    // //Paperimage
    // imgP = document.createElement('IMG');
    // imgP.src = "images/paper.png"
    // //Scissorimage
    // imgS = document.createElement('IMG');
    // imgS.src = "images/scissor.png"
    // //for computerChoice_btn
    if (computerChoice === 'Rock') {
        computerChoice_btn.classList.add('rock1', 'pic');
        computerChoice_btn.innerHTML = '<img src="images/rock.png">'

    } else if (computerChoice === 'Paper') {
        computerChoice_btn.classList.add('paper1', 'pic');
        computerChoice_btn.innerHTML = '<img src="images/paper.png">'

    } else if (computerChoice === 'Scissor') {
        computerChoice_btn.classList.add('scissor1', 'pic');
        computerChoice_btn.innerHTML = '<img src="images/scissor.png">'

    }
    //for userChoice_btn
    if (userChoice === 'Rock') {
        yourChoice_btn.classList.add('rock1', 'pic');
        yourChoice_btn.innerHTML = '<img src="images/rock.png">'

    } else if (userChoice === 'Paper') {
        yourChoice_btn.classList.add('paper1', 'pic');
        yourChoice_btn.innerHTML = '<img src="images/paper.png">'

    } else if (userChoice === 'Scissor') {
        yourChoice_btn.classList.add('scissor1', 'pic');
        yourChoice_btn.innerHTML = '<img src="images/scissor.png">'
    }

}

let Next=()=> {
    if (cscore>=pscore) {
        nextBtn.classList.toggle('open');
    }else{
        nextBtn.classList.remove('open')
    }
}


rulesbtn.onclick = () => {
    gameRules.classList.toggle('open')
}
closeIcon.onclick = () => {
    gameRules.classList.toggle('open')
}