import { Grid } from "@material-ui/core";
import AdminNav from "../AdminDashboard/Layout/AdminNav";
import AdminSidebar from "../AdminDashboard/Layout/AdminSidebar";
import VideoBankContent from "./VideoBankContent";
import VideoBankContextProvider from "./videoBankContext/VideoBankContext";

const VideoBank = () => {
  return (
    <div>
      <AdminNav />
      <Grid container>
        <AdminSidebar />
        <Grid item sm={9}>
          <VideoBankContextProvider>
            <VideoBankContent />
          </VideoBankContextProvider>
        </Grid>
      </Grid>
    </div>
  );
};

export default VideoBank;
