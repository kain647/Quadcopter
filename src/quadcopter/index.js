import React, { useState } from "react";
import { Container, Copter, Button } from "./styled";

const Quadcopter = () => {
  const [expanded, setExpanded] = useState(false);
  return (
    <Container>
      <Copter expanded={expanded}>
        <img src={`quadcopter/esc.svg`} className={`esc`} />
        <img src={`quadcopter/fc.svg`} className={`fc`} />
        <img src={`quadcopter/fpv.svg`} className={`fpv`} />
        <img src={`quadcopter/frame.svg`} className={`frame`} />
        <img src={`quadcopter/gopro.svg`} className={`gopro`} />
        <img src={`quadcopter/motor.svg`} className={`motor`} />
        <img src={`quadcopter/nut.svg`} className={`nut`} />
        <img src={`quadcopter/props.svg`} className={`props`} />
        <img src={`quadcopter/spacer.svg`} className={`spacer`} />
        <img src={`quadcopter/top-spacer.svg`} className={`top-spacer`} />
        <img src={`quadcopter/vtx.svg`} className={`vtx`} />
        <img src={`quadcopter/wire.svg`} className={`wire`} />
        <img src={`quadcopter/xt60.svg`} className={`xt60`} />
      </Copter>
      <Button onClick={() => setExpanded(!expanded)}>CLICK</Button>
    </Container>
  );
};

export default Quadcopter;
