import React from "react"
import { Navigate, Route, Routes } from "react-router-dom"
import { LoginPage } from "../auth";
import { CalendarPage } from "../calendar";
import { getEnvVariables } from "../helpers";


export const AppRouter = () => {

  const authStatus = false;

  return (
    <Routes>
      { (!authStatus)
          ? <Route path="/auth/*" element={ <LoginPage /> } />
          : <Route path="/*" element={ <CalendarPage /> } />
      }
      <Route path="/*" element={ <Navigate to="/auth/login" /> } />
    </Routes>
  )
}
