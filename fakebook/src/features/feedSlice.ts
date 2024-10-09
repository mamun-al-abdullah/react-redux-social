import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { TsingleCommentInfo, TsingleLikeInfo, TsinglePostInfo } from '../components/main/middleLayout/Post'
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
    likes: [
        {
            postId: 1,
            userId: 2,
            avatar:"https://picsum.photos/200"
        },
        {
            postId: 1,
            userId: 3,
            avatar:"https://picsum.photos/100"
        },
        {
            postId: 1,
            userId: 4,
            avatar:"https://picsum.photos/300"
        }
    ],
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
    likes: [
        {
            postId: 2,
            userId: 5,
            avatar:"https://picsum.photos/80"
        },
        {
            postId: 2,
            userId: 1,
            avatar:"https://picsum.photos/100"
        }, 
    ],
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
    likes: [],
    shares: 1,
},
{
    postId: 4,
    userId: 1,
    name:"me",
    avatar:"https://picsum.photos/80",
    timeStamp:new Date().getTime()-500000000,
    privacy:"Private",
    status:"Last status",
    imgUrl:"https://picsum.photos/400",
    likes: [
        {
            postId: 4,
            userId: 13,
            avatar:"https://picsum.photos/200"
        },
        {
            postId: 4,
            userId: 14,
            avatar:"https://picsum.photos/100"
        },
        {
            postId: 4,
            userId: 15,
            avatar:"https://picsum.photos/50"
        },
        {
            postId: 4,
            userId: 16,
            avatar:"https://picsum.photos/60"
        },
        {
            postId: 4,
            userId: 17,
            avatar:"https://picsum.photos/70"
        },
        {
            postId: 4,
            userId: 18,
            avatar:"https://picsum.photos/80"
        },
        {
            postId: 4,
            userId: 19,
            avatar:"https://picsum.photos/90"
        },
        {
            postId: 4,
            userId: 20,
            avatar:"https://picsum.photos/100"
        },
        {
            postId: 4,
            userId: 21,
            avatar:"https://picsum.photos/110"
        },
        {
            postId: 4,
            userId: 22,
            avatar:"https://picsum.photos/120"   
        },
        {
            postId: 4,
            userId: 23,
            avatar:"https://picsum.photos/130"
        }
    ],
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
    addToLike(state, action: PayloadAction<TsingleLikeInfo>) {
        const index = state.findIndex((post) => post.postId === action.payload.postId)
        if (index === -1) return;
        if (!state[index].likes) {
            state[index].likes = [];
            state[index].likes.push(action.payload)
        }else{
            //toggle like list item by payload userId
            const likeIndex = state[index].likes.findIndex((like) => like.userId === action.payload.userId)
            if (likeIndex === -1) {
                state[index].likes.push(action.payload)
            } else {
                state[index].likes.splice(likeIndex, 1)
            }
        }
        // localStorage.setItem(ClocalStorageFeedData, JSON.stringify(state))
    },
    addToComment(state, action: PayloadAction<TsingleCommentInfo>) {
        const index = state.findIndex((post) => post.postId === action.payload.postId)
        if (index === -1) return;
        if (!state[index].comments) {
            state[index].comments = [];
        }
        state[index].comments.push(action.payload)
        localStorage.setItem(ClocalStorageFeedData, JSON.stringify(state))
    },
  },
})

export const { addToFeed, addToLike, addToComment} = feedSlice.actions
export default feedSlice.reducer