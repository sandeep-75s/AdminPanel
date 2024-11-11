
const Form = ({selectedEmployee}) =>{
    return (
        <div className="mt-4 p-4 border rounded-lg">
          <h2 className="text-xl font-bold">Employee Details</h2>
          <form>
            <div className="mb-4">
              <label className="block text-gray-700">First Name</label>
              <input
                type="text"
                value={selectedEmployee.firstName}
                readOnly
                className="w-full px-3 py-2 border rounded"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Last Name</label>
              <input
                type="text"
                value={selectedEmployee.lastName}
                readOnly
                className="w-full px-3 py-2 border rounded"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Email</label>
              <input
                type="text"
                value={selectedEmployee.email}
                readOnly
                className="w-full px-3 py-2 border rounded"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Mobile</label>
              <input
                type="text"
                value={selectedEmployee.mobile}
                readOnly
                className="w-full px-3 py-2 border rounded"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Designation</label>
              <input
                type="text"
                value={selectedEmployee.designation}
                readOnly
                className="w-full px-3 py-2 border rounded"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Gender</label>
              <input
                type="text"
                value={selectedEmployee.gender}
                readOnly
                className="w-full px-3 py-2 border rounded"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Courses</label>
              <input
                type="text"
                value={selectedEmployee.course}
                readOnly
                className="w-full px-3 py-2 border rounded"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Status</label>
              <input
                type="text"
                value={selectedEmployee.status}
                readOnly
                className="w-full px-3 py-2 border rounded"
              />
            </div>
            {/* <button
              type="button"
              onClick={handleSaveChanges}
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Save Changes
            </button> */}
          </form>
        </div>
    )
}

export default Form ;