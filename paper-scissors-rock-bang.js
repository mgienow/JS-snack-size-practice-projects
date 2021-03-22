

const getUserChoice = userInput => {
  userInput = userInput.toLowerCase()
  if (userInput === 'bang' || userInput === 'rock' || userInput === 'paper' || userInput === 'scissors'){
    return (userInput)
  } else {
    console.log('Please enter rock, paper or scissors');
  }
};
userFinal = getUserChoice('paper')

const getComputerChoice= () => {
  computerChoice = Math.floor(Math.random()*3)
  if (computerChoice === 0) {
    return 'rock';
  } else if (computerChoice === 1){
    return 'paper';
  } else if (computerChoice === 2){
    return 'scissors'
  } else { console.log('broken')}
}
computerFinal = getComputerChoice();

const determineWinner = (userFinal, computerFinal) => {
  if(userFinal === 'bang'){
    console.log('User has chosen the nuclear option: User WINS!')
  }else if(userFinal === computerFinal){
    console.log('It was a tie!')
  } else if(userFinal === 'rock'){
    if(computerFinal === 'paper'){
      console.log('Computer wins!')
    } else {
      console.log('User wins!')
    }

  } else if(userFinal === 'paper'){
    if (computerFinal === 'scissors'){
      console.log('Computer wins!') 
    } else {
      console.log('User wins!')
    }

  } else if (userFinal === 'scissors'){
      if (computerFinal === 'paper') {
          console.log('User wins!')
      } else {
        console.log('Computer wins!')
      }
  }
}


function playGame(){
  console.log(`User chose: ` + userFinal)
  console.log(`Computer chose: `+ computerFinal);
determineWinner(userFinal, computerFinal)
}

playGame()
