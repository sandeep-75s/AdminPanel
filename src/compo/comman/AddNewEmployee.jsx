import React, { useState } from 'react';
import { apiConnector } from '../../services/apiConnector';
import { createEmp, updataEmp } from '../../services/api';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';

const AddNewEmployee = ({ onAddEmployee ,fetchEmpList }) => {
  const {token} = useSelector((state)=>state.auth);
  // Initialize the state for the form fields
  const [newEmployee, setNewEmployee] = useState({
    firstName: '',
    lastName: '',
    email: '',
    mobile: '',
    designation: '',
    gender: '',
    course: '',
    status: 'Active', // default status is Active
  });

  // Handle changes in the input fields
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewEmployee((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async(e) => {
    e.preventDefault(); // Prevent page reload
     
    // Reset the form fields
    
    const response = await apiConnector("POST",createEmp.CREATEEMP_API,newEmployee, {
      Authorisation: `Bearer ${token}`,
    });
    console.log(response);
    toast.success("New Employee Added");
    fetchEmpList()
    // onAddEmployee(newEmployee);
    setNewEmployee({
      firstName: '',
      lastName: '',
      email: '',
      mobile: '',
      designation: '',
      gender: '',
      course: '',
      status: 'Active',
    });
  };

  return (
    <div className="mt-4 p-4 border rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Add New Employee</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700">First Name</label>
          <input
            type="text"
            name="firstName"
            value={newEmployee.firstName}
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
            value={newEmployee.lastName}
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
            value={newEmployee.email}
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
            value={newEmployee.mobile}
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
            value={newEmployee.designation}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Gender</label>
          <select
            name="gender"
            value={newEmployee.gender}
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
          <label className="block text-gray-700">Courses</label>
          <input
            type="text"
            name="course"
            value={newEmployee.course}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Status</label>
          <select
            name="status"
            value={newEmployee.status}
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
          Add Employee
        </button>
      </form>
    </div>
  );
};

export default AddNewEmployee;
