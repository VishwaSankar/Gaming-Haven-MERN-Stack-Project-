import { Divider, Typography } from '@mui/material';
import React from 'react';
import { Carousel } from 'react-bootstrap';

const VideoCarousel = () => {
  const videos = [
    {
      src:"https://www.youtube.com/embed/QdBZY2fkU-0?rel=0"

    },
    {
      src:"https://www.youtube.com/embed/9fVYKsEmuRo?rel=0"
    },
    {
      src:"https://www.youtube.com/embed/sJbexcm4Trk?rel=0" 
    },
    {
       src:"https://www.youtube.com/embed/HqQMh_tij0c?rel=0"
    }
  ];

  return (
    <div id='trailer'>
      <br></br>
        <Typography sx={{ fontFamily: "monospace", fontSize: "40px", paddingTop: "50px" }}>Watch Trending Trailers!</Typography>
        <Divider color="gray" flexItem/>
    <Carousel
          style={{
            paddingTop: "5px",
            maxWidth: "100%",
            height: "500px",
            overflow: "hidden",
            cursor: "pointer",
            paddingTop: "10px", 
            paddingBottom: "20px",
            paddingRight: "5px",
          }}
        >
          {videos.map((data, index) => (
            <Carousel.Item item key={index}>
              
              <iframe
          title="video1"
          width="100%"
          height="500px"
          src={data.src}
          alt={data.alt}
          allowFullScreen
          
        />
            </Carousel.Item>
          ))}
        </Carousel>
        </div>
  );
};

export default VideoCarousel;
