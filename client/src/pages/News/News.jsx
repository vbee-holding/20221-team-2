import './News.css'
import Header from '../../components/Header/Header'
import ContentNews from '../../components/Contents/ContentNews/ContentNews'
import Footer from '../../components/Footer/Footer'

const News = () => {
    return (
        <div className='news'>
            <Header />
            <ContentNews />
            <Footer />
        </div>
    )
}

export default News
