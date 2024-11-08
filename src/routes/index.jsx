import { createBrowserRouter } from "react-router-dom";

import Notify from "../components/notify";
import MainLayout from "../layouts";
import Explorer from "../components/explorer";
import Home from "../components/home";
import Profile from "../layouts/LeftBar/profie";


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children:[
      {
        index:true,
        element:<Home/>
      },
      { 
        path: "notify",
        element: <Notify />
    },
      {
        path:"explorer",
        element:<Explorer/>
      },
      {path:':nick',
      element:<Profile/>}
      

  ]
   
  }
  
]);
export default router;
