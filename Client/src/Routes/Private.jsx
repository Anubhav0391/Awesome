import { Navigate, useLocation} from 'react-router-dom'
import { useSelector } from 'react-redux';

export default function PrivateRoute({children}){
    const {token}=useSelector(store=>store.UserReducer)
    const location = useLocation();
    const Data = location.pathname || "/";

    if(!token){
        return <Navigate to="/auth/login" replace state={ Data }/>
    }

    return children;
}