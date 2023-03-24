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
  if (userChoice + getComputerChoice() == 'pr') {
    console.log("user "+ userChoice + "com "+ getComputerChoice());
    answer.innerHTML = `you win`;
    score.innerHTML = Scores++;
      ComputerPicked.innerHTML =
    `<img src="icons/8530659_hand_rock_icon.png" alt="rock">`;
  }
  else if(userChoice + getComputerChoice() == 'sp'){
    console.log(userChoice + getComputerChoice());
    answer.innerHTML = `you win`;
      ComputerPicked.innerHTML =
    `<img src="icons/8664932_hand_gesture_icon.png" alt="paper">`;
    score.innerHTML = Scores++;
  }
  else if(userChoice + getComputerChoice() == 'rs'){
    console.log(userChoice + getComputerChoice());
    answer.innerHTML = `you win`;
     ComputerPicked.innerHTML =
    `<img src="icons/8664885_hand_peace_icon.png" alt="scissor">`;
    score.innerHTML = Scores++;
  }
  else if(userChoice + getComputerChoice() == 'sr'){
    console.log(userChoice + getComputerChoice());
    answer.innerHTML = `you win`;
    ComputerPicked.innerHTML =
    `<img src="icons/8530659_hand_rock_icon.png" alt="rock">`;
    score.innerHTML = Scores++;
  }
  else if (userChoice + getComputerChoice() == 'rp') {
  ComputerPicked.innerHTML =
    `<img src="icons/8664932_hand_gesture_icon.png" alt="paper">`;
    console.log(userChoice + getComputerChoice());
    answer.innerHTML = `Computer win`;
  }
  else if ( userChoice + getComputerChoice() == 'ps') {

    console.log(userChoice + getComputerChoice());
     ComputerPicked.innerHTML =
    `<img src="icons/8664885_hand_peace_icon.png" alt="scissor">`;
    answer.innerHTML = `Computer win`;
  }
  else if (userChoice + getComputerChoice() == 'rs') {

    console.log(userChoice + getComputerChoice());
     ComputerPicked.innerHTML =
    `<img src="icons/8664885_hand_peace_icon.png" alt="scissor">`;
    answer.innerHTML = `Computer win`;
  }
  else if (userChoice + getComputerChoice() == 'pp') {

    console.log(userChoice + getComputerChoice());
  ComputerPicked.innerHTML =
    `<img src="icons/8664932_hand_gesture_icon.png" alt="paper">`;
    answer.innerHTML = `Tie Game`
  }
  else if ( userChoice + getComputerChoice() == 'ss') {

    console.log(userChoice + getComputerChoice());
 ComputerPicked.innerHTML =
    `<img src="icons/8664885_hand_peace_icon.png" alt="scissor">`;
    answer.innerHTML = `Tie Game`
  }
  else if (userChoice + getComputerChoice() == 'rr') {

    console.log(userChoice + getComputerChoice());
  ComputerPicked.innerHTML =
    `<img src="icons/8530659_hand_rock_icon.png" alt="rock">`;
    answer.innerHTML = `Tie Game`
  };
};
  


  

function main() {
  scissor.addEventListener('click', () => {
  
    game('s')
    youPicked.innerHTML =
      `<img src="icons/8664885_hand_peace_icon.png" alt="scissor">`;
  });
  rock.addEventListener('click', () => {
  
    game('r');
    
    youPicked.innerHTML =
      `<img src="icons/8530659_hand_rock_icon.png" alt="rock">`;
  });
  paper.addEventListener('click', () => {
  
    game('p');
    
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
