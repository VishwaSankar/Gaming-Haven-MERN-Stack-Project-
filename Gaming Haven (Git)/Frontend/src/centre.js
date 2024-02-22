import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import Topseller from "./topsellers";
import Slider from "./slider-centre.js";
import MediaCover from "./cardcover";
import Trendslider from "./Trending";
import SlidingCard, { Onsale } from "./onsale";
import FullWidthTabs from "./onsale";
import CardsRow from "./onsale";
import VideoCarousel from "./cardcover";
import SearchBar from "./2navbar.js";
import Storegenre from "./storegenreslides.js";
import Holidayspotlight from "./holidayspotlight.js";
export const Centre = () => {
  return (
    <>
      <Box flex={2}>
        <SearchBar />
        <Typography
          sx={{
            fontFamily: "monospace",
            fontSize: "40px",
            paddingTop: "20px",
            paddingBottom: "-20px",
          }}
        >
          Featured & Recommended
        </Typography>
        <Slider />
        <Topseller />
        <VideoCarousel />
        <Trendslider />
        <Storegenre />
        <CardsRow />

        {/* <Holidayspotlight/> */}
      </Box>
    </>
  );
};
