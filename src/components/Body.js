import React from 'react'
import Login from './Login'
import BrowserPage from './BrowserPage'
import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'
import ProtectedRoute from './ProtectedRoute'

const Body = () => {
    const appRouter = createBrowserRouter([
        {
            path: "/",
            element: <Login />
        },
        {
            path: "/browse",
            element: (
                <ProtectedRoute>
                    <BrowserPage />
                </ProtectedRoute>
            )
        }
    ]
    )
    return (
        <div>
            <RouterProvider router={appRouter}>

            </RouterProvider>
         
        </div>
    )
}

export default Body