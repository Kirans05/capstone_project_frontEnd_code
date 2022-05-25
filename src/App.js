import { Container } from "@chakra-ui/react";
import { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import ADashBoard from "./Admin/ADashBoard";
import AllUserDetails from "./Admin/AllUserDetails";
import Dietplan from "./Admin/Dietplan";
import EditDiet from "./Admin/EditDiet";
import NewDietPlan from "./Admin/NewDietPlan";
import ViewDiet from "./Admin/ViewDiet";
import Questions from "./user/pages/Questions";
import UserComponents from "./user/pages/UserComponents";
import MyDetails from "./user/UserDashBoard/MyDetails";
import MyDietPlan from "./user/UserDashBoard/MyDietPlan";
import UserdashBoard from "./user/UserDashBoard/UserdashBoard";

function App() {

  // blue.600
  return (
    <Container maxW="100%" bg="white" color="black" fontSize={20} p={0}>
     <Routes>
       {/* user accoutn  */}
       <Route path="/" element={<UserComponents />} />
       <Route path="/dashboard" element={<UserdashBoard />} />
       <Route path="/qusetionsPage" element={<Questions />} />
       <Route path="/myDietPlan" element={<MyDietPlan />} />
       <Route path="/myDetails" element={<MyDetails />} />


       {/* Admin account */}
       <Route path="/adminDashboard" element={<ADashBoard />} />
       <Route path="/newDietPlan" element={<NewDietPlan />} />
       <Route path="/dietPlan" element={<Dietplan />} />
       <Route path="/viewDiet/:id" element={<ViewDiet />} />
       <Route path="/editDiet/:id" element={<EditDiet />} />
       <Route path="/userDetails" element={<AllUserDetails />} />
     </Routes>
    </Container>
  );
}

export default App;
