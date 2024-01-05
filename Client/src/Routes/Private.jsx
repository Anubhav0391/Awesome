import { useContext } from 'react';
import { Navigate, useLocation} from 'react-router-dom'
import {Context} from '../Context/Context';

export default function PrivateRoute({children}){
    const {user}=useContext(Context);
    const location = useLocation();
    const Data = location.pathname || "/";

    if(!user){
        return <Navigate to="/login" replace state={ Data }/>
    }

    return children;
}