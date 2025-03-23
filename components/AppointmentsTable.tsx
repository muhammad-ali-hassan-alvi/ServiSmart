"use client";
import { useEffect, useState } from "react";

const AppointmentsTable = () => {
  const [appointments, setAppointments] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 7;

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const response = await fetch("/api"); // Update with actual API endpoint
        const data = await response.json();
        setAppointments(data);
      } catch (error) {
        console.error("Error fetching appointments:", error);
      }
    };

    fetchAppointments();
  }, []);

  // Calculate total pages
  const totalPages = Math.ceil(appointments.length / recordsPerPage);

  // Get records for the current page
  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = appointments.slice(indexOfFirstRecord, indexOfLastRecord);

  return (
    <div className="p-4">
      <div className="overflow-x-auto rounded-lg shadow-lg">
        <table className="min-w-full bg-white">
          <thead className="bg-gradient-to-r from-blue-500 to-blue-600">
            <tr>
              <th className="py-3 px-6 text-left text-white font-semibold uppercase tracking-wider">
                Name
              </th>
              <th className="py-3 px-6 text-left text-white font-semibold uppercase tracking-wider">
                Phone
              </th>
              <th className="py-3 px-6 text-left text-white font-semibold uppercase tracking-wider">
                Vehicle Make
              </th>
              <th className="py-3 px-6 text-left text-white font-semibold uppercase tracking-wider">
                Vehicle Name
              </th>
              <th className="py-3 px-6 text-left text-white font-semibold uppercase tracking-wider">
                Vehicle Model
              </th>
              <th className="py-3 px-6 text-left text-white font-semibold uppercase tracking-wider">
                Date
              </th>
              <th className="py-3 px-6 text-left text-white font-semibold uppercase tracking-wider">
                Time Slot
              </th>
              <th className="py-3 px-6 text-left text-white font-semibold uppercase tracking-wider">
                Comment
              </th>
              <th className="py-3 px-6 text-left text-white font-semibold uppercase tracking-wider">
                Email
              </th>
              <th className="py-3 px-6 text-left text-white font-semibold uppercase tracking-wider">
                Selected Vehicle
              </th>
              <th className="py-3 px-6 text-left text-white font-semibold uppercase tracking-wider">
                Selected Plan
              </th>
              <th className="py-3 px-6 text-left text-white font-semibold uppercase tracking-wider">
                Extra Features
              </th>
              <th className="py-3 px-6 text-left text-white font-semibold uppercase tracking-wider">
                Engine Wash
              </th>
              <th className="py-3 px-6 text-left text-white font-semibold uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {currentRecords.map((appointment) => (
              <tr
                key={appointment._id}
                className="hover:bg-gray-50 transition-colors"
              >
                <td className="py-4 px-6 text-gray-700">{appointment.name}</td>
                <td className="py-4 px-6 text-gray-700">{appointment.phone}</td>
                <td className="py-4 px-6 text-gray-700">{appointment.vehicleMake}</td>
                <td className="py-4 px-6 text-gray-700">{appointment.vehicleName}</td>
                <td className="py-4 px-6 text-gray-700">{appointment.vehicleModel}</td>
                <td className="py-4 px-6 text-gray-700">{appointment.date}</td>
                <td className="py-4 px-6 text-gray-700">{appointment.slot}</td>
                <td className="py-4 px-6 text-gray-700">{appointment.comment}</td>
                <td className="py-4 px-6 text-gray-700">{appointment.email}</td>
                <td className="py-4 px-6 text-gray-700">{appointment.selectedVehicle}</td>
                <td className="py-4 px-6 text-gray-700">{appointment.selectedPlan}</td>
                <td className="py-4 px-6 text-gray-700">{appointment.extraFeatures?.join(", ")}</td>
                <td className="py-4 px-6 text-gray-700">{appointment.engineWash ? "Yes" : "No"}</td>
                <td className="py-4 px-6 space-x-2">
                  <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg shadow-md transition-all">
                    Done
                  </button>
                  <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg shadow-md transition-all">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-center mt-6">
        <button
          className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg shadow-md transition-all mx-2 disabled:opacity-50"
          disabled={currentPage === 1}
          onClick={() => setCurrentPage(currentPage - 1)}
        >
          Previous
        </button>
        <span className="px-4 py-2 bg-gray-100 rounded-lg shadow-md">
          Page {currentPage} of {totalPages}
        </span>
        <button
          className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg shadow-md transition-all mx-2 disabled:opacity-50"
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage(currentPage + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default AppointmentsTable;