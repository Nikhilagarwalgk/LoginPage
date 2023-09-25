import { Paper, Stack } from "@mui/material";
// import footerImg from "../../assets/svgImages/footerImg.svg";

const Footer = () => {
  return (
    <Paper
      sx={{
        position: "fixed",
        padding: "0.5em 1em",
        bottom: 0,
        left: 0,
        right: 0,
        height: "3rem",
      }}
      elevation={10}
    >
      <Stack alignItems="center">
        {/* <img src={footerImg} alt="" /> */}
      </Stack>
    </Paper>
  );
};

export default Footer;
