// import React from 'react'

import Post from "./Post";
import { useSelector } from 'react-redux'





export default function Posts() {
  const feed = useSelector((state) => state.feed);
  
  return (
    <>
      {[...feed].reverse().map((feed) =>{
        return (
          <Post key={feed.postId} {...feed} />
        )
      })}
    </>
  )
}
