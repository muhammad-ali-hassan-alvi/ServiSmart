import React from "react";
import Appointment from "@/components/Appointment";
import { ToastContainer } from "react-toastify";

const AppointmentPage: React.FC = () => {
  return (
    <div>
      <Appointment />
      <ToastContainer />
    </div>
  );
};

export default AppointmentPage;
