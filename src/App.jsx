import React from "react"
import ChatPage from "./pages/chat_page"
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import LoginPage from "./pages/login_page";
import SignupPage from "./pages/signup_page";

const router = createBrowserRouter([
  {
    path: "/chat",
    element: <ChatPage />,
  },
  {
    path: "/login",
    element: <LoginPage />
  },
  {
    path: "/signup",
    element: <SignupPage />
  }
]);

function App() {
  return <RouterProvider router={router} />
}

export default App
