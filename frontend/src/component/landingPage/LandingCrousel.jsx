import React from "react";
import { Box, Image } from "@chakra-ui/react";
import Slider from "react-slick";

// Settings for the slider
const settings = {
  dots: false,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 3000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export default function LandingCrousel() {
  const [slider, setSlider] = React.useState(null);

  const cards = [
    {
      image:
        "https://img1.junaroad.com//assets/images/mobileNotif/img-1681727937261.jpg?crsl_pos=0",
    },
    {
      image:
        "https://img0.junaroad.com/images/banners/B2G1_17april2023_1681716456014.jpg?crsl_pos=0",
    },
    {
      image:
        "https://img1.junaroad.com//assets/images/mobileNotif/img-1682501822030.jpg?crsl_pos=0",
    },
    {
      image:
        "https://img1.junaroad.com//assets/images/mobileNotif/img-1682489933102.jpg?crsl_pos=0",
    },
    {
      image:
        "https://img1.junaroad.com//assets/images/mobileNotif/img-1679910119705.jpg?crsl_pos=0",
    },
    {
      image:
        "https://img1.junaroad.com//assets/images/mobileNotif/img-1682505821365.jpg?crsl_pos=0",
    },
    {
      image:
        "https://img1.junaroad.com//assets/images/mobileNotif/img-1652694665568.jpg?crsl_pos=0",
    },
  ];

  return (
    <Box
      // border={"2px solid green"}
      justifyContent={"center"}
      justifyItems={"center"}
      width={"80%"}
      margin={"auto"}
    >
      {/* CSS files for react-slick */}
      <link
        rel="stylesheet"
        type="text/css"
        charSet="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      {/* Slider */}
      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        {cards.map((card, index) => {
          return (
            <Box
              // border={"2px solid yellow"}
              key={index}
              width={"80%"}
              margin={"auto"}
            >
              <Image
                src={card.image}
                maxW={{ base: "110%", md: "120%", lg: "100%" }}
              />
            </Box>
          );
        })}
      </Slider>
    </Box>
  );
}
