import React, { useState, useEffect } from "react";
import { apiConnector } from "../../services/apiConnector";
import { updataEmp } from "../../services/api";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
const UpdateEmployee = ({ selectedEmployee, onClose, fetchEmpList }) => {
  // Initialize state with the selected employee's current details
  const {token} = useSelector((state)=>state.auth)
  const [employeeData, setEmployeeData] = useState({
    firstName: selectedEmployee.firstName || "",
    lastName: selectedEmployee.lastName || "",
    email: selectedEmployee.email || "",
    mobile: selectedEmployee.mobile || "",
    designation: selectedEmployee.designation || "",
    gender: selectedEmployee.gender || "",
    course: selectedEmployee.course || "",
    status: selectedEmployee.status || "Active",
  });

  useEffect(() => {
    if (selectedEmployee) {
      setEmployeeData(selectedEmployee);
    }
  // selectedEmployee(false);

  }, [selectedEmployee]);

  // Handle changes in input fields
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEmployeeData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send updated employee data to the backend
      await apiConnector("PUT",updataEmp.UPDATEEMP_API, employeeData,{
        Authorisation: `Bearer ${token}`,
      });
      console.log("Employee updated:", employeeData);

      // Fetch the updated employee list
      fetchEmpList();

      // Close the modal
      toast.success("Employee Up to date")
      onClose();

    } catch (error) {
      console.error("Error updating employee:", error);
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Update Employee</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700">First Name</label>
          <input
            type="text"
            name="firstName"
            value={employeeData.firstName}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Last Name</label>
          <input
            type="text"
            name="lastName"
            value={employeeData.lastName}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Email</label>
          <input
            type="email"
            name="email"
            value={employeeData.email}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Mobile</label>
          <input
            type="text"
            name="mobile"
            value={employeeData.mobile}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Designation</label>
          <input
            type="text"
            name="designation"
            value={employeeData.designation}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Gender</label>
          <select
            name="gender"
            value={employeeData.gender}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded"
            required
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Course</label>
          <input
            type="text"
            name="course"
            value={employeeData.course}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Status</label>
          <select
            name="status"
            value={employeeData.status}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded"
            required
          >
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
          </select>
        </div>
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Update Employee
        </button>
      </form>
    </div>
  );
};

export default UpdateEmployee;


