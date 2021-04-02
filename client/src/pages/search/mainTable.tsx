import React, { Suspense, useState, useEffect } from "react";
import { gql as GQL } from "apollo-boost";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Paper, Box } from "@material-ui/core";

import {
  Timeline,
  TimelineItem,
  TimelineOppositeContent,
  TimelineSeparator,
  TimelineDot,
  TimelineConnector,
  TimelineContent,
} from "@material-ui/lab";
// import Loader from "react-loader-spinner";
import { FetchData } from "./dataFetcher";

const gradient = require("gradient-color");

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: "6px 16px",
    cursor: "pointer",
    textAlign: "justify",
    backgroundColor: "#FEFEFE",
  },
  secondaryTail: {
    backgroundColor: theme.palette.secondary.main,
  },
  description: {
    display: "-webkit-box",
    textOverflow: "ellipsis",
    overflow: "hidden",
    "-webkit-line-clamp": 5 /* number of lines to show */,
    "-webkit-box-orient": "vertical",
  },
  title: {
    display: "-webkit-box",
    textOverflow: "ellipsis",
    overflow: "hidden",
    "-webkit-line-clamp": 1 /* number of lines to show */,
    "-webkit-box-orient": "vertical",
  },
  loaderContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  timelineContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 50,
  },
  footer: {
    background: "linear-gradient(0deg, #F1EDE4 20%, rgba(0,0,0,0) 100%)",
    width: "100%",
    height: 45,
    position: "fixed",
    bottom: 0,
    marginTop: -45,
  },
}));

type TimeLineProps = {
  data: any;
};

type RabbitHandlerProps = {
  resource: any;
};

type Props = {
  url: String;
  updateBookmarked: (s: boolean | undefined) => void;
};

const openInNewTab = (url: string | undefined) => {
  if (url) {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  }
};

const sortItems = (items) => {
  return items
    .map((item: any, rank: number) => ({
      rank,
      ...item,
      publish_date: item.publish_date ? Date.parse(item.publish_date) : "",
    }))
    .sort((a: any, b: any) => {
      if (a.publish_date && a.publish_date === b.publish_date) {
        return a.rank - b.rank;
      } else {
        return (
          (b.publish_date
            ? b.publish_date
            : b.rank === -1
            ? Infinity
            : -Infinity) -
          (a.publish_date
            ? a.publish_date
            : a.rank === -1
            ? Infinity
            : -Infinity)
        );
      }
    });
};

const getColors = (stops: number) => {
  return gradient.default(["#cc0000", "#33cc33"], stops > 2 ? stops : 3);
};

const TimeLine: React.FC<TimeLineProps> = ({ data }) => {
  const classes = useStyles();

  let items = data?.handleSearchRabbit?.result;
  let originalArticle = data?.ingestUrlArticleRabbit?.result;

  if (!items || items.length === 0) {
    return null;
  }

  let selfArticles = [
    {
      title: originalArticle.title,
      description: originalArticle.text,
      publish_date: originalArticle.publish_date,
      link: originalArticle.link,
      rank: -1,
    },
  ];

  items = items.concat(selfArticles);

  const sortedItems = sortItems(items);

  const colors = getColors(sortedItems.length - selfArticles.length);
  return (
    <Box className={classes.timelineContainer}>
      <Timeline align="alternate" style={{ maxWidth: 1000 }}>
        {sortedItems.map((item: any, i: number) => (
          <TimelineItem>
            <TimelineOppositeContent>
              <Typography variant="body2" color="textSecondary">
                {item.publish_date
                  ? new Date(item.publish_date).toLocaleDateString()
                  : ""}
              </Typography>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot
                style={{
                  backgroundColor:
                    item.rank === -1 ? "#478CE3" : colors[item.rank],
                }}
              ></TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Paper
                elevation={0}
                className={classes.paper}
                onClick={() => openInNewTab(item.link)}
                style={{
                  ...(item.rank == -1 && { border: "1px solid #478CE3" }),
                }}
              >
                <Box style={{ textAlign: i % 2 === 0 ? "left" : "right" }}>
                  <Typography color={"secondary"} variant="caption">
                    {item.rank === -1
                      ? "Original Article"
                      : `🔗 ${item.link.split("/").slice(2, 3)}`}
                  </Typography>
                </Box>
                <Box
                  style={{
                    textAlign: i % 2 !== 0 ? "left" : "right",
                    marginTop: -20,
                  }}
                >
                  <Typography color={"secondary"} variant="caption">
                    {`   🏅${item.rank + 2}`}
                  </Typography>
                </Box>
                <Typography
                  className={classes.title}
                  variant="h6"
                  style={{ fontWeight: 550, fontSize: 16 }}
                >
                  {item.title}
                </Typography>
                <Typography variant="body1">
                  <div
                    className={classes.description}
                    dangerouslySetInnerHTML={{ __html: item.description }}
                  />
                </Typography>
              </Paper>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
      <Box className={classes.footer} />
    </Box>
  );
};

const RabbitWait: React.FC<{
  initialData: { queryUid: string; response: Promise<any>, bookmarked: Boolean };
  updateBookmarked: any;
}> = ({ initialData, updateBookmarked }) => {
  const [finalData, setFinalData] = useState(null);

  useEffect(() => {
    if (initialData.response) {
      initialData.response.then((data) => setFinalData(data));
      updateBookmarked(initialData.bookmarked)
    }
  }, [initialData.queryUid]);

  if (!initialData.response) return null;

  if (finalData == null) return <>{"Message in queue"}</>;
  return <TimeLine data={finalData} />;
};

const MainTable: React.FC<Props> = (props) => {
  const classes = useStyles();
  const [initialData, setInitialData] = useState<any>(null);

  useEffect(() => {
    // Update the document title using the browser API
    const fetchNew = () => {
      if (props.url) {
        setInitialData(null);
        FetchData(props.url).then((data) => setInitialData(data));
      }
    };
    fetchNew();
  }, [props.url]);

  if (!props.url) {
    return null;
  }

  if (initialData == null) return <>{"Adding message to queue"}</>;
  return (
    <RabbitWait
      initialData={initialData}
      updateBookmarked={props.updateBookmarked}
    />
  );
};

export default MainTable;
