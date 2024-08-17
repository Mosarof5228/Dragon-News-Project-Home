import PropTypes from "prop-types";
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    if (loading) {
        return <span className="loading loading-bars loading-lg"></span>
    }

    if (user) {
        return children;
    }
    else {
        return <Navigate to='/login'></Navigate >
    }
};
PrivateRoute.propTypes = {
    children: PropTypes.node
}
export default PrivateRoute;