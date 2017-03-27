function League(division, teams) {

    var _division = division;
    var _teams = teams;

    var _server = new Server();

    this.getDivision = function() {
        return _division;
    }

    this.getTeams = function () {
        return _teams;
    }

    var create = function(event) {
        displayResults();
        var existingTable = document.getElementsByClassName("table")[0];
        if (existingTable) {
            existingTable.remove();
        }
        var table = document.createElement("table");
        table.className = "table";
        table.appendChild(createHeaders());
        for (league of _server.readLeagues()) {
            if (league.getDivision() == event.target.textContent) {
                table.appendChild(createContent(league.getTeams()));
            }
        }
        document.getElementById("league-table").appendChild(table);
    }

    var createHeaders = function() {
        var tr = document.createElement("tr");
        var thead = document.createElement("thead");
        thead.appendChild(createHeader(tr, "#"));
        thead.appendChild(createHeader(tr, "Team"));
        thead.appendChild(createHeader(tr, "W"))
        thead.appendChild(createHeader(tr, "D"));
        thead.appendChild(createHeader(tr, "L"));
        thead.appendChild(createHeader(tr, "Goals"));
        thead.appendChild(createHeader(tr, "Points"));

        return thead;
    }

    var createHeader = function(tr, text) {
        var th = document.createElement("th");
        var text = document.createTextNode(text);
        th.appendChild(text);
        tr.appendChild(th);

        return tr;
    }

    var createContent = function() {
        var gameProcessor = new GameProcessor();
        var games = _server.readGames();
        var teams = gameProcessor.process(games);
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

    this.displayLeagues = function() {
        var ul = document.getElementById("league");
        while (ul.firstChild) {
            ul.removeChild(ul.firstChild);
        }
        for (var league of _server.readLeagues()) {
            var li = document.createElement("li");
            li.className = "league-li";
            var link = document.createElement("a");
            link.href = "#";
            link.onclick = create;
            var division = document.createTextNode(league.getDivision());
            link.appendChild(division);
            li.appendChild(link);
            ul.appendChild(li);
        }
    }

    this.displayLeagues1 = function() {
        var ul = document.getElementById("game");
        while (ul.firstChild) {
            ul.removeChild(ul.firstChild);
        }
        for (var league of _server.readLeagues()) {
            var li = document.createElement("li");
            li.className = "league-li";
            var link = document.createElement("a");
            link.href = "#";
            link.onclick = create;
            var division = document.createTextNode(league.getDivision());
            link.appendChild(division);
            li.appendChild(link);
            ul.appendChild(li);
        }
    }

    var displayResults = function () {
        var ul = document.getElementById("results");
        while (ul.firstChild) {
            ul.removeChild(ul.firstChild);
        }
        var games = _server.readGames();
        for (game of games) {
            var li = document.createElement("li");
            li.className = "list-group-item";
            var text = document.createTextNode(game.getHome() + " " + game.getScore() + " " + game.getAway());
            li.appendChild(text);
            ul.appendChild(li);
        }
    }

    function chooseTeams() {
        var div = document.getElementById("home");
        var label = document.createElement("label");
        var text = document.createTextNode("Home:");
        label.appendChild(text);
        div.appendChild(label);
        var select = document.createElement("select");
        select.className = "select-team";
        for (var team of teams) {
            var option = document.createElement("option");
            var optionText = document.createTextNode(team.getName());
            option.appendChild(optionText);
            select.appendChild(option);
        }
        div.appendChild(select);
    }

    // this.addGame = function () {
    //     var div = document.getElementById("new-game");
    //     var label = document.createElement("label");
    //     var text = document.createTextNode("Select league:");
    //     label.appendChild(text);
    //     div.appendChild(label);
    //     var select = document.createElement("select");
    //     select.className = "select-game";
    //     for (var league of _server.readLeagues()) {
    //         var option = document.createElement("option");
    //         var optionText = document.createTextNode(league.getDivision());
    //         option.appendChild(optionText);
    //         option.addEventListener("click", chooseTeams);
    //         select.appendChild(option);
    //     }
    //     div.appendChild(select);
    //
    // }

}
