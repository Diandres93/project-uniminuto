import { createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/Home";
import NotFound from "./pages/NotFound";
import { MovieDetail } from "./components/MovieDetail";
import { MovieList } from "./components/MovieList";


export const App = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement:<NotFound />,
    children:[
      {
        path:"",
        exact:true,
        element:<MovieList />
      },
      {
        path:"movie/:id",
        element:<MovieDetail />
      },
    ],
  
  },
])


