import React from "react";
import "./Register.css";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";

function Register() {
  return (
    <>
      <div className="container register-page">
        <h1>Ro'yxatdan o'tish</h1>
        <form action="">
          <h3>
            Akkountingiz bormi? Unda Akkauntingizga{""}{" "}
            <Link to={"/login"}>kiring</Link>
          </h3>
          <input required type="text" placeholder="Ismingizni kiriting" />
          <input required type="text" placeholder="Familiyangizni kiriting" />
          <input required type="text" placeholder="Yoshingizni kiriting" />
          <input
            required
            type="text"
            placeholder="Telefon raqamingizni kiriting "
          />
          <div className="col-12 text-center mt-5">
            <button className="btn btn-primary py-3 px-5" type="submit">
              Davom etish
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Register;
