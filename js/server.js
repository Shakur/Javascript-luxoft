function Server() {

    var readTeams = function(names) {
        var teams = [];
        for (name of names) {
            teams.push(new Team(name));
        }

        return teams;
    }

    this.readLeagues = function() {
        var leagues = [];
        leagues.push(new League("Gold", readTeams(["Juventus", "Barcelona", "Arsenal", "Borussia"])));
        leagues.push(new League("Silver", readTeams(["Milan", "Real", "Manchester", "Bayern"])));

        return leagues;
    }

    this.readGames = function() {
        var games = [];
        games.push(new Game("Juventus", "Barcelona", "1:1"));
        games.push(new Game("Juventus", "Arsenal", "2:1"));
        games.push(new Game("Barcelona", "Arsenal", "0:0"));
        games.push(new Game("Arsenal", "Borussia", "4:3"));

        return games;
    }

}