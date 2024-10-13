import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { TsingleCommentInfo, TsingleInnermostCommentInfo, TsingleLikeInfo, TsinglePostInfo, Tuser } from '../components/main/middleLayout/Post'
import { ClocalStorageFeedData } from '../utils/constants'

export type Tfeed = {
    account : {
        userId: number,
        isLoggedIn : boolean,
    },
    users : Tuser[],
    feed : TsinglePostInfo[]
}

let initialState = {
    account: {
        userId: 1,
        isLoggedIn : true,
    },
    users : [
        {
            userId: 1,
            name: 'Me',
            avatar: 'assets/images/slider3.png',
        },
        {
            userId: 2,
            name: 'User2',
            avatar: 'https://picsum.photos/40',
        },
        {
            userId: 3,
            name: 'User3',
            avatar: 'https://picsum.photos/50',
        },
        {
            userId: 4,
            name: 'User4',
            avatar: 'https://picsum.photos/60',
        },
        {
            userId: 5,
            name: 'User5',
            avatar: 'https://picsum.photos/70',
        },
        {
            userId: 6,
            name: 'User6',
            avatar: 'https://picsum.photos/80',
        },
        {
            userId: 7,
            name: 'User7',
            avatar: 'https://picsum.photos/90',
        },
        {
            userId: 8,
            name: 'User8',
            avatar: 'https://picsum.photos/100',
        },
        {
            userId: 9,
            name: 'User9',
            avatar: 'https://picsum.photos/110',
        },
        {
            userId: 10,
            name: 'User10',
            avatar: 'https://picsum.photos/120',
        },
        {
            userId: 11,
            name: 'User11',
            avatar: 'https://picsum.photos/130',
        },
        {
            userId: 12,
            name: 'User12',
            avatar: 'https://picsum.photos/140',
        },
        {
            userId: 13,
            name: 'User13',
            avatar: 'https://picsum.photos/150',
        },
        {
            userId: 14,
            name: 'User14',
            avatar: 'https://picsum.photos/160',
        },
        {
            userId: 15,
            name: 'User15',
            avatar: 'https://picsum.photos/170',
        },
        {
            userId: 16,
            name: 'User16',
            avatar: 'https://picsum.photos/180',
        },
        {
            userId: 17,
            name: 'User17',
            avatar: 'https://picsum.photos/190',
        },
        {
            userId: 18,
            name: 'User18',
            avatar: 'https://picsum.photos/200',
        },
        {
            userId: 19,
            name: 'User19',
            avatar: 'https://picsum.photos/210',
        },
        {
            userId: 20,
            name: 'User20',
            avatar: 'https://picsum.photos/220',
        },
    ],
    feed: [
        {
            postId: 1,
            userId: 1,
            timeStamp:new Date().getTime()-5000,
            privacy:"Public",
            status:"Health tracker app",
            imgUrl:"assets/images/timeline_img.png",
            likes: [
                {
                    postId: 1,
                    userId: 2,
                },
                {
                    postId: 1,
                    userId: 3,
                },
                {
                    postId: 1,
                    userId: 4,
                }
            ],
            shares: 3,
            comments: [
                {
                    postId: 1,
                    userId: 2,
                    commentId : 1,
                    timeStamp:new Date().getTime()-4000,
                    comment:"This is a great app!",
                    likes: 5,
                },
                {
                    postId: 1,
                    userId: 3,
                    commentId : 2,
                    timeStamp:new Date().getTime()-3000,
                    comment:"I love it!",
                },
            ],
        },
        {
            postId: 2,
            userId: 4,
            timeStamp:new Date().getTime()-5000000,
            privacy:"Private",
            status:"Other status",
            imgUrl:"https://picsum.photos/500",
            likes: [
                {
                    postId: 2,
                    userId: 5,
                },
                {
                    postId: 2,
                    userId: 1,
                }, 
            ],
            shares: 2,
            comments: [
                {
                    postId: 2,
                    userId: 5,
                    commentId : 1,
                    timeStamp:new Date().getTime()-4000,
                    comment:"I agree with you!",
                    likes: 3,
                },
                {
                    postId: 2,
                    userId: 6,
                    commentId : 2,
                    timeStamp:new Date().getTime()-3000,
                    comment:"Thank you!",
                },
                {
                    postId: 2,
                    userId: 5,
                    commentId : 3,
                    timeStamp:new Date().getTime()-3000,
                    comment:"I'm glad to hear that!",
                    likes: 2,
                }
            ],
        },
        {
            postId: 3,
            userId: 9,
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
            timeStamp:new Date().getTime()-500000000,
            privacy:"Private",
            status:"Last status",
            imgUrl:"https://picsum.photos/400",
            likes: [
                {
                    postId: 4,
                    userId: 13,
                },
                {
                    postId: 4,
                    userId: 14,
                },
                {
                    postId: 4,
                    userId: 15,
                },
                {
                    postId: 4,
                    userId: 16,
                },
                {
                    postId: 4,
                    userId: 17,
                },
                {
                    postId: 4,
                    userId: 18,
                },
                {
                    postId: 4,
                    userId: 19,
                },
                {
                    postId: 4,
                    userId: 20,
                },
                {
                    postId: 4,
                    userId: 21,
                },
                {
                    postId: 4,
                    userId: 22,
                },
                {
                    postId: 4,
                    userId: 23,
                }
            ],
            shares: 0,
            comments: [
                {
                    postId: 4,
                    userId: 13,
                    commentId: 3,
                    timeStamp:new Date().getTime()-4000,
                    comment:"I agree with you!",
                    likes: 3,
                    innerMostComments : [
                        {
                            postId: 4,
                            userId: 1,
                            commentId: 3,
                            innerMostCommentId : 1,
                            timeStamp:new Date().getTime()-3000,
                            comment:"inner most comment with my id from redux store!",
                            likes: 3,
                        },
                        {
                            postId: 4,
                            userId: 14,
                            commentId: 3,
                            innerMostCommentId : 2,
                            timeStamp:new Date().getTime()-3000,
                            comment:"inner most comment from redux store!",
                            likes: 2,
                        }
                    ]
                },
            ],
        },
        ]
} satisfies Tfeed as Tfeed

const localStorageFeedData = localStorage.getItem(ClocalStorageFeedData);

if(localStorageFeedData){initialState = JSON.parse(localStorageFeedData)}

const feedSlice = createSlice({
  name: 'feed',
  initialState,
  reducers: {
    addToFeed(state, action: PayloadAction<TsinglePostInfo>) {
      state.feed.push(action.payload)
      localStorage.setItem(ClocalStorageFeedData, JSON.stringify(state))
    },
    addToLike(state, action: PayloadAction<TsingleLikeInfo>) {
        const index = state.feed.findIndex((post) => post.postId === action.payload.postId)
        if (index === -1) return;
        if (!state.feed[index].likes) {
            state.feed[index].likes = [];
            state.feed[index].likes.push(action.payload)
        }else{
            //toggle like list item by payload userId
            const likeIndex = state.feed[index].likes.findIndex((like) => like.userId === action.payload.userId)
            if (likeIndex === -1) {
                state.feed[index].likes.push(action.payload)
            } else {
                state.feed[index].likes.splice(likeIndex, 1)
            }
        }
        localStorage.setItem(ClocalStorageFeedData, JSON.stringify(state))
    },
    addToComment(state, action: PayloadAction<TsingleCommentInfo>) {
        const index = state.feed.findIndex((post) => post.postId === action.payload.postId)
        if (index === -1) return;
        if (!state.feed[index].comments) {
            state.feed[index].comments = [];
        }
        state.feed[index].comments.push(action.payload)
        localStorage.setItem(ClocalStorageFeedData, JSON.stringify(state))
    },
    replytoComment(state, action: PayloadAction<TsingleInnermostCommentInfo>) {
        const postIndex = state.feed.findIndex((post) => post.postId === action.payload.postId)
        const selectedPost = state.feed[postIndex]
        const comments = selectedPost.comments
        if (!comments) return
        const commentIndex = comments.findIndex((comment) => comment.commentId === action.payload.commentId)
        const selectedComment = comments[commentIndex] 

        if (!selectedComment.innerMostComments) {
            selectedComment.innerMostComments = [];
        }
        selectedComment.innerMostComments.push(action.payload)
        localStorage.setItem(ClocalStorageFeedData, JSON.stringify(state))
    },
  },
})

export const { addToFeed, addToLike, addToComment,replytoComment} = feedSlice.actions
export default feedSlice.reducer