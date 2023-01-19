import React from "react";
import { Tooltip, Fab } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import { makeStyles } from "@material-ui/core";
const useStyles = makeStyles(() => {
  return {
    positionBottom: {
      position: "absolute",
      top: "100%",
      right: "0",
    },
  };
});
const UploadBottomBtn: React.FC<{ onClick: () => void }> = ({ onClick }) => {
  const classes = useStyles();
  return (
    <Tooltip title="Add" aria-label="add" onClick={onClick}>
      <Fab color="secondary" className={classes.positionBottom}>
        <AddIcon />
      </Fab>
    </Tooltip>
  );
};

export default UploadBottomBtn;
