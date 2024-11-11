import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
// import { setToken } from "../../slice/authSlice";
import { logout } from "../../slice/authSlice";
import { toast } from "react-toastify";
// import { useDispatch } from "react-redux";

const Navigation = () => {
    const navigate = useNavigate();

    // const handlerLogout = () =>{
    //     localStorage.removeItem("token");
    //     setToken(null);
    //     console.log(token)
    //     navigate("/");
    //     // token = null;
    // }
    const {token} = useSelector((state)=>state.auth);
    const dispatch = useDispatch();
        const handleLogout = () => {
            toast.success("Logout successfully");
            dispatch(logout());
            localStorage.clear();
            navigate("/");
          };
    
  return (
    <div className="flex justify-between bg-blue-600 border py-4 px-8 text-white text-2xl ">
      <div>
        <p>Logo</p>
      </div>
      <div className=" flex space-x-4 text-white ">
        <Link to="#">
          <button className="mr-4 hover:text-black">Home</button>
        </Link>
        {
            !token && (<div className="text-white hover:text-black  cursor-pointer">login</div>)
        }
        {
            token && (<div className="text-white hover:text-black cursor-pointer" onClick={handleLogout}>logout</div>)
        }

      </div>
    </div>
  );
};

export default Navigation;



