import React from "react";
import { Carousel, CarouselCaption } from "react-bootstrap";
import { Container, Divider, Tooltip, Zoom } from "@mui/material";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box, CardActionArea, Grid, Stack } from "@mui/material";
import { styled } from "@mui/material";
import { gamesdata1 } from "./page/gamecontent/Datagames";
import { Link } from "react-router-dom";
function Trendslider() {
  let randata1;
  let randata2;
  let randata3;
  let randata4;
  let randata5;
  let randata6;
  let randata7;
  let randata8;

  let randomIndices = [];

  function getRandomIndex() {
    let max = gamesdata1.length - 1;
    let min = 0;
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function getRandomUniqueIndex() {
    let index;
    do {
      index = getRandomIndex();
    } while (randomIndices.includes(index) || !gamesdata1[index].trend);
    randomIndices.push(index);
    return index;
  }

  function random() {
    randata1 = gamesdata1[getRandomUniqueIndex()];
    randata2 = gamesdata1[getRandomUniqueIndex()];
    randata3 = gamesdata1[getRandomUniqueIndex()];
    randata4 = gamesdata1[getRandomUniqueIndex()];
    randata5 = gamesdata1[getRandomUniqueIndex()];
    randata6 = gamesdata1[getRandomUniqueIndex()];
    randata7 = gamesdata1[getRandomUniqueIndex()];
    randata8 = gamesdata1[getRandomUniqueIndex()];
  }
  random();

  const StyledCard = styled(Card)({
    width: "100%",
    maxWidth: 250,
    minWidth: 250,
    maxHeight: 100,
    minHeight: 100,
    paddingTop: "5px",
    paddingBottom: "5px",
  });
  return (
    <div id="trending">
      <br/>
    <Box>
      <Typography
        sx={{ fontFamily: "monospace", fontSize: "40px", paddingTop: "60px" }}
      >
        Hot & Trending
      </Typography>
      <Divider color="gray" flexItem/>
      <Stack direction="row" paddingBottom="10px" paddingTop="10px">
        <Carousel
          style={{
            paddingTop: "5px",
            minWidth: "70%",
            maxWidth: "70%",
            height: "409px",
            overflow: "hidden",
            cursor: "pointer",
            paddingBottom: "20px",
            paddingRight: "5px",
          }}
        >
          <Tooltip title={randata1.name} TransitionComponent={Zoom}>
            <Carousel.Item>
              <Link
                to={`/content`}
                state={{ from: "trend", name: randata1.title }}
                style={{ textDecoration: "none" }}
              >
                <img
                  className="d-block w-100"
                  src={randata1.slideimg2}
                  alt="First slide"
                  width="100%"
                  style={{ opacity: 2 }} 
                />
                <CarouselCaption
                  style={{
                    textAlign: "centre",
                    paddingBottom: "35px",
                    background:
                      "linear-gradient(83deg, #FF1010 42%, #FFFFFF 66%)",
                    webkitBackgroundClip: " text",
                    fontSize: "35px",
                    fontFamily: "monospace",
                    webkitTextFillColor: "transparent",
                    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)", // Adjust the shadow properties as needed
                  }}
                >
                  {randata1.name} <br></br>
                </CarouselCaption>
                <CarouselCaption
                  style={{
                    textAlign: "centre",
                    paddingTop: "15px",
                    background:
                      "linear-gradient(83deg, #FFFFFF 40%, #FF1010 66%)  ",
                    webkitBackgroundClip: " text",
                    fontSize: "15px",
                    fontFamily: "monospace",
                    webkitTextFillColor: "transparent",
                    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
                  }}
                >
                  {randata1.Dev}
                </CarouselCaption>
              </Link>
            </Carousel.Item>
          </Tooltip>

          <Tooltip title={randata2.name} TransitionComponent={Zoom}>
            <Carousel.Item>
              <Link
                to={`/content`}
                state={{ from: "trend", name: randata2.title }}
                style={{ textDecoration: "none" }}
              >
                <img
                  className="d-block w-100"
                  src={randata2.slideimg2}
                  alt="Second slide"
                  style={{ opacity: 2 }} 
                />
                <CarouselCaption
                  style={{
                    textAlign: "centre",
                    paddingBottom: "35px",
                    background:
                      "linear-gradient(83deg, #FF1010 42%, #FFFFFF 66%)",
                    webkitBackgroundClip: " text",
                    fontSize: "35px",
                    fontFamily: "monospace",
                    webkitTextFillColor: "transparent",
                    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)", // Adjust the shadow properties as needed
                  }}
                >
                  {randata2.name} <br></br>
                </CarouselCaption>
                <CarouselCaption
                  style={{
                    textAlign: "centre",
                    paddingTop: "15px",
                    background:
                      "linear-gradient(83deg, #FFFFFF 40%, #FF1010 66%)  ",
                    webkitBackgroundClip: " text",
                    fontSize: "15px",
                    fontFamily: "monospace",
                    webkitTextFillColor: "transparent",
                    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
                  }}
                >
                  {randata2.Dev}
                </CarouselCaption>
              </Link>
            </Carousel.Item>
          </Tooltip>
          <Tooltip title={randata3.name} TransitionComponent={Zoom}>
            <Carousel.Item>
              <Link
                to={`/content`}
                state={{ from: "trend", name: randata3.title }}
                style={{ textDecoration: "none" }}
              >
                <img
                  className="d-block w-100"
                  src={randata3.slideimg4}
                  alt="Third slide"
                  style={{ opacity: 2 }} 
                />
                <CarouselCaption
                  style={{
                    textAlign: "centre",
                    paddingBottom: "35px",
                    background:
                      "linear-gradient(83deg, #FF1010 42%, #FFFFFF 66%)",
                    webkitBackgroundClip: " text",
                    fontSize: "35px",
                    fontFamily: "monospace",
                    webkitTextFillColor: "transparent",
                    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)", // Adjust the shadow properties as needed
                  }}
                >
                  {randata3.name} <br></br>
                </CarouselCaption>
                <CarouselCaption
                  style={{
                    textAlign: "centre",
                    paddingTop: "15px",
                    background:
                      "linear-gradient(83deg, #FFFFFF 40%, #FF1010 66%)  ",
                    webkitBackgroundClip: " text",
                    fontSize: "15px",
                    fontFamily: "monospace",
                    webkitTextFillColor: "transparent",
                    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
                  }}
                >
                  {randata3.Dev}
                </CarouselCaption>
              </Link>
            </Carousel.Item>
          </Tooltip>
          <Tooltip title={randata4.name} TransitionComponent={Zoom}>
            <Carousel.Item>
              <Link
                to={`/content`}
                state={{ from: "trend", name: randata4.title }}
                style={{ textDecoration: "none" }}
              >
                <img
                  className="d-block w-100"
                  src={randata4.slideimg2}
                  alt="Fourth Slide"
                  style={{ opacity: 2 }} 
                />
                <CarouselCaption
                  style={{
                    textAlign: "centre",
                    paddingBottom: "35px",
                    background:
                      "linear-gradient(83deg, #FF1010 42%, #FFFFFF 66%)",
                    webkitBackgroundClip: " text",
                    fontSize: "35px",
                    fontFamily: "monospace",
                    webkitTextFillColor: "transparent",
                    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)", // Adjust the shadow properties as needed
                  }}
                >
                  {randata4.name} <br></br>
                </CarouselCaption>
                <CarouselCaption
                  style={{
                    textAlign: "centre",
                    paddingTop: "15px",
                    background:
                      "linear-gradient(83deg, #FFFFFF 40%, #FF1010 66%)  ",
                    webkitBackgroundClip: " text",
                    fontSize: "15px",
                    fontFamily: "monospace",
                    webkitTextFillColor: "transparent",
                    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
                  }}
                >
                  {randata4.Dev}
                </CarouselCaption>
              </Link>
            </Carousel.Item>
          </Tooltip>
        </Carousel>
        <Stack direction="column" gap="3px">
          <Tooltip title={randata5.name} TransitionComponent={Zoom}>
            <Link
              to={`/content`}
              state={{ from: "trend", name: randata5.title }}
              style={{ textDecoration: "none" }}
            >
              <StyledCard>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="100%"
                    image={randata5.img1}
                  />
                </CardActionArea>
              </StyledCard>
            </Link>
          </Tooltip>
          <Link
            to={`/content`}
            state={{ from: "trend", name: randata6.title }}
            style={{ textDecoration: "none" }}
          >
            <StyledCard>
              <Tooltip title={randata6.name} TransitionComponent={Zoom}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    maxHeight="200px"
                    image={randata6.img1}
                  />
                </CardActionArea>
              </Tooltip>
            </StyledCard>
          </Link>
          <Link
            to={`/content`}
            state={{ from: "trend", name: randata7.title }}
            style={{ textDecoration: "none" }}
          >
            <StyledCard>
              <Tooltip title={randata7.name} TransitionComponent={Zoom}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    maxHeight="200px"
                    image={randata7.img1}
                  />
                </CardActionArea>
              </Tooltip>
            </StyledCard>
          </Link>
          <Link
            to={`/content`}
            state={{ from: "trend", name: randata7.title }}
            style={{ textDecoration: "none" }}
          >
            <StyledCard>
              <Tooltip title={randata8.name} TransitionComponent={Zoom}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    maxHeight="200px"
                    image={randata8.img1}
                  />
                </CardActionArea>
              </Tooltip>
            </StyledCard>
          </Link>
        </Stack>
      </Stack>
    </Box>
    </div>
  );
}

export default Trendslider;
