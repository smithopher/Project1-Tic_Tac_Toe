var typeOfGame = parseInt(prompt("Are you playing a 1 or 2 player game?\n[Please enter 1 or 2]"));
if (typeOfGame === 1) {
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
         setTimeout(function() {
         if((gameBoard[0][0] === 0 && gameBoard [0][1] === 0)||
            (gameBoard[1][2] === 0 && gameBoard[2][2] === 0)||
            (gameBoard[1][1] === 0 && gameBoard[2][0] === 0)) {
            $("#r0c2 .o").show();
            gameBoard[0][2] = 0;
         } else if((gameboard[0][0] === 0 && gameBoard[0][2] === 0)||
            (gameBoard[1][1] === 0 && gameBoard[2][1] === 0)) {
            $("#r0c1 .o").show();
            gameBoard[0][1] = 0;
         } else if((gameboard[0][1] === 0 && gameBoard[0][2] === 0)||
            (gameBoard[1][0] === 0 && gameBoard[2][0] === 0)||
            (gameBoard[2][0] === 0 && gameBoard[1][1] === 0) {
            $("#r2c0 .o").show();
            gameBoard[0][0] = 0;
         } else if((gameboard[1][0] === 0 && gameBoard[1][1] === 0)||
            (gameBoard[0][2] === 0 && gameBoard[2][2] === 0)) {
            $("#r1c2 .o").show();
            gameBoard[1][2] = 0;
         } else if((gameboard[0][0] === 0 && gameBoard[0][2] === 0)||
            (gameBoard[1][1] === 0 && gameBoard[2][1] === 0) ||
            (gameBoard[0][0] === 0 && gameBoard[2][2] === 0)||
            (gameBoard[0][2] === 0 && gameBoard[2][0] === 0)) {
            $("#r1c1 .o").show();
            gameBoard[1][1] = 0;
         } else if((gameboard[0][0] === 0 && gameBoard[2][0] === 0)||
            (gameBoard[1][1] === 0 && gameBoard[1][2] === 0)) {
            $("#r1c0 .o").show();
            gameBoard[1][0] = 0;
         } else if((gameboard[0][2] === 0 && gameBoard[1][2] === 0)||
            (gameBoard[2][0] === 0 && gameBoard[2][1] === 0)||
            (gameBoard[0][0] === 0 && gameBoard[1][1] === 0)) {
            $("#r2c2 .o").show();
            gameBoard[2][2] = 0;
         } else if((gameboard[0][1] === 0 && gameBoard[1][1] === 0)||
            (gameBoard[2][0] === 0 && gameBoard[2][2] === 0)) {
            $("#r2c1 .o").show();
            gameBoard[2][1] = 0;
         } else if((gameboard[2][1] === 0 && gameBoard[2][2] === 0)||
            (gameBoard[0][0] === 0 && gameBoard[1][0] === 0)||
            (gameBoard[0][2] === 0 && gameBoard[1][1] === 0)) {
            $("#r2c0 .o").show();
            gameBoard[2][0] = 0;
         } else if((gameBoard[0][0] === 1 && gameBoard [0][1] === 1) ||
            (gameBoard[1][1] === 1 && gameBoard[1][2] === 1)||
            (gameBoard[2][0] === 1 && gameBoard[1][1] === 1)) {
            $("#r0c2 .o").show();
            gameBoard[0][2] = 0;
         } else if((gameboard[0][0] === 1 && gameBoard[0][2] === 1)||
            (gameBoard[1][1] === 1 && gameBoard[2][1] === 1)) {
            $("#r0c1 .o").show();
            gameBoard[0][1] = 0;
         } else if((gameboard[0][1] === 1 && gameBoard[0][2] === 1)||
            (gameBoard[1][0] === 1 && gameBoard[2][0] === 1)||
            (gameBoard[0][2] === 1 && gameBoard[1][1] === 0)) {
            $("#r2c0 .o").show();
            gameBoard[0][0] = 0;
         } else if((gameboard[1][0] === 1 && gameBoard[1][1] === 1)||
            (gameBoard[0][2] === 1 && gameBoard[2][2] === 1)) {
            $("#r1c2 .o").show();
            gameBoard[1][2] = 0;
         } else if((gameboard[0][0] === 1 && gameBoard[0][2] === 1)||
            (gameBoard[1][1] === 1 && gameBoard[2][1] === 1) ||
            (gameBoard[0][0] === 1 && gameBoard[2][2] === 1)||
            (gameBoard[0][2] === 1 && gameBoard[2][0] === 1)) {
            $("#r1c1 .o").show();
            gameBoard[1][1] = 0;
         } else if((gameboard[0][0] === 1 && gameBoard[2][0] === 1)||
            (gameBoard[1][1] === 1 && gameBoard[1][2] === 1)) {
            $("#r1c0 .o").show();
            gameBoard[1][0] = 0;
         } else if((gameboard[0][2] === 1 && gameBoard[1][2] === 1)||
            (gameBoard[2][0] === 1 && gameBoard[2][1] === 1)||
            (gameBoard[0][0] === 1 && gameBoard[1][1] === 1)) {
            $("#r2c2 .o").show();
            gameBoard[2][2] = 0;
         } else if((gameboard[0][1] === 1 && gameBoard[1][1] === 1)||
            (gameBoard[2][0] === 1 && gameBoard[2][2] === 1)) {
            $("#r2c1 .o").show();
            gameBoard[2][1] = 0;
         } else if((gameboard[2][1] === 1 && gameBoard[2][2] === 1)||
            (gameBoard[0][0] === 1 && gameBoard[1][0] === 1)||
            (gameBoard[0][2] === 1 && gameBoard[1][1] === 1)) {
            $("#r2c0 .o").show();
            gameBoard[2][0] = 0;
         } else if(gameBoard[1][1] === null) {
            gameBoard[1][1] = 0;
            $("#r1c1 .o").show();
         } else if(gameBoard[0][0] === null) {
            gameBoard[0][0] = 0;
            $("#r0c0 .o").show();
         } else if(gameBoard[0][2] === null) {
            gameBoard[0][2] = 0;
            $("#r0c2 .o").show();
         } else if(gameBoard[2][0] === null) {
            gameBoard[2][0] = 0;
            $("#r2c0 .o").show();
         } else if(gameBoard[2][2] === null) {
            gameBoard[2][2] = 0;
            $("#r2c2 .o").show();
         } else if(gameBoard[0][1] === null) {
            gameBoard[0][1] = 0;
            $("#r0c1 .o").show();
         } else if(gameBoard[1][0] === null) {
            gameBoard[1][0] = 0;
            $("#r1c0 .o").show();
         } else if(gameBoard[2][1] === null) {
            gameBoard[2][1] = 0;
            $("#r2c1 .o").show();
         } else if(gameBoard[1][2] === null) {
            gameBoard[1][2] = 0;
            $("#r1c2 .o").show();
         }
         })
}



else if (typeOfGame === 2){

}
