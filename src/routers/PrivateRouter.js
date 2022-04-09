import { useContext } from 'react'
import { Navigate } from 'react-router-dom';
import { FilterContext } from '../services/FilterContext'

export const PrivateRouter = ({children}) => {

    const { user } = useContext(FilterContext);

    return user.logged 
    ? children
    : <Navigate to='/auth'/>
}
