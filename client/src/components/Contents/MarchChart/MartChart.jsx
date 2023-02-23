import React from 'react';
import {
    SingleEliminationBracket,
    Match,
    SVGViewer,
    createTheme
  } from "@g-loot/react-tournament-brackets";
import { useNavigate } from 'react-router-dom';
import "./MartChart.css";
import { Bracket } from '../../../apis/apiMartChart';
import '../../../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../../../../node_modules/bootstrap/dist/js/bootstrap.bundle';
const MartChart = () => {
  const navigate = useNavigate();
  const GoToMatchDetail = (id) =>{
  console.log(id)
  navigate(`/matchDetail/${id}`,{replace: true})
  }
  const GoToTeamDetail = (id) =>{
    navigate(`/team/${id}`, {replace: true})
  }
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
      <SingleEliminationBracket
      theme={GlootTheme}
      matches={Bracket}
      matchComponent={Match}
      svgWrapper={({ children, ...props }) => (
        <SVGViewer
          width={1500}
          height={700}
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
const GlootTheme = createTheme({
    textColor: { main: "#000000", highlighted: "#F4F2FE", dark: "#707582" },
    matchBackground: { wonColor: "#2D2D59", lostColor: "#1B1D2D" },
    score: {
      background: {
        wonColor: `#10131C`,
        lostColor: "#10131C"
      },
      text: { highlightedWonColor: "#7BF59D", highlightedLostColor: "#FB7E94" }
    },
    border: {
      color: "#E34949",
      highlightedColor: "RGBA(152,82,242,0.4)"
    },
    roundHeader: { backgroundColor: "#3B3F73", fontColor: "#F4F2FE" },
    connectorColor: "#E34949",
    connectorColorHighlight: "#E34949",
    svgBackground: "#0F121C"
});
export default MartChart
