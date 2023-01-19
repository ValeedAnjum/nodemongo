import {
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
} from "@material-ui/core";
import VideocamIcon from "@material-ui/icons/Videocam";
const useStyles = makeStyles(() => {
  return {
    listItem: {
      width: "100%",
      "&:hover": {
        backgroundColor: "#0000001f",
      },
    },
    folderIconCon: {
      "& .MuiSvgIcon-root": {
        width: "2em",
        height: "2em",
      },
    },
  };
});
const VideoListItem: React.FC<{ name: string }> = ({ name }) => {
  const classes = useStyles();
  return (
    <>
      <ListItem button className={classes.listItem}>
        <ListItemIcon className={classes.folderIconCon}>
          <VideocamIcon />
        </ListItemIcon>
        <ListItemText primary={name} />
      </ListItem>
    </>
  );
};

export default VideoListItem;
