import { useState } from "react";
import { makeStyles } from "@material-ui/core";
import { useSelector } from "react-redux";
import FilesPipelineHeader from "./FilesPipelineHeader";
import SingleFileUploader from "./SingleFileUploader";

const useStyles = makeStyles(() => {
  return {
    Files: {
      position: "fixed",
      bottom: "1em",
      right: "2em",
      width: "25%",
      border: "1px solid #000000c4",
      borderRadius: "6px 6px 0 0",
      backgroundColor: "white",
      zIndex: "99999999999999999",
    },
    singleFileCon: {
      height: "30vh",
      overflow: "auto",
      transition: "0.1s",
    },
    minimize: {
      height: 0,
      transition: "0.1s",
    },
  };
});
const FilesPipelines: React.FC = () => {
  const classes = useStyles();
  const files = useSelector<any>((state) => state.admin.files);
  const [flags, setflags] = useState({ minimize: false });
  const minClickHan = () => {
    setflags((pre) => ({ ...pre, minimize: !flags.minimize }));
  };
  return (
    <div className={classes.Files}>
      <FilesPipelineHeader
        files={files.length}
        min={flags.minimize}
        minClickHan={minClickHan}
      />
      <div
        className={`${classes.singleFileCon} ${
          flags.minimize ? classes.minimize : null
        }`}
      >
        {files &&
          files.length > 0 &&
          files.map((file) => {
            return <SingleFileUploader file={file} />;
          })}
      </div>
    </div>
  );
};

export default FilesPipelines;
