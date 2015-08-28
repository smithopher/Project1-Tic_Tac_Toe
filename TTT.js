$(function(){      //since I pre-filled each square with each svg symbol I need to hide them.
  $(".o").hide();  //I set this in a separate function from actual gameplay so it loads faster.
  $(".x").hide();
});

$(function() {
  var gamePlay = function() {  // Entire game contained in here
    var player = $("#player");
    var moves = 1;
    var gameBoard = [[null, null, null],
                     [null, null, null],
                     [null, null, null]];
    $(".square").on("click", function(event) {
       switch (moves % 2) { //switch to alternate player by click
         case 1:
           var xTurn = function() {
             var xy = $(event.currentTarget).attr("id").replace("r","").split("c");
             var x = parseInt(xy[0]);
             var y = parseInt(xy[1]);
             if (gameBoard [x][y] === null) { // only make move if square is not taken
               gameBoard[x][y] = "1"
               var getX = $(event.currentTarget).find(".x");
               getX.show();
               moves+=1;
             } else { // prevent from over-writing gameBoard value and showing both icons in display
               alert ("Square is already taken! Choose another square!!!");
             }
             player.text("2");
           }
           xTurn();
           break;
         case 0:
           var oTurn = function() {
             var xy = $(event.currentTarget).attr("id").replace("r","").split("c");
             var x = parseInt(xy[0]);
             var y = parseInt(xy[1]);
             if (gameBoard[x][y] === null){
               gameBoard[x][y] = "0"
               var getO = $(event.currentTarget).find(".o")
               getO.show();
               moves+=1;
             } else {
               alert("Square is already taken! Choose another square!!!");
             }
             player.text("1");
           }
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
              moves = 1
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
              for(var i = 0; i < gameBoard.length; i++){
                for(var n = 0; n < gameBoard[i].length; n++){
                  gameBoard[i][n] = null;
                }
              }
              $(".x").hide();
              $(".o").hide();
              moves = 1
              player.text("1");
        } else if (moves === 10){
          alert("Gridlock! Try again!");
          for(var i = 0; i < gameBoard.length; i++){
            for(var n = 0; n < gameBoard[i].length; n++){
              gameBoard[i][n] = null;
            }
          }
          $(".x").hide();
          $(".o").hide();
          moves = 1
          player.text("1");
        }
      }
      console.log(gameBoard);
      getWinner();
    })
  }
  gamePlay();
})
