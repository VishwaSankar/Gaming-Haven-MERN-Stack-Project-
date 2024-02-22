import React, { useState } from "react";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import {
  Box,
  CardActionArea,
  Divider,
  Grid,
  Snackbar,
  Stack,
  Tooltip,
  Zoom,
} from "@mui/material";
import { styled } from "@mui/material";
import Rating from "@mui/material/Rating";
import axios from "axios";
import { gamesdata1 } from "./page/gamecontent/Datagames";
import { Link, Route } from "react-router-dom";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import MuiAlert from "@mui/material/Alert";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import newRequest from "./utils/newRequest";
import FavoriteBorderTwoToneIcon from '@mui/icons-material/FavoriteBorderTwoTone';
const StyledCard = styled(Card)({
  width: "100%",
  maxWidth: 230,
  maxHeight: 360,
  minHeight: 350,
  paddingBottom: "10px",
  ":hover": { transform: "scale(1.05)" },
  transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
});
const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
const StyledCard2 = styled(Card)({
  maxWidth: 230,
  maxHeight: 360,
  minHeight: 350,
  paddingTop: "10px",
  ":hover": { transform: "scale(1.05)" },
  transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
});

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

function random() {
  const getRandomUniqueIndex = () => {
    let index;
    do {
      index = getRandomIndex();
    } while (randomIndices.includes(index));
    randomIndices.push(index);
    return index;
  };

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
// console.log(randata1.title);
export default function Topseller() {
  const queryClient = useQueryClient();
   const {
    isLoading: favLoading,
    error: favError,
    data: favData,
  } = useQuery({
    queryKey: ['fav'],
    queryFn: async () => {
      try {
        const response = await newRequest.get('/fav/userfav');
        return response.data;
      } catch (error) {
        throw new Error('Error fetching fav data');
      }
    },
  });

  const favMutation = useMutation({
    mutationFn: (handlefav1) => {
      return newRequest.post('/fav', handlefav1);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(['fav']);
    },
  });

  // Cart Query and Mutation
  const {
    isLoading: cartLoading,
    error: cartError,
    data: cartData,
  } = useQuery({
    queryKey: ['cart'],
    queryFn: async () => {
      try {
        const response = await newRequest.get('/cart/usercart');
        return response.data;
      } catch (error) {
        throw new Error('Error fetching cart data');
      }
    },
  });

  const cartMutation = useMutation({
    mutationFn: (handlecart) => {
      return newRequest.post('/cart', handlecart);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(['cart']);
    },
  });





  //   const [url,setUrl]=useState('');
  //   axios.get('https://api.rawg.io/api/games?key=4854226f26e94205bfe48b460e82e39a', {
  // }).then((res)=>{console.log(res.data.results[0]);
  // setUrl(res.data.results[0].background_image)
  // })
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
  const handleClick1 = () => {
    setOpen(true);
  };

  const handleClose1 = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };


  const handlefav1=(e)=>{
     
    const title=randata1.title;
    const name=randata1.name;
    const price=randata1.price;
    const img1=randata1.img1;
    const platform=randata1.platform;
    const Ratings=randata1.Ratings;
    // console.log("title"+title);
    // console.log("name"+name);
    favMutation.mutate({title,name,price,img1,platform,Ratings})
  }

  const handlefav2=(e)=>{
     
    const title=randata2.title;
    const name=randata2.name;
    const price=randata2.price;
    const img1=randata2.img1;
    const platform=randata2.platform;
    const Ratings=randata2.Ratings;
    // console.log("title"+title);
    // console.log("name"+name);
    favMutation.mutate({title,name,price,img1,platform,Ratings})
  }

  const handlefav3=(e)=>{
     
    const title=randata3.title;
    const name=randata3.name;
    const price=randata3.price;
    const img1=randata3.img1;
    const platform=randata3.platform;
    const Ratings=randata3.Ratings;
    // console.log("title"+title);
    // console.log("name"+name);
    favMutation.mutate({title,name,price,img1,platform,Ratings})
  }

  const handlefav4=(e)=>{
     
    const title=randata4.title;
    const name=randata4.name;
    const price=randata4.price;
    const img1=randata4.img1;
    const platform=randata4.platform;
    const Ratings=randata4.Ratings;
    // console.log("title"+title);
    // console.log("name"+name);
    favMutation.mutate({title,name,price,img1,platform,Ratings})
  }

  const handlefav5=(e)=>{
     
    const title=randata5.title;
    const name=randata5.name;
    const price=randata5.price;
    const img1=randata5.img1;
    const platform=randata5.platform;
    const Ratings=randata5.Ratings;
    // console.log("title"+title);
    // console.log("name"+name);
    favMutation.mutate({title,name,price,img1,platform,Ratings})
  }

  const handlefav6=(e)=>{
     
    const title=randata6.title;
    const name=randata6.name;
    const price=randata6.price;
    const img1=randata6.img1;
    const platform=randata6.platform;
    const Ratings=randata6.Ratings;
    // console.log("title"+title);
    // console.log("name"+name);
    favMutation.mutate({title,name,price,img1,platform,Ratings})
  }

  //handlecart mutation
  const handlecart1=(e)=>{
     
    const title=randata1.title;
    const name=randata1.name;
    const price=randata1.price;
    const img1=randata1.img1;
    const platform=randata1.platform;
    const Ratings=randata1.Ratings;
    // console.log("title"+title);
    // console.log("name"+name);
    cartMutation.mutate({title,name,price,img1,platform,Ratings})
  }

  const handlecart2=(e)=>{
     
    const title=randata2.title;
    const name=randata2.name;
    const price=randata2.price;
    const img1=randata2.img1;
    const platform=randata2.platform;
    const Ratings=randata2.Ratings;
    // console.log("title"+title);
    // console.log("name"+name);
    cartMutation.mutate({title,name,price,img1,platform,Ratings})
  }
  

  const handlecart3=(e)=>{
     
    const title=randata3.title;
    const name=randata3.name;
    const price=randata3.price;
    const img1=randata3.img1;
    const platform=randata3.platform;
    const Ratings=randata3.Ratings;
    // console.log("title"+title);
    // console.log("name"+name);
    cartMutation.mutate({title,name,price,img1,platform,Ratings})
  }
  

  const handlecart4=(e)=>{
     
    const title=randata4.title;
    const name=randata4.name;
    const price=randata4.price;
    const img1=randata4.img1;
    const platform=randata4.platform;
    const Ratings=randata4.Ratings;
    // console.log("title"+title);
    // console.log("name"+name);
    cartMutation.mutate({title,name,price,img1,platform,Ratings})
  }
  

  const handlecart5=(e)=>{
     
    const title=randata5.title;
    const name=randata5.name;
    const price=randata5.price;
    const img1=randata5.img1;
    const platform=randata5.platform;
    const Ratings=randata5.Ratings;
    // console.log("title"+title);
    // console.log("name"+name);
    cartMutation.mutate({title,name,price,img1,platform,Ratings})
  }
  

  const handlecart6=(e)=>{
     
    const title=randata6.title;
    const name=randata6.name;
    const price=randata6.price;
    const img1=randata6.img1;
    const platform=randata6.platform;
    const Ratings=randata6.Ratings;
    // console.log("title"+title);
    // console.log("name"+name);
    cartMutation.mutate({title,name,price,img1,platform,Ratings})
  }
  
  

  return (
    
    <div id="topseller"> 
    <br></br>
      <Typography
        sx={{
          fontFamily: "monospace",
          fontSize: "40px",
          paddingTop: "60px",
        }}
      >
        Topsellers
      </Typography>
      <Divider color="gray" flexItem />
      <Grid display="flex" gap="29px" paddingTop="15px">
        <Card
          sx={{
            maxWidth: "300px",
            minWidth: "300px",
            maxHeight: "310px",
            cursor: "pointer",
            ":hover": { transform: "scale(1.04)" },
            transition:
              "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
          }}
        >
          <Tooltip title={randata1.name} TransitionComponent={Zoom}>
            <Link
              to={`/content`}
              state={{ from: "topseller", name: randata1.title , }}
              style={{ textDecoration: "none", color: "white" }}
            >
              <CardMedia
                component="img"
                height="150px"
                width="100%"
                // minWidth="100%"
                image={randata1.img1}
              />

              <CardActions>
                <Typography
                  sx={{
                    fontFamily: "monospace",
                    width: "100%",
                    fontSize: "20px",
                    textAlign: "left",
                  }}
                >
                  {randata1.name}
                </Typography>
              </CardActions>
            </Link>
            <CardActions>
              <Box display="flex" gap="20px">
                <Typography sx={{ fontSize: "15px" }}>
                  Rs. {randata1.price}
                </Typography>
                <Box display="flex" sx={{ paddingTop: "2px" }}>
                  <Rating
                    size="small"
                    defaultValue={randata1.Rating}
                    readOnly
                  />
                  <Typography sx={{ fontSize: "15px" }}>
                    ({randata1.Rating})
                  </Typography>
                </Box>
              </Box>
            </CardActions>
            <CardActions>
              <Box display="flex" gap="10px">
              <Link
                to={`/checkout`}
                state={{ from: "topseller", name: randata1.title, price:randata1.price }}
                style={{ textDecoration: "none" }}
              >
                <Button
                  variant="outlined"
                  sx={{ borderRadius: "40px" }}
                  color="error"
                  size="small"
                >
                  Buy Now
                </Button>
                </Link>
                <Button
                onClick={() => {
                  handlecart1();
                  handleClick1();
                }}
                  variant="outlined"
                  sx={{ borderRadius: "40px" }}
                  color="error"
                  size="small"
                >
                  Add to Cart
                </Button>

             

                <Tooltip title="add to favourites">
                  <FavoriteIcon
                    onClick={() => {
                      handlefav1();
                      handleClick();
                    }}
                    sx={{
                      transition: "transform 0.3s ease-in-out",
                      "&:hover": {
                        transform: "scale(1.2)",
                      },
                    }}
                  />
                
                </Tooltip>
             
              </Box>
            </CardActions>
          </Tooltip>
        </Card>
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
                      This game is successfully Added!!
                    </Alert>
                  </Snackbar>
                  {/* <Snackbar
                    open={open}
                    autoHideDuration={6000}
                    onClose={handleClose1}
                  >
                    <Alert
                      onClose={handleClose1}
                      severity="success"
                      sx={{ width: "100%", height: "50%" }}
                    >
                      This has been added to your Cart!!
                    </Alert>
                  </Snackbar> */}
        <Card
          sx={{
            maxWidth: "300px",
            minWidth: "300px",
            maxHeight: "310px",
            cursor: "pointer",
            ":hover": { transform: "scale(1.04)" },
            transition:
              "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
          }}
        >
          <Tooltip title={randata2.name} TransitionComponent={Zoom}>
            <Link
              to={`/content`}
              state={{ from: "topseller", name: randata2.title }}
              style={{ textDecoration: "none", color: "white" }}
            >
              <CardMedia
                component="img"
                height="150px"
                width="100%"
                // minWidth="100%"
                image={randata2.img1}
              />
              <CardActions>
                <Typography
                  sx={{
                    fontFamily: "monospace",
                    width: "100%",
                    fontSize: "20px",
                    textAlign: "left",
                  }}
                >
                  {randata2.name}
                </Typography>
              </CardActions>
            </Link>

            <CardActions>
              <Box display="flex" gap="20px">
                <Typography sx={{ fontSize: "15px" }}>
                  Rs. {randata2.price}
                </Typography>
                <Box display="flex" sx={{ paddingTop: "2px" }}>
                  <Rating
                    size="small"
                    defaultValue={randata2.Rating}
                    readOnly
                  />
                  <Typography sx={{ fontSize: "15px" }}>
                    ({randata2.Rating})
                  </Typography>
                </Box>
              </Box>
            </CardActions>
            <CardActions>
              <Box display="flex" gap="10px">
              <Link
                to={`/checkout`}
                state={{ from: "topseller", name: randata2.title, price:randata2.price }}
                style={{ textDecoration: "none" }}
              >
                <Button
                  variant="outlined"
                  sx={{ borderRadius: "40px" }}
                  color="error"
                  size="small"
                >
                  Buy Now
                </Button>
                </Link>
                <Button
                onClick={() => {
                  handlecart2();
                  handleClick1();
                }}
                  variant="outlined"
                  sx={{ borderRadius: "40px" }}
                  color="error"
                  size="small"
                >
                  Add to Cart
                </Button>
                <Tooltip title="add to favourites">
                  <FavoriteIcon
                    onClick={() => {
                      handlefav2();
                      handleClick();
                    }}
                    sx={{
                      transition: "transform 0.3s ease-in-out",
                      "&:hover": {
                        transform: "scale(1.2)",
                      },
                    }}
                  />
                  
                </Tooltip>
              </Box>
            </CardActions>
          </Tooltip>
        </Card>
      
      
          <Card
            sx={{
              maxWidth: "300px",
              minWidth: "300px",
              maxHeight: "310px",
              cursor: "pointer",
              ":hover": { transform: "scale(1.04)" },
              transition:
                "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
            }}
          >
            <Tooltip title={randata3.name} TransitionComponent={Zoom}>
            <Link
          to={`/content`}
          state={{ from: "topseller", name: randata3.title }}
          style={{ textDecoration: "none", color:"white" }}
        >
              <CardMedia
                component="img"
                height="150px"
                width="100%"
                // minWidth="100%"
                image={randata3.img1}
              />
              <CardActions>
                <Typography
                  sx={{
                    fontFamily: "monospace",
                    width: "100%",
                    fontSize: "20px",
                    textAlign: "left",
                  }}
                >
                  {randata3.name}
                </Typography>
              </CardActions>
              </Link>
              <CardActions>
                <Box display="flex" gap="20px">
                  <Typography sx={{ fontSize: "15px" }}>
                    Rs. {randata3.price}
                  </Typography>
                  <Box display="flex" sx={{ paddingTop: "2px" }}>
                    <Rating
                      size="small"
                      defaultValue={randata3.Rating}
                      readOnly
                    />
                    <Typography sx={{ fontSize: "15px" }}>
                      ({randata3.Rating})
                    </Typography>
                  </Box>
                </Box>
              </CardActions>
              
              <CardActions>
                <Box display="flex" gap="10px">
                <Link
                to={`/checkout`}
                state={{ from: "topseller", name: randata3.title ,price:randata3.price  }}
                style={{ textDecoration: "none" }}
              >
                  <Button
                    variant="outlined"
                    sx={{ borderRadius: "40px" }}
                    color="error"
                    size="small"
                  >
                    Buy Now
                  </Button>
                  </Link>
                  <Button
                onClick={() => {
                  handlecart3();
                  handleClick1();
                }}
                  variant="outlined"
                  sx={{ borderRadius: "40px" }}
                  color="error"
                  size="small"
                >
                  Add to Cart
                </Button>
                  <Tooltip title="add to favourites">
                    <FavoriteIcon
                     onClick={() => {
                      handlefav3();
                      handleClick();
                    }}
                      sx={{
                        transition: "transform 0.3s ease-in-out",
                        "&:hover": {
                          transform: "scale(1.2)",
                        },
                      }}
                    />
                   
                  </Tooltip>
                </Box>
              </CardActions>
            </Tooltip>
          </Card>
        
      </Grid>

      <Grid display="flex" gap="29px" paddingTop="15px">
      
          <Card
            sx={{
              maxWidth: "300px",
              minWidth: "300px",
              maxHeight: "310px",
              cursor: "pointer",
              ":hover": { transform: "scale(1.04)" },
              transition:
                "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
            }}
          >
            <Tooltip title={randata4.name} TransitionComponent={Zoom}>

            <Link
          to={`/content`}
          state={{ from: "topseller", name: randata4.title }}
          style={{ textDecoration: "none", color:"white" }}
        >
              <CardMedia
                component="img"
                height="150px"
                width="100%"
                // minWidth="100%"
                image={randata4.img1}
              />
              <CardActions>
                <Typography
                  sx={{
                    fontFamily: "monospace",
                    width: "100%",
                    fontSize: "20px",
                    textAlign: "left",
                  }}
                >
                  {randata4.name}
                </Typography>
              </CardActions>
              </Link>
              <CardActions>
                <Box display="flex" gap="20px">
                  <Typography sx={{ fontSize: "15px" }}>
                    Rs. {randata4.price}
                  </Typography>
                  <Box display="flex" sx={{ paddingTop: "2px" }}>
                    <Rating
                      size="small"
                      defaultValue={randata4.Rating}
                      readOnly
                    />
                    <Typography sx={{ fontSize: "15px" }}>
                      ({randata4.Rating})
                    </Typography>
                  </Box>
                </Box>
              </CardActions>
              <CardActions>
                <Box display="flex" gap="10px">
                <Link
                to={`/checkout`}
                state={{ from: "topseller", name: randata4.title, price:randata4.price  }}
                style={{ textDecoration: "none" }}
              >
                  <Button
                    variant="outlined"
                    sx={{ borderRadius: "40px" }}
                    color="error"
                    size="small"
                  >
                    Buy Now
                  </Button>
                  </Link>
                  <Button
                onClick={() => {
                  handlecart4();
                  handleClick1();
                }}
                  variant="outlined"
                  sx={{ borderRadius: "40px" }}
                  color="error"
                  size="small"
                >
                  Add to Cart
                </Button>
                  <Tooltip title="add to favourites">
                    <FavoriteIcon
                     onClick={() => {
                      handlefav4();
                      handleClick();
                    }}
                      sx={{
                        transition: "transform 0.3s ease-in-out",
                        "&:hover": {
                          transform: "scale(1.2)",
                        },
                      }}
                    />
                   
                  </Tooltip>
                </Box>
              </CardActions>
            </Tooltip>
          </Card>
        
       
          <Card
            sx={{
              maxWidth: "300px",
              minWidth: "300px",
              maxHeight: "310px",
              cursor: "pointer",
              ":hover": { transform: "scale(1.04)" },
              transition:
                "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
            }}
          >
            <Tooltip title={randata5.name} TransitionComponent={Zoom}>
            <Link
          to={`/content`}
          state={{ from: "topseller", name: randata5.title }}
          style={{ textDecoration: "none", color:"white" }}
        >
              <CardMedia
                component="img"
                height="150px"
                width="100%"
                // minWidth="100%"
                image={randata5.img1}
              />
              <CardActions>
                <Typography
                  sx={{
                    fontFamily: "monospace",
                    width: "100%",
                    fontSize: "20px",
                    textAlign: "left",
                  }}
                >
                  {randata5.name}
                </Typography>
              </CardActions>
</Link>
              <CardActions>
                <Box display="flex" gap="20px">
                  <Typography sx={{ fontSize: "15px" }}>
                    Rs. {randata5.price}
                  </Typography>
                  <Box display="flex" sx={{ paddingTop: "2px" }}>
                    <Rating
                      size="small"
                      defaultValue={randata5.Rating}
                      readOnly
                    />
                    <Typography sx={{ fontSize: "15px" }}>
                      ({randata5.Rating})
                    </Typography>
                  </Box>
                </Box>
              </CardActions>
              <CardActions>
                <Box display="flex" gap="10px">
                <Link
                to={`/checkout`}
                state={{ from: "topseller", name: randata5.title, price:randata5.price  }}
                style={{ textDecoration: "none" }}
              >
                  <Button
                    variant="outlined"
                    sx={{ borderRadius: "40px" }}
                    color="error"
                    size="small"
                  >
                    Buy Now
                  </Button>
                  </Link>
                  <Button
                onClick={() => {
                  handlecart5();
                  handleClick1();
                }}
                  variant="outlined"
                  sx={{ borderRadius: "40px" }}
                  color="error"
                  size="small"
                >
                  Add to Cart
                </Button>
                  <Tooltip title="add to favourites">
                    <FavoriteIcon
                      onClick={() => {
                        handlefav5();
                        handleClick();
                      }}
                      sx={{
                        transition: "transform 0.3s ease-in-out",
                        "&:hover": {
                          transform: "scale(1.2)",
                        },
                      }}
                    />
                   
                  </Tooltip>
                </Box>
              </CardActions>
            </Tooltip>
          </Card>


        
          <Card
            sx={{
              maxWidth: "300px",
              minWidth: "300px",
              maxHeight: "310px",
              cursor: "pointer",
              ":hover": { transform: "scale(1.04)" },
              transition:
                "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
            }}
          >
            <Tooltip title={randata6.name} TransitionComponent={Zoom}>
            <Link
          to={`/content`}
          state={{ from: "topseller", name: randata6.title }}
          style={{ textDecoration: "none", color:"white" }}
        >
              <CardMedia
                component="img"
                height="150px"
                width="100%"
                // minWidth="100%"
                image={randata6.img1}
              />
              <CardActions>
                <Typography
                  sx={{
                    fontFamily: "monospace",
                    width: "100%",
                    fontSize: "20px",
                    textAlign: "left",
                  }}
                >
                  {randata6.name}
                </Typography>
              </CardActions>
</Link>
              <CardActions>
                <Box display="flex" gap="20px">
                  <Typography sx={{ fontSize: "15px" }}>
                    Rs. {randata6.price}
                  </Typography>
                  <Box display="flex" sx={{ paddingTop: "2px" }}>
                    <Rating
                      size="small"
                      defaultValue={randata6.Rating}
                      readOnly
                    />
                    <Typography sx={{ fontSize: "15px" }}>
                      ({randata6.Rating})
                    </Typography>
                  </Box>
                </Box>
              </CardActions>
              <CardActions>
                <Box display="flex" gap="10px">
                <Link
                to={`/checkout`}
                state={{ from: "topseller", name: randata6.title, price:randata6.price  }}
                style={{ textDecoration: "none" }}
              >
                  <Button
                    variant="outlined"
                    sx={{ borderRadius: "40px" }}
                    color="error"
                    size="small"
                  >
                    Buy Now
                  </Button>
                  </Link>
                  <Button
                onClick={() => {
                  handlecart6();
                  handleClick1();
                }}
                  variant="outlined"
                  sx={{ borderRadius: "40px" }}
                  color="error"
                  size="small"
                >
                  Add to Cart
                </Button>
                  <Tooltip title="add to favourites">
                    <FavoriteIcon
                      onClick={() => {
                        handlefav6();
                        handleClick();
                      }}
                      sx={{
                        transition: "transform 0.3s ease-in-out",
                        "&:hover": {
                          transform: "scale(1.2)",
                        },
                      }}
                    />
                  
                  </Tooltip>
                </Box>
              </CardActions>
            </Tooltip>
          </Card>
        
      </Grid>
    </div>
  );
}
