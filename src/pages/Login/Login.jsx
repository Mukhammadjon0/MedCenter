import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";

function Login() {
  return (
    <>
    <Navbar/>
      <div className="container login-page">
        <h1>Profilga kirish</h1>
        <h3>
          Akkauntingiz yo'qmi? Unda{""}{" "}
          <Link to={"/register"}>Ro'yxatdan o'ting</Link>
        </h3>
        <form action="">
          <input required type="text" placeholder="Loginingizni kiriting" />
          <input
            required
            type="password"
            placeholder="Telefon raqamingizni kiriting "
          />
          <div className="col-12 text-center mt-5">
            <button className="btn btn-primary py-3 px-5">
              Tizimga kirish
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Login;
