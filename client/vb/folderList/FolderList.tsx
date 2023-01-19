import { useContext } from "react";
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
} from "@material-ui/core";
import FolderIcon from "@material-ui/icons/Folder";
import { VideoBankContext } from "../videoBankContext/VideoBankContext";
import VideoPagination from "../pagination/VideoCoursePagination";
import CssLoaderForVideoBank from "../../reusebale/cssLoaderForVideoBank/CssLoaderForVideoBank";
import SelectCategory from "../selectCategory/SelectCategory";
import { useDispatch } from "react-redux";

const useStyles = makeStyles(() => {
  return {
    listItem: {
      "&:hover": {
        backgroundColor: "#0000001f",
      },
    },
    folderIconCon: {
      "& .MuiSvgIcon-root": {
        width: "3em",
        height: "3em",
      },
    },
  };
});
const FolderList = () => {
  const classes = useStyles();
  const { listOfFolder, setFolderIsOpen } = useContext(VideoBankContext);
  const disptatch = useDispatch();
  const openFolder = (name: string, id: string) => {
    disptatch({ type: "SET_COURSE_ID", payload: id });
    setFolderIsOpen(() => ({ name: name, id: id }));
  };
  return (
    <>
      <SelectCategory />
      <List>
        {listOfFolder &&
          listOfFolder.length > 0 &&
          listOfFolder.map(({ _id, title }) => {
            return (
              <ListItem
                onDoubleClick={() => openFolder(title, _id)}
                className={classes.listItem}
                button
                key={_id}
              >
                <ListItemIcon className={classes.folderIconCon}>
                  <FolderIcon />
                </ListItemIcon>
                <ListItemText primary={title} />
              </ListItem>
            );
          })}
      </List>
      {listOfFolder && <VideoPagination />}
      {!listOfFolder && <CssLoaderForVideoBank />}
    </>
  );
};

export default FolderList;
