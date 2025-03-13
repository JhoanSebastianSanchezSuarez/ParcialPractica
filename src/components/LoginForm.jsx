import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from 'react-router-dom';
import Button from "react-bootstrap/esm/Button";
import Card from 'react-bootstrap/Card';

function LoginForm() {
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [formValues, setFormValues] = useState({ email: "", password: "" });
    const [errors, setErrors] = useState({ email: "", password: "" });
    const navigate = useNavigate();

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    const handleEmailChange = (e) => {
        setFormValues({ ...formValues, email: e.target.value });
    };

    const handlePasswordChange = (e) => {
        setFormValues({ ...formValues, password: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        let emailError = "";
        let passwordError = "";

        if (!formValues.email.includes("@") || !formValues.email.split("@")[1]?.includes(".")) {
            emailError = "El correo no es válido";
        }

        if (formValues.password.length !== 8) {
            passwordError = "La contraseña debe tener 8 caracteres.";
        }

        if (emailError || passwordError) {
            setErrors({ email: emailError, password: passwordError });
        } else {
            console.log("Formulario enviado", formValues);
            setErrors({ email: "", password: "" });
            navigate("/deportes");

        }
    };

    return (
        <div className="LoginPage">
            <Card className="LoginBox">
                <p className="Texto1">Log In</p>
                <form onSubmit={handleSubmit}>
                    <div className="FormGroup">
                        <label htmlFor="email">Email</label>
                        <input
                            type="text"
                            className="customInput"
                            id="email"
                            name="email"
                            value={formValues.email}
                            onChange={handleEmailChange}
                        />
                        {errors.email && <p className="alerta">{errors.email}</p>}
                    </div>
                    <div className="FormGroup">
                        <label htmlFor="password">Password</label>
                        <div className="passwordContainer">
                            <input
                                type={passwordVisible ? "text" : "password"}
                                className="customInput"
                                id="password"
                                name="password"
                                value={formValues.password}
                                onChange={handlePasswordChange}
                            />
                            <span className="passwordToggle" onClick={togglePasswordVisibility}>
                                <FontAwesomeIcon icon={passwordVisible ? faEyeSlash : faEye} />
                            </span>
                        </div>
                        {errors.password && <p className="alerta">{errors.password}</p>}
                    </div>
                    <Button variant="primary" type="submit">Log In</Button>
                </form>
            </Card>
        </div>
    );
}

export default LoginForm;
