import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
} from "@material-ui/core";
import FolderIcon from "@material-ui/icons/Folder";
import React, { useEffect, useState } from "react";
import axios from "axios";
import InnerContentList from "./innerContentList/InnerContentList";
import CssLoaderForVideoBank from "../../reusebale/cssLoaderForVideoBank/CssLoaderForVideoBank";
import { VideoBankInterface as VideoBankIProps } from "../videoBankContext/VideoBanlContextInterface";
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
const ContentList: React.FC<{
  folderIsOpen: VideoBankIProps["folderIsOpen"];
  setFolderIsOpen: VideoBankIProps["setFolderIsOpen"];
}> = ({ folderIsOpen, setFolderIsOpen }) => {
  const [folderInnerContent, setfolderInnerContent] = useState(null);
  const [loading, setLoading] = useState(false);
  const { id, name } = folderIsOpen;
  useEffect(() => {
    const fetchContent = async () => {
      setLoading(() => true);
      const res = await axios.get(
        `${process.env.REACT_APP_BackendURL}/course/getContentOfSelectedCourses/${id}`
      );
      setLoading(() => false);
      // console.log("C1", res.data.courses[0].courseContents);
      const courseContent =
        res.data.courses[0].courseContents &&
        res.data.courses[0].courseContents
          .map((sections: any) => sections.topics)
          .flat();
      console.log({ courseContent });
      setfolderInnerContent(() => courseContent);
    };
    fetchContent();
  }, []);
  const rootFolderClickHand = async () => {
    setFolderIsOpen({ name: false, id: null });
  };
  const classes = useStyles();
  return (
    <div>
      <List>
        <ListItem
          button
          className={classes.listItem}
          onClick={rootFolderClickHand}
        >
          <ListItemIcon className={classes.folderIconCon}>
            <FolderIcon />
          </ListItemIcon>
          <ListItemText primary={name} />
        </ListItem>
        <div style={{ paddingLeft: "1em" }}>
          {!loading ? (
            <InnerContentList folderInnerContent={folderInnerContent} />
          ) : (
            <CssLoaderForVideoBank />
          )}
        </div>
      </List>
    </div>
  );
};

export default ContentList;
