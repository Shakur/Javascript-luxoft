function Team(name, points) {
    var _name = name;
    var _win;
    var _lose;
    var _draw;
    var _points = points;
    var _goals;

    this.getName = function () {
        return _name;
    }

    this.getWin = function () {
        return _win || 0;
    }

    this.setWin = function (win) {
        _win = win;
    }

    this.getLose = function () {
        return _lose || 0;
    }

    this.setLose = function (lose) {
        _lose = lose;
    }

    this.getDraw = function () {
        return _draw || 0;
    }

    this.setDraw = function (draw) {
        _draw = draw;
    }

    this.getPoints = function () {
        return _points;
    }

    this.setPoints = function (points) {
        _points = points;
    }

    this.getGoals = function () {
        return _goals;
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

function createImage() {
    var td = document.createElement("td");
    var img = document.createElement("img");
    img.src = "../img/icon.png";
    img.width = 30;
    img.height = 30;
    td.appendChild(img);

    return td;
}
var createContent = function() {
    var gameProcessor = new GameProcessor();
    var teams = gameProcessor.process(createGames());
    var tbody = document.createElement("tbody");
    for (var i = 0; i < teams.length; ++i) {
        var text = document.createTextNode(i + 1);
        var tr = document.createElement("tr");
        var th = document.createElement("th");
        th.scope = "row";
        th.appendChild(text);
        tr.appendChild(th);
        th = document.createElement("th");
        text = document.createTextNode(teams[i].getName());
        th.appendChild(text);
        tr.appendChild(th);
        var td = document.createElement("td");
        if (i == 0) {
            td = addImage();
        }
        tr.appendChild(td);
        var td = document.createElement("td");
        if (i == 1) {
            td = addImage();
        }
        tr.appendChild(td);
        var td = document.createElement("td");
        if (i == 2) {
            td = addImage();
        }
        tr.appendChild(td);
        var td = document.createElement("td");
        if (i == 3) {
            td = addImage();
        }
        tr.appendChild(td);
        var td = document.createElement("td");
        text = document.createTextNode(teams[i].getWin());
        td.appendChild(text);
        tr.appendChild(td);
        td = document.createElement("td");
        text = document.createTextNode(teams[i].getDraw());
        td.appendChild(text);
        tr.appendChild(td);
        td = document.createElement("td");
        text = document.createTextNode(teams[i].getLose());
        td.appendChild(text);
        tr.appendChild(td);
        td = document.createElement("td");
        tr.appendChild(td);
        td = document.createElement("td");
        text = document.createTextNode(teams[i].getPoints());
        td.append(text);
        tr.appendChild(td);
        tbody.appendChild(tr);
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


