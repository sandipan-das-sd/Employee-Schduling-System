import React, { useState, useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Test from "./components/Test";
import SlideNavbar from "./components/SlideNavbar";
import NavBar from "./components/NavBar";
import Dashboard from "./components/Dashboard/Dashboard";
import ApplyLeave from "./components/Leave/ApplyLeave";
import LeaveHistory from "./components/Leave/LeaveHistory";

import AddStaff from "./components/Staff/Add Staff";
import ManageStaff from "./components/Staff/ManageStaff";
import Login from "./components/Authentication/Login";
import SignUp from "./components/Authentication/SignUp";
import StaffLeave from "./components/Leave/StaffLeave";
import AddAdmin from "./components/Admin/AddAdmin";
import ManageAdmin from "./components/Admin/ManageAdmin";
import VerifyOTP from "./components/Authentication/VerifyOTP";
import EditTask from "./components/Task/EditTask";
import AddOwner from "./components/Owner/AddOwner";
import ManageOwner from "./components/Owner/ManageOwner";
function App() {
  const [isLargeDevice, setIsLargeDevice] = useState(window.innerWidth >= 1300);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeDevice(window.innerWidth >= 1300);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          {<SlideNavbar />}
          <NavBar />
          <Dashboard />
        </>
      ),
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/signup",
      element: <SignUp />,
    },

    {
      path: "/addAdmin",
      element: (
        <>
          {isLargeDevice && <SlideNavbar />}
          <NavBar />
          <AddAdmin />
        </>
      ),
    },
    {
      path: "/manageAdmin",
      element: (
        <>
          {isLargeDevice && <SlideNavbar />}
          <NavBar />
          <ManageAdmin />
        </>
      ),
    },
    {
      path: "/editTask",
      element: (
        <>
          {isLargeDevice && <SlideNavbar />}
          <NavBar />
          <EditTask/>
        </>
      ),
    },

    {
      path: "/verify-email",
      element: (
        <>
          {isLargeDevice && <SlideNavbar />}
          <NavBar />
          <VerifyOTP />
        </>
      ),
    },
    {
      path: "/Staffleave",
      element: (
        <>
          {isLargeDevice && <SlideNavbar />}
          <NavBar />
          <StaffLeave />
        </>
      ),
    },

    {
      path: "/addStaff",
      element: (
        <>
          {isLargeDevice && <SlideNavbar />}
          <NavBar />
          <AddStaff />
        </>
      ),
    },
    {
      path: "/manageStaff",
      element: (
        <>
          {isLargeDevice && <SlideNavbar />}
          <NavBar />
          <ManageStaff />
        </>
      ),
    },
    {
      path: "/addOwner",
      element: (
        <>
          {isLargeDevice && <SlideNavbar />}
          <NavBar />
          <AddOwner/>
        </>
      ),
    },
    {
      path: "/manageOwner",
      element: (
        <>
          {isLargeDevice && <SlideNavbar />}
          <NavBar />
          <ManageOwner/>
        </>
      ),
    },

    {
      path: "/applyLeave",
      element: (
        <>
          {isLargeDevice && <SlideNavbar />}
          <NavBar />
          <ApplyLeave />
        </>
      ),
    },
    {
      path: "/leaveHistory",
      element: (
        <>
          {isLargeDevice && <SlideNavbar />}
          <NavBar />
          <LeaveHistory />
        </>
      ),
    },
    {
      path: "/test",
      element: <Test />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
