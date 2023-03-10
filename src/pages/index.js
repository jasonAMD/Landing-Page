import React, {useState} from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import Services from '../Services';
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/InfoSection';
import Footer from '../components/Footer';
import { 
  homeObjOne,
  homeObjTwo,
  homeObjThree
} from '../components/InfoSection/Data';

const Home = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <Navbar toggle={toggle} />
        <HeroSection />
        <Services />
        <InfoSection {...homeObjOne}/>
        <InfoSection {...homeObjTwo}/>
        <InfoSection {...homeObjThree}/>
        <Footer /> 
    </>
  );
};

export default Home