import { React, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { staff } from "../../data";
import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { StateContext } from "../../context/context";
// import rasm from "/home/miraziz/fintechHub/MedCenter/src/assets/img/darmonMed.jpg"

import "./DocInfo.css";
import { useDoctorsDetailQuery } from "../../services/doctorsApi";
export default function DocInfo() {
  const { id } = useParams()
  const { data: docInfo } = useDoctorsDetailQuery(Number(id))
  console.log(docInfo)


  const [show, setShow] = useState(false);
  const { lang } = useContext(StateContext);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="DocInfo">
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>ShifoMed</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="d-flex justify-content-between">
            <h4 className="text-primary">
              {lang === "uz"
                ? "Shifokor :"
                : lang === "ru"
                  ? "Главный :"
                  : "Doctor :"}
            </h4>
            <span className="darkBlue">Jumayev Jasur</span>
          </div>
          <div className="d-flex justify-content-between">
            <h4 className="text-primary">
              {lang === "uz"
                ? "Navbat :"
                : lang === "ru"
                  ? "Главный :"
                  : "Queue :"}
            </h4>
            <span className="darkBlue">13</span>
          </div>
          <div className="d-flex justify-content-between">
            <h4 className="text-primary">
              {lang === "uz"
                ? "Xona :"
                : lang === "ru"
                  ? "Главный :"
                  : "Room :"}
            </h4>
            <span className="darkBlue">18</span>
          </div>
          <div className="d-flex justify-content-between">
            <h4 className="text-primary">
              {lang === "uz"
                ? "Qavat :"
                : lang === "ru"
                  ? "Главный :"
                  : "Floor :"}
            </h4>
            <span className="darkBlue">2</span>
          </div>
          <div className="d-flex justify-content-between">
            <h4 className="text-primary">
              {lang === "uz"
                ? "Bemor :"
                : lang === "ru"
                  ? "Главный :"
                  : "Pasient :"}
            </h4>
            <span className="darkBlue">Davirov G'ayrat</span>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-lg-5">
            <img src={staff[1].img} alt="" />
          </div>
          <div className="col-lg-6">
            <h2>{staff[1].name}</h2>
            <h3>{staff[1].space}</h3>
            <div className="infoDoc mt-4">
              <h3 className="room d-flex justify-content-between">
                Ish vaqti <span className="d-block">10:00 17:00</span>
              </h3>
              <h3 className="room d-flex justify-content-between">
                Xona <span>10</span>
              </h3>
              <h3 className="room d-flex justify-content-between">
                Qavat <span>2</span>
              </h3>
              <h3 className="room d-flex justify-content-between">
                Mijozlar soni <span>8</span>
              </h3>
              <h3 className="room d-flex justify-content-between">
                Xozir<span>3</span>
              </h3>
              <h3 className="room d-flex justify-content-between">
                2-mijozga
                <span>25 daqiqa</span>
              </h3>
            </div>
            <p className="mt-3">
              {staff[1].text} Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Aliquam impedit alias error esse dolores praesentium vitae
              nulla porro. Eius dignissimos, reprehenderit enim distinctio porro
              quia non voluptatum repellendus nisi a?{" "}
            </p>

            <button
              variant="primary"
              onClick={handleShow}
              className="btn btn-primary p-4"
            >
              Navabat olish
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
