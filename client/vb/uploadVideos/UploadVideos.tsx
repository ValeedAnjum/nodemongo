import { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import FilesPipelines from "./filesPipline/FilesPipelines";
import { makeStyles } from "@material-ui/core";
import UploadBottomBtn from "./UploadBottomBtn";
import { uploadFiles } from "../../../store/actions/adminActions";

const useStyles = makeStyles(() => {
  return {
    inputHtmlEle: {
      display: "none !important",
    },
  };
});
const UploadVideos = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const htmlInputEle = useRef<HTMLInputElement | null>(null);
  const [files, setFiles] = useState<any>([]);
  const fileChangeHandler = async (e: any) => {
    try {
      const files = e.target.files;
      dispatch(uploadFiles(files));
      // console.log(files);
      // setFiles(() => [...files]);
    } catch (error) {
      console.log(error);
    }
  };

  const onUploadBtnClickHand = () => {
    htmlInputEle.current?.click();
  };
  return (
    <div>
      <input
        type="file"
        onChange={fileChangeHandler}
        multiple
        accept="video/mp4"
        className={classes.inputHtmlEle}
        ref={htmlInputEle}
      />
      <UploadBottomBtn onClick={onUploadBtnClickHand} />
    </div>
  );
};

export default UploadVideos;
