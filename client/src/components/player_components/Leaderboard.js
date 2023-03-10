import FooterNavBar from "../FooterNavBar";
import TableRow from "./TableRow";

const Leaderboard = ({ leaderboard }) => {

    // const [sortMethod, setSortMethod] = useState()

    // const leaderboardByWins = leaderboard.sort((a,b)=>{
    //     return a.wins < b.wins? 1: -1
    // });

    const leaderboardByWeightedScore = leaderboard.sort((a, b) => {
        return a.weighted_score < b.weighted_score ? 1 : -1
    });

    const table = leaderboardByWeightedScore.map((player, index) => {
        return <TableRow key={player._id} index={index} player={player} />
    })

    return (
        <div className="main-menu-container">
            <fieldset className="leaderboard-box">
                <legend className="leaderboard-heading">LEADERBOARD</legend>
                <table>
                    <tbody>
                        <tr>
                            <td className="table-head">POSITION</td>
                            <td className="table-head">NAME</td>
                            <td className="table-head">WINS</td>
                            <td className="table-head">LOSSES</td>
                            <td className="table-head">TOTAL GAMES</td>
                            <td className="table-head">WIN PERCENTAGE</td>
                            <td className="table-head">WEIGHTED SCORE</td>
                        </tr>
                        {table}
                    </tbody>
                </table>
            </fieldset>
            <FooterNavBar />
        </div>
    )
}

export default Leaderboard;