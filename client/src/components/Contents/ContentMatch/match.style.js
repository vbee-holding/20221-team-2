import styled from "styled-components";

export const MatchContainer = styled("div")`
  .container {
    margin: auto;
    margin-top: 100px;
    margin-bottom: 100px;
    width: 800px;
    font-weight: 500;
  }

  .loop {
    width: 100%;
  }

  .loop1 {
    color: #fff;
    font-size: 15px;
    padding-top: 14px;
    padding-left: 24px;
  }

  .loop2 {
    max-width: 400px;
    height: auto;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }

  .home-info {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
  }

  .loop21 {
    position: relative;
    width: 400px;
  }

  .avatar {
    width: 36px;
    height: 36px;
    border-radius: 50%;
  }

  .loop21Item1 {
    text-decoration: none;
  }

  .loop21Item1Frame {
    position: relative;
    margin: auto;
    width: 390px;
    height: 160px;
    margin-top: 10px;
    border: 1px solid #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .home {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: none;
    padding: 10px 20px;
  }

  .loop21Item1Frame:hover {
    background-color: #c6cccd99;
  }

  .frameChild {
    position: absolute;
    color: #fff;
    top: 16px;
    left: 26px;
  }

  .frameChild1 {
    display: flex;
    justify-content: space-between;
    margin-top: 16px;
    margin-left: 26px;
    margin-right: 34px;
  }

  .frameChildItem1 {
    display: flex;
    margin-bottom: 10px;
  }

  .frameChildItem11 {
    width: 36px;
    /* height: 36px; */
  }

  .frameChildItem12 {
    color: #fff;
    margin-left: 18px;
  }

  .frameChildItem2 {
    margin-bottom: 10px;
    color: #fff;
  }

  .frameChildItemKT {
    color: #fff;
    margin-right: -4px;
  }

  /* link highlight */
  .loop21Item2 {
    position: absolute;
    right: 27px;
    bottom: 22px;
    width: 80px;
    height: 46px;
  }

  .loop21Item2Img {
    width: 80px;
    height: 46px;
  }
`;
