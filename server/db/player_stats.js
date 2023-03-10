const PlayerStats = (payload) => {
    
    const players = payload.players;
    const games = payload.games;

    for (let player of players) {

        player.wins = 0;
        player.losses = 0;
        player.total_games = 0;
        player.win_percentage = 0
        player.weighted_score = 0

        for (let game of games) {
            if (game.winner_id.equals(player._id)) {
                player.wins += 1;
                player.total_games += 1;

            } else if (game.loser_id.equals(player._id)) {
                player.losses += 1;
                player.total_games += 1;
            }
        }
        
        if (player.total_games > 0) {
            player.win_percentage = player.wins/player.total_games;
            player.weighted_score = player.win_percentage*(player.total_games/2);
        }
    }
    
    return [players];
}

module.exports = PlayerStats;