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

function displayLeagueTable(teams) {
    var tableLeague = "<table class='table'><caption>Optional table caption.</caption>";
    var tableLeagueHeader = "<thead><tr><th></th>";
    for (var prop of teams) {
        tableLeagueHeader += "<th>" + prop.getName() + "</th>";
    }
    tableLeagueHeader += "</tr></thead>";
    var tableLeagueBody = "<tbody>";
    for (var prop of teams) {
        tableLeagueBody += "<tr><th scope='row'>" + prop.getName() + "</th></tr>";
    }
    tableLeagueBody += "</tbody>";
    document.getElementById("league-table").innerHTML = tableLeague + tableLeagueHeader + tableLeagueBody + "</table>";
}

function displayLeagueOptions() {
    var leagues = createLeagues();
    var li;
    var link;
    for (var league of leagues) {
        li = document.createElement("li");
        link = document.createElement("a");
        link.href = "#";
        link.onclick = displayLeagueTable(league.getTeams());
        var aText = document.createTextNode(league.getDivision());
        link.appendChild(aText);
        li.appendChild(link);
        document.getElementById("leagues").appendChild(li);
        //li.push(li);
        //leagueOptions += "<li><link href='#' onclick='displayLeagueTable()'>"
        //    + league.getDivision() + "</link></li>";
    }
}