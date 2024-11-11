import EmployeeList from "../comman/EmployeeList";

const Dashboard = () =>{
    return(
        <div>
            <h1 className="ml-3 text-4xl mt-10">Welcome Admin</h1>
           <EmployeeList/>
        </div>
    );  
}

export default Dashboard