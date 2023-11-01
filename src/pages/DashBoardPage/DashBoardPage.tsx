import DashBoardInfo from "../../components/DashBoardInfo/DashBoardInfo";
import Deliveries from "../../components/Deliveries/Deliveries";
import NavBar from "../../components/NavBar/NavBar";
import SideBar from "../../components/SideBar/SideBar";

const DashBoardPage = () => {
  return (
    <div>
      <NavBar />
      <div>
        <SideBar>
          <Deliveries />
          <DashBoardInfo />
        </SideBar>
      </div>
    </div>
  );
};

export default DashBoardPage;
