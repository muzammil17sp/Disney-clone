import React, { useEffect, useState } from "react";
import styled from "styled-components";

import { useParams,useHistory } from "react-router-dom";
import { db } from "../../firebase";
const Details = () => {
  const [movie, setmovie] = useState({});
  const { id } = useParams();
  const history = useHistory()
  useEffect(() => {
    // get a single movie from firebase
    db.collection("movies")
      .doc(id)
      .get()
      .then((doc) => {
        if (doc.exists) {
          // we checking the the mvies is exist or not
          setmovie(doc.data());
        } else {
history.push("/")
        }
      }).catch((error) => {
        alert(error.message)
      })
  }, []);
  return (
    <Container>
      {movie && (
        <>
          {" "}
          <Background>
            <img src={movie.backgroundImg} />
          </Background>
          <ImageTitle>
            <img src={movie.titleImg} />
          </ImageTitle>
          <Controls>
            <PlayButton>
              <img src={"/images/play-icon-black.png"} />
              <span>PLAY</span>
            </PlayButton>
            <TrailerButton>
              <img src={"/images/play-icon-white.png"} />
              <span>Trailer</span>
            </TrailerButton>
            <AddButton>
              <span>+</span>
            </AddButton>
            <GroupWatchButton>
              <img src={"/images/group-icon.png"} />
            </GroupWatchButton>
          </Controls>
          <SubTitle>{movie.subTitle}</SubTitle>
          <Description>{movie.description}</Description>
        </>
      )}
    </Container>
  );
};

export default Details;
const Container = styled.div`
  min-height: calc(100vh - 70px);
  padding: 0 calc(3.5vw + 5px);
  position: relative;
  top: 70px;
  overflow: hidden;
`;

const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: -1;
  opacity: 0.8;
  img {
    width: 100vw;
  height: 100vh;
    object-fit: cover;
@media (max-width: 768px) {
  object-fit: contain;

   }
  }
  
`;

const ImageTitle = styled.div`
  height: 30vh;
  min-height: 170px;
  width: 35vw;
  min-width: 200px;
  margin-top: 60px;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

const Controls = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
`;

const PlayButton = styled.button`
  border-radius: 4px;
  font-size: 15px;
  padding: 0px 24px;
  margin-right: 22px;

  display: flex;
  align-items: center;
  height: 56px;
  background: rgb (249, 249, 249);
  border: none;
  letter-spacing: 1.8px;
  cursor: pointer;
  &:hover {
    background: rgb(198, 198, 198);
  }
  @media (max-width: 768px) {
    height: 45px;
    padding: 0px 12px;
    font-size: 12px;
    margin: 0px 10px 0px 0px;
    img {
      width: 25px;
    }
  }
`;

const TrailerButton = styled(PlayButton)`
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid rgb(249, 249, 249);
  color: rgb(249, 249, 249);
  text-transform: uppercase;
`;

const AddButton = styled.button`
  margin-right: 16px;
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: 2px solid white;
  background-color: rgba(0, 0, 0, 0.6);
  cursor: pointer;
  span {
    font-size: 30px;
    color: white;
  }
`;

const GroupWatchButton = styled(AddButton)`
  background: rgb(0, 0, 0);
`;

const SubTitle = styled.div`
  color: rgb(249, 249, 249);
  font-size: 15px;
  min-height: 20px;
  margin-top: 26px;
`;

const Description = styled.div`
  line-height: 1.4;
  font-size: 20px;
  margin-top: 16px;
  color: rgb(249, 249, 249);
  max-width: 760px;
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;
