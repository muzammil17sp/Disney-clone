import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { setMovies } from "../../actions/movieAction";
import { db } from "../../firebase";
import ImageSlider from "../Image Slider/ImageSlider";
import Movies from "../Movies/Movies";
import Viewers from "../Viewer/Viewers";
const Home = (props) => {
  const dispatch = useDispatch();
  const history = props.history
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user) {
    history.push("/")
  }
  }, [history]);



  useEffect(() => {
    db.collection("movies").onSnapshot((snapshot) => {
      let tempMovies = snapshot.docs.map((data) => {
        return { id: data.id, ...data.data() };
      });
      dispatch(setMovies(tempMovies));
    });
  }, []);
  return (
    <Container>
      <ImageSlider />
      <Viewers />
      <Movies />
    </Container>
  );
};

export default Home;
const Container = styled.main`
  position: relative;
  min-height: calc(100vh - 250px);
  overflow-x: hidden;
  display: block;
  top: 72px;
  padding: 0 calc(3.5vw + 5px);
  &:after {
    background: url("/images/.png") center center / cover no-repeat fixed;
    content: "";
    position: absolute;
    inset: 0px;
    opacity: 1;
    z-index: -1;
  }
`;
