import React,{ useEffect, useState } from 'react';
import {
    SingleEliminationBracket,
    Match,
    SVGViewer,
    createTheme
} from "@g-loot/react-tournament-brackets";
import { useNavigate } from 'react-router-dom';
import "./MartChart.css";
import '../../../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../../../../node_modules/bootstrap/dist/js/bootstrap.bundle';
import axios from 'axios';
import { Bracket } from '../../../apis/apiMartChart';

const MartChart = () => {
  const navigate = useNavigate();
  const [match, setMatch] = useState('');
  useEffect(() =>{
    const fetchData = async () => {
      const data = await axios.get('http://localhost:5005/api/matchschema')
      data.data.splice( 14, 1 );
      setMatch( data.data)
      console.log("Bracket",Bracket)
    }
    console.log(window.innerWidth, window.innerHeight)
    fetchData()
  },[])
  const GoToMatchDetail = (id) =>{
  console.log(id)
  navigate(`/matchDetail/${id}`,{replace: true})
  }
  const GoToTeamDetail = (id) =>{
    navigate(`/team/${id}`, {replace: true})
  }
  const finalWidth = Math.max(window.innerWidth - 50, 500);
  const finalHeight = Math.max(window.innerWidth- 100, 500);
  return(
    <div className="Home">
      <section className='p-3'>
              <div className="container">
                  <div className="grid">
                      <div className="row">
                          <div className="col">
                              <p className="h3">
                                  Vòng loại trực tiếp
                              </p>
                          </div>
                      </div>
                  </div>
              </div>
              <div className="line"></div>
          </section>
          {
            match && (
              <div className='d-flex justify-content-center'>
                <SingleEliminationBracket
                  theme={GlootTheme}
                  matches={match}
                  matchComponent={Match}
                  svgWrapper={({ children, ...props }) => (
                    <SVGViewer
                      width={finalWidth}
                      height={finalHeight}
                      background="#FCFFF2"
                      SVGBackground="#FCFFF2"
            
                      {...props}
                    >
                      {children}
                    </SVGViewer>
                  )}
                  onMatchClick={(match) => GoToMatchDetail(match.match.id)}
                  onPartyClick={(match) => GoToTeamDetail(match.id)}
                />
              </div>
            )
          }
    </div>
  )
}
const GlootTheme = createTheme({
    textColor: { main: "#ffffff", highlighted: "#111111", dark: "#111111" },
    matchBackground: { wonColor: "#cdf6fa6e", lostColor: "#cdf6fa6e" },
    score: {
      background: {
        wonColor: `#6ccdf470`,
        lostColor: "#6ccdf470"
      },
      text: { highlightedWonColor: "#FA1414", highlightedLostColor: "#FA1414" }
    },
    border: {
      color: "#abc3d1e0",
      highlightedColor: "#111111"
    },
    roundHeader: { backgroundColor: "#6BD4FA", fontColor: "#F4F2FE" },
    connectorColor: "#FC0505",
    connectorColorHighlight: "#FC0505",
    svgBackground: "#0F121C"
});
export default MartChart
