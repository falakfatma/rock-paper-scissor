let container = document.querySelector(`.container`)
let Items = document.querySelectorAll('.gaming-box')
let gamingCon = document.querySelector(`.gaming-boxContainer`);
let answer = document.getElementById(`answer`);
let reset = document.getElementById(`reset`);
let score = document.getElementById(`yourscore`);
let scissor = document.getElementById(`scissor`);
let paper = document.getElementById(`paper`);
let rock = document.getElementById(`rock`);
let Result_Container = document.querySelector(`.Result_Container`);
let ComputerPicked = document.querySelector(`.ComputerPicked`);
let youPicked = document.querySelector(`.youPicked`);
// let ele = document.createElement('div')
// ele.classList = "turn"
// let turn = `Turn : Your turn`
// ele.innerHTML = turn
// container.append(ele)
let Scores = 0
// const Which_turn = () => {
//   if (turn = `Your turn`) {
//     turn = `computer`
//   }
//   else {
//     turn = `Your turn`
//   }

// }
// Computer 

function getComputerChoice() {
  let choice = ['r', 'p', 's']
  let RandomNum = Math.floor(Math.random() * 3)
  return choice[RandomNum]
}
function game(userChoice) {
  if (userChoice + getComputerChoice() == 'pr' || userChoice + getComputerChoice() == 'sp' || userChoice + getComputerChoice() == 'rs') {
    console.log(userChoice + getComputerChoice());
    answer.innerHTML = `you win`;
    score.innerHTML = Scores++;
  }
  else if (userChoice + getComputerChoice() == 'rp' || userChoice + getComputerChoice() == 'ps' || userChoice + getComputerChoice() == 'rs') {

    console.log(userChoice + getComputerChoice());
    answer.innerHTML = `Computer win`;
  }
  else if (userChoice + getComputerChoice() == 'pp' || userChoice + getComputerChoice() == 'ss' || userChoice + getComputerChoice() == 'rr') {

    console.log(userChoice + getComputerChoice());

    answer.innerHTML = `Tie Game`
  };
};
function ComputerImg(){
  if (getComputerChoice() == 'r') {
  ComputerPicked.innerHTML =
    `<img src="icons/8530659_hand_rock_icon.png" alt="rock">`;
    console.log(`your com choice = ${getComputerChoice()}`);
}
else if (getComputerChoice() == 's') {
  ComputerPicked.innerHTML =
    `<img src="icons/8664885_hand_peace_icon.png" alt="scissor">`;
  console.log(`your com choice = ${getComputerChoice()}`);
}
else if (getComputerChoice() == 'p') {

  ComputerPicked.innerHTML =
    `<img src="icons/8664932_hand_gesture_icon.png" alt="paper">`;
    console.log(`your com choice = ${getComputerChoice()}`);
}
};

  

function main() {
  scissor.addEventListener('click', () => {
    game('s')
  ComputerImg();
    youPicked.innerHTML =
      `<img src="icons/8664885_hand_peace_icon.png" alt="scissor">`;
  });
  rock.addEventListener('click', () => {
    game('r');
  ComputerImg();
    
    youPicked.innerHTML =
      `<img src="icons/8530659_hand_rock_icon.png" alt="rock">`;
  });
  paper.addEventListener('click', () => {
    game('p');
  ComputerImg();
    
    youPicked.innerHTML =
      `<img src="icons/8664932_hand_gesture_icon.png" alt="paper">`;
  });
}
main()
// console.log(gamingItem)
// let item = gamingItem.forEach((e)=>{
// return e
// })
// console.log(item)

// On click -- ROck Paper Scissor

document.querySelectorAll('.gaming-box').forEach(item => {
  item.addEventListener('click', event => {
    //handle click
    gamingCon.classList.add('hide')
    Result_Container.classList.remove('hide')
  })
})

console.log(paper)
reset.addEventListener('click', () => {
  gamingCon.classList.remove('hide')
  Result_Container.classList.add('hide')
})
// setInterval(()=>{
//   main()
// },500)