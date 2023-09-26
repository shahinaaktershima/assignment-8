
import { Outlet } from "react-router-dom";
import Header from './component/Home/Header';


function App() {
 

  return (
    <>
     
    <Header></Header>
      <Outlet></Outlet>
    
    </>
  )
}

export default App
