import { Link } from "react-router-dom";
import { FaFutbol } from "react-icons/fa";
import "./match.style.js";
import { dataMatch } from "../../../apis/match";
import { dataPlayer } from "../../../apis/player";
import { useEffect, useState } from "react";
import { AVATAR_DEFAULT } from "../../../constants";
import { MatchContainer } from "./match.style.js";

const groupByDate = (arr) => {
  const grouped = {};
  arr.forEach((item) => {
    if (!grouped[item.date]) {
      grouped[item.date] = [];
    }
    grouped[item.date].push(item);
  });
  return grouped;
};

const ContentMatch = () => {
  const [matches, setMatches] = useState({});

  useEffect(() => {
    const data = dataMatch.map((match) => {
      const { home, away } = match;
      const homeTeam = dataPlayer.find((player) => player.id === home);
      const awayTeam = dataPlayer.find((player) => player.id === away);
      return { ...match, homeTeam, awayTeam };
    });

    const sortDataByDate = groupByDate(data);
    setMatches(sortDataByDate);
  }, []);

  return (
    <MatchContainer>
      <div className="container">
        {Object.values(matches).map((element) => {
          return (
            <div key={element[0].date} className="loop">
              <div className="loop1">
                {<FaFutbol />} {element[0].groupStage} - {element[0].date}
              </div>
              <div className="loop2">
                {element.map((child) => (
                  <div key={child.id} className="loop21">
                    <div className="loop21Item1">
                      <div className="loop21Item1Frame">
                        <div className="frameChild">{child.table}</div>
                        <div className="home">
                          <div className="home-info">
                            <img
                              className="avatar"
                              src={child.homeTeam?.image || AVATAR_DEFAULT}
                              alt=""
                            />
                            <div className="">{child.homeTeam?.name}</div>
                          </div>
                          <div className="">{child.score[0]}</div>
                        </div>
                        <div className="home">
                          <div className="home-info">
                            <img
                              className="avatar"
                              src={child.awayTeam?.image || AVATAR_DEFAULT}
                              alt=""
                            />
                            <div className="">{child.awayTeam?.name}</div>
                          </div>
                          <div className="score">{child.score[1]}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </MatchContainer>
  );
};
export default ContentMatch;
