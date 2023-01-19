import { useState, useEffect, useContext } from "react";
import { Grid, IconButton, makeStyles } from "@material-ui/core";
import VideocamIcon from "@material-ui/icons/Videocam";
import axios from "axios";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import ErrorIcon from "@material-ui/icons/Error";
import CircularProgressWithLabel from "./CircularProgressBar";
import { useDispatch, useSelector } from "react-redux";
import { uploadFilesCounter } from "../../../../store/actions/adminActions";

const useStyles = makeStyles(() => {
  return {
    singleFileMainCon: {
      margin: "0.2em 0",
      alignItems: "center",
    },
    iconBtn: {},
    iconCon: {},
    fileNameCon: {
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis",
      display: "flex",
    },
    fileName: {
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis",
    },
    progressBarCon: {
      height: "30px",
    },
    completeMarkIcon: {
      marginLeft: "0.4em",
      color: "green",
    },
    errorMarkIcon: {
      marginLeft: "0.4em",
      color: "red",
    },
  };
});
const SingleFileUploader: React.FC<any> = ({ file }) => {
  const classes = useStyles();
  const [progress, setProgress] = useState<number>(0);
  const course_id = useSelector(
    (state: any) => state.model.uploadModelData.courseId
  );
  const uploaded_by = useSelector((state: any) => state.auth.authUserData._id);
  const dispatch = useDispatch();
  const [flags, setFlags] = useState<{
    error: boolean;
    uploading: boolean;
    success: boolean;
  }>({
    error: false,
    uploading: true,
    success: false,
  });
  useEffect(() => {
    fileUploader();
  }, [file]);
  const fileUploader = async () => {
    try {
      let formData = new FormData();
      formData.append("file", file);
      // const uploadUrl =
      //   "http://localhost:3009/api/vod/v1/gcp/uploadCourseVideo?courseId=b782ae99d547d54bdff&sectionId=section1661516700637&topicId=4";
      const uploadUrl = `${process.env.REACT_APP_VIDEOURL}/gcp/uploadVideo/?courseId=${course_id}`;
      setFlags((pre) => ({
        ...pre,
        uploading: true,
        success: false,
        error: false,
      }));
      const res = await axios.post(uploadUrl, formData, {
        onUploadProgress,
        withCredentials: true,
      });
      await axios.post(
        `${process.env.REACT_APP_BackendURL}/course/saveVideoInfo`,
        {
          course_id,
          uploaded_by,
          creation_time: new Date(),
          encrypted: false,
          url: res.data,
          filename: file.name,
        },
        {
          withCredentials: true,
        }
      );
      // console.log("reOfVb", res);
      setFlags((pre) => ({
        ...pre,
        uploading: false,
        success: true,
        error: false,
      }));
      dispatch(uploadFilesCounter());
    } catch (error) {
      console.log({ error });
      setFlags((pre) => ({
        ...pre,
        uploading: false,
        error: true,
        success: false,
      }));
    }
  };
  const onUploadProgress = (progressEvent: any) => {
    const { loaded, total } = progressEvent;
    const percentage = Math.floor((loaded * 100) / total);
    setProgress(() => percentage);
  };
  return (
    <Grid container className={classes.singleFileMainCon}>
      <Grid item sm={1} container className={classes.iconCon}>
        <IconButton
          className={classes.iconBtn}
          color="primary"
          aria-label="upload picture"
          component="span"
          disableTouchRipple={true}
        >
          <VideocamIcon className={classes.iconBtn} />
        </IconButton>
      </Grid>
      <Grid item sm={9} className={classes.fileNameCon}>
        <span className={classes.fileName}>{file.name}</span>
      </Grid>
      {flags.uploading && (
        <Grid item sm={2} className={classes.progressBarCon}>
          <CircularProgressWithLabel value={progress} />
        </Grid>
      )}
      {flags.success && (
        <Grid item sm={2}>
          <CheckCircleIcon className={classes.completeMarkIcon} />
        </Grid>
      )}
      {flags.error && (
        <Grid item sm={2}>
          <ErrorIcon className={classes.errorMarkIcon} />
        </Grid>
      )}
    </Grid>
  );
};

export default SingleFileUploader;
