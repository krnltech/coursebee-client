import Sidebar from "../sidebar/Sidebar";

const MentorLayout = ({children}) => {
    return (
        <>
            <div className="d-flex" id="wrapper">
                <Sidebar/>
                <div id="page-content-wrapper">
                    <div className="container-fluid">
                        {children}
                    </div>
                </div>
            </div>
        </>
    )
}

export default MentorLayout