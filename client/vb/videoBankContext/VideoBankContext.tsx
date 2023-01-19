import { createContext, useState, useEffect } from "react";
import axios from "axios";
import { VideoBankInterface } from "./VideoBanlContextInterface";

export const VideoBankContext = createContext<VideoBankInterface>(
  {} as VideoBankInterface
);

const VideoBankContextProvider: React.FC<any> = (props) => {
  const [courses, setCourses] =
    useState<VideoBankInterface["listOfFolder"]>(null);

  const [folderIsOpen, setFolderIsOpen] = useState<
    VideoBankInterface["folderIsOpen"]
  >({ name: false, id: null });

  const [pages, setPages] = useState<VideoBankInterface["pages"]>({
    currentPage: 0,
    totalPages: 0,
    coursesPerPage: 5,
  });

  const [infoCon, setInfoCon] = useState<VideoBankInterface["infoCon"]>({
    selectedCategoy: "Select",
    categories: [{ name: "Select" }],
  });
  useEffect(() => {
    fetchCourses();
    fetchCategories();
  }, []);
  const fetchCourses = async () => {
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_BackendURL}/course/getCoursesbynum/${pages.currentPage}`
      );
      console.log(res.data);
      setPages((pre) => ({ ...pre, totalPages: res.data.total }));
      setCourses(() => res.data.courses);
    } catch (error) {
      console.log(error);
    }
  };
  const fetchCategories = async () => {
    const res = await axios.get(
      `${process.env.REACT_APP_BackendURL}/course/getAllGategories`
    );

    setInfoCon((pre) => ({
      ...pre,
      categories: [...pre.categories, ...res.data.courses],
    }));
  };
  const fetchNextVideoCourse = async (page: number) => {
    setCourses(null);
    const res = await axios.get(
      `${process.env.REACT_APP_BackendURL}/course/getCoursesbynum/${page}`
    );
    setPages((pre) => ({ ...pre, totalPages: res.data.total }));
    setCourses(() => res.data.courses);
  };
  const handleCategoryChange = async (categoryName: string) => {
    setInfoCon((pre) => ({ ...pre, selectedCategoy: categoryName }));
    if (categoryName === "Select") {
      fetchCourses();
      return;
    }
    setCourses(null);
    const res = await axios.get(
      `${process.env.REACT_APP_BackendURL}/course/getVideoCoursesByCategory/${categoryName}`
    );
    setPages((pre) => ({
      ...pre,
      currentPage: 0,
      totalPages: 0,
    }));
    setCourses(() => res.data.courses);
  };
  return (
    <VideoBankContext.Provider
      value={{
        listOfFolder: courses,
        folderIsOpen,
        setFolderIsOpen,
        pages,
        setPages,
        fetchNextVideoCourse,
        infoCon,
        setInfoCon,
        handleCategoryChange,
      }}
    >
      {props.children}
    </VideoBankContext.Provider>
  );
};

export default VideoBankContextProvider;
