import { Form,Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useSelector,useDispatch } from "react-redux";
import { loginMentor } from "../../redux/actions/authActionMentor";
import axios from "../../axios/axios";
import jwt_decode from "jwt-decode";
import {GET_ERRORS, SET_CURRENT_USER} from "../../redux/types";

const Login = () => {
    const dispatch = useDispatch();
    const {register, handleSubmit, error} = useForm();
    const { user } = useSelector((state) => state.auth);
    console.log("userss",user)
    const onSubmit = async (values) => {
        await axios.post(`/api/mentor/login`,values)
            .then(res => {
                const {token} = res.data;
                const decoded = jwt_decode(token);
                // if (decoded.emailVerify === false){
                //     // history.push("/verifyEmail",decoded)
                //     console.log("email not verified yet")
                // } else{
                localStorage.setItem("jwtToken", token);
                dispatch(loginMentor(decoded))
                // history.push("/mentor-dashboard",decoded)
                console.log("login successful")
                // }
            })
            .catch( err => {
                console.log("login error", err.message)
                dispatch({
                    type : GET_ERRORS,
                    payload : err.message
                })
            })
    }

    return (
        <>
            <Form
                onSubmit={handleSubmit(onSubmit)}
                className="form-group"
            >
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                        name="email"
                        type="email"
                        placeholder="Enter your email"
                        ref={register()}
                    />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        name="password"
                        type="password"
                        placeholder="Password"
                        ref={register()}
                    />
                </Form.Group>

                <Button
                    variant="primary"
                    type="submit"
                >
                    Submit
                </Button>
                <br/>
                <br/>
                <span>Click here to <a href="">Register</a></span>
            </Form>
        </>
    )
}

export default Login