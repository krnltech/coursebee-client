import Error404comps from "../components/error-404/Error404";
import HeadComps from '../components/Head';

const Error404 = () => {
  return (  
    <>
      <HeadComps title="Coursebee | 404 not found" iconSource = "/icon/coursebee.ico"/>
      <Error404comps />
    </>
  );
}
 
export default Error404;
