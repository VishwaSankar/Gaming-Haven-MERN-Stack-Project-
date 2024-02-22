import * as React from "react";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import { Card, CardActionArea, CardMedia, Divider, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import Globalapi from "./Globalapi";
import { useEffect } from "react";
import { useState } from "react";

const DemoPaper = styled(Paper)(({ theme }) => ({
  width: "300px",
  height: "300px",
  padding: theme.spacing(3),
  ...theme.typography.body2,
  textAlign: "center",
  paddingBottom: "30px",
}));

export default function Storegenre() {
  // const[genreList,setgenreList]=useState([])
  // useEffect(()=>{
  //   getGenreList()
  //  },[])
  //  const getGenreList=()=>{
  //    Globalapi.getGenreList.then((res)=>{
  //      console.log(res.data.results);
       
  //    })
  //  }



  return (
    <div id="genre">
      <br/>
      <br/>
      <Typography
        sx={{
          fontFamily: "monospace",
          fontSize: "40px",
          paddingTop: "50px",
        }}
      >
        Explore Various Genre
      </Typography>
      <Divider color="gray" flexItem/>
      <Stack direction="row" spacing={2} paddingTop="15px">
        <Card sx={{ width: "320px", height: "320px" }} square={false} >
        
          <CardActionArea>
          <Link to={`/genre`} state={{from:'store', name:'Action' }} style={{textDecoration:"none"}}>
            <CardMedia
              component="img"
              height="250px"
              image="https://www.well-played.com.au/wp-content/uploads/2020/06/PS5-montage-featured.jpg"
            />
              </Link>
            <Typography
              sx={{
                paddingTop: "15px",
                fontFamily: "monospace",
                textAlign: "center",
                fontSize: "30px",
              }}
            >
              Action games
            </Typography>
          </CardActionArea>
        
        </Card>

        <Card sx={{ width: "320px", height: "320px" }} square={false}>
          
          <CardActionArea>
          <Link to={`/genre`} state={{from:'store', name:'Horror' }} style={{textDecoration:"none"}}>
            <CardMedia
              component="img"
              height="250px"
              image="https://wotpack.ru/wp-content/uploads/2020/09/%D0%9B%D1%83%D1%87%D1%88%D0%B8%D0%B5-%D1%85%D0%BE%D1%80%D1%80%D0%BE%D1%80%D1%8B-%D0%B4%D0%BB%D1%8F-%D1%81%D0%BB%D0%B0%D0%B1%D1%8B%D1%85-%D0%9F%D0%9A-800x562.jpg"
            />
            </Link>
            <Typography
              sx={{
                paddingTop: "15px",
                fontFamily: "monospace",
                textAlign: "center",
                fontSize: "30px",
              }}
            >
              Horror Games
            </Typography>
          </CardActionArea>
        </Card>

        <Card sx={{ width: "320px", height: "320px" }} square={false}>
          <CardActionArea>
          <Link to={`/genre`} state={{from:'store', name:'FPS' }} style={{textDecoration:"none"}}>

            <CardMedia
              component="img"
              height="250px"
              image="https://wallpaperaccess.com/full/2853510.jpg"
            />
            </Link>
            <Typography
              sx={{
                paddingTop: "15px",
                fontFamily: "monospace",
                textAlign: "center",
                fontSize: "30px",
              }}
            >
              FPS Games
            </Typography>
          </CardActionArea>
        </Card>
      </Stack>




      <Stack direction="row" spacing={2} paddingTop="20px">
        <Card sx={{ width: "320px", height: "320px" }} square={false}>
          <CardActionArea>
          <Link to={`/genre`} state={{from:'store', name:'Fighting' }} style={{textDecoration:"none"}}>
            <CardMedia
              component="img"
              height="250px"
              image="https://i.pinimg.com/originals/c4/da/b8/c4dab8649b128a14df8aaf703cac4f16.jpg"
            />
            </Link>
            <Typography
              sx={{
                paddingTop: "15px",
                fontFamily: "monospace",
                textAlign: "center",
                fontSize: "30px",
              }}
            >
              Fighting games
            </Typography>
          </CardActionArea>
        </Card>

        <Card sx={{ width: "320px", height: "320px" }} square={false}>
          <CardActionArea>
          <Link to={`/genre`} state={{from:'store', name:'Racing' }} style={{textDecoration:"none"}}>

            <CardMedia
              component="img"
              height="250px"
              image="https://img.redbull.com/images/c_limit,w_1500,h_1000,f_auto,q_auto/redbullcom/2016/12/13/1331834457325_3/racing-game-of-the-year-2016"
            />
            </Link>
            <Typography
              sx={{
                paddingTop: "15px",
                fontFamily: "monospace",
                textAlign: "center",
                fontSize: "30px",
              }}
            >
              Racing Games
            </Typography>
          </CardActionArea>
        </Card>

        <Card sx={{ width: "320px", height: "320px" }} square={false}>
          <CardActionArea>
          <Link to={`/genre`} state={{from:'store', name:'RPG' }} style={{textDecoration:"none"}}>

            <CardMedia
              component="img"
              height="250px"
              image="https://rpgamer.com/wp-content/uploads/2020/04/gotd-screenshot-wall.jpg"
            />
            </Link>
            <Typography
              sx={{
                paddingTop: "15px",
                fontFamily: "monospace",
                textAlign: "center",
                fontSize: "30px",
              }}
            >
              RPG Games
            </Typography>
          </CardActionArea>
        </Card>
      </Stack>
    </div>
  );
}
