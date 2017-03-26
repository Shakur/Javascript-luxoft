function GameProcessor() {
    var calcPoints = function(isHome, score) {
        var scoreArr = score.split(":");
        var points = 0;
        if (scoreArr[0] > scoreArr[1] && isHome) {
            points += 3;
        } else if (scoreArr[0] == scoreArr[1]) {
            points += 1;
        } else if (scoreArr[0] > scoreArr[1] && !isHome) {
            points += 3;
        }

        return points;

    }

    var sortByPoints = function (teams) {
        return teams.sort(function (team1, team2) {
            return team1.getPoints() - team2.getPoints();
        });
    }

    this.process = function(games) {
        var teams = [];
        for (game of games) {
            var home = game.getHome();
            var away = game.getAway();
            var homePoints = calcPoints(true, game.getScore());
            var awayPoints = calcPoints(false, game.getScore());
            if (teams.length == 0) {
                teams.push(new Team(home, homePoints));
                teams.push(new Team(away, awayPoints));
            }
            for (team of teams) {
                if (team.getName() != home) {
                    teams.push(new Team(home, homePoints));
                } else if (team.getName() != away) {
                    teams.push(new Team(away, awayPoints));
                }
            }
            for (team of teams) {
                if (team.getName() == home) {
                    team.setPoints(team.getPoints() + homePoints);
                } else if (team.getName() == away) {
                    team.setPoints(team.getPoints() + awayPoints);
                }
            }
        }

        return sortByPoints(teams);
    }
}