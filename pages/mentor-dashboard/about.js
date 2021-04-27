import MentorLayout from "../../components/layout/MentorLayout";

const MentorDashboard = () => {
  return (
    <MentorLayout>
        <h2 className="text-center">PROFILE</h2>
        <div className="row">
            <div className="col-md-6">
                <p><b>Full Name : </b> Md. Zahid Hossain</p>
                <p><b>Email : </b> Md. Zahid Hossain</p>
                <p><b>Phone : </b> Md. Zahid Hossain</p>
            </div>
            <div className="col-md-6">
                <img src="https://picsum.photos/100/100"/>
            </div>
        </div>
    </MentorLayout>
  );
};

export default MentorDashboard;
