import { createBrowserRouter } from 'react-router-dom'
import App from './App'
import Home from './pages/Home';
import CreatePost from './pages/CreatePost';
import Message from './pages/Message';
import Feed from './pages/Feed';

const router = createBrowserRouter([
    {
        element: <App/>,
        children:[
            {
                path:'/',
                element: <Home/>

            },
            {
                path:'/post',
                element: <CreatePost/>
            },
            {
                path:'/message',
                element: <Message/>
            },
            {
                path:'/feed',
                element: <Feed/>
            },
        
        ]
    }
])

export default router;