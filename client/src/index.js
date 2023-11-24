import ReactDOM from 'react-dom/client';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import Home from './View/Home/Home'
import './index.css';
import Signup from './View/Signup/Signup';
import Login from './View/Login/Login'
import Buy from './View/Buy/Buy';
import Myorders from './View/Myorders/Myorders';
const root=ReactDOM.createRoot(document.getElementById('root'));

const router=createBrowserRouter([{
  "path":"/",
  "element":<Home/>
},

{
  "path":"/Signup",
  "element":<Signup/>
},

{
  "path":"/Login",
  "element":<Login/>
},
{
  "path":"buy/:id",
  "element":<Buy/>

},
{
"path":"/Myorders",
"element":<Myorders/>
}
])

root.render(
  <RouterProvider router={router}/>
);