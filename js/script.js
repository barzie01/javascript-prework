var playerInput, playerMove, randomNumber, playerWin, computerWin, argplayerWin, argcomputerWin;
var playerWin = 0;
var computerWin = 0;

function printMessage(msg){
  var div = document.createElement('div');
  div.innerHTML = msg;
  document.getElementById('messages').appendChild(div);
}

function clearMessages(){
  document.getElementById('messages').innerHTML = '';
  document.getElementById('result').innerHTML = ''
}

function printResult(rslt) {
  var resultDiv = document.createElement('div')
  resultDiv.innerHTML = rslt;
  document.getElementById('result').appendChild(resultDiv)
}

/**
 * Describe this function...
 */
function buttonClicked(argButtonName) {
  clearMessages();
  console.log(argButtonName + ' został kliknięty');
  
  /**
   * Describe this function...
   */
  function getMoveName(argMoveId) {
    console.log('wywołano funkcję getMoveName z argumentem: ' + argMoveId);
    if (argMoveId == 1) {
      return 'kamień';
    } else if (argMoveId == 2) {
      return 'papier';
    } else if (argMoveId == 3) {
      return 'nożyce';
    } else {
      printMessage('Nie znam ruchu o id ' + argMoveId + '. Zakładam, że chodziło o "kamień".');
      return 'kamień';
    }
  }
  
  /**
   * Describe this function...
   */
  function displayResult(argPlayerMove, argComputerMove) {
    
    console.log('wywołano funkcję displayResults z argumentami: ' + argPlayerMove + ', ' + argComputerMove);
    if (argPlayerMove == 'papier' && argComputerMove == 'kamień') {
      printMessage('Wygrywasz!');
      playerWin++;
    } else if (argPlayerMove == 'nożyce' && argComputerMove == 'papier') {
      printMessage('Wygrywasz!');
      playerWin++;
    } else if (argPlayerMove == 'kamień' && argComputerMove == 'nożyce') {
      printMessage('Wygrywasz!');
      playerWin++;
    } else if (argPlayerMove == argComputerMove) {
      printMessage('Remis!');
    } else {
      printMessage('Przegrywasz :(');
      computerWin++;
    }
    printMessage(' Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);
    printResult('Gracz ' + playerWin + '-' + computerWin + ' Komputer')
    
  }

  playerMove = argButtonName;
  console.log('wybór ruchu gracza to: ' + playerMove);

  console.log('ruch gracza to: ' + playerMove);
  randomNumber = Math.floor(Math.random() * 3 + 1);
  console.log('wylosowana liczba to: ' + randomNumber);
  const computerMove = getMoveName(randomNumber);
  console.log('ruch komputera to: ' + computerMove);
  displayResult(playerMove, computerMove);
  
}



const buttonRock = document.getElementById('button-rock');
buttonRock.addEventListener('click', function(){ buttonClicked('kamień'); });

const buttonPaper = document.getElementById('button-paper');
buttonPaper.addEventListener('click', function(){ buttonClicked('papier'); });

const buttonScissors = document.getElementById('button-scissors');
buttonScissors.addEventListener('click', function(){ buttonClicked('nożyce'); });