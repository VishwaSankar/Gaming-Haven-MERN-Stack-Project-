import React from "react";
import { Navbar } from "../../navbar";
import { Container, Stack } from "@mui/material";
import NestedList from "../../left";
import { Right } from "../../right";
import { Centre1 } from "./maingc";
import StickyFooter from "../../footer";


export const Gamecontent = () => {
  return (
    <>
      
      <Container maxWidth="xl">
        <Stack direction="row" spacing={1} justifyContent={"space-between"}>
          <NestedList />
          <Centre1 />
          <Right />
        </Stack>
      </Container>
      <StickyFooter/>
    </>
  );
};
