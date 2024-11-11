

// const ViewForm = ({selectedEmployee , handleCloseEmployeeDetails }) =>{
//     return (
//         <div>
//             {selectedEmployee && (
//           <div className="p-4">
//             <h2 className="text-xl font-bold mb-4">Employee Details</h2>
//             <div>
//               <label className="block mb-2">First Name:</label>
//               <p className="px-4 py-2 border">{selectedEmployee.firstName}</p>
//             </div>
//             <div>
//               <label className="block mb-2">Last Name:</label>
//               <p className="px-4 py-2 border">{selectedEmployee.lastName}</p>
//             </div>
//             <div>
//               <label className="block mb-2">Email:</label>
//               <p className="px-4 py-2 border">{selectedEmployee.email}</p>
//             </div>
//             <div>
//               <label className="block mb-2">Mobile:</label>
//               <p className="px-4 py-2 border">{selectedEmployee.mobile}</p>
//             </div>
//             <div>
//               <label className="block mb-2">Designation:</label>
//               <p className="px-4 py-2 border">{selectedEmployee.designation}</p>
//             </div>
//             <div>
//               <label className="block mb-2">Gender:</label>
//               <p className="px-4 py-2 border">{selectedEmployee.gender}</p>
//             </div>
//             <div>
//               <label className="block mb-2">Courses:</label>
//               <p className="px-4 py-2 border">{selectedEmployee.course}</p>
//             </div>
//             <div>
//               <label className="block mb-2">Status:</label>
//               <p className="px-4 py-2 border">{selectedEmployee.status}</p>
//             </div>

//             <div className="flex justify-end">
//               <button
//                 onClick={handleCloseEmployeeDetails}
//                 className="bg-blue-500 text-white py-2 px-4 rounded-md mt-4"
//               >
//                 Close
//               </button>
//             </div>
//           </div>
//         )}
//         </div>
//     )
// }

// export default ViewForm;


import React from 'react';

const ViewForm = ({ selectedEmployee, handleCloseEmployeeDetails }) => {
  if (!selectedEmployee) return null;

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Employee Details</h2>
      <form>
        <div className="mb-4">
          <label className="block text-gray-700">First Name:</label>
          <input
            type="text"
            value={selectedEmployee.firstName}
            readOnly
            className="w-full px-4 py-2 border rounded-lg"
          />
        </div>
        
        <div className="mb-4">
          <label className="block text-gray-700">Last Name:</label>
          <input
            type="text"
            value={selectedEmployee.lastName}
            readOnly
            className="w-full px-4 py-2 border rounded-lg"
          />
        </div>
        
        <div className="mb-4">
          <label className="block text-gray-700">Email:</label>
          <input
            type="email"
            value={selectedEmployee.email}
            readOnly
            className="w-full px-4 py-2 border rounded-lg"
          />
        </div>
        
        <div className="mb-4">
          <label className="block text-gray-700">Designation:</label>
          <input
            type="text"
            value={selectedEmployee.designation}
            readOnly
            className="w-full px-4 py-2 border rounded-lg"
          />
        </div>
        
        <div className="mb-4">
          <label className="block text-gray-700">Gender:</label>
          <input
            type="text"
            value={selectedEmployee.gender}
            readOnly
            className="w-full px-4 py-2 border rounded-lg"
          />
        </div>
        
        <div className="mb-4">
          <label className="block text-gray-700">Course:</label>
          <input
            type="text"
            value={selectedEmployee.course}
            readOnly
            className="w-full px-4 py-2 border rounded-lg"
          />
        </div>

        <button
          type="button"
          onClick={handleCloseEmployeeDetails}
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
        >
          Close
        </button>
      </form>
    </div>
  );
};

export default ViewForm;
