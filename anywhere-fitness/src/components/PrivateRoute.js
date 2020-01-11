import React, { useContext } from "react";

import { Route, Redirect } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";

// const PrivateRoute = ({ component: Component, ...theRest }) => {
//     return (
//         <Route { ...theRest }
//         render={() => {
//             if (localStorage.getItem("token")) {
//                 return <Component />;
//             } else {
//                 console.log("redirecting");
//                 return <Redirect to="/login" />;
//             }
//         }} />
//     )
// }


function PrivateRoute({ children, ...theRest }) {
    const user = useContext(UserContext);
    return (
        <Route
            { ...theRest }
            render={({ location }) =>
                user.isAuthenticated ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
}

export default PrivateRoute;