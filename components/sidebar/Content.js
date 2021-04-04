import { useSelector,useDispatch } from "react-redux";
const Content = () => {
  const { user,isAuthenticated } = useSelector((state) => state.auth.user);
  return (
    user ?
      <div >
        <h1>Hello {user.fullname}</h1>
      </div>
    :
      <div >
       <h1>Hello</h1>
          <courseUpload/>
      </div>
  );
}
 
export default Content;