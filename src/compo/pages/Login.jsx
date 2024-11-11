import { useState } from "react";
import lock from "../../asset/lock.png";
import BTN from "../comman/BTN";
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom";
import { login } from "../../services/operation/authAPI"
const Login = () =>{
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    })
    const { email, password } = formData
    const handleOnChange = (e) => {
        console.log(e.target.value)
        setFormData((prevData) => ({
          ...prevData,
          [e.target.name]: e.target.value,
        }))
    }
    const handleOnSubmit = (e) => {
        e.preventDefault()
        dispatch(login(email, password, navigate))
    }
    return(
        <div className="text-black w-screen h-screen flex  items-center justify-center">
            <div className="w-[400px] h-[400px]  flex flex-col  justify-evenly items-center ">
                <img src={lock} alt="lockicon" className="w-16 h-16" />
                <h1  className=" text-black text-3xl">Admin Sign In</h1>
                <form onSubmit={handleOnSubmit} className="w-[90%] h-auto  flex flex-col gap-4">
                    <div className=" flex flex-col">
                        <label htmlFor="email">Enter Email</label>
                        <input
                        required
                        type="text"
                        name="email"
                        id="email"
                        placeholder="xyz@gmail.com"
                        value={email}
                        onChange={handleOnChange}
                        className="form-style w-full h-12 rounded-md pl-2 border-richblack-300 border-b"
                        />
                    </div>
                    <div className=" flex flex-col">
                        <label htmlFor="password">Enter Password</label>
                        <input
                        required
                        type="password"
                        name="password"
                        id="password"
                        placeholder="password"
                        value={password}
                        onChange={handleOnChange}
                        className="form-style w-full h-12 rounded-md pl-2 border-richblack-300 border-b"
                        />
                    </div>
                    <BTN
                    type={"submit"}
                    text={"Login"}
                    className="mt-16"
                    />
                </form>
            </div>  
        </div>
    )
}

export default Login