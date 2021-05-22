import "./Header.css";
import logo from "../../../assets/logo/qlogo.png";
import profile from "../../../assets/logo/profile1.png";
import { useState, useRef, useEffect } from "react";
import { useHistory } from "react-router";
function Header() {
  let history = useHistory();
  const wrapperRef = useRef(null);
  let [toggleProfile, setToggleProfile] = useState(false);
  let [name, setName] = useState("");
  let [imgUrl, setImgUrl] = useState("");
  let onProfileClick = () => {
    console.log("clicked");
    if (toggleProfile == false) setToggleProfile(true);
    else setToggleProfile(false);
  };

  useEffect(() => {
    setName(localStorage.getItem("name"));
    setImgUrl(localStorage.getItem("imgUrl"));
  });
  /**
   * Hook that alerts clicks outside of the passed ref
   */
  let useOutsideAlerter = (ref) => {
    useEffect(() => {
      /**
       * Alert if clicked on outside of element
       */
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          setToggleProfile(false);
        }
      }

      // Bind the event listener
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  };

  let logout = () => {
    localStorage.removeItem("id_token");
    localStorage.removeItem("name");
    history.push("/login");
  };
  useOutsideAlerter(wrapperRef);
  return (
    <div className="mt-header">
      <div className="mt-display-flex-row">
        <div id="logo">
          <img src={logo} width="25" height="25" />
        </div>
        <div>
          <span id="app-title">QiuCode</span>
        </div>
      </div>
      <div className="mt-display-flex-column" id="mt-profile-section">
        <div id="mt-profile-box" className="mt-display-flex-row">
          <img src={imgUrl} width="35" height="35" onClick={onProfileClick} />
          <span>{name}</span>
        </div>
        {toggleProfile && (
          <div
            id="mt-display-flex-column"
            id="mt-profile-options"
            ref={wrapperRef}
          >
            <div>
              <button>Settings</button>
            </div>
            <div>
              <button onClick={logout}>Logout</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;
