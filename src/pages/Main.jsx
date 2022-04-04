import '../styles/_Main.scss';

import TopScreen from '../components/MainPage/TopScreen/TopScreen';
import Services from '../components/MainPage/Services/Services';
import AdsVideo from '../components/MainPage/AdsVideo/AdsVideo';
import OurBlog from '../components/MainPage/OurBlog/OurBlog';

import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer';

import { BottomWhiteBlock } from '../components/BottomWhiteBlock'

function Main() {
    return (
        <div className='main-page-root'>
            <div className='container'>
                <div className='bg-white'>
                    <Header headerBg={"primary"} />
                    <TopScreen />
                    <Services />
                    <AdsVideo />
                    <OurBlog />
                    {/* <div className='White-Block-Main'></div> */}
                    <BottomWhiteBlock bgColor={"primary"} />
                </div>
                <Footer />
            </div>
        </div>
    )
}

export default Main;