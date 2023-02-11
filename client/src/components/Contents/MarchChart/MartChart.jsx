import React from 'react';
import {
    SingleEliminationBracket,
    Match,
    SVGViewer,
    createTheme
  } from "@g-loot/react-tournament-brackets";

// import{ useWindowSize } from "@react-hook/window-size"
import "./MartChart.css";
import { Bracket } from '../../../apis/apiMartChart';
export default function App() {
    return <SingleElimination />;
}
  
export const SingleElimination = () => (
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
      onMatchClick={(match) => console.log("chi tiết trận đấu")}
      onPartyClick={(match) => console.log("chi tiết đội bóng")}
      
    />
);
  
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
