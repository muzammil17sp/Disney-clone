import React, { useEffect } from "react";
import styled from "styled-components";
import { useHistory } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { GoogleLogin } from "react-google-login";
const Header = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { name, imageUrl, email } = useSelector((state) => state.user);
  const geogleSuccess = ({ profileObj }) => {
    dispatch({ type: "SIGNIN", payload: profileObj });
    history.push("/home");
  };
  const geogleFailure = (err) => {
  console.log(err)
  };

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user) {
     console.log("login again")
    } else if (user) {
      dispatch({ type: "SIGNIN", payload: user });
      history.push("/home");
    }
  }, [history]);

  const SignoutUser = () => {
    dispatch({ type: "SIGNOUT" });

    history.push("/");
  };

  return (
    <Nav>
      <Logo>
        <Link to="/home">
          <img src={"/images/logo.svg"} alt="Diney+" />
        </Link>
      </Logo>
      {!name ? (
        <GoogleLogin
          clientId="753686185440-6rbi1libu7v5t308dnfmg4aabrrb9bcs.apps.googleusercontent.com"
          render={(renderProps) => (
            <Login
              onClick={renderProps.onClick}
              disabled={renderProps.disabled}
            >
              LOGIN
            </Login>
          )}
          onSuccess={geogleSuccess}
          onFailure={geogleFailure}
          cookiePolicy="single_host_origin"
        />
      ) : (
        <>
          <NavMenu>
            <Link to="/home">
              <img src={"/images/home-icon.svg"} alt="Home" />
              <span> HOME</span>
            </Link>
            <Link to="/home">
              <img src={"/images/search-icon.svg"} alt="SEARCH" />
              <span> SEARCH</span>
            </Link>
            <Link to="/home">
              <img src={"/images/watchlist-icon.svg"} alt="WATCHLIST" />
              <span> WATCHLIST</span>
            </Link>
            <Link to="/home">
              <img src={"/images/original-icon.svg"} alt="ORIGINALS" />
              <span> ORIGINALS</span>
            </Link>
            <Link to="/home">
              <img src={"/images/movie-icon.svg"} alt="Home" />
              <span> MOVIES</span>
            </Link>
            <Link to="/home">
              <img src={"/images/series-icon.svg"} alt="Home" />
              <span> SEARIES</span>
            </Link>
          </NavMenu>
          <DropDown>
            {" "}
            <img src={imageUrl} alt="User" />
            <Login onClick={SignoutUser}>Signout</Login>
          </DropDown>
        </>
      )}
    </Nav>
  );
};
const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0%;
  right: 0;
  height: 70px;
  background-color: #090b13;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 30px;
  z-index: 3;
`;
const Logo = styled.a`
  padding: 0%;
  width: 80px;
  /* margin-top: 4px; */
  max-height: 70px;
  display: inline-block;
  img {
    display: block;
    width: 100%;
  }
`;
const NavMenu = styled.div`
  align-items: center;
  display: flex;
  flex-flow: row nowrap;
  height: 100%;
  justify-content: flex-end;
  margin: 0px;
  padding: 0px;
  position: relative;
  margin-right: auto;
  margin-left: 25px;
  a {
    display: flex;
    align-items: center;
    padding: 0 12px;
    img {
      height: 20px;
      min-width: 20px;
      width: 20px;
      z-index: auto;
    }
    span {
      color: rgb(249, 249, 249);
      font-size: 13px;
      letter-spacing: 1.42px;
      line-height: 1.08;
      padding: 2px 0px;
      white-space: nowrap;
      position: relative;
      &:before {
        background-color: rgb(249, 249, 249);
        border-radius: 0px 0px 4px 4px;
        bottom: -6px;
        content: "";
        height: 2px;
        left: 0px;
        opacity: 0;
        position: absolute;
        right: 0px;
        transform-origin: left center;
        transform: scaleX(0);
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        visibility: hidden;
        width: auto;
      }
    }
    &:hover {
      span:before {
        transform: scaleX(1);
        visibility: visible;
        opacity: 1 !important;
      }
    }
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

const Login = styled.a`
  background-color: rgba(0, 0, 0, 0.6);
  padding: 8px 16px;
  border: 1px solid white;
  border-radius: 4px;
  transition: all 0.2s ease 0s;
  &:hover {
    background-color: white;
    color: #000;
    border-color: transparent;
  }
`;
const DropDown = styled.div`
  display: flex;
  align-items: center;
  margin: 0 15px;
  img {
    height: 60px;
    width: 60px;
    border-radius: 50%;
    margin-right: 10px;
    user-select: none;
  }
`;
export default Header;
