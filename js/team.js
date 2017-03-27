function Team(name, points) {
    var _name = name;
    var _win = 0;
    var _lose = 0;
    var _draw = 0;
    var _points = points;
    var _goals;

    this.getName = function () {
        return _name;
    }

    this.getWin = function () {
        return _win;
    }

    this.setWin = function (win) {
        _win = win;
    }

    this.getLose = function () {
        return _lose;
    }

    this.setLose = function (lose) {
        _lose = lose;
    }

    this.getDraw = function () {
        return _draw;
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