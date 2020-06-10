module.exports = (sequelize, Sequelize) => {
    const Game = sequelize.define("game", {
        date: {
            type: Sequelize.DATE
        },
        player1: {
            type: Sequelize.STRING
        },
        player2: {
            type: Sequelize.STRING
        },
        score1: {
            type: Sequelize.INTEGER
        },
        score2: {
            type: Sequelize.INTEGER
        },
        result: {
            type: Sequelize.STRING
        }
    });

    return Game;
};
