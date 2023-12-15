import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Link, redirect, useNavigate } from "react-router-dom";
function AuthLoginForm() {
    let navigate = useNavigate();
    const handleSubmit = (e) => {
        // console.log(e.target);
        e.preventDefault();
        // console.log(ctx.doLogin(email, password));
        // const statusCode = ctx.doLogin(email, password);
        navigate('/oferta')
        console.log("zalogowano");
      };
    return(
        <div className="mask d-flex align-items-center h-100 gradient-custom-3">
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-9 col-lg-7 col-xl-6">
              <div className="card">
                <div className="card-body p-5">
                  <h2 className="text-uppercase text-center mb-5">Logowanie</h2>
  
                  <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="email">
                      <Form.Label>Adres email</Form.Label>
                      <Form.Control
                        type="email"
                        placeholder="Wprowadź adres email"
                        // value={email}
                        // onChange={(e) => setEmail(e.target.value)}
                        // required
                      />
                    </Form.Group>
  
                    <Form.Group controlId="password">
                      <Form.Label>Hasło</Form.Label>
                      <Form.Control
                        type="password"
                        placeholder="Wprowadź hasło"
                        // value={password}
                        // onChange={(e) => setPassword(e.target.value)}
                        // required
                      />
                    </Form.Group>
                    <div className="d-flex justify-content-center flex-column">
                      <Button variant="info" type="submit">
                        Zaloguj
                      </Button>
                    </div>
                    {/* className="btn btn-info btn-block btn-lg gradient-custom-4 text-body" */}
                    <p className="text-center text-muted mt-5 mb-0">
                      Nie posiadasz konta?{" "}
                      <Link to={`/register`} className="fw-bold text-body">
                        <u>Zarejestruj się</u>
                      </Link>
                    </p>
                    {/* <Button variant="primary" type="submit">
                      Zaloguj się
                    </Button> */}
                  </Form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}
export default AuthLoginForm;