export interface VideoBankInterface {
  listOfFolder:
    | {
        _id: string;
        title: string;
      }[]
    | null;
  folderIsOpen: {
    name: boolean | string;
    id: null | string;
  };
  setFolderIsOpen: React.Dispatch<
    React.SetStateAction<{
      name: boolean | string;
      id: null | string;
    }>
  >;
  pages: {
    currentPage: number;
    totalPages: number;
    coursesPerPage: number;
  };
  setPages: React.Dispatch<
    React.SetStateAction<{
      currentPage: number;
      totalPages: number;
      coursesPerPage: number;
    }>
  >;
  infoCon: {
    selectedCategoy: string;
    categories:
      | {
          name: string;
        }[];
  };
  setInfoCon: React.Dispatch<
    React.SetStateAction<{
      selectedCategoy: string;
      categories:
        | {
            name: string;
          }[];
    }>
  >;
  fetchNextVideoCourse: (p: number) => void;
  handleCategoryChange: (name: string) => void;
}
