import { Box, Container, Typography } from "@mui/material";
import Header from "./Header";

const CONTAINER_SX = {
  paddingTop: (theme) => theme.spacing(3),
  paddingBottom: (theme) => theme.spacing(3),
};

const HEADER_CONTAINER_STYLES_SX = {
  paddingTop: { md: "95px" },
  paddingLeft: { md: "80px" },
  color: "white",
};

const HEADER_TITLE_STYLES_SX = {
  fontSize: "48px",
  paddingTop: "32px",
  lineHeight: "28px",
  fontWeight: 700,
};

const HEADER_CONTENT_STYLES_SX = {
  maxWidth: { md: "635px" },
  fontSize: "18px",
  paddingTop: "32px",
  lineHeight: "28px",
};

const Layout = ({ children }) => {
  return (
    <>
      <Header>
        <Box sx={HEADER_CONTAINER_STYLES_SX}>
          <Typography sx={HEADER_TITLE_STYLES_SX} variant="h1">
            Integrations
          </Typography>
          <Typography sx={HEADER_CONTENT_STYLES_SX}>
            We plan to connect you with your favorite software. If there’s an
            app you’d love to integrate with us, let us know and we’ll notify
            you as soon as it’s available!
          </Typography>
        </Box>
      </Header>
      <Container component="main" maxWidth={"lg"} sx={CONTAINER_SX}>
        {children}
      </Container>
    </>
  );
};

export default Layout;
