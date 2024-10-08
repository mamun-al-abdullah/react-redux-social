// import React from 'react'

import LeftSidebar from "./leftSidebar/LeftSidebar";
import MiddleLayout from "./middleLayout/MiddleLayout";
import RightSidebar from "./rightSidebar/RightSidebar";

export default function Main() {
  return (
    <>
        <div className="container _custom_container">
				<div className="_layout_inner_wrap">
					<div className="row">
            <LeftSidebar/>
						<MiddleLayout/>
						<RightSidebar/>
				</div>
			</div>
        </div>
    </>
  )
}
