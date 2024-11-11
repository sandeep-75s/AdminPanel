import { toast } from "react-toastify"
import { endpoint } from "../api";
import { apiConnector } from "../apiConnector";
// import { useSelector } from "react-redux";
import { setUser } from "../../slice/profileSlice";
import { setLoading, setToken } from "../../slice/authSlice"
const {LOGIN_API} = endpoint;

export function login(email, password, navigate) {
    return async (dispatch) => {
      const toastId = toast.loading("Loading...")
      dispatch(setLoading(true))
      
      try {
        const response = await apiConnector("POST", LOGIN_API, {
          email,
          password,
        })
  
        console.log("LOGIN API RESPONSE............", response)
  
        if (!response.data.success) {
          toast.error(response.data.message);
          throw new Error(response.data.message)
        }
  
        toast.success("Login Successful")
        const user = response.data.findUser;
        const userImage = response.data?.findUser?.image
        ? response.data.findUser.image
        : `https://api.dicebear.com/5.x/initials/svg?seed=${response.data.findUser.firstName} ${response.data.findUser.lastName}`
        dispatch(setUser({...user, image: userImage }))
        dispatch(setToken(response.data.token));
        
        localStorage.setItem("token", JSON.stringify(response.data.token))
        localStorage.setItem("user", JSON.stringify(user));
        navigate("/dashboard")
      } catch (error) {
        console.log("LOGIN API ERROR............", error);
        // toast.error(respo)
        toast.error("user not registered")
        toast.error("Login Failed")
      }
      dispatch(setLoading(false))
      toast.dismiss(toastId)
    }
  }

