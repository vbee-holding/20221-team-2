import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home/Home'
import Match from './pages/Match/Match'
import MatchDetail from './pages/Match/MatchDetail/MatchDetail'
import MatchChart from './pages/MatchChart/MatchChart'
import News from './pages/News/News'
import Player from './pages/Players/Player'
import Ranking from './pages/Rankings/Rangking'
import Stat from './pages/Stats/Stat'
import Team from './pages/Team/Team'

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/match' element={<Match />}/>
        <Route path='/matchDetail/:id' element={<MatchDetail />}/>
        <Route path='/matchChart' element={<MatchChart />}/>
        <Route path='/news' element={<News />}/>
        <Route path='/player' element={<Player />}/>
        <Route path='/ranking' element={<Ranking />}/>
        <Route path='/stat' element={<Stat />}/>
        <Route path= '/team/:id' element={<Team/>} />
      </Routes>
    </div>
  );
}

export default App;
