var winsnum = parseInt(document.getElementById("wins").innerHTML);
var lossesnum = parseInt(document.getElementById("losses").innerHTML);
var tiesnum = parseInt(document.getElementById("ties").innerHTML);

document.getElementById("Rock").addEventListener('click', function() {
  var userAns = this.id
  var compAnsNum = Math.floor((Math.random() * 3) + 1);
  var lastGameMessage = document.getElementById("lastgame")
  switch(compAnsNum) {
    case 1:
      lastGameMessage.innerText = "Computer chose Rock and you tied.";
      tiesnum+=1;
      document.getElementById("ties").innerHTML = tiesnum;
      break;
    case 2:
      lastGameMessage.innerText = "Computer chose Paper and you lost.";
      lossesnum+=1;
      document.getElementById("losses").innerHTML = lossesnum;
      break;
    case 3:
      lastGameMessage.innerText = "Computer chose Scissors and you won!";
      winsnum+=1;
      document.getElementById("wins").innerHTML = winsnum;
      break;
  }
});

document.getElementById("Paper").addEventListener('click', function() {
  var userAns = this.id
  var compAnsNum = Math.floor((Math.random() * 3) + 1);
  var lastGameMessage = document.getElementById("lastgame")
  switch(compAnsNum) {
    case 1:
      lastGameMessage.innerText = "Computer chose Rock and you won!";
      winsnum+=1;
      document.getElementById("wins").innerHTML = winsnum;
      break;
    case 2:
      lastGameMessage.innerText = "Computer chose Paper and you tied.";
      tiesnum+=1;
      document.getElementById("ties").innerHTML = tiesnum;
      break;
    case 3:
      lastGameMessage.innerText = "Computer chose Scissors and you lost.";
      lossesnum+=1;
      document.getElementById("losses").innerHTML = lossesnum;
      break;
  }
});

document.getElementById("Scissors").addEventListener('click', function() {
  var userAns = this.id
  var compAnsNum = Math.floor((Math.random() * 3) + 1);
  var lastGameMessage = document.getElementById("lastgame")
  switch(compAnsNum) {
    case 1:
      lastGameMessage.innerText = "Computer chose Rock and you lost.";
      lossesnum+=1;
      document.getElementById("losses").innerHTML = lossesnum;
      break;
    case 2:
      lastGameMessage.innerText = "Computer chose Paper and you won!";
      winsnum+=1;
      document.getElementById("wins").innerHTML = winsnum;
      break;
    case 3:
      lastGameMessage.innerText = "Computer chose Scissors and you tied.";
      tiesnum+=1;
      document.getElementById("ties").innerHTML = tiesnum;
      break;
  }
});