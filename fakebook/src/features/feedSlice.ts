import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { TsinglePostInfo } from '../components/main/middleLayout/Post'
import { ClocalStorageFeedData } from '../utils/constants'

type Tfeed = TsinglePostInfo[]

let initialState = [
{
    postId: 1,
    userId: 1,
    name:"me",
    avatar:"https://picsum.photos/80",
    timeStamp:new Date().getTime()-5000,
    privacy:"Public",
    status:"Health tracker app",
    imgUrl:"assets/images/timeline_img.png",
    likes: 10,
    shares: 3,
    comments: [
        {
            postId: 1,
            userId: 2,
            name:"other",
            avatar:"https://picsum.photos/200",
            timeStamp:new Date().getTime()-4000,
            comment:"This is a great app!",
            likes: 5,
        },
        {
            postId: 1,
            userId: 3,
            name:"another",
            avatar:"https://picsum.photos/100",
            timeStamp:new Date().getTime()-3000,
            comment:"I love it!",
        },
    ],
},
{
    postId: 2,
    userId: 4,
    name:"other",
    avatar:"https://picsum.photos/200",
    timeStamp:new Date().getTime()-5000000,
    privacy:"Private",
    status:"Other status",
    imgUrl:"https://picsum.photos/500",
    likes: 15,
    shares: 2,
    comments: [
        {
            postId: 2,
            userId: 5,
            name:"me",
            avatar:"https://picsum.photos/80",
            timeStamp:new Date().getTime()-4000,
            comment:"I agree with you!",
            likes: 3,
        },
        {
            postId: 2,
            userId: 6,
            name:"another",
            avatar:"https://picsum.photos/100",
            timeStamp:new Date().getTime()-3000,
            comment:"Thank you!",
        },
        {
            postId: 2,
            userId: 5,
            name:"me",
            avatar:"https://picsum.photos/80",
            timeStamp:new Date().getTime()-3000,
            comment:"I'm glad to hear that!",
            likes: 2,
        }
    ],
},
{
    postId: 3,
    userId: 9,
    name:"another",
    avatar:"https://picsum.photos/100",
    timeStamp:new Date().getTime()-50000000,
    privacy:"Public",
    status:"Another status",
    imgUrl:"https://picsum.photos/300",
    likes: 13,
    shares: 1,
},
{
    postId: 4,
    userId: 12,
    name:"me",
    avatar:"https://picsum.photos/80",
    timeStamp:new Date().getTime()-500000000,
    privacy:"Private",
    status:"Last status",
    imgUrl:"https://picsum.photos/400",
    likes: 17,
    shares: 0,
    comments: [
        {
            postId: 4,
            userId: 13,
            name:"other",
            avatar:"https://picsum.photos/200",
            timeStamp:new Date().getTime()-4000,
            comment:"I agree with you!",
            likes: 3,
        },
    ],
},
] satisfies Tfeed as Tfeed

const localStorageFeedData = ''//localStorage.getItem(ClocalStorageFeedData);

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