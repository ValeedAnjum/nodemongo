import { useState, useContext } from "react";
import Pagination from "@material-ui/lab/Pagination";
import { makeStyles } from "@material-ui/core";
import { VideoBankContext } from "../videoBankContext/VideoBankContext";
const useStyles = makeStyles(() => {
  return {
    pagination: {
      padding: "0 !important",
      boxShadow: "none !important",
      "& .MuiPagination-ul": {
        width: "50%",
        margin: "auto",
      },
    },
  };
});
const VideoPagination = () => {
  const classes = useStyles();
  const { pages, setPages, fetchNextVideoCourse } =
    useContext(VideoBankContext);
  const { currentPage, totalPages, coursesPerPage } = pages;
  const handleChange = (e: React.ChangeEvent<unknown>, p: number) => {
    fetchNextVideoCourse(p);
    setPages((pre) => ({ ...pre, currentPage: p }));
  };
  console.log("pagi", pages);
  return (
    <Pagination
      className={classes.pagination}
      onChange={handleChange}
      count={Math.round(totalPages / coursesPerPage)}
      page={currentPage === 0 ? 1 : currentPage}
      color="secondary"
    />
  );
};

export default VideoPagination;
