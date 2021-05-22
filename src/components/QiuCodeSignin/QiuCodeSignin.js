import "./QiuCodeSignin.css";
import googleLogo from "../../assets/logo/glogo.jpg";
import qlogo from "../../assets/logo/qlogo.jpg";
import { useHistory } from "react-router-dom";
import { GoogleLogin } from "react-google-login";

const CLIENT_ID =
  "591143702754-b8bglic7ik4c800ooo8c6pvn7s78298f.apps.googleusercontent.com";
function QiuCodeSignin() {
  let history = useHistory();

  const handleLogin = (response) => {
    console.log("data from google", response);
    localStorage.setItem("id_token", response.tokenObj.id_token);
    localStorage.setItem("access_token", response.tokenObj.access_token);
    localStorage.setItem("name", response.profileObj.name);
    localStorage.setItem("imgUrl", response.profileObj.imageUrl);
    history.push("/main");
  };
  return (
    <div id="mt-signin-page">
      <img src={qlogo} id="mt-qlogo" width="50" height="50" />
      <GoogleLogin
        clientId={CLIENT_ID}
        render={(renderProps) => (
          <button
            onClick={renderProps.onClick}
            disabled={renderProps.disabled}
            id="mt-login-button"
          >
            <img src={googleLogo} width="50" height="50" />
            <span>Sign in with Google</span>
          </button>
        )}
        buttonText="Log in with Google"
        onSuccess={handleLogin}
        onFailure={handleLogin}
        cookiePolicy={"single_host_origin"}
      />
    </div>
  );
}

export default QiuCodeSignin;
