import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import DisplayJobs from "./Components/DisplayJobs";
import Body from "./Components/Body";
import App from './App';
import CompanyJobs from './Components/CompanyJobs';

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <div>sorry, this was not expected</div>,
    children: [
      {
        path: "/",
        element: <Body />
      },
      {
        path: "displayjobs",
        element: <DisplayJobs />,
      },
      {
        path: ":company_name", 
        element: <CompanyJobs/>
      }
    ]
  },

]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter} />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
