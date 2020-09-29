import React from "react";
import {IconButton, Menu, MenuItem, makeStyles, fade} from "@material-ui/core";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import CreatePostDialog from "../HomePage/CreatePostDialog";

const useStyles = makeStyles((theme) => ({
  menu: {
    color: theme.palette.primary.main,
    "&:hover": {
      backgroundColor: fade(theme.palette.primary.main, 0.1),
      color: theme.palette.primary.main,
    },
  },
}));

const CreateMenu = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [open, setOpen] = React.useState(false);
  const classes = useStyles();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClickOpen = () => {
    setAnchorEl(null);
    setOpen(!open);
  };

  return (
    <div>
      <IconButton
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
        color="inherit"
      >
        <AddCircleIcon />
      </IconButton>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem className={classes.menu} onClick={handleClickOpen}>
          Create Post
        </MenuItem>
        <MenuItem className={classes.menu} onClick={handleClose}>
          Start Project
        </MenuItem>
        <MenuItem className={classes.menu} onClick={handleClose}>
          Write Blog
        </MenuItem>
      </Menu>
      <CreatePostDialog handleClickOpen={handleClickOpen} open={open} />
    </div>
  );
};

export default CreateMenu;
