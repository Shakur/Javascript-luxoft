function createTeams(names) {
    var teams = [];
    for (name in names) {
        teams.push(new Team(name));
    }

    return teams;
}

function createLeagues() {
    var leagues = [];
    leagues.push(new League("Gold", createTeams("Juventus", "Barcelona", "Arsenal", "Borussia")));

    return leagues;
}
