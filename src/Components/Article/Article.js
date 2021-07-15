import './Article.scss';

import currency from '../../assets/image-currency.jpg';
import confetti from '../../assets/image-confetti.jpg';
import plane from '../../assets/image-plane.jpg';
import restaurant from '../../assets/image-restaurant.jpg';


const Article = () => {
    return (
        <div className="article">
            <p className="article__title">Latest Articles</p>

            <div className="article__container">
                <div className="article__container__content">
                    <img src={currency} alt="img" />
                    <span>By Claire Robinson</span>
                    <p className="article__content__title">Recieve money in any currency with no fees</p>
                    <p className="article__content__desc">The world is gettin smaller and we're becoming more mobile. So why should you be forced to only receive money in a single...</p>
                </div>
                <div className="article__container__content">
                    <img src={restaurant} alt="img" />
                    <span>By Wilson Hutton</span>
                    <p className="article__content__title">Treat yourself withour worrying about monet</p>
                    <p className="article__content__desc">Our simple budgeting feature allows you to separate out your spending and set selistics limits each month. That means you...</p>
                </div>
                <div className="article__container__content">
                    <img src={plane} alt="img" />
                    <span>By Wilson Hutton</span>
                    <p className="article__content__title">Take your Easybank card wherever you go</p>
                    <p className="article__content__desc">We want you to enjoy your travels. This is why we don't charge any fees on purchases why you're abroad. We'll even show you...</p>
                </div>
                <div className="article__container__content">
                    <img src={confetti} alt="img" />
                    <span>By Clarie Robinson</span>
                    <p className="article__content__title">Our invite-only Beta accounts are now live!</p>
                    <p className="article__content__desc">After a lot of hard work by the whole team, we're excited to lauch our closed beta. It's easy to reques an invite though the site...</p>
                </div>
            </div>
        </div>
    );
}

export default Article;