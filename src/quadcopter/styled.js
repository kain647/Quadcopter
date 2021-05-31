import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  position: relative;
  height: 100vh;
  justify-content: center;
  align-items: center;
  background: khaki;
  overflow: hidden;
`;
export const Copter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  img {
    display: flex;
    position: absolute;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 800px;
    transform: ${({ expanded }) => !expanded && "none !important"};
  }
  .esc {
    z-index: 1;
    transition: transform 1s;
    transform: translateY(150px);
  }
  .fc {
    transition: transform 1s;
    transform: translateY(150px);
    z-index: 2;
  }
  .fpv {
    transition: transform 1s;
    transform: translateY(75px);
    z-index: 3;
  }
  .frame {
    transition: transform 1s;
    transform: translateY(200px);
  }
  .gopro {
    transition: transform 1s;
    transform: translateY(50px);
    z-index: 4;
  }
  .motor {
    transition: transform 1s;
    transform: translateY(100px);
  }
  .nut {
    transition: transform 1s;
    transform: translateY(-50px);
    z-index: 5;
  }
  .props {
    transition: transform 1s;
    transform: translateY(50px);
    z-index: 3;
  }
  .spacer {
    transition: transform 1s;
    transform: translateY(250px);
  }
  .top-spacer {
    transition: transform 1s;
    transform: translateY(100px);
  }
  .vtx {
    transition: transform 1s;
    transform: translateY(-50px);
  }
  .wire {
    transition: transform 1s;
    transform: translateY(100px);
  }
  .xt60 {
    transition: transform 1s;
    transform: translateY(100px);
    z-index: 6;
  }
`;
export const Button = styled.button`
  position: fixed;
  align-items: center;
  width: 150px;
  height: 50px;
  font-size: 20px;
  background: #eeff80;
  border: 1px solid #eee;
  transition: 1s;
  top: 85%;

  letter-spacing: 2px;
  z-index: 100;
  :hover {
    display: flex;
    justify-content: center;
    align-items: center;
    letter-spacing: 5px;
    cursor: pointer;
  }
`;
