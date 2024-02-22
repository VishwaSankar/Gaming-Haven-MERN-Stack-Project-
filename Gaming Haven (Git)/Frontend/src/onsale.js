import React, { useState } from 'react';
import { Card, CardContent, CardMedia, Typography, Grid, Divider } from '@mui/material';
import { Link, Outlet} from 'react-router-dom';
import axios from 'axios';
import { gamesdata1 } from './page/gamecontent/Datagames';

const CardsRow = () => {
  const [clickedCard, setClickedCard] = useState(null);

  const handleCardClick = (index) => {
    setClickedCard(clickedCard === index ? null : index);

  };

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

  function getRandomUniqueIndex() {
    let index;
    do {
      index = getRandomIndex();
    } while (randomIndices.includes(index) || !gamesdata1[index].sale);
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
  
  }

  random();
  

  return (
    <div id="sale">
      <br/>
    <Typography sx={{ fontFamily: "monospace", fontSize: "40px", paddingTop: "50px" }}>On Sale & Discounts</Typography>
    <Divider color="gray" flexItem/>
<Grid display="flex" gap="15px"  spacing={3} sx={{paddingTop:'20px',paddingBottom:'20px'}}>
     
        <Grid >
        <Link
                to={`/content`}
                state={{ from: "onsale", name: randata1.title }}
                style={{ textDecoration: "none" }}
              >
          <Card sx={{
              transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
              cursor: 'pointer',
              ':hover': { transform: 'scale(1.05)' },
              minHeight:"250px",
              maxHeight:"260px",
              minWidth:"325px",
              maxWidth:"325px"

            }}

            >
            <CardMedia
              component="img"
              height="150"
              image={randata1.img1}

            />
            <CardContent>
              <Typography  sx={{
                  fontFamily: "monospace",
                  width: "100%",
                  fontSize: "20px",
                  textAlign: "left",
                }} >
                {randata1.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {randata1.saleval}
              </Typography>
            </CardContent>
          </Card>
          </Link>
          {/* </Link>
          <Outlet /> */}
        </Grid>

        <Grid>
        <Link
                to={`/content`}
                state={{ from: "onsale", name: randata2.title }}
                style={{ textDecoration: "none" }}
              >
          <Card sx={{
              transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
              cursor: 'pointer',
              ':hover': { transform: 'scale(1.05)' },
              minHeight:"250px",
              maxHeight:"260px",
              minWidth:"325px",
              maxWidth:"325px"

            }}

            >
            <CardMedia
              component="img"
              height="150"
              image={randata2.img1}

            />
            <CardContent>
              <Typography  sx={{
                  fontFamily: "monospace",
                  width: "100%",
                  fontSize: "20px",
                  textAlign: "left",
                }} >
                {randata2.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {randata2.saleval}
              </Typography>
            </CardContent>
          </Card>
          </Link>
          
        </Grid>


        <Grid >
        <Link
                to={`/content`}
                state={{ from: "onsale", name: randata3.title }}
                style={{ textDecoration: "none" }}
              >
          <Card sx={{
              transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
              cursor: 'pointer',
              ':hover': { transform: 'scale(1.05)' },
              minHeight:"250px",
              maxHeight:"260px",
              minWidth:"325px",
              maxWidth:"325px"

            }}

            >
            <CardMedia
              component="img"
              height="150"
              image={randata3.img1}

            />
            <CardContent>
              <Typography  sx={{
                  fontFamily: "monospace",
                  width: "100%",
                  fontSize: "20px",
                  textAlign: "left",
                }} >
                {randata3.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {randata3.saleval}
              </Typography>
            </CardContent>
          </Card>
          </Link>
        </Grid>
      
    </Grid>
    <Grid display="flex" gap="15px"  spacing={3} sx={{paddingTop:'20px',paddingBottom:'100px'}}>
     
        <Grid >
        <Link
                to={`/content`}
                state={{ from: "onsale", name: randata4.title }}
                style={{ textDecoration: "none" }}
              >
          <Card sx={{
              transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
              cursor: 'pointer',
              ':hover': { transform: 'scale(1.05)' },
              minHeight:"250px",
              maxHeight:"260px",
              minWidth:"325px",
              maxWidth:"325px"

            }}

            >
            <CardMedia
              component="img"
              height="150"
              image={randata4.img1}

            />
            <CardContent>
              <Typography  sx={{
                  fontFamily: "monospace",
                  width: "100%",
                  fontSize: "20px",
                  textAlign: "left",
                }} >
                {randata4.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {randata4.saleval}
              </Typography>
            </CardContent>
          </Card>
           </Link>
         
        </Grid>

        <Grid>
        <Link
                to={`/content`}
                state={{ from: "onsale", name: randata5.title }}
                style={{ textDecoration: "none" }}
              >
          <Card sx={{
              transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
              cursor: 'pointer',
              ':hover': { transform: 'scale(1.05)' },
              minHeight:"250px",
              maxHeight:"260px",
              minWidth:"325px",
              maxWidth:"325px"

            }}

            >
            <CardMedia
              component="img"
              height="150"
              image={randata5.img1}

            />
            <CardContent>
              <Typography  sx={{
                  fontFamily: "monospace",
                  width: "100%",
                  fontSize: "20px",
                  textAlign: "left",
                }} >
                {randata5.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {randata5.saleval}
              </Typography>
            </CardContent>
          </Card>
          </Link>
        
        </Grid>


        <Grid >
        <Link
                to={`/content`}
                state={{ from: "onsale", name: randata6.title }}
                style={{ textDecoration: "none" }}
              >
          <Card sx={{
              transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
              cursor: 'pointer',
              ':hover': { transform: 'scale(1.05)' },
              minHeight:"250px",
              maxHeight:"260px",
              minWidth:"325px",
              maxWidth:"325px"

            }}

            >
            <CardMedia
              component="img"
              height="150"
              image={randata6.img1}

            />
            <CardContent>
              <Typography  sx={{
                  fontFamily: "monospace",
                  width: "100%",
                  fontSize: "20px",
                  textAlign: "left",
                }} >
                {randata6.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {randata6.saleval}
              </Typography>
            </CardContent>
          </Card>
           </Link>
          
        </Grid>
      
    </Grid>


    
    
    </div>
  );
  
};

export default CardsRow;
