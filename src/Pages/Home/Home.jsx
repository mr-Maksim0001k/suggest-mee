import s from "./Home.module.scss";
import InputRadio from "../../Widget/InputRadio/InputRadio";
import Card from "../../Widget/Card/Card";
// import poster from "../../assets/styles/images/poster.png";
// import poster2 from "../../assets/styles/images/poster2.png";
// import poster3 from "../../assets/styles/images/poster3.png";
// import poster4 from "../../assets/styles/images/poster4.png";
// import poster5 from "../../assets/styles/images/poster5.png";
// import poster6 from "../../assets/styles/images/poster6.png";
// import poster7 from "../../assets/styles/images/poster7.png";
// import poster8 from "../../assets/styles/images/poster8.png";
import TitleInfo from "../../Widget/TitleInfo/TitleInfo";
import Button from "../../Components/UI/Button/Button";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const API_URL =
  "https://cogitize-practice-suggestmovies.onrender.com/movie/list?";

const MainContainer = () => {
  const [movies, setMovies] = useState([]);
  const [inputValue, setInputValue] = useState("Any");

  const getMovies = async () => {
    try {
      const response = await fetch(API_URL);
      const data = await response.json();

      setMovies(data);
    } catch (error) {
      console.log("Catch error :", error);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  const getMoviesForQuery = async (value) => {
    try {
      const response = await fetch(
        `https://cogitize-practice-suggestmovies.onrender.com/movie/list?genre=${value}`
      );
      const data = await response.json();

      setMovies(data);
    } catch (error) {
      console.log("Catch error :", error);
    }
  };

  const handleInput = (e) => {
    const value = e.target.id;
    setInputValue(value);

    getMoviesForQuery(value);
  };

  const BtnElem = () => {
    getMoviesForQuery(inputValue);
  };

  return (
    <div className={s.container}>
      <div className={s.content}>
        <div className={s.content_head}>
          <div className={s.title_wrapper}>
            <div className={s.title_container}>
              <TitleInfo />
            </div>
            <div className={s.label_container}>
              <InputRadio onChange={handleInput} value={inputValue} />
              <div className={s.span_container}>
                <span className={s.label_name}>{inputValue}</span>
                <span className={s.numbers}>({movies.length})</span>
              </div>
            </div>
          </div>

          <ul className={s.list}>
            {movies.map((item) => {
              return (
                <li key={item._id}>
                  <Link className={s.link_card} to={`details/${item._id}`}>
                    <Card data={item} />
                  </Link>
                </li>
              );
            })}
            <div className={s.footer_container}>
              <div>
                <p className={s.footer_text}>
                  Didin’t find the one you looking for?
                </p>
              </div>
            </div>
          </ul>

          <div className={s.margin_b}>
            <Button BtnElem={BtnElem} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContainer;
