import "../App.css"; 
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Sign from "./Sign";
import Login from "./Longin";
import Main from "./Main";
function App() {

  const route = createBrowserRouter([
    {
      path: "/",
      element: < Sign />,
    }, 

    {
      path: "/login",
      element: <Login />,
    }, 

    {
      path: "/main",
      element: <Main />,
    }, 
  ]); 

  return (
    <div className="App">
      <header className="App-header">
        <RouterProvider router={route}></RouterProvider>
      </header>
    </div>
  );
}

export default App;