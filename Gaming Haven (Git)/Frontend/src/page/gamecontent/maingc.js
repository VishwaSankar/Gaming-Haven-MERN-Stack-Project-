import {
  Alert,
  Box,
  Card,
  Divider,
  Grid,
  Paper,
  Rating,
  Snackbar,
  Tooltip,
  Typography,
  Zoom,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { Carousel, Container, Stack } from "react-bootstrap";
import { gamesdata1 } from "./Datagames";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import axios from "axios";

import { useParams, useLocation, Link } from "react-router-dom";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useQueryClient } from '@tanstack/react-query'
import newRequest from "../../utils/newRequest";
import Review from "../review/review";

export const Centre1 = () => {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  
  
  const { isLoading, error, data } = useQuery({
    queryKey: ["cart"],
    queryFn: async () => {
      try {
        const response = await newRequest.get("/cart/usercart");
        return response.data; // Return the data from the response
      } catch (error) {
        throw new Error("Error fetching cart data"); // Handle errors appropriately
      }
    },
  });
  
  const queryClient=useQueryClient()
  
  
  const mutation = useMutation({
  mutationFn: (handlecart) => {
      return newRequest.post('/cart', handlecart)
    },
    onSuccess:()=>{
      queryClient.invalidateQueries(["cart"])
    }
  })

  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo(0, 0);
  }, []);
  const location = useLocation();
  //location state
  const [locationState, setLocationState] = React.useState({
    from: "",
    name: "",
  });
  React.useEffect(() => {
    // console.log("location from top seller", location);
  }, [location]);
  if (location.state) {
    const { name } = location.state;
    console.log(name);
    let gamename = name;
    let data;
    gamesdata1.map((item, index) => {
      if (gamename === item.title) {
        data = item;
        // console.log(data);
      }
      return data;
    });
    let randata1;
    let randata2;
    let randata3;
    let randata4;
    let randata5;
    let randata6;
    let randomIndices = [];
    
    function getRandomIndex() {
      let max = gamesdata1.length - 1;
      let min = 0;
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    
    const getRandomUniqueIndex = () => {
      let index;
      do {
        index = getRandomIndex();
      } while (randomIndices.includes(index));
      randomIndices.push(index);
      return index;
    };
    let ranarr = [
      (randata1 = gamesdata1[getRandomUniqueIndex()]),
      (randata2 = gamesdata1[getRandomUniqueIndex()]),
      (randata3 = gamesdata1[getRandomUniqueIndex()]),
      (randata4 = gamesdata1[getRandomUniqueIndex()]),
      (randata5 = gamesdata1[getRandomUniqueIndex()]),
      (randata6 = gamesdata1[getRandomUniqueIndex()]),
    ];
    
    // console.log(data);
    
    
    
    
    
    const handlecart=(e)=>{
     
      const title=data.title;
      const name=data.name;
      const price=data.price;
      const img1=data.img1;
      const platform=data.platform;
      const Ratings=data.Ratings;
      // console.log("title"+title);
      // console.log("name"+name);
      mutation.mutate({title,name,price,img1,platform,Ratings})
    }
    
    
    
    
    
    return (
      <>
        <Box flex={6}>
       
          <Typography
            sx={{
              fontFamily: "monospace",
              fontSize: "40px",
              paddingTop: "20px",
              paddingBottom: "-20px",
            
            }}
          >
            {data.name}
          </Typography>
          <Typography sx={{fontSize:"15px" ,color:"gray"}}>
            {data.tag}
          </Typography>
            
          <Grid direction="row">
            <Carousel
              style={{
                paddingTop: "5px",
                minWidth: "100%",
                maxWidth: "100%",
                height: "500px",
                overflow: "hidden",
                cursor: "pointer",
                paddingBottom: "20px",
                paddingRight: "5px",
              }}
            >
              <Carousel.Item>
                <img
                  overflow="hidden"
                  className="d-block w-100"
                  src={data.slideimg1}
                  alt={data.slidealt1}
                />
                {/* <iframe
            title="video1"
            width="100%"
            height="410px"
            src={data.src}
            alt={data.alt}
            allowFullScreen
          /> */}
              </Carousel.Item>

              <Carousel.Item>
                <img
                  overflow="hidden"
                  className="d-block w-100"
                  src={data.slideimg2}
                  alt={data.slidealt2}
                />
                {/* <iframe
            title="video1"
            width="100%"
            height="410px"
            src={data.src}
            alt={data.alt}
            allowFullScreen
          /> */}
              </Carousel.Item>
              <Carousel.Item>
                <img
                  overflow="hidden"
                  className="d-block w-100"
                  src={data.slideimg3}
                  alt={data.slidealt3}
                />
                {/* <iframe
            title="video1"
            width="100%"
            height="410px"
            src={data.src}
            alt={data.alt}
            allowFullScreen
          /> */}
              </Carousel.Item>
              <Carousel.Item>
                <img
                  overflow="hidden"
                  className="d-block w-100"
                  src={data.slideimg4}
                  alt={data.slidealt4}
                />
                {/* <iframe
            title="video1"
            width="100%"
            height="410px"
            src={data.src}
            alt={data.alt}
            allowFullScreen
          /> */}
              </Carousel.Item>
              <Carousel.Item>
                <img
                  overflow="hidden"
                  className="d-block w-100"
                  src={data.slideimg5}
                  alt={data.slidealt5}
                />
              </Carousel.Item>
              <Carousel.Item>
                <iframe width="100%" height="500px" src={data.Trailer}>
                  {" "}
                </iframe>
              </Carousel.Item>
            </Carousel>
          </Grid>

          <Grid display="flex" justifyContent="space-between" paddingTop="20px">
            <Card
              sx={{
                maxWidth: "55%",
                paddingTop: "20px",
                display: "flex-grow",
              }}
            >
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  fontFamily="monospace"
                >
                  About the game
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ fontSize: "17px" }}
                >
                  {data.about}
                </Typography>
              </CardContent>
            </Card>

            <Card sx={{ minWidth: "40%", maxWidth: "40%", paddingTop: "20px" }}>
              <CardContent>
                <CardMedia
                  component="img"
                  height="180px"
                  image={data.img1}
                  width="90%"
                  sx={{ objectFit: "cover" }}
                />

                {/* {url.map((m,index)=>{
              if(index==0)
              {
                <Typography gutterBottom variant="h5" component="div" fontFamily='monospace'>
                  {m.count}
                  </Typography>
              }
            })} */}
              </CardContent>
              <CardActions>
                <Stack direction="row">
                  <Box
                    sx={{ display: "flex", gap: "50px", paddingLeft: "10px" }}
                  >
                    <Typography sx={{ paddingLeft: "2px" }}>
                      {" "}
                      Release Date{" "}
                    </Typography>
                    <Typography>: {data.Releasedate}</Typography>
                  </Box>
                  <Box
                    sx={{ display: "flex", gap: "74px", paddingLeft: "10px" }}
                  >
                    <Typography sx={{ paddingLeft: "2px" }}>
                      {" "}
                      Developer{" "}
                    </Typography>
                    <Typography>: {data.Dev}</Typography>
                  </Box>
                  <br></br>

                  <Box
                    sx={{ display: "flex", gap: "34px", paddingLeft: "10px" }}
                  >
                    <Typography sx={{ paddingLeft: "2px" }}>
                      Recent Reviews
                    </Typography>
                    <Typography>
                      {/* : <Rating name="read-only" value={data.Rating} readOnly /> */}
                      <Rating defaultValue={data.Rating} readOnly />
                    </Typography>
                  </Box>
                  <Box
                    sx={{ display: "flex", gap: "105px", paddingLeft: "10px" }}
                  >
                    <Typography sx={{ paddingLeft: "2px" }}> Genre</Typography>
                    <Typography>: {data.Genre}</Typography>
                  </Box>
                  <Box
                    sx={{ display: "flex", gap: "84px", paddingLeft: "10px" }}
                  >
                    <Typography sx={{ paddingLeft: "2px" }}>
                      Platform
                    </Typography>
                    <Typography>: {data.platform}</Typography>
                  </Box>
                  
                  <Box
                    sx={{ display: "flex", gap: "111px", paddingLeft: "10px" }}
                  >
                    <Typography sx={{ paddingLeft: "2px" }}> Price</Typography>
                    <Typography>: Rs. {data.price}/-</Typography>
                  </Box>
                  <Box sx={{ paddingTop: "10px" }}>
                  <Link
                to={`/checkout`}
                state={{ from: "gamecontent", name: data.title , price: data.price}}
                style={{ textDecoration: "none" }}
              >
                
                    <Button
                      variant="contained"
                      size="medium"
                      color="error"
                      sx={{ width: "100%" }}
                    >
                      BUY NOW
                    </Button>
                    </Link>
                  </Box>
                  <Box sx={{ paddingTop: "10px" }}>
                  
                    {/* <Link to={`/cart`}
                state={{ from: "gamecontent", name:data , }}
                style={{ textDecoration: "none" }}> */}
                 <Snackbar
                    open={open}
                    autoHideDuration={6000}
                    onClose={handleClose}
                  >
                    <Alert
                      onClose={handleClose}
                      severity="success"
                      sx={{ width: "100%", height: "50%" }}
                    >
                      {data.name} is added to cart!
                    </Alert>
                  </Snackbar>
                    <Button
                      variant="contained"
                      size="medium"
                      color="error"
                      sx={{ width: "100%" }}
                      onClick={() => {
                        handlecart();
                        handleClick();
                      }}
                    >
                      ADD TO CART
                    </Button>
                    {/* </Link> */}
                    
                    
                    
                  </Box>
                </Stack>
              </CardActions>
            </Card>
          </Grid>
          <Box>
            <Typography
              sx={{
                fontFamily: "monospace",
                fontSize: "35px",
                paddingTop: "20px",
                paddingBottom: "-20px",
              }}
            >
              Watch the Trailer
            </Typography>
            <Box sx={{ maxWidth: "75%", maxHeight: "400px" }}>
              <CardActions>
                <iframe width="800" height="450" src={data.Trailer}></iframe>
              </CardActions>
            </Box>
          </Box>

          <Box paddingTop="70px">
            <Typography
              sx={{
                fontFamily: "monospace",
                fontSize: "35px",
                paddingTop: "20px",
                paddingBottom: "-20px",
              }}
            >
              System Requirements
            </Typography>
            <Grid display="flex" gap={"40px"}>
              <Container>
                <Paper>
                  <Box paddingLeft="10px" paddingRight="80px" flex={1}>
                    <Typography
                      sx={{
                        fontFamily: "monospace",
                        fontSize: "30px",
                        paddingTop: "20px",
                        paddingBottom: "-20px",
                      }}
                    >
                      Minimum
                    </Typography>
                    <Typography>
                      <br />
                      OS <br />
                      {data.os_m} <br />
                      <br />
                      Processor <br />
                      {data.cpu_m} <br />
                      <br />
                      Memory <br />
                      {data.ram_m}
                      <br />
                      <br />
                      Graphics Card
                      <br />
                      {data.gpu_m}
                      <br />
                      <br />
                      Storage <br />
                      {data.storage_m}
                      <br />
                      <br />
                      Sound Card <br />
                      {data.sound_m}
                      <br />
                      <br />
                    </Typography>
                  </Box>
                </Paper>
              </Container>
              <Divider></Divider>
              <Container>
                <Paper>
                  <Box paddingLeft="10px" paddingRight="80px">
                    <Typography
                      sx={{
                        fontFamily: "monospace",
                        fontSize: "30px",
                        paddingTop: "20px",
                        paddingBottom: "-20px",
                      }}
                    >
                      Recommended
                    </Typography>
                    <Typography>
                      <br />
                      OS <br />
                      {data.os_r} <br />
                      <br />
                      Processor <br />
                      {data.cpu_r} <br />
                      <br />
                      Memory <br />
                      {data.ram_r}
                      <br />
                      <br />
                      Graphics Card
                      <br />
                      {data.gpu_r}
                      <br />
                      <br />
                      Storage <br />
                      {data.storage_r}
                      <br />
                      <br />
                      Sound Card <br />
                      {data.sound_r}
                      <br />
                      <br />
                    </Typography>
                  </Box>
                </Paper>
              </Container>
            </Grid>
          </Box>

          <Typography
            sx={{
              fontFamily: "monospace",
              fontSize: "30px",
              paddingTop: "20px",
              paddingBottom: "-20px",
            }}
          >
            Player ratings & gameplays
          </Typography>
          <Box sx={{ display: "flex" }} paddingTop="15px">
            <Typography sx={{ fontSize: "25px" }}>{data.Rating}</Typography>
            <Box paddingLeft="5px">
              <Rating
                name="text-feedback"
                defaultValue={data.Rating}
                readOnly
                size="large"
                precision={0.5}
              ></Rating>
            </Box>
          </Box>
          <Grid display="flex" paddingTop="15px" gap="15px">
            <Card>
              <Container>
                <CardActions>
                  <iframe
                    width="100%"
                    height="200px"
                    src={data.tagvid1}
                  ></iframe>
                </CardActions>
              </Container>
              <CardContent>
                <Typography color="gray" textAlign="center">
                  This game is/has
                </Typography>
                <Typography
                  textAlign="center"
                  fontFamily="monospace"
                  fontSize="20px"
                >
                  {data.tagtext1}
                </Typography>
              </CardContent>
            </Card>

            <Card>
              <Container>
                <CardActions>
                  <iframe
                    width="100%"
                    height="200px"
                    src={data.tagvid2}
                  ></iframe>
                </CardActions>
              </Container>
              <CardContent>
                <Typography color="gray" textAlign="center">
                  This game is/has
                </Typography>
                <Typography
                  textAlign="center"
                  fontFamily="monospace"
                  fontSize="20px"
                >
                  {data.tagtext2}
                </Typography>
              </CardContent>
            </Card>

            <Card>
              <Container>
                <CardActions>
                  <iframe
                    width="100%"
                    height="200px"
                    src={data.tagvid3}
                  ></iframe>
                </CardActions>
              </Container>
              <CardContent>
                <Typography color="gray" textAlign="center">
                  This game is/has
                </Typography>
                <Typography
                  textAlign="center"
                  fontFamily="monospace"
                  fontSize="20px"
                >
                  {data.tagtext3}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Typography
            sx={{
              fontFamily: "monospace",
              fontSize: "30px",
              paddingTop: "20px",
              paddingBottom: "-20px",
            }}
          >
            Gamer Reviews
          </Typography>

          <Review gamename={data.name}/>





          <Typography
            sx={{
              fontFamily: "monospace",
              fontSize: "30px",
              paddingTop: "20px",
              paddingBottom: "-20px",
            }}
          >
            More games like this
          </Typography>
          <Grid display="flex" gap="10px" paddingTop="15px">
            <Link to="/content"  state={{from:'more like this', name:randata1.title}} style={{textDecoration:"none"}}>
            <Card
              sx={{
                maxWidth: "300px",
                minWidth: "300px",
                height: "100%",
                transition:
                  "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
                cursor: "pointer",
                ":hover": { transform: "scale(1.05)" },
              }}
            >
              <Tooltip title={randata1.name} TransitionComponent={Zoom}>
                <CardMedia
                  component="img"
                  height="150px"
                  width="250px"
                  // minWidth="100%"
                  image={randata1.img1}
                />
              </Tooltip>
            </Card>
            </Link>
            <Link to="/content"  state={{from:'more like this', name:randata2.title}} style={{textDecoration:"none"}}>  
            <Card
              sx={{
                maxWidth: "300px",
                minWidth: "300px",
                height: "100%",
                transition:
                  "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
                cursor: "pointer",
                ":hover": { transform: "scale(1.05)" },
              }}
            >
              <Tooltip title={randata2.name} TransitionComponent={Zoom}>
                <CardMedia
                  component="img"
                  height="150px"
                  width="250px"
                  // minWidth="100%"
                  image={randata2.img1}
                />
              </Tooltip>
            </Card>
              </Link>
              <Link to="/content"  state={{from:'more like this', name:randata3.title}} style={{textDecoration:"none"}}>
            <Card
              sx={{
                maxWidth: "300px",
                minWidth: "300px",
                height: "100%",
                transition:
                  "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
                cursor: "pointer",
                ":hover": { transform: "scale(1.05)" },
              }}
            >
              <Tooltip title={randata3.name} TransitionComponent={Zoom}>
                <CardMedia
                  component="img"
                  height="150px"
                  width="250px"
                  // minWidth="100%"
                  image={randata3.img1}
                />
              </Tooltip>
            </Card>
            </Link>
          </Grid>
          <br></br>

          <Grid display="flex" gap="10px" paddingBottom="50px">
          <Link to="/content"  state={{from:'more like this', name:randata4.title}} style={{textDecoration:"none"}}>
            <Card
              sx={{
                maxWidth: "300px",
                minWidth: "300px",
                height: "100%",
                transition:
                  "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
                cursor: "pointer",
                ":hover": { transform: "scale(1.05)" },
              }}
            >
              <Tooltip title={randata4.name} TransitionComponent={Zoom}>
                <CardMedia
                  component="img"
                  height="150px"
                  width="250px"
                  // minWidth="100%"
                  image={randata4.img1}
                />
              </Tooltip>
            </Card>
            </Link>
            <Link to="/content"  state={{from:'more like this', name:randata5.title}} style={{textDecoration:"none"}}>
            <Card
              sx={{
                maxWidth: "300px",
                minWidth: "300px",
                height: "100%",
                transition:
                  "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
                cursor: "pointer",
                ":hover": { transform: "scale(1.05)" },
              }}
            >
              <Tooltip title={randata5.name} TransitionComponent={Zoom}>
                <CardMedia
                  component="img"
                  height="150px"
                  width="250px"
                  // minWidth="100%"
                  image={randata5.img1}
                />
              </Tooltip>
            </Card>
            </Link>
            <Link to="/content"  state={{from:'more like this', name:randata6.title}} style={{textDecoration:"none"}}>
            <Card
              sx={{
                maxWidth: "300px",
                minWidth: "300px",
                height: "100%",
                transition:
                  "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
                cursor: "pointer",
                ":hover": { transform: "scale(1.05)" },
              }}
            >
              <Tooltip title={randata6.name} TransitionComponent={Zoom}>
                <CardMedia
                  component="img"
                  height="150px"
                  width="250px"
                  // minWidth="100%"
                  image={randata6.img1}
                />
              </Tooltip>
            </Card>
            </Link>
          </Grid>
        </Box>
      </>
    );
  }
};
