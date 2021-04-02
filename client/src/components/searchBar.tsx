import React, { useEffect, useState } from "react";

import TextField from "@material-ui/core/TextField";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import BookmarkIcon from "@material-ui/icons/Bookmark";
type Props = {
  setValue: (e: any) => void;
  value: String | undefined;
  onSubmit: (v: any) => void;
  bookmarked?: boolean | undefined;
};

const useStyles = makeStyles((theme) => ({
  searchBar: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    transition: "all 2s",
    justifyContent: "center",
    width: "1000px",
    zIndex: 99,
    background: "linear-gradient(180deg, #F1EDE4 80%, rgba(0,0,0,0) 100%)",
  },
  sticky: {
    position: "fixed",
    top: 0,
  },
  input: {
    "&:-webkit-autofill": {
      WebkitBoxShadow: "0 0 0 1000px #F1EDE4 inset",
    },
    textAlign: "center",
  },
  spacer: {
    marginTop: 102,
  },
}));

const SearchBar: React.FC<Props> = (props) => {
  const classes = useStyles();
  const [scrolled, setScrolled] = useState<Boolean>(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 94) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });

  return (
    <>
      <Box
        className={[
          classes.searchBar,
          ...(scrolled ? [classes.sticky] : []),
        ].join(" ")}
      >
        <TextField
          id="standard-full-width"
          style={{ margin: 8, padding: "1rem", maxWidth: 1000 }}
          placeholder="Article URL"
          helperText="Hit enter to search 🔎"
          fullWidth
          value={props.value}
          onChange={(e: any) => props.setValue(e.target.value)}
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          inputProps={{ className: classes.input }}
          onKeyDown={(e: any) =>
            e.key == "Enter" && props.onSubmit(props.value)
          }
        />
        {props.bookmarked == null ? null : props.bookmarked ? (
          <BookmarkIcon />
        ) : (
          <BookmarkBorderIcon />
        )}
      </Box>
      <Box className={scrolled ? classes.spacer : ""} />
    </>
  );
};

export default SearchBar;
