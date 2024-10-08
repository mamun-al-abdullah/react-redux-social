// import React from 'react'

import PeopleCards from "./PeopleCards";
import PostInput from "./PostInput";
import Posts from "./Posts";

export default function MiddleLayout() {
  return (
    <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
        <div className="_layout_middle_wrap">
            <div className="_layout_middle_inner">
                <PeopleCards/>
                <PostInput/>
                <Posts/>
            </div>
        </div>
    </div>
  )
}
