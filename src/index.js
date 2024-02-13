import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import News from './Components/News'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <News country={"in"} key={'general'} category={"general"}/>
      },
      {
        path: "general",
        element: <News country={"in"} key={'general'} category={"general"}/>
      },
      {
        path: "business",
        element: <News country={"in"} key={"business"} category={"business"}/>
      },
      {
        path: "entertainment",
        element: <News country={"in"} key={"entertainment"} category={"entertainment"}/>
      },
      {
        path: "health",
        element: <News country={"in"} key={"category"} category={"health"}/>
      },
      {
        path: "science",
        element: <News country={"in"} key={"science"} category={"science"}/>
      },
      {
        path: "sports",
        element: <News country={"in"} key={"sports"} category={"sports"}/>
      },
      {
        path: "technology",
        element: <News country={"in"} key={"technology"} category={"technology"}/>
      },
    ]
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
