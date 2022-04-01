import './OurBlog.scss';

import BlogImg from '../../../assets/images/blog-img1.png';
import BlogImg1 from '../../../assets/images/blog-img2.png';
import { t } from 'i18next';

function OurBlog() {
    return (
        <section className='OurBlog'>
            <div className='OurBlog__Inner'>
                <div className='OurBlog__Inner__BlockText'>
                    <h4 className='OurBlog__Inner__BlockText__Text'>{t('our-blog.1')}</h4>
                    <h4 className='OurBlog__Inner__BlockText__Text'>{t('our-blog.1')}</h4>
                    <h4 className='OurBlog__Inner__BlockText__Text'>{t('our-blog.1')}</h4>
                    <h4 className='OurBlog__Inner__BlockText__Text'>{t('our-blog.1')}</h4>
                    <h4 className='OurBlog__Inner__BlockText__Text'>{t('our-blog.1')}</h4>
                </div>

                <div className='OurBlog__Inner__NewsBlock'>
                    <div className='OurBlog__Inner__NewsBlock__FirstImg'>
                        <img className='OurBlog__Inner__NewsBlock__FirstImg__Img' src={BlogImg} alt="" />

                        <p className='OurBlog__Inner__NewsBlock__FirstImg__Text'>{t('run-new-services.1')}</p>
                    </div>

                    <div className='OurBlog__Inner__NewsBlock__ItemsBlock'>
                        <div className='OurBlog__Inner__NewsBlock__ItemsBlock__Items'>
                            <div className='OurBlog__Inner__NewsBlock__ItemsBlock__Items__Item'>
                                <img className='OurBlog__Inner__NewsBlock__ItemsBlock__Items__Item__Img' src={BlogImg1} alt="" />

                                <p className='OurBlog__Inner__NewsBlock__ItemsBlock__Items__Item__Text'>Новый сервис Алакел.</p>
                            </div>

                            <div className='OurBlog__Inner__NewsBlock__ItemsBlock__Items__Item'>
                                <img className='OurBlog__Inner__NewsBlock__ItemsBlock__Items__Item__Img' src={BlogImg1} alt="" />

                                <p className='OurBlog__Inner__NewsBlock__ItemsBlock__Items__Item__Text'>Новый сервис Алакел.</p>
                            </div>
                        </div>

                        <div className='OurBlog__Inner__NewsBlock__ItemsBlock__Items'>
                            <div className='OurBlog__Inner__NewsBlock__ItemsBlock__Items__Item'>
                                <img className='OurBlog__Inner__NewsBlock__ItemsBlock__Items__Item__Img' src={BlogImg1} alt="" />

                                <p className='OurBlog__Inner__NewsBlock__ItemsBlock__Items__Item__Text'>Новый сервис Алакел.</p>
                            </div>

                            <div className='OurBlog__Inner__NewsBlock__ItemsBlock__Items__Item'>
                                <img className='OurBlog__Inner__NewsBlock__ItemsBlock__Items__Item__Img' src={BlogImg1} alt="" />

                                <p className='OurBlog__Inner__NewsBlock__ItemsBlock__Items__Item__Text'>Новый сервис Алакел.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default OurBlog;