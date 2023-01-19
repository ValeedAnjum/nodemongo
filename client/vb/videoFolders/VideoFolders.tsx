import FolderList from "../folderList/FolderList";
import { useContext } from "react";
import { VideoBankContext } from "../videoBankContext/VideoBankContext";
import ContentList from "../contentList/ContentList";

const VideoFolders = () => {
  const { folderIsOpen, setFolderIsOpen } = useContext(VideoBankContext);
  return folderIsOpen && !folderIsOpen.name ? (
    <FolderList />
  ) : (
    <ContentList
      folderIsOpen={folderIsOpen}
      setFolderIsOpen={setFolderIsOpen}
    />
  );
};

export default VideoFolders;
