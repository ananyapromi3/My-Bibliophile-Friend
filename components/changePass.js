import React, { useState } from "react";
import styles from "../styles/changePassModal.module.css"; // You may need to create modal styles
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBlackboard,
  faEye,
  faEyeSlash,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";
import CustomAlert from "./alert";
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";

function isPasswordValid(password) {
  const specialCharRegex = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/;
  const numberRegex = /\d/;
  return (
    specialCharRegex.test(password) &&
    numberRegex.test(password) &&
    password.length >= 8
  );
}

export default function ChangePasswordModal({ isOpen, onClose, email }) {
  const router = useRouter();
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const [passwordChangeResult, setPasswordChangeResult] = useState(null);
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const handleCloseAlert = () => {
    setShowAlert(false);
  };

  const showToast = (msg) => {
    toast.success(msg, {
      position: "bottom-right", // Set the position where the toast will appear
      autoClose: 3000, // Close the toast after 3 seconds (adjust as needed)
      style: {
        // Customize the styles here
        zIndex: 1000, // Set the z-index
      },
    });
  };

  const handlePasswordChange = async (e) => {
    try {
      e.preventDefault();

      // Check if newPassword and confirmNewPassword match
      if (newPassword !== confirmNewPassword) {
        setAlertMessage("Passwords do not match.");
        setShowAlert(true);
        return;
      }

      if (!isPasswordValid(newPassword)) {
        // alert(
        //   "Your password must contain at least one special character and a number. It must have a length of at least 8."
        // );
        setAlertMessage(
          "Your password must contain at least one special character and a number. It must have a length of at least 8."
        );
        setShowAlert(true);
        return;
      }
      const passwordChangeData = {
        email,
        currentPassword,
        newPassword,
      };
      console.log(passwordChangeData);
      // Send a request to change the password on the server
      const response = await fetch("/api/changePassword", {
        method: "POST",
        body: JSON.stringify(passwordChangeData),
        headers: {
          "Content-Type": "application/json",
        },
      });
      //   console.log(response);
      const data = await response.json();
      console.log(data);

      if (data.msg == "SUCCESSFUL") {
        // setAlertMessage("Password changed successfully!");
        // setShowAlert(true);
        showToast("Password changed successfully!");
        onClose();
      } else {
        setAlertMessage(
          "Password change failed. Please check your current password."
        );
        setShowAlert(true);
        return;
      }
    } catch (error) {
      console.error("Error changing password:", error);
      setPasswordChangeResult("An error occurred while changing the password.");
      setAlertMessage("An error occurred while changing the password.");
      setShowAlert(true);
    }
  };
  const [showPassword, setShowPassword] = useState(false);
  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div
      style={{ fontFamily: "Georgia, sans-serif" }}
      className={styles.modalBackdrop}
    >
      {/* <ToastContainer /> */}
      <div
        style={{ fontFamily: "Georgia, sans-serif" }}
        className={styles.modalContent}
      >
        <button
          style={{ fontFamily: "Georgia, sans-serif" }}
          className={styles.closeButton}
          onClick={onClose}
        >
          <FontAwesomeIcon icon={faXmark} />
        </button>
        <h2
          style={{ fontFamily: "Georgia, sans-serif" }}
          className={styles.modalTitle}
        >
          Change Password
        </h2>
        <div
          style={{ fontFamily: "Georgia, sans-serif" }}
          className={styles.passwordInputContainer}
        >
          {/* Current Password: */}
          <input
            placeholder="Current Password"
            className={styles.passwordInput}
            style={{ fontFamily: "Georgia, sans-serif" }}
            type={showPassword ? "text" : "password"}
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
          />
          <div
            className={styles.passwordToggleButton}
            onClick={toggleShowPassword}
          >
            <FontAwesomeIcon
              icon={showPassword ? faEye : faEyeSlash}
              className={styles.eyeIcon}
            />
          </div>
        </div>
        <div
          style={{ fontFamily: "Georgia, sans-serif" }}
          className={styles.passwordInputContainer}
        >
          {/* New Password: */}
          <input
            placeholder="New Password"
            className={styles.passwordInput}
            style={{ fontFamily: "Georgia, sans-serif" }}
            type={showPassword ? "text" : "password"}
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
          <div
            className={styles.passwordToggleButton}
            onClick={toggleShowPassword}
          >
            <FontAwesomeIcon
              icon={showPassword ? faEye : faEyeSlash}
              className={styles.eyeIcon}
            />
          </div>
        </div>
        <div
          style={{ fontFamily: "Georgia, sans-serif" }}
          className={styles.passwordInputContainer}
        >
          {/* Confirm New Password: */}
          <input
            placeholder="Confirm Password"
            className={styles.passwordInput}
            style={{ fontFamily: "Georgia, sans-serif" }}
            type={showPassword ? "text" : "password"}
            value={confirmNewPassword}
            onChange={(e) => setConfirmNewPassword(e.target.value)}
          />
          <div
            className={styles.passwordToggleButton}
            onClick={toggleShowPassword}
          >
            <FontAwesomeIcon
              icon={showPassword ? faEye : faEyeSlash}
              className={styles.eyeIcon}
            />
          </div>
        </div>
        <button
          style={{ fontFamily: "Georgia, sans-serif" }}
          className={styles.button}
          onClick={handlePasswordChange}
        >
          Change Password
        </button>
        {/* {passwordChangeResult && (
          <div className={styles.passwordChangeResult}>
            {passwordChangeResult}
          </div>
        )} */}
      </div>
      {showAlert && (
        <CustomAlert message={alertMessage} onClose={handleCloseAlert} />
      )}
    </div>
  );
}
