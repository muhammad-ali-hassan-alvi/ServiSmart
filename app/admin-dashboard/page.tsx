
import AdminDashboard from '@/components/AdminDashboard';
import React from 'react'
import { ToastContainer } from "react-toastify";

export const Adminpage = () => {
  return (
    <div>
        <AdminDashboard />
        <ToastContainer />
    </div>
  )
}

export default Adminpage
