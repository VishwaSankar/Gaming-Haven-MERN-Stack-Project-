import { Box, Container, Stack } from "@mui/material";
import React from "react";
import { Favourites } from "./favourites";
import { Right } from "./right";
import NestedList from "./left";

const FavMain = () => {
  return (
    <>
      <Container maxWidth="xl">
        <Stack direction="row" spacing={1} justifyContent={"space-between"}>
          <NestedList />
          <Favourites />
          <Right />
        </Stack>
      </Container>
    </>
  );
};

export default FavMain;
