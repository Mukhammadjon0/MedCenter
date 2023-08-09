import React, { useContext } from "react";
import "./Services.css";
import { staff } from "../../data";
import Navbar from "../../components/Navbar/Navbar";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
function ServiceDetail() {
  return (
    <>
      <div className="container-fluid py-5 container">
        {staff?.map((item) => (
          <div className="team-item">
            <div className="row g-0 bg-light rounded overflow-hidden">
              <div className="col-12 col-sm-5 h-100">
                <img
                  className="img-fluid h-100"
                  src={item.img}
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="col-12 col-sm-7 h-100 d-flex flex-column">
                <div className="mt-auto p-4">
                  <h3>{item.name}</h3>
                  <h6 className="fw-normal fst-italic text-primary mb-4">
                    {item.space}
                  </h6>
                  <p className="m-0">{item.text}</p>
                </div>
                <div className="d-flex mt-auto border-top p-4 personal-links">
                  {/* <a className="btn btn-lg btn-primary btn-lg-square rounded-circle me-3" href="#"><FaTelegram /></a>
                            <a className="btn btn-lg btn-primary btn-lg-square rounded-circle me-3" href="#"><FaFacebookF /></a>
                            <a className="btn btn-lg btn-primary btn-lg-square rounded-circle me-3" href="#"><FaInstagram /></a>
                        <a className="btn btn-lg btn-primary btn-lg-square rounded-circle " href="#"><FaPhone /></a> */}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default ServiceDetail;
