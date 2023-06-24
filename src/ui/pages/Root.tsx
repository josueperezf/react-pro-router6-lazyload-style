import { Outlet } from 'react-router-dom';
import { SideBar } from "../components/SideBar"
import "../../index.css";


export const Root = () => {
  return (
    <div className="main-layout">
        <SideBar/>
        <>
          <Outlet />
        </>
    </div>
  )
}
