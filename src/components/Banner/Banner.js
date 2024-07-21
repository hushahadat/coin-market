import { Container, Typography } from "@mui/material";
import Carousel from "./Carousel";

function Banner() {
  const bannerStyles = {
    backgroundColor: "#A91D3A",
  };

  const bannerContentStyles = {
    height: 400,
    display: "flex",
    flexDirection: "column",
    paddingTop: 25,
    justifyContent: "space-around",
  };

  const taglineStyles = {
    display: "flex",
    height: "40%",
    flexDirection: "column",
    justifyContent: "center",
    textAlign: "center",
  };

  const carouselStyles = {
    height: "50%",
    display: "flex",
    alignItems: "center",
  };

  return (
    <div style={bannerStyles}>
      <Container style={bannerContentStyles}>
        <div style={taglineStyles}>
          <Typography
            variant="h2"
            style={{
              fontWeight: "bold",
              marginBottom: 15,
              fontFamily: "Montserrat",
            }}
          >
            Crypto-Pulse
          </Typography>
          <Typography
            variant="subtitle2"
            style={{
              color: "darkgrey",
              textTransform: "capitalize",
              fontFamily: "Montserrat",
            }}
          >
            Get all the Info regarding your favorite Crypto Currency
          </Typography>
        </div>
        <div style={carouselStyles}>
          <Carousel />
        </div>
      </Container>
    </div>
  );
}

export default Banner;
