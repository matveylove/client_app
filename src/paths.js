import { Home, FullPost, Registration, AddPost, Login } from "./pages";

export const PATHS = {
    home: {
        path: '/',
        element: <Home />
    },
    login: {
        path: '/login',
        element: <Login />
    },
    register: {
        path: '/register',
        element: <Registration />
    },
    fullPost: {
        path: '/posts/:id',
        element: <FullPost />
    },
    addPost: {
        path: '/add-post',
        element: <AddPost />
    },
}