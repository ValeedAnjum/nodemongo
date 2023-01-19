import { List } from "@material-ui/core";
import SingleVideoListItem from "./SingleVideoListItem";

const ListOfVideos: React.FC<{ listOfUploadedVideos: any }> = ({
  listOfUploadedVideos,
}) => {
  return (
    <>
      {listOfUploadedVideos.map(({ filename }: any) => (
        <SingleVideoListItem name={filename} />
      ))}
    </>
  );
};

export default ListOfVideos;
