// import React from 'react'

import { useSelector } from "react-redux";
import LeftSidebar from "./leftSidebar/LeftSidebar";
import MiddleLayout from "./middleLayout/MiddleLayout";
import RightSidebar from "./rightSidebar/RightSidebar";
import Login from "../../pages/Login";

export default function Main() {
  const { account } = useSelector((state) => state.feed);

  return (
    <>
      {account.isLoggedIn ? (
        <div className="container _custom_container">
          <div className="_layout_inner_wrap">
            <div className="row">
              <LeftSidebar />
              <MiddleLayout />
              <RightSidebar />
            </div>
          </div>
        </div>
      ) : (
        <Login />
      )}
    </>
  );
}
