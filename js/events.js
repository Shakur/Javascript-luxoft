(function(){
    var league = new League();
    var buttons = document.getElementsByClassName("btn-league");
    for (btn of buttons) {
        btn.addEventListener("click", league.displayLeagues);
        btn.addEventListener("click", league.displayLeagues1);
    }
    //var addGame = document.getElementById("add-game");
    ///addGame.addEventListener("click", league.addGame);
    //btn.addEventListener("click", league.displayResults);
})();