import {
  Box,
  Badge,
  Avatar,
  makeStyles,
  Menu,
  MenuItem,
} from "@material-ui/core";
import React, { useState, Suspense } from "react";
import MailIcon from "@material-ui/icons/Mail";
import {
  BookmarksDialog,
  HistoryDialog,
  NotificationsDialog,
} from "../../components";
import BookmarksIcon from "@material-ui/icons/Bookmarks";
import HistoryIcon from "@material-ui/icons/History";
import Cookies from "js-cookie";
import { useHistory } from "react-router-dom";
import { decodeToken } from "../../util/token";
import { gql as GQL } from "@apollo/client";
import { createResource } from "../../util/fetcher";

const QUERY_ARTICLE = GQL`
query{
  user{
    notifications{
      url
      title
    }
  }
}
`;

const useStyles = makeStyles((theme) => ({
  header: {
    width: 200,
    height: 50,
    position: "fixed",
    zIndex: 99,
    top: 10,
    right: 10,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  avatar: {
    transform: "scale(0.8)",
    backgroundColor: "#64625E",
  },
  mailIcon: {
    transform: "scale(1.1)",
    color: "#64625E",
  },
  horizontalCenter: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  icon: {
    color: "#64625E",
  },
}));

const BadgeLoader: React.FC<{ resource: any }> = ({ resource }) => {
  let data = resource.read();
  
  const classes = useStyles();

  return (
    <Badge
      badgeContent={data.user.notifications.length}
      color="primary"
      className={classes.mailIcon}
    >
      <MailIcon />
    </Badge>
  );
};
const Header: React.FC<{ updateSearch: (s: string) => void }> = ({
  updateSearch,
}) => {
  const classes = useStyles();
  let history = useHistory();
  const resource = createResource(QUERY_ARTICLE);

  const [anchorEl, setAnchorEl] = useState(null);
  const [openNotifications, setOpenNotifications] = useState(false);
  const [openHistory, setOpenHistory] = useState(false);
  const [openBookmarks, setOpenBookmarks] = useState(false);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handelOpenNotifications = () => {
    setOpenNotifications(true);
  };

  const handelCloseNotifications = () => {
    setOpenNotifications(false);
  };

  const handelOpenHistory = () => {
    setOpenHistory(true);
  };

  const handelCloseHistory = () => {
    setOpenHistory(false);
  };

  const handelOpenBookmarks = () => {
    setOpenBookmarks(true);
  };

  const handelCloseBookmarks = () => {
    setOpenBookmarks(false);
  };

  const clickDialogItem=(s:string)=>{
    setOpenHistory(false);
    setOpenBookmarks(false);
    setOpenNotifications(false);
    updateSearch(s)
  }

  const handleLogout = () => {
    Cookies.remove("token");
    history.push("/login");
  };

  return (
    <Box className={classes.header}>
      <Box onClick={handelOpenHistory}>
        <HistoryIcon className={classes.icon} />
      </Box>
      <Box onClick={handelOpenBookmarks}>
        <BookmarksIcon className={classes.icon} />
      </Box>
      <Box onClick={handelOpenNotifications}>
        <Suspense fallback={<MailIcon className={classes.mailIcon} />}>
          <BadgeLoader resource={resource} />
        </Suspense>
      </Box>
      <Avatar onClick={handleClick} className={classes.avatar}>
        {decodeToken().data.name.slice(0, 1)}
      </Avatar>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        style={{ marginTop: 50 }}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleLogout}>Logout</MenuItem>
      </Menu>
      <NotificationsDialog
        open={openNotifications}
        handleClose={handelCloseNotifications}
        updateSearch={clickDialogItem}
      />
      <BookmarksDialog
        open={openBookmarks}
        handleClose={handelCloseBookmarks}
        updateSearch={clickDialogItem}
      />
      <HistoryDialog
        open={openHistory}
        handleClose={handelCloseHistory}
        updateSearch={clickDialogItem}
      />
    </Box>
  );
};

export default Header;
