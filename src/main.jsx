import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import About from './components/About/About.jsx';
import Contact from './components/Contact/Contact.jsx';
import Home from './components/Home/Home.jsx';
import First from './components/First/First.jsx';
import Friends from './components/Friends/Friends.jsx';
import FriendDetail from './components/FriendDetail/FriendDetail.jsx';
import Post from './components/Post/Post.jsx';
import Posts from './components/Posts/Posts.jsx';
import PostDetail from './components/PostDetail/PostDetail.jsx';

const router = createBrowserRouter([
  // {
  //   path: "/",
  //   element: <div>Hello world!</div>,
  // },
  // {
  //   path:'/about',
  //   element:<About></About>
  // },
  // {
  //   path:'/contact',
  //   element:<Contact></Contact>
  // },
  //   {
  //   path: "*",
  //   element: <Error></Error>
  // },

  {
    path: '/',
    element: <Home></Home>,
    children: [
      {
        path:'/',
        element: <First></First>
      },
      {
        path:'friends',
        element: <Friends></Friends>,
        loader: () => fetch('https://jsonplaceholder.typicode.com/users')
      },
      {
        path: 'friend/:friendID',
        element: <FriendDetail></FriendDetail>,
        loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/users/${params.friendID}`)
      },
      {
        path: 'posts',
        element: <Posts></Posts>,
        loader: () => fetch('https://jsonplaceholder.typicode.com/posts')
      },
      {
        path: 'posts/:postID',
        element: <PostDetail></PostDetail>,
        loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/posts/${params.postID}`)
      },
      {
        path: 'about',
        element: <About></About>
      },
      {
        path:'contact',
        element: <Contact></Contact>
      },
      {
        path: '*',
        element: <div>404 Error</div>
      }
    ]
  }

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
