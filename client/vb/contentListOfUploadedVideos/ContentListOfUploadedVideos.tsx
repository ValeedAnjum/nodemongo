import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { VideoBankContext } from "./../videoBankContext/VideoBankContext";
import ListOfVideos from "./ListOfVideos";
import { useSelector } from "react-redux";
const ContentListOfUploadedVideos = () => {
  const { folderIsOpen } = useContext(VideoBankContext);
  const [listOfUploadedVideos, setListOfUploadedVideos] = useState([]);
  const [flags, setFlags] = useState({ loading: false, noVideo: false });
  const updateList = useSelector((state: any) => state.admin.counter);
  useEffect(() => {
    const fetchListOfUploadedVideos = async () => {
      try {
        setFlags((pre) => ({ ...pre, loading: true }));
        const res = await axios.get(
          `${process.env.REACT_APP_BackendURL}/course/getCourseVideoList/${folderIsOpen.id}`,
          {
            withCredentials: true,
          }
        );
        // console.log(res.data.list);
        //if there is no video
        res.data.list.length === 0
          ? setFlags((pre) => ({ ...pre, noVideo: true }))
          : setFlags((pre) => ({ ...pre, noVideo: false }));
        //if there is no video
        setListOfUploadedVideos(() => res.data.list);
        setFlags((pre) => ({ ...pre, loading: false }));
      } catch (error) {
        console.log(error);
      }
    };
    fetchListOfUploadedVideos();
  }, [updateList]);

  return (
    <>
      {flags.noVideo && <p>There is no video uploaded from video bank</p>}
      {/* {flags.loading && <p>Loading...</p>} */}
      {listOfUploadedVideos.length > 0 && (
        <ListOfVideos listOfUploadedVideos={listOfUploadedVideos} />
      )}
    </>
  );
};

export default ContentListOfUploadedVideos;
