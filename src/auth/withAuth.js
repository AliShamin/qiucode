import { Redirect } from "react-router";

const withAuth = (Component) => {
  const AuthRoute = () => {
    const isAuth = !!localStorage.getItem("id_token");
    if (isAuth) {
      return <Component />;
    } else {
      return <Redirect to="/login" />;
    }
  };
  return AuthRoute;
};
export default withAuth;
