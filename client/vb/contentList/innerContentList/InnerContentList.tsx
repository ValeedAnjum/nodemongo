import UploadVideos from "../../uploadVideos/UploadVideos";
// import AudioListItem from "./AudioListItem";
// import PdfListItem from "./PdfListItem";
import VideoListItem from "./VideoListItem";
import { Grid } from "@material-ui/core";
import ContentListOfUploadedVideos from "../../contentListOfUploadedVideos/ContentListOfUploadedVideos";

const InnerContentList: React.FC<any> = ({ folderInnerContent }) => {
  return (
    <>
      <Grid container>
        <Grid item sm={6}>
          {folderInnerContent ? (
            folderInnerContent.map((topic: any) => {
              switch (topic.type) {
                case 1:
                  return <VideoListItem name={topic.fileName} />;
                // case 2:
                //   return <PdfListItem name={topic.fileName} />;
                // case 3:
                //   return <AudioListItem name={topic.fileName} />;
                default:
                  return null;
              }
            })
          ) : (
            <p>There Is no content available for this course </p>
          )}
        </Grid>
        <Grid item sm={6}>
          <ContentListOfUploadedVideos />
        </Grid>
      </Grid>
      <UploadVideos />
    </>
  );
};

export default InnerContentList;
