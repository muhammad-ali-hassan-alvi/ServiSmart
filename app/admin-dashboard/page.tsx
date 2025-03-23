import AdminDashboard from '@/components/AdminDashboard';
import React from 'react';
import { ToastContainer } from "react-toastify";

export default function AppointmentPage() {
  return (
    <div>
      <AdminDashboard />
      <ToastContainer />
    </div>
  );
}
