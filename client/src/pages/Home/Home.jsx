import './Home.css'
import Header from '../../components/Header/Header'
import ContentHome from '../../components/Contents/ContentHome/ContentHome'
import Footer from '../../components/Footer/Footer'

const Home = () => {
    return (
        <div className='home'>
            <Header />
            <ContentHome />
            <Footer />
        </div>
    )
}

export default Home
