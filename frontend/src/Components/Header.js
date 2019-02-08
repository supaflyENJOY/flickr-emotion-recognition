import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import styled from "styled-components";

const Label = styled.p`
  width: 71px;
  height: 19px;
  font-family: Muller;
  font-size: 19px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.21;
  letter-spacing: normal;
  text-align: left;
  color: #fbfbfb;
`;

function Header(props) {
  return (
    <AppBar position="static" style={{ background: "#242424" }}>
      <Toolbar>
        <Label>INT20h</Label>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
