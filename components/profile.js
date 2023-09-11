import React, { useState } from "react";
import styles from "../styles/profile.module.css";
import { useEffect } from "react";
import {
  faEye,
  faEyeSlash,
  faCircleArrowLeft,
  faBackward,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/router";
import ChangePasswordModal from "./changePass";
import CustomAlert from "./alert";
import { toast } from "react-toastify";
import YesNoAlert from "./yesNoAlert";

export default function Profile({ profile }) {
  //   console.log(profile);
  // const showToast = (msg) => {
  //   toast.success(msg, {
  //     position: "bottom-right",
  //     autoClose: 3000,
  //     style: {
  //       zIndex: 1000,
  //     },
  //   });
  // };
  const [showChangePasswordModal, setShowChangePasswordModal] = useState(false);
  const [currentPassword, setCurrentPassword] = useState("");
  const [passwordChangeResult, setPasswordChangeResult] = useState(null);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [contactNo1, setContactNo1] = useState("");
  const [contactNo2, setContactNo2] = useState("");
  const [password, setPassword] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [gender, setGender] = useState("");
  const [currLocationJs, setCurrLocationJs] = useState({});
  const [currLocation, setCurrLocation] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const [loginInfo, setLoginInfo] = useState({
    email: profile.email,
    password: profile.pass,
    firstname: profile.firstname,
    lastname: profile.lastname,
    phn1: profile.contactno1,
    phn2: profile.contactno2,
    latitude: currLocationJs.latitude,
    longitude: currLocationJs.longitude,
  });
  // console.log(loginInfo);
  const router = useRouter();
  const userId = router.query.userId;

  const [showYesNo, setYesNo] = useState(false);
  const [yesNoMessage, setYesNoMessage] = useState("");
  const [cont, setCont] = useState(false);
  const no = () => {
    setCont(false);
    setYesNo(false);
  };
  const yes = () => {
    setCont(true);
    setYesNo(false);
    deleteUser();
  };
  const helper = async () => {
    setYesNoMessage("Are you sure you want to delete your account?");
    setYesNo(true);
  };

  const user = {
    userId: userId,
    email: profile.email,
  };
  const handleLogOut = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("notificationCount");
    localStorage.removeItem("notiCount");
    router.push("http://localhost:3000");
  };

  const deleteUser = async () => {
    const response = await fetch(`/api/deleteAcc`, {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "Contain-Type": "application/json",
      },
    });
    const data = await response.json();
    if (data.msg == "DELETED") {
      alert("Your account has been deleted");
      // setAlertMessage("Offer deleted");
      // setShowAlert(true);
      showToast("Account successfully deleted");
      handleLogOut();
      // setOfferStatus(0);
      // onStatusChange(offer.OFFERID, "accepted");
      // onOfferAccepted(offer.OFFERID);
    } else {
      alert("Account could not be deleted");
      // setAlertMessage("Could not delete your account");
      // setShowAlert(true);
      showToastErr("Account could not be deleted");
    }
    // router.push(`/bookFriend/myOffers/${userId}`);
    router.reload();
  };
  const showToast = (msg) => {
    toast.success(msg, {
      position: "bottom-right",
      autoClose: 3000,
      style: {
        zIndex: 1000,
      },
    });
  };
  const showToastErr = (msg) => {
    toast.error(msg, {
      position: "bottom-right",
      autoClose: 3000,
      style: {
        zIndex: 1000,
      },
    });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoginInfo((prevState) => ({
      email: profile.email,
      password: prevState.password || profile.pass,
      firstname: prevState.firstname || profile.firstname,
      lastname: prevState.lastname || profile.lastname,
      sex: prevState.sex || profile.gender,
      dob: prevState.dob || profile.dob,
      phn1: prevState.phn1 || profile.contactno1,
      phn2: prevState.phn2 || profile.contactno2,
      latitude: currLocationJs.latitude,
      longitude: currLocationJs.longitude,
    }));
    const response = await fetch(`/api/bookFriend/updateProfile`, {
      method: "POST",
      body: JSON.stringify(loginInfo),
      headers: {
        "Contain-Type": "application/json",
      },
    });
    // const data = await response;
    console.log(response);
    // setAlertMessage("Account Updated");
    showToast("Account and location updated successfully!");
    // setShowAlert(true);
    // router.push(`/bookFriend/profile/${userId}`);
    // window.location.reload();
    // router.reload();
  };
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const handleCloseAlert = () => {
    setShowAlert(false);
  };

  const getLocation = async () => {
    try {
      const location = await axios.get("https://ipapi.co");
      setCurrLocation(location.data);
    } catch (err) {
      console.log(err);
    }
  };

  const getLocationJs = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      console.log(position);
      const { latitude, longitude } = position.coords;
      setCurrLocationJs({ latitude, longitude });
      console.log(currLocationJs);
    });
  };

  useEffect(() => {
    getLocation();
    getLocationJs();
  }, []);

  let dob = Date.parse(profile.dob);
  dob = new Date(dob);
  dob = dob.toString();
  dob = dob.substring(3, 15);
  //   console.log(dob);
  //   dob = (profile.dob).split("T");
  //   console.log(dob);

  // const handlePasswordChange = (currentPassword, newPassword) => {
  //   // Implement the logic to change the password on the server here
  //   // You can use fetch or another method to send a request to your API
  //   // Once the password is successfully changed, you can handle the UI accordingly
  //   // For example, you can display a success message or redirect the user.
  //   console.log("Changing password:", currentPassword, newPassword);
  // };

  return (
    <div>
      <div className={styles.loginBox}>
        <form
          onSubmit={handleSubmit}
          style={{ fontFamily: "Georgia, sans-serif" }}
        >
          <label
            className={styles.label}
            style={{ fontFamily: "Georgia, sans-serif" }}
          >
            <p
              className={styles.label1}
              style={{ fontFamily: "Georgia, sans-serif" }}
            >
              First Name:
            </p>
            <input
              style={{ fontFamily: "Georgia, sans-serif" }}
              className={styles.input}
              type="text"
              required
              // disabled
              placeholder={profile.firstname}
              onChange={(e) =>
                // setLoginInfo((prevLoginInfo) => ({
                //   ...prevLoginInfo,
                //   firstname: e.target.value,
                // }))
                setLoginInfo((prevState) => ({
                  email: profile.email,
                  password: prevState.password || profile.pass,
                  firstname: e.target.value || profile.firstname,
                  lastname: prevState.lastname || profile.lastname,
                  sex: prevState.sex || profile.gender,
                  dob: prevState.dob || profile.dob,
                  phn1: prevState.phn1 || profile.contactno1,
                  phn2: prevState.phn2 || profile.contactno2,
                  latitude: currLocationJs.latitude,
                  longitude: currLocationJs.longitude,
                }))
              }
              name="firstname"
            />
          </label>
          <label
            className={styles.label}
            style={{ fontFamily: "Georgia, sans-serif" }}
          >
            <p
              style={{ fontFamily: "Georgia, sans-serif" }}
              className={styles.label1}
            >
              Last Name:
            </p>
            <input
              required
              style={{ fontFamily: "Georgia, sans-serif" }}
              className={styles.input}
              type="text"
              placeholder={profile.lastname}
              // disabled
              name="lastname"
              onChange={(e) =>
                // setLoginInfo((prevLoginInfo) => ({
                //   ...prevLoginInfo,
                //   lastname: e.target.value,
                // }))
                setLoginInfo((prevState) => ({
                  email: profile.email,
                  password: prevState.password || profile.pass,
                  firstname: prevState.firstname || profile.firstname,
                  lastname: e.target.value || profile.lastname,
                  sex: prevState.sex || profile.gender,
                  dob: prevState.dob || profile.dob,
                  phn1: prevState.phn1 || profile.contactno1,
                  phn2: prevState.phn2 || profile.contactno2,
                  latitude: currLocationJs.latitude,
                  longitude: currLocationJs.longitude,
                }))
              }
            />
          </label>
          <label
            style={{ fontFamily: "Georgia, sans-serif" }}
            className={styles.label}
          >
            <p
              style={{ fontFamily: "Georgia, sans-serif" }}
              className={styles.label1}
            >
              Email address:
            </p>
            <input
              style={{ fontFamily: "Georgia, sans-serif" }}
              className={styles.input}
              disabled
              type="email"
              value={profile.email}
            />
          </label>
          {/* <label
            style={{ fontFamily: "Georgia, sans-serif" }}
            className={styles.label}
          >
            <p
              style={{ fontFamily: "Georgia, sans-serif" }}
              className={styles.label1}
            >
              Password:
            </p>
            <input
              style={{ fontFamily: "Georgia, sans-serif" }}
              className={styles.passwordInput}
              type={showPassword ? "text" : "password"}
              // placeholder={profile.pass}
              // disabled
              name="password"
              onChange={(e) =>
                // setLoginInfo((prevLoginInfo) => ({
                //   ...prevLoginInfo,
                //   password: e.target.value,
                // }))
                setLoginInfo((prevState) => ({
                  email: profile.email,
                  password: e.target.value || profile.pass,
                  firstname: prevState.firstname || profile.firstname,
                  lastname: prevState.lastname || profile.lastname,
                  sex: prevState.sex || profile.gender,
                  dob: prevState.dob || profile.dob,
                  phn1: prevState.phn1 || profile.contactno1,
                  phn2: prevState.phn2 || profile.contactno2,
                  latitude: currLocationJs.latitude,
                  longitude: currLocationJs.longitude,
                }))
              }
            /> 
             <div
              style={{ fontFamily: "Georgia, sans-serif" }}
              className={styles.passwordToggleButton}
              onClick={toggleShowPassword}
            >
              <FontAwesomeIcon
                icon={showPassword ? faEye : faEyeSlash}
                className={styles.eyeIcon}
              />
            </div>
          </label> */}
          <label
            style={{ fontFamily: "Georgia, sans-serif" }}
            className={styles.label}
          >
            <p
              style={{ fontFamily: "Georgia, sans-serif" }}
              className={styles.label1}
            >
              Date of Birth:
            </p>
            <input
              style={{ fontFamily: "Georgia, sans-serif" }}
              className={styles.input}
              type="text"
              value={dob}
              disabled
            />
          </label>
          <label
            style={{ fontFamily: "Georgia, sans-serif" }}
            className={styles.label}
          >
            <p
              style={{ fontFamily: "Georgia, sans-serif" }}
              className={styles.label1}
            >
              Gender:
            </p>
            <input
              style={{ fontFamily: "Georgia, sans-serif" }}
              className={styles.input}
              type="text"
              value={profile.gender}
              disabled
            />
          </label>
          <label
            style={{ fontFamily: "Georgia, sans-serif" }}
            className={styles.label}
          >
            <p
              style={{ fontFamily: "Georgia, sans-serif" }}
              className={styles.label1}
            >
              Contact No (1):
            </p>
            <input
              // disabled
              style={{ fontFamily: "Georgia, sans-serif" }}
              className={styles.input}
              type="text"
              placeholder={profile.contactno1}
              name="phn1"
              onChange={(e) =>
                //     setLoginInfo((prevLoginInfo) => ({
                //       ...prevLoginInfo,
                //       phn1: e.target.value,
                //     }))
                setLoginInfo((prevState) => ({
                  email: profile.email,
                  password: prevState.password || profile.pass,
                  firstname: prevState.firstname || profile.firstname,
                  lastname: prevState.lastname || profile.lastname,
                  sex: prevState.sex || profile.gender,
                  dob: prevState.dob || profile.dob,
                  phn1: e.target.value || profile.contactno1,
                  phn2: prevState.phn2 || profile.contactno2,
                  latitude: currLocationJs.latitude,
                  longitude: currLocationJs.longitude,
                }))
              }
            />
          </label>
          <label
            style={{ fontFamily: "Georgia, sans-serif" }}
            className={styles.label}
          >
            <p
              style={{ fontFamily: "Georgia, sans-serif" }}
              className={styles.label1}
            >
              Contact No (2):
            </p>
            <input
              style={{ fontFamily: "Georgia, sans-serif" }}
              // disabled
              className={styles.input}
              type="text"
              name="phn2"
              placeholder={profile.contactno2}
              onChange={(e) =>
                //     setLoginInfo((prevLoginInfo) => ({
                //       ...prevLoginInfo,
                //       phn2: e.target.value,
                //     }))
                setLoginInfo((prevState) => ({
                  email: profile.email,
                  password: prevState.password || profile.pass,
                  firstname: prevState.firstname || profile.firstname,
                  lastname: prevState.lastname || profile.lastname,
                  sex: prevState.sex || profile.gender,
                  dob: prevState.dob || profile.dob,
                  phn1: prevState.phn1 || profile.contactno1,
                  phn2: e.target.value || profile.contactno2,
                  latitude: currLocationJs.latitude,
                  longitude: currLocationJs.longitude,
                }))
              }
            />
          </label>
          <label
            style={{ fontFamily: "Georgia, sans-serif" }}
            className={styles.label}
          >
            <p
              style={{ fontFamily: "Georgia, sans-serif" }}
              className={styles.label1}
            >
              Latitude
            </p>
            <input
              style={{ fontFamily: "Georgia, sans-serif" }}
              className={styles.input}
              type="text"
              value={profile.lat}
              disabled
              //   onChange={(e) => setFirstName(e.target.value)}
            />
          </label>
          <label
            style={{ fontFamily: "Georgia, sans-serif" }}
            className={styles.label}
          >
            <p
              style={{ fontFamily: "Georgia, sans-serif" }}
              className={styles.label1}
            >
              Longitude
            </p>
            <input
              style={{ fontFamily: "Georgia, sans-serif" }}
              className={styles.input}
              type="text"
              value={profile.lon}
              disabled
              //   onChange={(e) => setFirstName(e.target.value)}
            />
          </label>
          <button
            style={{ fontFamily: "Georgia, sans-serif" }}
            className={styles.button}
            type="submit"
          >
            Update
          </button>
        </form>
        <button
          style={{ fontFamily: "Georgia, sans-serif" }}
          className={styles.button2}
          onClick={() => setShowChangePasswordModal(true)}
        >
          Change Password
        </button>
        {/* <button
          style={{ fontFamily: "Georgia, sans-serif" }}
          className={styles.button3}
          onClick={helper}
        >
          Delete Account
        </button> */}
        {showChangePasswordModal && (
          <ChangePasswordModal
            isOpen={showChangePasswordModal}
            onClose={() => {
              setShowChangePasswordModal(false);
              // Clear the current password when closing the modal
              setCurrentPassword("");
            }}
            email={profile.email}
          />
        )}
        {/* Display the password change result */}
        {passwordChangeResult && (
          <div className={styles.passwordChangeResult}>
            {passwordChangeResult}
          </div>
        )}
      </div>
      {showAlert && (
        <CustomAlert message={alertMessage} onClose={handleCloseAlert} />
      )}
      {showYesNo && <YesNoAlert message={yesNoMessage} onYes={yes} onNo={no} />}
    </div>
  );
}
