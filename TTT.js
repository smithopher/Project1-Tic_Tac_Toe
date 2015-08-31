$(function(){
  $(".o").hide();
  $(".x").hide();
});

$(function() {
  var gamePlay = function() {
    var player = $("#player");
    var moves = 1;
    var gameBoard = [[null, null, null],
                     [null, null, null],
                     [null, null, null]];
    var getWinner = function() {
      if (((gameBoard[0][0] === "1") && (gameBoard[0][1] === "1") && (gameBoard[0][2] === "1"))||
          ((gameBoard[1][0] === "1") && (gameBoard[1][1] === "1") && (gameBoard[1][2] === "1"))||
          ((gameBoard[2][0] === "1") && (gameBoard[2][1] === "1") && (gameBoard[2][2] === "1"))||
          ((gameBoard[0][0] === "1") && (gameBoard[1][0] === "1") && (gameBoard[2][0] === "1"))||
          ((gameBoard[0][1] === "1") && (gameBoard[1][1] === "1") && (gameBoard[2][1] === "1"))||
          ((gameBoard[0][2] === "1") && (gameBoard[1][2] === "1") && (gameBoard[2][2] === "1"))||
          ((gameBoard[0][0] === "1") && (gameBoard[1][1] === "1") && (gameBoard[2][2] === "1"))||
          ((gameBoard[0][2] === "1") && (gameBoard[1][1] === "1") && (gameBoard[2][0] === "1"))){
            alert("X wins!!!");
            for(var i = 0; i < gameBoard.length; i++){
              for(var n = 0; n < gameBoard[i].length; n++){
                gameBoard[i][n] = null;
              }
            }
            $(".x").hide();
            $(".o").hide();
            moves = 1;
            player.text("1");
            clearComputer();
      } else if (((gameBoard[0][0] === "0") && (gameBoard[0][1] === "0") && (gameBoard[0][2] === "0"))||
          ((gameBoard[1][0] === "0") && (gameBoard[1][1] === "0") && (gameBoard[1][2] === "0"))||
          ((gameBoard[2][0] === "0") && (gameBoard[2][1] === "0") && (gameBoard[2][2] === "0"))||
          ((gameBoard[0][0] === "0") && (gameBoard[1][0] === "0") && (gameBoard[2][0] === "0"))||
          ((gameBoard[0][1] === "0") && (gameBoard[1][1] === "0") && (gameBoard[2][1] === "0"))||
          ((gameBoard[0][2] === "0") && (gameBoard[1][2] === "0") && (gameBoard[2][2] === "0"))||
          ((gameBoard[0][0] === "0") && (gameBoard[1][1] === "0") && (gameBoard[2][2] === "0"))||
          ((gameBoard[0][2] === "0") && (gameBoard[1][1] === "0") && (gameBoard[2][0] === "0"))){
            alert("O wins!!!");
            for(var a = 0; a < gameBoard.length; a++){
              for(var b = 0; b < gameBoard[a].length; b++){
                gameBoard[a][b] = null;
              }
            }
            $(".x").hide();
            $(".o").hide();
            moves = 1;
            player.text("1");
            clearComputer();
      } else if (moves === 10){
        alert("Gridlock! Try again!");
        for(var c = 0; c < gameBoard.length; c++){
          for(var d = 0; d < gameBoard[c].length; d++){
            gameBoard[c][d] = null;
          }
        }
        $(".x").hide();
        $(".o").hide();
        moves = 1;
        player.text("1");
        clearComputer();
      }
    };
    var typeOfGame = parseInt(prompt("Are you playing a 1 or 2 player game?\n[Please enter 1 or 2]"));
    if (typeOfGame === 1) {
      var computerGame = function() {
        $("footer").text("Beat the computer!!!");
        $(".square").on("click", function(event) {
            var xy = $(event.currentTarget).attr("id").replace("r","").split("c");
            var x = parseInt(xy[0]);
            var y = parseInt(xy[1]);
              if (gameBoard [x][y] === null) {
                gameBoard[x][y] = "1";
                var getX = $(event.currentTarget).find(".x");
                getX.show();
                moves+=1;
                getWinner();
                var computerPlayer = setTimeout(function() {
                   if(((gameBoard[0][0] === "0" && gameBoard [0][1] === "0")||
                   (gameBoard[1][2] === "0" && gameBoard[2][2] === "0")||
                   (gameBoard[1][1] === "0" && gameBoard[2][0] === "0")) &&
                   (gameBoard[0][2] === null)) {
                   $("#r0c2 .o").show();
                   gameBoard[0][2] = "0";
                   moves +=1;
                   getWinner();
                } else if(((gameBoard[0][0] === 0 && gameBoard[0][2] === 0)||
                   (gameBoard[1][1] === "0" && gameBoard[2][1] === "0")) &&
                   (gameBoard[0][1] === null)) {
                   $("#r0c1 .o").show();
                   gameBoard[0][1] = "0";
                   moves +=1;
                   getWinner();
                } else if(((gameBoard[0][1] === "0" && gameBoard[0][2] === "0")||
                   (gameBoard[1][0] === "0" && gameBoard[2][0] === "0")||
                   (gameBoard[2][0] === "0" && gameBoard[1][1] === "0")) &&
                   (gameBoard[0][0] === null)) {
                   $("#r0c0 .o").show();
                   gameBoard[0][0] = "0";
                   moves +=1;
                   getWinner();
                } else if(((gameBoard[1][0] === "0" && gameBoard[1][1] === "0")||
                   (gameBoard[0][2] === "0" && gameBoard[2][2] === "0")) &&
                   (gameBoard[1][2] === null)) {
                   $("#r1c2 .o").show();
                   gameBoard[1][2] = "0";
                   moves +=1;
                   getWinner();
                } else if(((gameBoard[0][0] === "0" && gameBoard[0][2] === "0")||
                   (gameBoard[1][1] === "0" && gameBoard[2][1] === "0")||
                   (gameBoard[0][0] === "0" && gameBoard[2][2] === "0")||
                   (gameBoard[0][2] === "0" && gameBoard[2][0] === "0"))&&
                   (gameBoard[1][1] === null)) {
                   $("#r1c1 .o").show();
                   gameBoard[1][1] = "0";
                   moves +=1;
                   getWinner();
                } else if(((gameBoard[0][0] === "0" && gameBoard[2][0] === "0")||
                   (gameBoard[1][1] === "0" && gameBoard[1][2] === "0")) &&
                   (gameBoard[1][0] === null)) {
                   $("#r1c0 .o").show();
                   gameBoard[1][0] = "0";
                   moves +=1;
                   getWinner();
                } else if(((gameBoard[0][2] === "0" && gameBoard[1][2] === "0")||
                   (gameBoard[2][0] === "0" && gameBoard[2][1] === "0")||
                   (gameBoard[0][0] === "0" && gameBoard[1][1] === "0")) &&
                   (gameBoard[2][2] === null)) {
                   $("#r2c2 .o").show();
                   gameBoard[2][2] = "0";
                   moves +=1;
                   getWinner();
                } else if(((gameBoard[0][1] === "0" && gameBoard[1][1] === "0")||
                   (gameBoard[2][0] === "0" && gameBoard[2][2] === "0")) &&
                   (gameBoard[2][1] === null)) {
                   $("#r2c1 .o").show();
                   gameBoard[2][1] = "0";
                   moves +=1;
                   getWinner();
                } else if(((gameBoard[2][1] === "0" && gameBoard[2][2] === "0")||
                   (gameBoard[0][0] === "0" && gameBoard[1][0] === "0")||
                   (gameBoard[0][2] === "0" && gameBoard[1][1] === "0")) &&
                   (gameBoard[2][0] === null)) {
                   $("#r2c0 .o").show();
                   gameBoard[2][0] = "0";
                   moves +=1;
                   getWinner();
                } else if(((gameBoard[0][0] === "1" && gameBoard [0][1] === "1") ||
                   (gameBoard[1][2] === "1" && gameBoard[2][2] === "1")||
                   (gameBoard[2][0] === "1" && gameBoard[1][1] === "1")) &&
                   (gameBoard[0][2] === null)) {
                   $("#r0c2 .o").show();
                   gameBoard[0][2] = "0";
                   moves +=1;
                   getWinner();
                } else if(((gameBoard[0][0] === "1" && gameBoard[0][2] === "1")||
                   (gameBoard[1][1] === "1" && gameBoard[2][1] === "1")) &&
                   (gameBoard[0][1] === null)) {
                   $("#r0c1 .o").show();
                   gameBoard[0][1] = "0";
                   moves +=1;
                   getWinner();
                } else if(((gameBoard[0][1] === "1" && gameBoard[0][2] === "1")||
                   (gameBoard[1][0] === "1" && gameBoard[2][0] === "1")||
                   (gameBoard[2][2] === "1" && gameBoard[1][1] === "1")) &&
                   (gameBoard[0][0] === null)) {
                   $("#r0c0 .o").show();
                   gameBoard[0][0] = "0";
                   moves +=1;
                   getWinner();
                } else if(((gameBoard[1][0] === "1" && gameBoard[1][1] === "1")||
                   (gameBoard[0][2] === "1" && gameBoard[2][2] === "1"))&&
                   (gameBoard[1][2] === null)) {
                   $("#r1c2 .o").show();
                   gameBoard[1][2] = "0";
                   moves +=1;
                   getWinner();
                } else if(((gameBoard[1][0] === "1" && gameBoard[1][2] === "1")||
                   (gameBoard[0][1] === "1" && gameBoard[2][1] === "1") ||
                   (gameBoard[0][0] === "1" && gameBoard[2][2] === "1")||
                   (gameBoard[0][2] === "1" && gameBoard[2][0] === "1")) &&
                    (gameBoard[1][1] === null)) {
                   $("#r1c1 .o").show();
                   gameBoard[1][1] = "0";
                   moves +=1;
                   getWinner();
                } else if(((gameBoard[0][0] === "1" && gameBoard[2][0] === "1")||
                   (gameBoard[1][1] === "1" && gameBoard[1][2] === "1")) &&
                   (gameBoard[1][0] === null)) {
                   $("#r1c0 .o").show();
                   gameBoard[1][0] = "0";
                   moves +=1;
                   getWinner();
                } else if(((gameBoard[0][2] === "1" && gameBoard[1][2] === "1")||
                   (gameBoard[2][0] === "1" && gameBoard[2][1] === "1")||
                   (gameBoard[0][0] === "1" && gameBoard[1][1] === "1")) &&
                   (gameBoard[2][2] === null)) {
                   $("#r2c2 .o").show();
                   gameBoard[2][2] = "0";
                   moves +=1;
                   getWinner();
                } else if(((gameBoard[0][1] === "1" && gameBoard[1][1] === "1")||
                   (gameBoard[2][0] === "1" && gameBoard[2][2] === "1")) &&
                   (gameBoard[2][1] === null)) {
                   $("#r2c1 .o").show();
                   gameBoard[2][1] = "0";
                   moves +=1;
                   getWinner();
                } else if(((gameBoard[2][1] === "1" && gameBoard[2][2] === "1")||
                   (gameBoard[0][0] === 1 && gameBoard[1][0] === 1)||
                   (gameBoard[0][2] === 1 && gameBoard[1][1] === 1)) &&
                   (gameBoard[2][0] === null)) {
                   $("#r2c0 .o").show();
                   gameBoard[2][0] = "0";
                   moves +=1;
                   getWinner();
                } else if(gameBoard[1][1] === null) {
                   gameBoard[1][1] = "0";
                   $("#r1c1 .o").show();
                   moves +=1;
                   getWinner();
                } else if(gameBoard[0][0] === null) {
                   gameBoard[0][0] = "0";
                   $("#r0c0 .o").show();
                   moves +=1;
                   getWinner();
                } else if(gameBoard[0][2] === null) {
                   gameBoard[0][2] = "0";
                   $("#r0c2 .o").show();
                   moves +=1;
                   getWinner();
                } else if(gameBoard[2][0] === null) {
                   gameBoard[2][0] = "0";
                   $("#r2c0 .o").show();
                   moves +=1;
                   getWinner();
                } else if(gameBoard[2][2] === null) {
                   gameBoard[2][2] = "0";
                   $("#r2c2 .o").show();
                   moves +=1;
                   getWinner();
                } else if(gameBoard[0][1] === null) {
                   gameBoard[0][1] = "0";
                   $("#r0c1 .o").show();
                   moves +=1;
                   getWinner();
                } else if(gameBoard[1][0] === null) {
                   gameBoard[1][0] = "0";
                   $("#r1c0 .o").show();
                   moves +=1;
                   getWinner();
                } else if(gameBoard[2][1] === null) {
                   gameBoard[2][1] = "0";
                   $("#r2c1 .o").show();
                   moves +=1;
                   getWinner();
                } else if(gameBoard[1][2] === null) {
                   gameBoard[1][2] = "0";
                   $("#r1c2 .o").show();
                   moves +=1;
                   getWinner();
                }
              }, 500);
              var clearComputer = function() {
                clearTimeout(computerPlayer);
              };
              console.log(gameBoard);
            } else {
              alert ("That square is already taken! Choose another square!!!");
            }
          });
        };
        computerGame();
      } else if(typeOfGame === 2){
          var xTurn = function() {
            var xy = $(event.currentTarget).attr("id").replace("r","").split("c");
            var x = parseInt(xy[0]);
            var y = parseInt(xy[1]);
            if (gameBoard [x][y] === null) {
              gameBoard[x][y] = "1";
              var getX = $(event.currentTarget).find(".x");
              getX.show();
              moves+=1;
              player.text("2");
              getWinner();
            } else {
              alert ("That square is already taken! Choose another square!!!");
            }
          };
          var oTurn = function() {
            var xy = $(event.currentTarget).attr("id").replace("r","").split("c");
            var x = parseInt(xy[0]);
            var y = parseInt(xy[1]);
            if (gameBoard[x][y] === null){
              gameBoard[x][y] = "0";
              var getO = $(event.currentTarget).find(".o");
              getO.show();
              moves+=1;
              player.text("1");
              getWinner();
            } else {
              alert("That square is already taken! Choose another square!!!");
            }
          };
          $(".square").on("click", function(event) {
             switch (moves % 2) {
               case 1:
                 xTurn();
                 break;
               case 0:
                 oTurn();
                 break;
             }
         });
        console.log(gameBoard);
      } else {
        typeOfGame = alert("You didn't enter 1 or 2! Now you broke the website!\nRefresh the page to play.");
      }
    };
  gamePlay();
});
