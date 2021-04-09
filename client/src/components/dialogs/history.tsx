import { Box, Dialog, List, ListItem, makeStyles } from "@material-ui/core";
import React, { Suspense } from "react";
import { gql as GQL } from "@apollo/client";
import { createResource } from "../../util/fetcher";
import { useHistory } from "react-router-dom";

type Props = {
  open: boolean;
  handleClose: () => void;
  updateSearch: (s: string) => void;

};

type ContentProps = {
  resource: any;
  updateSearch: (s: string) => void;
};

const useStyles = makeStyles((theme) => ({
  listItem: {
    width: 300,
    height: 50,
    display: "flex",
    alignItems: "center",
  },
  title: {
    fontSize: 25,
    fontWeight: 800,
    padding: 16,
  },
}));

const QUERY_ARTICLE = GQL`
query{
  user{
    history{
      url
      title
    }
  }
}
`;

const Content: React.FC<ContentProps> = ({ resource, updateSearch }) => {
  const data = resource.read();
  const classes = useStyles();
  let history = useHistory();
  if (data.user.history.length == 0) {
    return (
      <List>
        <ListItem autoFocus button>
          <Box className={classes.listItem}>{"No History"}</Box>
        </ListItem>
      </List>
    );
  }

  return (
    <List>
      {data.user.history.slice(-10).map((bookmark: any, i: number) => (
        <ListItem autoFocus button key={i}>
          <Box
            className={classes.listItem}
            onClick={() => updateSearch(bookmark.url)}
          >
            {bookmark.title}
          </Box>
        </ListItem>
      ))}
    </List>
  );
};

const HistoryDialog: React.FC<Props> = (props) => {
  const classes = useStyles();
  const resource = createResource(QUERY_ARTICLE, {
    fetchPolicy: "no-cache",
  });

  return (
    <Dialog
      onClose={props.handleClose}
      aria-labelledby="simple-dialog-title"
      open={props.open}
    >
      <Box className={classes.title}>{"History"}</Box>
      <Suspense
        fallback={
          <List>
            <ListItem autoFocus button>
              <Box className={classes.listItem}>{"Loading"}</Box>
            </ListItem>
          </List>
        }
      >
        <Content resource={resource} updateSearch={props.updateSearch}/>
      </Suspense>
    </Dialog>
  );
};

export default HistoryDialog;
