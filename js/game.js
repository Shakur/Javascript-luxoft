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