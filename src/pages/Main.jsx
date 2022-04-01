import '../styles/_Main.scss';

import TopScreen from '../components/MainPage/TopScreen/TopScreen';
import Services from '../components/MainPage/Services/Services';
import AdsVideo from '../components/MainPage/AdsVideo/AdsVideo';
import OurBlog from '../components/MainPage/OurBlog/OurBlog';

function Main() {
    return (
        <>

            <div className='container'>
                <div className='White-Block-Main'></div>
                <TopScreen />
                <Services />
                <AdsVideo />
                <OurBlog />
            </div>
            
        </>
    )
}

export default Main;