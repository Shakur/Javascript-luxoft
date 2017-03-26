function Team(name) {
    var _name = name;
    var _win;
    var _lose;
    var _draw;
    var _points;
    var _goals;

    this.getName = function () {
        return _name;
    }

    this.getWin = function () {
        return _win;
    }

    this.getLose = function () {
        return _lose;
    }

    this.getDraw = function () {
        return _draw;
    }

    this.getPoints = function () {
        return _points;
    }

    this.getGoals = function () {
        return _goals;
    }

    this.setPoints = function (points) {
        _points = points;
    }

}

function Game(home, away, score) {
    var _home = home;
    var _away = away;
    var _score = score;

    this.getHome = function () {
        return _home;
    }

    this.getAway = function () {
        return _away;
    }

    this.getScore = function () {
        return _score;
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

function createLeagueTable(teams) {
    var table = document.createElement("table")
    table.className = "table";
    table.appendChild(createHeaders(teams));
    table.appendChild(createContent(teams));
    document.getElementById("league-table").appendChild(table);
}

var createContent = function() {
    var gameProcessor = new GameProcessor();
    var teams = gameProcessor.process(createGames());
    var tbody = document.createElement("tbody");
    for (var i = 0; i < teams.length; ++i) {
        var text = document.createTextNode(i + 1);
        var trBody = document.createElement("tr");
        var thBody = document.createElement("th");
        thBody.scope = "row";
        thBody.appendChild(text);
        trBody.appendChild(thBody);
        thBody = document.createElement("th");
        text = document.createTextNode(teams[i].getName());
        thBody.appendChild(text);
        trBody.appendChild(thBody);
        tbody.appendChild(trBody);
    }

    return tbody;
}

var createHeaders = function(teams) {
    var trHead = document.createElement("tr");
    var thead = document.createElement("thead");
    thead.appendChild(createHeader(trHead, "#"));
    thead.appendChild(createHeader(trHead, "Team"));
    for (var i = 0; i < teams.length; ++i) {
        var text = document.createTextNode(i + 1);
        var thHead = document.createElement("th");
        thHead.appendChild(text);
        trHead.appendChild(thHead);
    }
    thead.appendChild(createHeader(trHead, "Games"));
    thead.appendChild(createHeader(trHead, "W"))
    thead.appendChild(createHeader(trHead, "D"));
    thead.appendChild(createHeader(trHead, "L"));
    thead.appendChild(createHeader(trHead, "Goals"));
    thead.appendChild(createHeader(trHead, "Points"));

    return thead;
}

var createHeader = function(trHead, text) {
    var thHead = document.createElement("th");
    var text = document.createTextNode(text);
    thHead.appendChild(text);
    trHead.appendChild(thHead);

    return trHead;
}

function displayLeagues() {
    var ul = document.getElementById("league");
    var li;
    var link;
    for (var league of createLeagues()) {
        li = document.createElement("li");
        link = document.createElement("a");
        link.href = "#";
        link.addEventListener("click", function () {
            createLeagueTable(league.getTeams());
        });
        var division = document.createTextNode(league.getDivision());
        link.appendChild(division);
        li.appendChild(link);
        ul.appendChild(li);
    }
}


