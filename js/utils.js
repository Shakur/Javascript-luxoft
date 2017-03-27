function createTeams(names) {
    var teams = [];
    for (name of names) {
        teams.push(new Team(name));
    }

    return teams;
}

function createLeagues() {
    var leagues = [];
    leagues.push(new League("Gold", createTeams(["Juventus", "Barcelona", "Arsenal", "Borussia"])));
    //leagues.push(new League("Silver", createTeams(["Milan", "Real", "Manchester", "Bayern"])));

    return leagues;
}

function createGames() {
    var games = [];
    games.push(new Game("Juventus", "Barcelona", "1:1"));
    games.push(new Game("Juventus", "Arsenal", "2:1"));
    //games.push(new Game("Juventus", "Borussia", "1:3"));
    games.push(new Game("Barcelona", "Arsenal", "0:0"));
    //games.push(new Game("Barcelona", "Borussia", "2:1"));
    games.push(new Game("Arsenal", "Borussia", "4:3"));

    return games;
}
