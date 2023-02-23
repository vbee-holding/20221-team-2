import React, { Children, useState } from "react";
import { useEffect } from "react";
import "./Group.css";
import "../../../../node_modules/bootstrap/dist/css/bootstrap.css";
import "../../../../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { dataMatch } from "../../../apis/match";
import { dataPlayer } from "../../../apis/player";
import { AVATAR_DEFAULT } from "../../../constants";

const getRank = () => {
  const groupByTeam = dataMatch.reduce((result, match) => {
    const homeTeam = match.home;
    const awayTeam = match.away;
    const homeScore = match.score[0];
    const awayScore = match.score[1];
    const groupStage = match.groupStage;

    // If the home team does not exist in the result object yet, create an initial object for it
    if (!result[homeTeam]) {
      result[homeTeam] = {
        groupStage,
        name: homeTeam,
        img: "",
        P: 0,
        W: 0,
        D: 0,
        L: 0,
        GD: 0,
        Pts: 0,
        IdMatchs: [],
      };
    }

    // If the away team does not exist in the result object yet, create an initial object for it
    if (!result[awayTeam]) {
      result[awayTeam] = {
        groupStage,
        name: awayTeam,
        img: "",
        P: 0,
        W: 0,
        D: 0,
        L: 0,
        GD: 0,
        Pts: 0,
        IdMatchs: [],
      };
    }

    // Update the home and away team's stats based on the match result
    result[homeTeam].P += 1;
    result[awayTeam].P += 1;
    result[homeTeam].IdMatchs.push(match.id);
    result[awayTeam].IdMatchs.push(match.id);

    if (homeScore > awayScore) {
      result[homeTeam].W += 1;
      result[homeTeam].Pts += 3;
      result[awayTeam].L += 1;
      result[homeTeam].GD += homeScore - awayScore;
      result[awayTeam].GD += awayScore - homeScore;
    } else if (homeScore === awayScore) {
      result[homeTeam].D += 1;
      result[awayTeam].D += 1;
      result[homeTeam].Pts += 1;
      result[awayTeam].Pts += 1;
    } else {
      result[awayTeam].W += 1;
      result[awayTeam].Pts += 3;
      result[homeTeam].L += 1;
      result[homeTeam].GD += homeScore - awayScore;
      result[awayTeam].GD += awayScore - homeScore;
    }

    return result;
  }, {});

  const tableData = Object.values(groupByTeam).sort(
    (teamA, teamB) => teamB.Pts - teamA.Pts || teamB.GD - teamA.GD
  );

  // Add rank to each team based on their position in the tableData array
  tableData.forEach((team, index) => {
    team.rank = index + 1;
  });

  return tableData;
};

const Group = () => {
  const [ranks, setRanks] = useState([]);

  console.log("ranks", ranks);

  useEffect(() => {
    const ranks = getRank();
    const dataRanks = ranks.map((rank) => {
      const { name } = rank;
      const player = dataPlayer.find((player) => player.id === name);
      return { ...rank, player };
    });
    setRanks(dataRanks);
  }, []);

  console.log("ranks", ranks);

  return (
    <React.Fragment>
      <div className="groups">
        <div className="line"></div>
        <section>
          <div className="container">
            <div className="row">
              <div className="col-md-8">
                <div className="card my-2" id="group-team">
                  <p className="h5 mx-2"> Group </p>
                  <div className="table-body">
                    <table className="table table-hover">
                      <thead>
                        <tr>
                          <th>#</th>
                          <th>Đội</th>
                          <th>Số trận</th>
                          <th>Thắng</th>
                          <th>Hòa</th>
                          <th>Thua</th>
                          <th>Hiệu số</th>
                          <th>Số điểm</th>
                        </tr>
                      </thead>
                      <tbody>
                        {ranks.map((team) => (
                          <tr key={team.id}>
                            <td>{team.rank}</td>
                            <th className="pointer">
                              <li>
                                <img
                                  className="icon"
                                  src={team.player?.image || AVATAR_DEFAULT}
                                  alt=""
                                ></img>{" "}
                                {team.player?.name}
                              </li>
                            </th>
                            <td>{team.P}</td>
                            <td>{team.W}</td>
                            <td>{team.D}</td>
                            <td>{team.L}</td>
                            <td>{team.GD}</td>
                            <td>{team.Pts}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </React.Fragment>
  );
};
export default Group;
