import { useState } from "react";
import { useRouter } from "next/router";
import { useEffect } from "react";
import styles from "../../../styles/profileFeed.module.css";
import Menu from "../../../components/menu";
import Profile from "../../../components/profile";
import FriendModal from "../../../components/friendModal";

export default function MyProfile() {
  const activeMenu = "profile";
  const router = useRouter();
  const userId = router.query.userId;
  const [searchResults, setSearchResults] = useState([]);
  const [buttonStatus, setButtonStatus] = useState(true);
  const [count, setCount] = useState(0);
  const [profile, setProfile] = useState({
    email: "",
    pass: "",
    firstname: "",
    lastname: "",
    dob: null,
    gender: "",
    contactno1: "",
    contactno2: "",
  });

  useEffect(() => {
    handleSearch();
  }, []);

  useEffect(() => {
    const func = async () => {
      const id = parseInt(userId);
      if (!isNaN(id)) {
        const response1 = await fetch(`/api/notifications?term=${id}`);
        const data1 = await response1.json();
        localStorage.setItem("notificationCount", data1.length);
      }
    };
    func();
  });

  const [friends, setFriends] = useState([]);
  const [showFriendModal, setShowFriendModal] = useState(false);
  const openFriendModal = () => {
    const func = async () => {
      const id = parseInt(userId);
      if (!isNaN(id)) {
        const response1 = await fetch(`/api/friend?id=${userId}`);
        const data1 = await response1.json();
        setFriends(data1);
        // localStorage.setItem("pendingDelCount", data1.length);
      }
    };
    func();
    setShowFriendModal(true);
  };
  const closeFriendModal = () => {
    setShowFriendModal(false);
  };

  const handleSearch = async () => {
    try {
      const response = await fetch(`/api/bookFriend/profile?term=${userId}`);
      const data = await response.json();
      console.log(data);
      setProfile({
        email: data[0].EMAILID,
        pass: data[0].PASS,
        firstname: data[0].FIRSTNAME,
        lastname: data[0].LASTNAME,
        dob: data[0].DATEOFBIRTH,
        gender: data[0].GENDER,
        contactno1: data[0].CONTACTNO1,
        contactno2: data[0].CONTACTNO2,
        pass: data[0].PASS,
        lat: data[0].LATITUDE,
        lon: data[0].LONGITUDE,
      });
    } catch (error) {
      console.error("Error searching:", error);
    }
    // console.log(profile);
  };

  return (
    <>
      <Menu active={activeMenu} />
      <div className={styles.container}>
        <button
          style={{ fontFamily: "Georgia, sans-serif" }}
          className={styles.button}
          onClick={openFriendModal}
        >
          View Friends
        </button>
        <h1
          className={styles.offerTitle}
          style={{ fontFamily: "Georgia, sans-serif" }}
        >
          Update My Information
        </h1>
        <br />
        <Profile profile={profile} />
      </div>
      {showFriendModal && (
        <FriendModal friends={friends} onClose={closeFriendModal} />
      )}
    </>
  );
}

export async function getServerSideProps({ params }) {
  const { userId } = params;
  return { props: { userId } };
}
