import { FC, ReactElement } from 'react';
import { useNavigate } from "react-router-dom";
import "./home.scss";

import HomeImage from '../../assets/images/Certina-DS-PH200-2.webp';

const Home: FC = (): ReactElement => {
  const navigate = useNavigate();

  const navigateToAbout = () => navigate("/about");

  return (
    <section className="home">
      <section className="home__content">
        <h1 className="home__title">Welcome to SCSS app</h1>
        <p className="home__subtitle">Just a random image, but I would buy it:)</p>
        <img
          className="home__image"
          src={HomeImage}
          alt="Watch"
        />
        <button
          className="home__action-button"
          onClick={navigateToAbout}
        >
          LEARN MORE
        </button>
      </section>
    </section>
  );
}

export default Home;