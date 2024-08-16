import PropTypes from "prop-types";
import { createContext } from "react";

export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
    const authInfo = {
        name: 'My name is Mosarof'
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};
AuthProvider.propTypes = {
    children: PropTypes.array
}
export default AuthProvider;