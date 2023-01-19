import {
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
} from "@material-ui/core";
import InsertDriveFileIcon from "@material-ui/icons/InsertDriveFile";
const useStyles = makeStyles(() => {
  return {
    listItem: {
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
const PdfListItem: React.FC<{ name: string }> = ({ name }) => {
  const classes = useStyles();
  return (
    <>
      <ListItem button className={classes.listItem}>
        <ListItemIcon className={classes.folderIconCon}>
          <InsertDriveFileIcon />
        </ListItemIcon>
        <ListItemText primary={name} />
      </ListItem>
    </>
  );
};

export default PdfListItem;
