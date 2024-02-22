import React from "react";
import GenreList from "./GenreList";
import { Right } from "../../right";
import { Container, Stack } from "@mui/material";
import NestedList from "../../left";
import { useLocation } from "react-router-dom";
import { gamesdata1 } from "../gamecontent/Datagames";
const Genre = () => {
  React.useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo(0, 0);
  }, []);
  
  
  
  const location = useLocation();
  
    
    if (location.state) {
      const { name } = location.state;
      let genre = name;
      let data = {};
    
      // Use filter to get an array of items matching the genre
      const filteredData = gamesdata1.filter((item) => genre === item.Genre);
    
      // Now data is an array of items matching the genre
      data = { items: filteredData };
    
      console.log(genre);
      console.log(data);
    
    return (
      <>
        <Container maxWidth="xl">
          <Stack direction="row" spacing={1} justifyContent={"space-between"}>
            <NestedList />
            <GenreList />
            <Right />
          </Stack>
        </Container>
      </>
    );
  }
};

export default Genre;
