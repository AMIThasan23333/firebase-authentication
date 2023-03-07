import logo from './logo.svg';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import Main from './Components/Main/Main';



function App() {


  const router = createBrowserRouter([
              
    {
      path : '/',
      element: <Main></Main>,

      children: [

        {
          path : '/',
          element: <Home></Home>,
        },

        {
          path : '/login',
          element: <Login></Login>,
        },


        {
          path : '/register',
          element: <Register></Register>,
        },

       

      ]
    }

        
  ])


  return (
    <div >


     <RouterProvider router={router}></RouterProvider>          


    </div>
  );
}

export default App;
