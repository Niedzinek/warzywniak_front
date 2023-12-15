import React, { useContext, useState, useMemo } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
// import UserContext from "../../../user/userContext";
import { useNavigate } from "react-router-dom";

const AuthRegistryForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [pesel, setPesel] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const ctx = useContext(UserContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // ctx.doRegister(
    //   firstName,
    //   lastName,
    //   address,
    //   dateOfBirth,
    //   phoneNumber,
    //   pesel,
    //   email,
    //   password
    // );
  };

  // const rex = useMemo(() => {
  //   if (ctx.isLoggedIn) navigate("/role");
  // }, [ctx.isLoggedIn]);

  return (
    <div className="mask d-flex align-items-center h-100 gradient-custom-3">
      <div className="container h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-12 col-md-9 col-lg-7 col-xl-6">
            <div className="card">
              <div className="card-body p-5">
                <h2 className="text-uppercase text-center mb-5">Rejestracja</h2>
                <Form onSubmit={handleSubmit}>
                  <div className="form-outline mb-6">
                    <Form.Group
                      controlId="firstName"
                      // className="form-outline mb-6"
                    >
                      <Form.Label className="form-label">Imię</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Wprowadź imię"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        required
                      />
                    </Form.Group>
                  </div>
                  <div className="form-outline mb-6">
                    <Form.Group controlId="lastName">
                      <Form.Label>Nazwisko</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Wprowadź nazwisko"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        required
                      />
                    </Form.Group>
                  </div>
                  <div className="form-outline mb-6">
                    <Form.Group controlId="dateOfBirth">
                      <Form.Label>Data urodzenia</Form.Label>
                      <Form.Control
                        type="date"
                        value={dateOfBirth}
                        onChange={(e) => setDateOfBirth(e.target.value)}
                        required
                      />
                    </Form.Group>
                  </div>

                  <Form.Group controlId="address">
                    <Form.Label>Adres zamieszkania</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={2}
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      required
                    />
                  </Form.Group>

                  <Form.Group controlId="phoneNumber">
                    <Form.Label>Numer telefonu</Form.Label>
                    <Form.Control
                      type="tel"
                      placeholder="Wprowadź numer telefonu"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      required
                    />
                  </Form.Group>

                  <Form.Group controlId="pesel">
                    <Form.Label>PESEL</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Wprowadź PESEL"
                      value={pesel}
                      onChange={(e) => setPesel(e.target.value)}
                      required
                    />
                  </Form.Group>

                  <Form.Group controlId="email">
                    <Form.Label>Adres email</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Wprowadź adres email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </Form.Group>
                  <div className="form-outline mb-6">
                    <Form.Group controlId="password">
                      <Form.Label>Hasło</Form.Label>
                      <Form.Control
                        type="password"
                        placeholder="Wprowadź hasło"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                      />
                    </Form.Group>
                  </div>
                  <div className="d-flex justify-content-center flex-column">
                    <button className="btn btn-info btn-block btn-lg gradient-custom-4 text-body">
                      Zarejestruj
                    </button>
                  </div>

                  <p className="text-center text-muted mt-5 mb-0">
                    Masz już konto?{" "}
                    <Link to={`/login`} className="fw-bold text-body">
                      <u>Zaloguj się</u>
                    </Link>
                  </p>
                  {/* <Button variant="primary" type="submit">
                    Zarejestruj się
                  </Button> */}
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthRegistryForm;
