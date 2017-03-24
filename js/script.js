function Team(name) {
    var _name = name;

    this.getName = function () {
        return _name;
    }
}

function League(division, teams) {
    var _division = division;
    var _teams = teams;

    this.getDivision = function () {
        return _division;
    }

    this.getTeams = function () {
        return _teams;
    }

}

function displayLeagueTable() {
    //var tableLeague = "<table class='table'><caption>Optional table caption.</caption>";
    //var tableLeagueHeader = "<thead><tr><th></th>";
    //for (var prop of teams) {
    //    tableLeagueHeader += "<th>" + prop.getName() + "</th>";
    //}
    //tableLeagueHeader += "</tr></thead>";
    //var tableLeagueBody = "<tbody>";
    //for (var prop of teams) {
    //    tableLeagueBody += "<tr><th scope='row'>" + prop.getName() + "</th></tr>";
    //}
    //tableLeagueBody += "</tbody>";
    //document.getElementById("league-table").innerHTML = tableLeague + tableLeagueHeader + tableLeagueBody + "</table>";
}

function displayLeagueOptions() {
    var leagues = createLeagues();
    var leagueOptions = "";
    var elem = document.createElement("li");
    elem.href = "#";
    elem.onclick = displayLeagueOptions(league);
    for (var league of leagues) {
        leagueOptions += "<li><a href='#' onclick='displayLeagueTable()'>"
            + league.getDivision() + "</a></li>";
    }
    document.getElementById("leagues").innerHTML = leagueOptions;
}