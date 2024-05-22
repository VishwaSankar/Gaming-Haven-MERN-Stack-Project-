import { Box } from "@mui/material";
import React from "react";
import { Carousel, Container } from "react-bootstrap";

function SlidingImageComponent() {
  const data = [
    {
      src: "https://pbs.twimg.com/media/GAik4I6WYAEpWL7.jpg",
      alt: "First Slide",
      title: "Grand Theft Auto 6",
    },
    {
      src: "https://cdn.akamai.steamstatic.com/steam/apps/1593500/ss_f1bff24d3967a21d303d95e11ed892e3d9113057.1920x1080.jpg?t=1695758729",
      alt: "Second",
      title: "God of War",
    },
    {
      src: "https://e1.pxfuel.com/desktop-wallpaper/210/537/desktop-wallpaper-ghost-of-tsushima.jpg",
      alt: "Third",
      title: "Ghost of Tsushima",
    },
    {
      src: "https://wallpapers.com/images/featured/gta-5-qpjtjdxwbwrk4gyj.jpg",
      alt: "Fourth",
      title: "Grand Theft Auto 5",
    },
    {
      src: "https://www.pixground.com/wp-content/uploads/2023/08/Call-of-Duty-Modern-Warfare-3-Price-4K-Wallpaper.jpg ",
      alt: "Fifth",
      title: "Call of Duty",
    },
    {
      src: "https://image.api.playstation.com/vulcan/ap/rnd/202305/2420/2b117db6108244a85769f8009df39f8006b226d8a2831b3a.jpg",
      alt: "Sixth",
      title: "Alan Wake",
    },
  ];

  return (
    <div >
      <Box display='flex' justifyContent='center' backgroundImage="https://wallpapers.com/images/hd/hd-cool-artwork-gaming-controller-axl2gk69puhtw5pp.webp">
        <Carousel
          style={{
            width: "90%",
            paddingTop: "5px",
            maxWidth: "10",
            height: "500px",
            overflow: "hidden",
            cursor: "pointer",
            transition: "transform 2s ease",
          }}
        >
          {data.map((dat, index) => (
            <Carousel.Item>
              <img className="d-block w-100" src={dat.src} alt="First slide" />
              
            </Carousel.Item>
          ))}
        </Carousel>
      </Box>
    </div>
  );
}

export default SlidingImageComponent;
