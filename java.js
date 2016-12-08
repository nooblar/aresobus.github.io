var player = 1;
var turn = 0;
var winner = 0;
var playerX = 0;
var playerO = 0;



function clicked (buttonid)  {if(player == 1){
  document.getElementById('0').innerHTML = "X";
  document.getElementById('0').style.transition = "2s";
  document.getElementById('0').disabled = "disabled";
player -= 1;
turn++;
win();
draw();
score();

      }
      else { document.getElementById('0').innerHTML = "O"
        document.getElementById('0').disabled = "disabled";
player += 1;
turn++;
winO();
draw();
score();
    };}

function clicked1 (buttonid) {
if(player == 1){
  document.getElementById('1').innerHTML = "X";
  document.getElementById('1').disabled = "disabled";
player -= 1;
turn++;
win();
draw();
score();

      }
      else { document.getElementById('1').innerHTML = "O"
        document.getElementById('1').disabled = "disabled";
player += 1;
turn++;
winO();
draw();
score();

    };
}
function clicked2 (buttonid) {if(player == 1){
  document.getElementById('2').innerHTML = "X";
  document.getElementById('2').disabled = "disabled";
player -= 1;
turn++;
win();
draw();
score();

      }
      else { document.getElementById('2').innerHTML = "O"
        document.getElementById('2').disabled = "disabled";
player += 1;
turn++;
winO();
draw();
score();

    };
  }
function clicked3 (buttonid) {if(player == 1){
  document.getElementById('3').innerHTML = "X";
  document.getElementById('3').disabled = "disabled";
player -= 1;
turn++;
win();
draw();
score();

      }
      else { document.getElementById('3').innerHTML = "O"
        document.getElementById('3').disabled = "disabled";
player += 1;
turn++;
winO();
draw();
score();

    };}
function clicked4 (buttonid) {if(player == 1){
  document.getElementById('4').innerHTML = "X";
  document.getElementById('4').disabled = "disabled";
player -= 1;
turn++;
win();
draw();
score();

      }
      else { document.getElementById('4').innerHTML = "O"
        document.getElementById('4').disabled = "disabled";
player += 1;
turn++;
winO();
draw();
score();

    };}
function clicked5 (buttonid) {if(player == 1){
  document.getElementById('5').innerHTML = "X";
  document.getElementById('5').disabled = "disabled";
player -= 1;
turn++;
win();
draw();
score();

      }
      else { document.getElementById('5').innerHTML = "O"
        document.getElementById('5').disabled = "disabled";
player += 1;
turn++;
winO();
draw();
score();

    };}
function clicked6 (buttonid) {if(player == 1){
  document.getElementById('6').innerHTML = "X";
  document.getElementById('6').disabled = "disabled";
player -= 1;
turn++;
win();
draw();
score();

      }
      else { document.getElementById('6').innerHTML = "O"
        document.getElementById('6').disabled = "disabled";
player += 1;
turn++;
winO();
draw();
score();

    };}
function clicked7 (buttonid) {if(player == 1){
  document.getElementById('7').innerHTML = "X";
  document.getElementById('7').disabled = "disabled";
player -= 1;
turn++;
win();
draw();
score();

      }
      else { document.getElementById('7').innerHTML = "O"
        document.getElementById('7').disabled = "disabled";
player += 1;
turn++;
winO();
draw();
score();

    };}
function clicked8 (buttonid) {if(player == 1){
  document.getElementById('8').innerHTML = "X";
  document.getElementById('8').disabled = "disabled";
player -= 1;
turn++;
win();
draw();
score();

      }
      else { document.getElementById('8').innerHTML = "O"
        document.getElementById('8').disabled = "disabled";
player += 1;
turn++;
winO();
draw();
score();

    };}


function win () {
if(document.getElementById('0').innerHTML == "X" && document.getElementById('1').innerHTML == "X" && document.getElementById('2').innerHTML == "X"
|| document.getElementById('3').innerHTML == "X" && document.getElementById('4').innerHTML == "X" && document.getElementById('5').innerHTML == "X"
|| document.getElementById('6').innerHTML == "X" && document.getElementById('7').innerHTML == "X" && document.getElementById('8').innerHTML == "X"
|| document.getElementById('0').innerHTML == "X" && document.getElementById('4').innerHTML == "X" && document.getElementById('8').innerHTML == "X"
|| document.getElementById('2').innerHTML == "X" && document.getElementById('4').innerHTML == "X" && document.getElementById('6').innerHTML == "X"
|| document.getElementById('0').innerHTML == "X" && document.getElementById('3').innerHTML == "X" && document.getElementById('6').innerHTML == "X"
|| document.getElementById('1').innerHTML == "X" && document.getElementById('4').innerHTML == "X" && document.getElementById('7').innerHTML == "X"
|| document.getElementById('2').innerHTML == "X" && document.getElementById('5').innerHTML == "X" && document.getElementById('8').innerHTML == "X"
  )
{
  winner = 2;
playerX =  playerX + 1;
document.getElementById('text0').innerHTML = "Player X won!"
document.getElementById('text1').style.transition = "2s";
 document.getElementById('text1').innerHTML = "Player X:" + " " + playerX;
  reset();


}



}


function winO() {
if(document.getElementById('0').innerHTML == "O" && document.getElementById('1').innerHTML == "O" && document.getElementById('2').innerHTML == "O"
|| document.getElementById('3').innerHTML == "O" && document.getElementById('4').innerHTML == "O" && document.getElementById('5').innerHTML == "O"
|| document.getElementById('6').innerHTML == "O" && document.getElementById('7').innerHTML == "O" && document.getElementById('8').innerHTML == "O"
|| document.getElementById('0').innerHTML == "O" && document.getElementById('4').innerHTML == "O" && document.getElementById('8').innerHTML == "O"
|| document.getElementById('2').innerHTML == "O" && document.getElementById('4').innerHTML == "O" && document.getElementById('6').innerHTML == "O"
|| document.getElementById('0').innerHTML == "O" && document.getElementById('3').innerHTML == "O" && document.getElementById('6').innerHTML == "O"
|| document.getElementById('1').innerHTML == "O" && document.getElementById('4').innerHTML == "O" && document.getElementById('7').innerHTML == "O"
|| document.getElementById('2').innerHTML == "O" && document.getElementById('5').innerHTML == "O" && document.getElementById('8').innerHTML == "O"
  )
{

playerO = playerO + 1;
document.getElementById('text0').innerHTML = "Player O won!"
 document.getElementById('text2').innerHTML = "Player O:" + " " + playerO;
   winner = 2;
  reset();

}

}

function draw () {
  if (turn == 9 && winner == 0)
  {
      document.getElementById('text0').innerHTML = "Draw guys!"
      reset();
  }
  }

function resetForButton () {
  document.getElementById('0').innerHTML = " ";
  document.getElementById('1').innerHTML = " ";
  document.getElementById('2').innerHTML = " ";
   document.getElementById('3').innerHTML = " ";
  document.getElementById('4').innerHTML = " ";
  document.getElementById('5').innerHTML = " ";
   document.getElementById('6').innerHTML = " ";
  document.getElementById('7').innerHTML = " ";
  document.getElementById('8').innerHTML = " ";
  document.getElementById('0').disabled = false;
  document.getElementById('1').disabled = false;
  document.getElementById('2').disabled = false;
  document.getElementById('3').disabled = false;
  document.getElementById('4').disabled = false;
  document.getElementById('5').disabled = false;
  document.getElementById('6').disabled = false;
  document.getElementById('7').disabled = false;
  document.getElementById('8').disabled = false;

  document.getElementById('text0').innerHTML = "Who is the best?"
player = 1;
 turn = 0;
  winner = 0;


}

function reset () {
  document.getElementById('0').innerHTML = " ";
  document.getElementById('1').innerHTML = " ";
  document.getElementById('2').innerHTML = " ";
   document.getElementById('3').innerHTML = " ";
  document.getElementById('4').innerHTML = " ";
  document.getElementById('5').innerHTML = " ";
   document.getElementById('6').innerHTML = " ";
  document.getElementById('7').innerHTML = " ";
  document.getElementById('8').innerHTML = " ";
  document.getElementById('0').disabled = true;
  document.getElementById('1').disabled = true;
  document.getElementById('2').disabled = true;
  document.getElementById('3').disabled = true;
  document.getElementById('4').disabled = true;
  document.getElementById('5').disabled = true;
  document.getElementById('6').disabled = true;
  document.getElementById('7').disabled = true;
  document.getElementById('8').disabled = true;



}








