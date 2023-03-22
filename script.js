let container = document.querySelector(`.container`)
let Items = document.querySelectorAll('.gaming-box')
let gamingCon = document.querySelector(`.gaming-boxContainer`);
let scissor = document.getElementById(`scissor`);
let paper = document.getElementById(`paper`);
let rock = document.getElementById(`rock`);
let Result_Container = document.querySelector(`.Result_Container`);
// let ele = document.createElement('div')
// ele.classList = "turn"
// let turn = `Turn : Your turn`
// ele.innerHTML = turn
// container.append(ele)

// const Which_turn = () => {
//   if (turn = `Your turn`) {
//     turn = `computer`
//   }
//   else {
//     turn = `Your turn`
//   }

// }
// console.log(gamingItem)
// let item = gamingItem.forEach((e)=>{
// return e
// })
// console.log(item)

// On click -- ROck Paper Scissor

// let Item = document.addEventListener(())
document.querySelectorAll('.gaming-box').forEach(item => {
  item.addEventListener('click', event => {
    //handle click
   gamingCon.classList.add('hide')
    Result_Container.classList.remove('hide')
  })
})

console.log(paper)
