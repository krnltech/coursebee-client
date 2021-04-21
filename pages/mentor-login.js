import styles from "../styles/CourseDetails.module.css";
import classNames from "classnames";
import Login from "../components/login/Login";

const MentorLogin = () => {
  return (
    <>
      <div className="container p-5">
        <h1 className="text-center">Mentor Login</h1>
        <Login />
      </div>
    </>
  );
};

export default MentorLogin;
