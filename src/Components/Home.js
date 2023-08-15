import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";

import logoImage from "./Assets/broker-logo.jpg";
import "../Components/Home.css";

const pages = ["home", "about us", "make a claim", "pos corner", "contact us"];

const navStyles = {
  backgroundColor: "white",
};

const heroProducts = [
  {
    title: "Car",
    link: "https://www.sibkaro.in/car-insurance/vehicle",
    image: "./Assets/product-car.png",
  },
  {
    title: "Bike",
    link: "https://www.sibkaro.in/bike-insurance/vehicle",
    image: require("./Assets/product-bike.png"),
  },
  {
    title: "health",
    link: "https://www.sibkaro.in/healthinsurancepremium?policy_type=Individual",
    image: "./Assets/product-health.png",
  },
  {
    title: "term",
    image: "./Assets/product-term.png",
  },
  {
    title: "home",
    image: "./Assets/product-home.png",
  },
  {
    title: "business",
    image: "./Assets/product-business.png",
  },
];
const productBoxStyle = {
  margin: "40px",
  backgroundColor: "#f8f8ff",
  padding: "15px",
}

const productBoxHoverStyle = {
  transition: "transform 0.2s",
  transform: "scale(1.05)",
};

function Navbar() {
  return (
    <>
      <AppBar position="static" sx={navStyles}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <img
              src={logoImage}
              alt="Logo"
              style={{ maxHeight: "100px", maxWidth: "100px" }}
            />

            <Box
              sx={{
                flexGrow: 1,
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "center",
              }}
            >

              <Box sx={{ display: { xs: "none", md: "flex" } }}>
                {pages.map((page) => (
                  <Button
                    key={page}
                    sx={{ mx: 2, color: "black", "&:hover": { color: "blue" } }}
                  >
                    {page}
                  </Button>
                ))}
              </Box>
            </Box>

            <Tooltip>
              <Button
                variant="outlined"
                color="inherit"
                sx={{
                  backgroundColor: "#2A3557",
                  borderColor: "black",
                  color: "white",
                  marginLeft: "20px",
                  "&:hover": {
                    backgroundColor: "#4682b4",
                  },
                }}
              >
                Login
              </Button>
            </Tooltip>
          </Toolbar>
        </Container>
      </AppBar>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: "10px",
        }}
      >
        <div>
          <h1> All your insurance needs,<span style={{ color: "blue" }}> all in one place</span> </h1>
          <h1 style={{ fontSize: "18px" }}>
            <p style={{ color: "grey" }}>
              A team of young enthusiastic people who have the clients' best
              interest at heart.
            </p>
          </h1>
        </div>
      </Box>

      <div className="home-hero-section-product-rev-cover">
        <div className="container">
          <div
            className="row"
            style={{ display: "flex", justifyContent: "center" }}
          >
            {heroProducts.map((product, index) => (
              <div
                key={index}
                className="col-lg-2 col-4"
                style={productBoxStyle}
              >
                <a href={product.link} style={{ textDecoration: "none" }}>
                  <div
                    className="product-box home-hero-product-rev-box"
                    style={productBoxHoverStyle}
                  >
                    <img src={product.image} width="50px" alt={product.title} />
                    <div className="home-hero-product-shape">
                      <img
                        src="https://www.sibkaro.in/images/product-shape.png"
                        width="100px"
                        alt="about"
                        className="shape-image"
                      />
                    </div>
                  </div>
                  <div className="home-product-title-rev">
                    <p>{product.title}</p>
                  </div>
                </a>
              </div>
            ))}
          </div>

          <div
            className="home-hero-guide"
            style={{ textAlign: "center", color: "#2c3157" }}
          >
            <h2>
              Need an Insurance Plan with the Widest Coverage? Let us Guide You!
            </h2>
            <div
              className="input-group"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <div>
                <input
                  type="text"
                  className="form-control"
                  id="mobile_number"
                  name="mobile_number"
                  placeholder="Enter Mobile Number"
                  style={{ height: 38, width: 550 }}
                />
                <button
                  className="plan_btn"
                  type="button"
                  style={{
                    backgroundColor: "#2c3157",
                    color: "white",
                    height: 45,
                    width: 100,
                  }}
                >
                  VIEW PLAN
                </button>
              </div>
              <div style={{ marginTop: 20 }}>
                <img
                  src="./Assets/sample-slider-1.png"
                  alt="Image"
                  style={{
                    width: 600,
                    height: 250,
                    borderRadius: "20px",
                    marginTop: 30,
                  }}
                />
              </div>
            </div>
          </div>
          <div
            className="about-us"
            style={{
              marginTop: 30,
              marginLeft: 100,
              color: "purple",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <div
              style={{
                color: "#2c3157",
                flex: 1,
                paddingRight: "20px",
              }}
            >
              <h1>About Us</h1>
              <h2 style={{ color: "black", margin: 0 }}>Simplifying the method of buying</h2>
              <h2 style={{ color: "#5e8df7", margin: 0 }}>
                <span>insurance with utmost transparency</span>
              </h2>
              <p className="about-us-cover" style={{ margin: 0 }}>
                Shubhechha Insurance is one of the prominent insurance broking
                firms, <br /> which balances the finest blend of Life and non-life
                insurance business.
              </p>
            </div>
            <div style={{ flex: 1, paddingLeft: "20px" }}>
              <img
                src="./Assets/home-about.png"
                alt="Image"
                style={{ float: "right", width: "55%", height: "100%", marginRight: 100 }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
