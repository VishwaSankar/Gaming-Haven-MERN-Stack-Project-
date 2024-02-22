import { Box, Button, Card, CardActions, CardMedia, Container, Grid, Rating, Stack, Tooltip, Typography, Zoom } from '@mui/material'
import React from 'react'
import { gamesdata1 } from '../gamecontent/Datagames';
import { Link, useLocation } from 'react-router-dom';

const GenreList = () => {
    const location = useLocation();
    React.useEffect(() => {
      console.log("location from genre", location);
    }, [location]);
    
    if (location.state) {
      const { name } = location.state;
      let genre = name;
      let data =[];
    
      // Use filter to get an array of items matching the genre
      const filteredData = gamesdata1.filter((item) => genre === item.Genre);
    
      // Now data is an array of items matching the genre
      data =  filteredData ;
      console.log(data);
      
      // Generate a random index within the range of the filtered data array's length
  const randomIndex = Math.floor(Math.random() * data.length);

  // Check if there are items in the array before accessing a random index
  if (data.length > 0) {
    console.log(data[randomIndex].title);
  } else {
    console.log("No matching items for the specified genre.");
  }
 
  return (
   <>
   
   <Box flex={8}>
  <Typography
    sx={{
      fontFamily: "monospace",
      fontSize: "35px",
      paddingTop: "20px",
      paddingBottom: "-20px",
    }}
  >
    Popular {data[0].Genre} Games
  </Typography>

  <Container>
    <Grid container spacing={1.5}>
      {data.map((item, index) => (
        <Grid item xs={12} sm={2} md={4} lg={3} key={index}>
          <Link to={`/content`} state={{ from: 'topseller', name: item.title }} style={{ textDecoration: "none" }}>
            <Card
                sx={{
                  width: "100%", // Adjusted width to 100%
                  cursor: "pointer",
                  height:"95%",
                  ":hover": { transform: "scale(1.04)" },
                  transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
                }}
            >
              <Box>
                <Tooltip title={item.name} TransitionComponent={Zoom}>
                  <CardMedia
                    component="img"
                    height="100%"
                    width="400px"
                    image={item.img1}
                  />
                  <CardActions>
                    <Typography
                      sx={{
                        fontFamily: "monospace",
                        
                        fontSize: "20px",
                        textAlign: "left",
                      }}
                    >
                      {item.name}
                    </Typography>
                  </CardActions>
                  <CardActions>
                    <Typography sx={{ fontSize: "15px" }}>
                      Rs. {item.price}
                    </Typography>
                    <Box display="flex" sx={{ paddingTop: "2px" }}>
                      <Rating
                        size="small"
                        defaultValue={item.Rating}
                        readOnly
                      />
                      <Typography sx={{ fontSize: "15px" }}>
                        ({item.Rating})
                      </Typography>
                    </Box>
                  </CardActions>
                  <CardActions></CardActions>
                </Tooltip>
              </Box>
            </Card>
          </Link>
        </Grid>
      ))}
    </Grid>
  </Container>
</Box>
       
  
   </>
  )
}
}
export default GenreList












{/* <Card sx={{ display: 'flex' }}>
      <CardMedia
        component="img"
        alt="Card Image"
        height="140"
        image={imageUrl}
        sx={{ width: 140, objectFit: 'cover' }}
      />
      <CardContent>
        <Typography variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
    </Card> */}