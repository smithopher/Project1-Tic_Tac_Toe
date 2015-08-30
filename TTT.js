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
    $(".square").on("click", function(event) {
       switch (moves % 2) {
         case 1:
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
             } else { 
               alert ("That square is already taken! Choose another square!!!");
             }
           };
           xTurn();
           break;
         case 0:
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
             } else {
               alert("That square is already taken! Choose another square!!!");
             }
           };
           oTurn();
           break;
         }
      var getWinner = function() {
        if (((gameBoard[0][0] === "1") && (gameBoard[0][1] === "1") && (gameBoard[0][2] === "1"))||
            ((gameBoard[1][0] === "1") && (gameBoard[1][1] === "1") && (gameBoard[1][2] === "1"))||
            ((gameBoard[2][0] === "1") && (gameBoard[2][1] === "1") && (gameBoard[2][2] === "1"))||
            ((gameBoard[0][0] === "1") && (gameBoard[1][0] === "1") && (gameBoard[2][0] === "1"))||
            ((gameBoard[0][1] === "1") && (gameBoard[1][1] === "1") && (gameBoard[2][1] === "1"))||
            ((gameBoard[0][2] === "1") && (gameBoard[1][2] === "1") && (gameBoard[2][2] === "1"))||
            ((gameBoard[0][0] === "1") && (gameBoard[1][1] === "1") && (gameBoard[2][2] === "1"))||
            ((gameBoard[0][2] === "1") && (gameBoard[1][1] === "1") && (gameBoard[2][0] === "1"))){
              alert("Player 1 wins!!!");
              for(var i = 0; i < gameBoard.length; i++){
                for(var n = 0; n < gameBoard[i].length; n++){
                  gameBoard[i][n] = null;
                }
              }
              $(".x").hide();
              $(".o").hide();
              moves = 1;
              player.text("1");
        } else if (((gameBoard[0][0] === "0") && (gameBoard[0][1] === "0") && (gameBoard[0][2] === "0"))||
            ((gameBoard[1][0] === "0") && (gameBoard[1][1] === "0") && (gameBoard[1][2] === "0"))||
            ((gameBoard[2][0] === "0") && (gameBoard[2][1] === "0") && (gameBoard[2][2] === "0"))||
            ((gameBoard[0][0] === "0") && (gameBoard[1][0] === "0") && (gameBoard[2][0] === "0"))||
            ((gameBoard[0][1] === "0") && (gameBoard[1][1] === "0") && (gameBoard[2][1] === "0"))||
            ((gameBoard[0][2] === "0") && (gameBoard[1][2] === "0") && (gameBoard[2][2] === "0"))||
            ((gameBoard[0][0] === "0") && (gameBoard[1][1] === "0") && (gameBoard[2][2] === "0"))||
            ((gameBoard[0][2] === "0") && (gameBoard[1][1] === "0") && (gameBoard[2][0] === "0"))){
              alert("Player 2 wins!!!");
              for(var a = 0; a < gameBoard.length; a++){
                for(var b = 0; b < gameBoard[a].length; b++){
                  gameBoard[a][b] = null;
                }
              }
              $(".x").hide();
              $(".o").hide();
              moves = 1;
              player.text("1");
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
        }
      };
      console.log(gameBoard);
      getWinner();
    });
  };
  gamePlay();
});
