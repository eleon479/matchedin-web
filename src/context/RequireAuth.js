import React from 'react';
import { useLocation, Navigate } from 'react-router-dom';
import { useAuth } from './auth';

function RequireAuth({ children }) {
  // const {currentUser} = useAuth()
  // return (
  //   <Route {...rest}
  //   render={props => {
  //     currentUser ? <Component {...props}/> :
  //     <Redirect />
  //   }}></Route>
  // )

  const { currentUser } = useAuth();
  const location = useLocation();
  if (!currentUser) {
    return <Navigate to="/register" state={{ from: location }} replace />;
  }

  return children;
}

export default RequireAuth;
