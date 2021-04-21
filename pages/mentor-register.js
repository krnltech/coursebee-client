const { default: Register } = require("../components/register/Register")

const MentorRegister = ()=> {
  return(
    <div className="container p-5">
      <h1 className="text-center">Mentor Register</h1>
      <Register />
    </div>
  )
};

export default MentorRegister;
