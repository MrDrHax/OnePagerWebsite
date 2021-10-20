import {
  Container,
  makeStyles,
  useTheme,
  Typography,
  Box,
} from "@material-ui/core";
import React from "react";
import ColorDivider from "../components/ColorDivider";

const useStyles = makeStyles((theme) => {
  return {
    container: {
      background: "transparent",
      color: "black",
    },
    back: {
      background: "fefefe",
      width: "100vw",
    },
  };
});

export default function WhiteBack({ title, idx, children }) {
  const theme = useTheme();
  const classes = useStyles(theme);

  return (
    <Box className={classes.back} pb={6} id={idx}>
      <Container
        justifyContent="center"
        align="center"
        className={classes.container}
      >
        <Box pt={6} pb={2}>
          <Typography
            variant="h2"
            component="h2"
            className="subtitle"
            style={{ fontFamily: "Share Tech" }}
          >
            {title}
          </Typography>
        </Box>
        <ColorDivider />
        <Box mt={3}>{children}</Box>
      </Container>
    </Box>
  );
}
