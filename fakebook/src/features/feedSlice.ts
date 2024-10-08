import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { TsinglePostInfo } from '../components/main/middleLayout/Post'
import { ClocalStorageFeedData } from '../utils/constants'

type Tfeed = TsinglePostInfo[]

let initialState = [
{
    userId: 1,
    name:"me",
    avatar:"assets/images/post_img.png",
    timeStamp:new Date().getTime()-5000,
    privacy:"Public",
    status:"Health tracker app",
    imgUrl:"assets/images/timeline_img.png",
    likes: 10,
    comments: 5,
    shares: 3,
},
{
    userId: 2,
    name:"other",
    avatar:"https://picsum.photos/200",
    timeStamp:new Date().getTime()-5000000,
    privacy:"Private",
    status:"Other status",
    imgUrl:"https://picsum.photos/500",
    likes: 15,
    comments: 13,
    shares: 2,
},
{
    userId: 3,
    name:"another",
    avatar:"https://picsum.photos/100",
    timeStamp:new Date().getTime()-50000000,
    privacy:"Public",
    status:"Another status",
    imgUrl:"https://picsum.photos/300",
    likes: 13,
    comments: 7,
    shares: 1,
}
] satisfies Tfeed as Tfeed

const localStorageFeedData = localStorage.getItem(ClocalStorageFeedData);

if(localStorageFeedData){initialState = JSON.parse(localStorageFeedData)}

const feedSlice = createSlice({
  name: 'feed',
  initialState,
  reducers: {
    addToFeed(state, action: PayloadAction<TsinglePostInfo>) {
      state.push(action.payload)
      localStorage.setItem(ClocalStorageFeedData, JSON.stringify(state))
    },
  },
})

export const { addToFeed} = feedSlice.actions
export default feedSlice.reducer