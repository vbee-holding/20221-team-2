import './Ranking.css'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import Group from '../../components/Contents/Rankings/Group'
import MatchChart from '../../components/Contents/MarchChart/MartChart'
const Ranking = () => {
    return (
        <div>
            <Header />
               <Group />
               <MatchChart/>
            <Footer />
        </div>
    )
}
export default Ranking
