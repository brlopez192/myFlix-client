import{ useState } from "react";
import React from "react";
import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";

export const SignupView = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [birthday, setBirthday] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = {
      Username: username,
      Password: password,
      Email: email,
      Birthday: birthday
    };

    fetch("https://movieflixapp-88791d8c1b4d.herokuapp.com/signup", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      }
    }).then((response) => {
      if (response.ok) {
        alert("Signup successful");
        window.location.reload();
      } else {
        alert("Signup failed");
      }
    });
  };

  return (
    <Form onSubmit={handleSubmit}>
    <Form.Group controlId="formUsername">
      <Form.Label>Username:</Form.Label>
      <Form.Control
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
        minLength="3" 
      />
    </Form.Group>

    <Form.Group controlId="formPassword">
      <Form.Label>Password:</Form.Label>
      <Form.Control
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
    </Form.Group>

    <Form.Group controlId="formEmail">
      <Form.Label>Email:</Form.Label>
      <Form.Control
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
    </Form.Group>

    <Form.Group controlId="formBirthday">
      <Form.Label>Birthday:</Form.Label>
      <Form.Control
        type="date"
        value={birthday}
        onChange={(e) => setBirthday(e.target.value)}
        required
      />
    </Form.Group>
    <Button type="submit">
      Submit
    </Button>
  </Form>
  );
};

{/* <form onSubmit={handleSubmit}>
<label>
  Username:
  <input
    type="text"
    value={username}
    onChange={(e) => setUsername(e.target.value)}
    required
    minLength="3"
  />
</label>
<label>
  Password:
  <input
    type="password"
    value={password}
    onChange={(e) => setPassword(e.target.value)}
    required
  />
</label>
<label>
  Email:
  <input
    type="email"
    value={email}
    onChange={(e) => setEmail(e.target.value)}
    required
  />
</label>
<label>
  Birthday:
  <input
    type="date"
    value={birthday}
    onChange={(e) => setBirthday(e.target.value)}
    required
  />
</label>
<button type="submit">Submit</button>
</form> */}