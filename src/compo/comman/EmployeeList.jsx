
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import {apiConnector} from '../../services/apiConnector';
import { empList, deleteEmp } from '../../services/api';
import Modal from './Modal';
import AddNewEmployee from './AddNewEmployee';
import UpdateEmployee from './UpdateEmployee';
import ViewForm from './ViewForm';
import { toast } from 'react-toastify';

const EmployeeList = () => {
  const { token } = useSelector((state) => state.auth);
  const [emp, setEmp] = useState([]);
  const [showAddForm, setShowAddForm] = useState(false);
  const [empStatus, setEmpStatus] = useState("Active");
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [showEmployeeDetails, setShowEmployeeDetails] = useState(false);
  const [updateEmp, setUpdateEmp] = useState(false);

  const fetchEmpList = async () => {
    try {
      console.log(token);
      const result = await apiConnector("GET", empList.EMPLIST_API);
      console.log("result:-", result.data.EmployeeList);
      setEmp(result.data.EmployeeList);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchEmpList();
  }, []);

  const handleCloseModal = () => {
    setShowAddForm(false);
  };

  const handleCloseUpdateModal = () => {
    setUpdateEmp(false);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const toggleStatus = (prevStatus) => {
    setEmpStatus(prevStatus === "Active" ? "Inactive" : "Active");
  };

  const filteredEmployees = emp.filter((employee) =>
    employee.firstName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleEmployeeClick = (employee) => {
    setSelectedEmployee(employee);
    setShowEmployeeDetails(true);
  };

  const handleCloseEmployeeDetails = () => {
    setShowEmployeeDetails(false);
  };

  const handleAddEmployeeClick = () => {
    setShowAddForm(true);
  };

  const handleUpdateEmployeeClick = (employee) => {
    setSelectedEmployee(employee);
    setUpdateEmp(true);
  };

  const handleDelete = async (employeeId) => {
    if (window.confirm("Are you sure you want to delete this employee?")) {
      try {
        const result = await apiConnector("DELETE",deleteEmp.DELETEEMP_API, employeeId.email, {
          headers: {
            Authorisation: `Bearer ${token}`,
          },
        });
        console.log("empId",employeeId);
        console.log(result)
        toast.success("Employee deleted successfully");
        fetchEmpList(); // Refresh employee list after deletion
      } catch (error) {
        console.error("Error deleting employee:", error);
        toast.error("Failed to delete employee");
      }
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4 text-white bg-blue-700 w-[200px] py-2 px-4 rounded-md cursor-pointer">
        Employee List
      </h2>
      <h2
        className="text-2xl font-bold mb-4 text-white bg-blue-700 w-[300px] py-2 px-4 rounded-md cursor-pointer"
        onClick={handleAddEmployeeClick}
      >
        Add New Employee
      </h2>

      <input
        type="text"
        placeholder="Search employees"
        value={searchTerm}
        onChange={handleSearchChange}
        className="w-full px-4 py-2 mb-4 border rounded-lg"
      />

      <table className="table-auto w-full border-separate border-spacing-y-2">
        <thead>
          <tr className="text-left">
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Email</th>
            <th className="px-4 py-2">Designation</th>
            <th className="px-4 py-2">Gender</th>
            <th className="px-4 py-2">Courses</th>
            <th className="px-4 py-2">Status</th>
            <th className="px-4 py-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {filteredEmployees.map((employee) => (
            <tr
              key={employee.id}
              className="cursor-pointer hover:bg-gray-100"
              onClick={()=>handleEmployeeClick(employee)}
            >
              <td className="px-4 py-2" onClick={() => handleEmployeeClick(employee)}>
                {employee.firstName} {employee.lastName}
              </td>
              <td className="px-4 py-2">{employee.email}</td>
              <td className="px-4 py-2">{employee.designation}</td>
              <td className="px-4 py-2">{employee.gender}</td>
              <td className="px-4 py-2">{employee.course}</td>
              <td className="px-4 py-2">
                <span onClick={() => toggleStatus(employee.status)}>
                  {empStatus === "Inactive" ? "Active" : "Inactive"}
                </span>
              </td>
              <td className="px-4 py-2">
                <span
                  className="text-blue-600 cursor-pointer mr-4"
                  onClick={() => handleUpdateEmployeeClick(employee)}
                >
                  Edit
                </span>
                <span
                  className="text-red-600 cursor-pointer"
                  onClick={() => handleDelete(employee)}
                >
                  Delete
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <Modal show={showAddForm} onClose={handleCloseModal}>
        <AddNewEmployee fetchEmpList={fetchEmpList} />
      </Modal>

      <Modal show={updateEmp} onClose={handleCloseUpdateModal}>
        <UpdateEmployee
          selectedEmployee={selectedEmployee}
          onClose={handleCloseUpdateModal}
          fetchEmpList={fetchEmpList}
        />
      </Modal>

      <Modal show={showEmployeeDetails} onClose={handleCloseEmployeeDetails}>
        {selectedEmployee && (
          <ViewForm
            selectedEmployee={selectedEmployee}
            handleCloseEmployeeDetails={handleCloseEmployeeDetails}
          />
        )}
      </Modal>
    </div>
  );
};

export default EmployeeList;


