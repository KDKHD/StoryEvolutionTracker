import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";

type Props = {
    children: React.ReactElement
}

const useStyles = makeStyles((theme) => ({
  glass: {
    height: "100%",
    width: "100%",
    background:
      "linear-gradient(to right bottom,rgba(255, 255, 255, 0.7),rgba(255, 255, 255, 0.3))",
    zIndex: 99,
    backdropFilter: "blur(1rem)",
    borderRadius: 5,
  },
  container: {
    height: "100vh",
    width: "100vw",
    zIndex: -1,
    background: "linear-gradient(to right top, #fff, #fff)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden"
  },
  circle: {
    background:
      "linear-gradient(to right bottom,rgba(253, 203, 110, 0.8),rgba(253, 203, 110, 0.3))",
    width: 300,
    height: 300,
    borderRadius: "50%",
    position: "absolute",
    animation:
      "$moveX 50s linear 0s infinite alternate, $moveY 55s linear 0s infinite alternate",
  },
  circle1: {
    background:
      "linear-gradient(to right bottom,rgba(214, 48, 49, 0.5),rgba(214, 48, 49, 0.3))",
    animation:
      "$moveX 40s linear 0s infinite alternate, $moveY 60s linear 0s infinite alternate",
    width: 300,
    height: 300,
  },
  circle2: {
    background:
      "linear-gradient(to right bottom,rgba(0, 184, 148, 0.8),rgba(0, 184, 148, 0.3))",
    animation:
      "$moveX 70s linear 0s infinite alternate, $moveY 40s linear 0s infinite alternate",
    width: 300,
    height: 300,
  },
  "@keyframes moveX": {
    from: {
      left: 0,
    },
    to: {
      left: "calc(100% - 300px)",
    },
  },
  "@keyframes moveY": {
    from: {
      top: 0,
    },
    to: {
      top: "calc(100% - 300px)",
    },
  },
}));

const Background: React.FC<Props> = (props) => {
  const classes = useStyles();

  return (
    <Box className={classes.container}>
      <Box className={classes.circle} />
      <Box className={[classes.circle, classes.circle1].join(" ")} />
      <Box className={[classes.circle, classes.circle2].join(" ")} />

      <Box className={classes.glass}>{props.children}</Box>
    </Box>
  );
};

export default Background;
