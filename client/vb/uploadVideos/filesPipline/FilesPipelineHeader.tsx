import { makeStyles, Grid, IconButton } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles(() => {
  return {
    header: {
      backgroundColor: "#000000c4",
      color: "white",
      padding: "0.2em",
      alignItems: "center",
      borderRadius: "3px 3px 0 0",
    },
    h3Heading: {
      color: "white",
      maring: "0 !important",
    },
    iconBtn: {
      color: "white",
    },
    iconCons: {
      textAlign: "right",
    },
    arowExpan: {
      transform: "rotate(180deg)",
    },
  };
});
const FilesPipelineHeader: React.FC<any> = ({ files, minClickHan, min }) => {
  const classes = useStyles();

  return (
    <Grid container className={classes.header}>
      <Grid item sm={9}>
        <div className={classes.h3Heading}>Uplaoding {files} files</div>
      </Grid>
      <Grid item sm={2} className={classes.iconCons}>
        <IconButton
          color="primary"
          aria-label="upload picture"
          component="span"
          onClick={minClickHan}
        >
          <ExpandMoreIcon
            className={`${classes.iconBtn} ${min ? classes.arowExpan : null}`}
          />
        </IconButton>
      </Grid>
      <Grid item sm={1} className={classes.iconCons}>
        <IconButton
          color="primary"
          aria-label="upload picture"
          component="span"
        >
          <CloseIcon className={classes.iconBtn} />
        </IconButton>
      </Grid>
    </Grid>
  );
};

export default FilesPipelineHeader;
