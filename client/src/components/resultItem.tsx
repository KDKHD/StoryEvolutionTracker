import React from "react";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";

type Props = {
  src?: string;
  title?: string;
  snippet?: string;
  link?: string;
  date?: string;
};
const useStyles = makeStyles((theme) => ({
  container: {
    width: "100%",
    height: 160,
    display: "flex",
    // justifyContent: "center",
    // alignItems: "center",
    flexDirection: "row",
  },
  root: {
    margin: "20px 0 20px 0",
  },
  title: {
    textAlign: "left",
    fontWeight: 500,
    fontSize: "20px",
    paddingBottom: 10,
    paddingTop: 10,
  },
  snippet: {
    textAlign: "left",
    width: "100%",
    fontSize: 12,
    flexGrow: 1,
    textOverflow: "ellipsis",
    wordWrap: "break-word",
  },
  src: {
    width: 160,
    height: 160,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  },
  textContainer: {
    height: "100%",
    padding: "1rem",
    display: "flex",
    flexDirection: "column",
    alignContent: "flex-start"
  },
  date: {
    fontSize: 10,
    textAlign: "right",
    color: "grey",
  },
}));

const ResultItem: React.FC<Props> = (props) => {
  const classes = useStyles();
  const dateString = !isNaN(Date.parse(props.date as string))
    ? new Date(Date.parse(props.date as string)).toISOString().substring(0, 10)
    : "NaN";
  const openInNewTab = (url: string | undefined) => {
    if (url) {
      const newWindow = window.open(url, "_blank", "noopener,noreferrer");
      if (newWindow) newWindow.opener = null;
    }
  };
  return (
    <Paper
      elevation={3}
      className={classes.root}
      onClick={() => openInNewTab(props.link)}
    >
      <Box className={classes.container}>
        {/* <Box className={classes.src}>
          <Box
            className={classes.src}
            style={{ backgroundImage: `url(${props.src})` }}
          />
        </Box> */}
        <Box className={classes.textContainer}>
          <Box className={classes.title}>{props.title}</Box>
          {/* <Box className={classes.snippet}>{props.snippet}</Box> */}
          <div className={classes.snippet} dangerouslySetInnerHTML={{"__html":props.snippet as string}}/>
          <Box className={classes.date}>{dateString}</Box>
        </Box>
      </Box>
    </Paper>
  );
};

export default ResultItem;
