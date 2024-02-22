import { Box } from '@mui/material'
import React from 'react'

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Paper, Typography } from '@mui/material';



export const SlidingImage = () => {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
  
    const images = [
      'https://www.kasandbox.org/programming-images/avatars/spunky-sam.png',
      'https://www.kasandbox.org/programming-images/avatars/purple-pi-teal.png',
      'https://www.kasandbox.org/programming-images/avatars/marcimus-red.png'
      
    ];
  
    return (
      <Paper elevation={3}>
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index}>
              <img src={image} alt={`Slide ${index + 1}`} style={{ width: '100%' }} />
            </div>
          ))}
        </Slider>
      </Paper>
    );
  };
  