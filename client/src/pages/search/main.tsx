import React, { useState } from "react";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import { SearchBar } from "../../components";
import MainTable from "./mainTable";
import { Typography } from "@material-ui/core";
import Header from "./header";
import { useHistory } from "react-router-dom";

type Props = {
  url?: String;
};
const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  text: {
    maxWidth: 1000,
    fontWeight: 600,
  },
  horizontalCenter: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
}));

const Main: React.FC<Props> = (props) => {
  const classes = useStyles();
  const [search, setSearch] = useState(props.url || "");
  const [value, setValue] = useState<String>(props.url || "");
  const [bookmarked, setBookmarked] = useState<boolean | undefined>(null);

  let history = useHistory();

  const updateSearch = (s)=>{
    setSearch(s)
    setValue(s)
    setBookmarked(null)
    history.push(`/search/${encodeURIComponent(s.replace(/\+/g,  " "))}`);
  }

  const updateBookmarked = (value: boolean | undefined) => {
    setBookmarked(value)
  }

  return (
    <>
      <Box className={classes.container}>
        <Typography variant="h2" color="textSecondary" className={classes.text}>
          {"Story Evolution Tracker"}
        </Typography>
        <Typography
          variant="subtitle1"
          color="textSecondary"
          className={classes.text}
          style={{ fontWeight: 200 }}
        >
          {
            "Track news stories on a timeline. Just enter a the URL to an article bellow."
          }
        </Typography>
      </Box>
      <Header updateSearch={updateSearch}/>
      <Box className={classes.horizontalCenter}>
        <SearchBar
          onSubmit={(v: any) => updateSearch(v)}
          value={value}
          setValue={setValue}
          bookmarked={bookmarked}
        />
        <MainTable url={search} updateBookmarked={updateBookmarked}/>
      </Box>
    </>
  );
};

export default Main;
