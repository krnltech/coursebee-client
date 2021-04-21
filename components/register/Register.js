import { useForm } from "react-hook-form";
import { Button, Form } from "react-bootstrap";

const Register = () => {
  const { register, handleSubmit, error } = useForm();

  return (
    <div>
      <Form className="form-group">
        <Form.Group controlId="formBasicName">
          <Form.Label>Fullname</Form.Label>
          <Form.Control
            name="name"
            type="text"            
            placeholder="Enter your name"
            ref={register()}
          />
        </Form.Group>

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

        <Form.Group controlId="formBasicPhone">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control
            name="phone"
            type="number"            
            placeholder="Enter your phone number"
            ref={register()}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
        <br />
        <br />
        <span>
          Already registered? Click here to <a href="/mentor-login">Login</a>
        </span>
      </Form>
    </div>
  );
};

export default Register;
