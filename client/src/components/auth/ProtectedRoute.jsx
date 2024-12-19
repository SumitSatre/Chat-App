import React from 'react'
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({children , isUserLoggedIn=false , redirect = "/login"}) => {

    if(!isUserLoggedIn){
        return <Navigate to={redirect} />
    }
  return children;
}

export default ProtectedRoute;