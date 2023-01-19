import {
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
  Grid,
  IconButton,
} from "@material-ui/core";
import VideocamIcon from "@material-ui/icons/Videocam";
import EnhancedEncryptionIcon from "@material-ui/icons/EnhancedEncryption";
import DeleteIcon from "@material-ui/icons/Delete";
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
    listItemText: {
      "& .MuiListItemText-primary": {
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
      },
    },
  };
});
const SingleVideoListItem: React.FC<{ name: string }> = ({ name }) => {
  const classes = useStyles();
  return (
    <>
      <ListItem button className={classes.listItem}>
        <ListItemIcon className={classes.folderIconCon}>
          <VideocamIcon />
        </ListItemIcon>
        <ListItemText className={classes.listItemText} primary={name} />
        <IconButton aria-label="encryption">
          <EnhancedEncryptionIcon fontSize="inherit" />
        </IconButton>
        <IconButton aria-label="encryption">
          <DeleteIcon fontSize="inherit" />
        </IconButton>
      </ListItem>
    </>
  );
};

export default SingleVideoListItem;
