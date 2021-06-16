import React from "react";
import { Card, Button, Form } from "react-bootstrap";

function Login() {
  return (
    <>
      <Card className="bg-dark-custom">
        <Card.Body>
          <h2 className="text-center mb-4">Login</h2>
          <Form>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" required />
            </Form.Group>
            <Form.Group id="password" className="mt-4">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" required />
            </Form.Group>
            <Button type="submit" className="w-100 mt-5">
              Login
            </Button>
          </Form>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">Belum punya Akun?</div>
    </>
  );
}

export default Login;
