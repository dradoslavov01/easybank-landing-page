import { useState } from 'react';


import Header from '../Header/Header';
import Intro from '../Intro/Intro';
import Section from '../Section/Section';
import Article from '../Article/Article';
import Footer from '../Footer/Footer';
import Modal from '../Modal/Modal';


const HomePage = () => {

    const [navbarActive, setNavbarActive] = useState('');
    const [showModal, setShowModal] = useState(false);

    return (
        <div className="home">
            <Header setNavbarActive={setNavbarActive} setShowModal={setShowModal} />
            <Intro navbarActive={navbarActive} setShowModal={setShowModal} />
            <Section />
            <Article />
            <Footer setShowModal={setShowModal} />
            {showModal
                ? <Modal setShowModal={setShowModal} />
                : null
            }
        </div>
    );
}

export default HomePage;