$(function(){
  $(".o").hide();
  $(".x").hide();
});

$(function() {
  var gamePlay = function() {
    var moves = 1;
    var gameBoard = [[null, null, null],
                     [null, null, null],
                     [null, null, null]];
    $(".square").on("click", function(event) {
      console.log(gameBoard);
       switch (moves % 2) {
         case 1:
           var xTurn = function() {
             var xy = $(event.currentTarget).attr('id').replace("r","").split("c");
             var x = parseInt(xy[0]);
             var y = parseInt(xy[1]);
             gameBoard[x][y] = "1"
             var getX = $(event.currentTarget).find(".x");
             getX.show();
             moves+=1;
           }
           xTurn();
           break;
         case 0:
           var oTurn = function() {
             var xy = $(event.currentTarget).attr('id').replace("r","").split("c");
             var x = parseInt(xy[0]);
             var y = parseInt(xy[1]);
             gameBoard[x][y] = "0"
             var getO = $(event.currentTarget).find(".o")
             getO.show();
             moves+=1;
           }
           oTurn();
           break;
         }
       })

    }
  gamePlay();
})
