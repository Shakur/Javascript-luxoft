function GameProcessor() {
    var calcResult = function(points, team) {
        if (points == 3) {
            var win = team.getWin() + 1;
            team.setWin(win);
        } else if (points == 0) {
            var lose = team.getLose() + 1;
            team.setLose(lose);
        } else if (points == 1) {
            var draw = team.getDraw() + 1;
            team.setDraw(draw);
        }
    }

    var calcPoints = function(isHome, score) {
        var scoreArr = score.split(":");
        var points = 0;
        if (scoreArr[0] > scoreArr[1] && isHome) {
            points += 3;
        } else if (scoreArr[0] == scoreArr[1]) {
            points += 1;
        } else if (scoreArr[0] < scoreArr[1] && !isHome) {
            points += 3;
        }

        return points;

    }

    var sortByPoints = function (teams) {
        return teams.sort(function (team1, team2) {
            return team2.getPoints() - team1.getPoints();
        });
    }

    this.process = function(games) {
        var teams = [];
        for (game of games) {
            var home = game.getHome();
            var away = game.getAway();
            var homePoints = calcPoints(true, game.getScore());
            var awayPoints = calcPoints(false, game.getScore());
            if (teams.length) {
                var team = teams.find(function(team) {
                    return team.getName() == home;
                });
                if (team) {
                    calcResult(homePoints, team);
                    team.setPoints(team.getPoints() + homePoints);
                } else {
                    var team = new Team(home, homePoints);
                    teams.push(team);
                    calcResult(homePoints, team);
                }
                var team = teams.find(function(team) {
                    return team.getName() == away;
                });
                if (team) {
                    calcResult(awayPoints, team);
                    team.setPoints(team.getPoints() + awayPoints);
                } else {
                    var team = new Team(away, awayPoints);
                    teams.push(team);
                    calcResult(awayPoints, team);
                }
            } else {
                var homeTeam = new Team(home, homePoints);
                var awayTeam = new Team(away, awayPoints);
                teams.push(homeTeam);
                teams.push(awayTeam);
                calcResult(homePoints, homeTeam);
                calcResult(awayPoints, awayTeam);
            }

        }

        return sortByPoints(teams);
    }

    function findTeam(team) {
        return team.getName() == name;
    }
}