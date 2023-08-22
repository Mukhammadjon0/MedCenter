import React, { useContext } from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import {
  FaAngleRight,
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
  FaMapMarkedAlt,
  FaPhoneAlt,
  FaTelegram,
  FaTwitter,
} from "react-icons/fa";
import { StateContext } from "../../context/context";
import { format } from "libphonenumber-js";
import { useContactQuery } from "../../services/contactsApi";
function Footer() {
  const { lang } = useContext(StateContext);
  const { data: contact } = useContactQuery()

  const phoneNumber = {
    phone: contact?.result[0]?.phone,
  };
  const formattedPhoneNumber = format(phoneNumber, "US", "National");
  return (
    <footer>
      <div className="container-fluid bg-dark text-light mt-5 py-5">
        <div className="container py-5">
          <div className="row g-5">
            <div className="col-lg-3 col-md-6">
              <h4 className="d-inline-block text-primary text-uppercase border-bottom border-5 border-secondary mb-4">
                {lang === "uz"
                  ? "Bog'laning"
                  : lang === "ru"
                    ? "Свяжитесь С Нами"
                    : "Get In Touch"}
              </h4>
              <p className="mb-2">
                <FaMapMarkedAlt className="text-primary me-3" />
                {lang === "uz"
                  ? contact?.result[0]?.address_uz
                  : lang === "ru"
                    ? contact?.result[0]?.address_ru
                    : contact?.result[0]?.address_en
                }
              </p>
              <p className="mb-2">
                <FaEnvelope className="text-primary me-3" />
                {contact?.result[0]?.email}
              </p>
              <p className="mb-0">
                <FaPhoneAlt className="text-primary me-3" />{" "}
                {formattedPhoneNumber}
              </p>
            </div>
            <div className="col-lg-3 col-md-6">
              <h4 className="d-inline-block text-primary text-uppercase border-bottom border-5 border-secondary mb-4">
                {lang === "uz"
                  ? "Tezkor Havolalar"
                  : lang === "ru"
                    ? "Быстрые Ссылки"
                    : "Quick Links"}
              </h4>
              <div className="d-flex flex-column justify-content-start">
                <Link className="text-light mb-2 footer-link" to="/">
                  <FaAngleRight className="me-2" />
                  {lang === "uz"
                    ? "Asosiy"
                    : lang === "ru"
                      ? "главный"
                      : "Home"}
                </Link>
                <Link className="text-light mb-2 footer-link" to="/about">
                  <FaAngleRight className="me-2" />
                  {lang === "uz"
                    ? "Biz haqimizda"
                    : lang === "ru"
                      ? "О нас"
                      : "About Us"}
                </Link>
                <Link className="text-light mb-2 footer-link" to="/services">
                  <FaAngleRight className="me-2" />
                  {lang === "uz"
                    ? "Bizning xizmatlar"
                    : lang === "ru"
                      ? "Наши услуги"
                      : "Our Services"}
                </Link>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <h4 className="d-inline-block text-primary text-uppercase border-bottom border-5 border-secondary mb-4">
                {lang === "uz"
                  ? "Ommabop havolalar"
                  : lang === "ru"
                    ? "Популярные ссылки"
                    : "Popular Links"}
              </h4>
              <div className="d-flex flex-column justify-content-start">
                <Link className="text-light mb-2 footer-link" to="/blog">
                  <FaAngleRight className="me-2" />
                  {lang === "uz"
                    ? "Yangiliklar"
                    : lang === "ru"
                      ? "Новости"
                      : "News"}
                </Link>
                <Link className="text-light mb-2 footer-link" to="/contact">
                  <FaAngleRight className="me-2" />
                  {lang === "uz"
                    ? "Aloqa"
                    : lang === "ru"
                      ? "Контакт"
                      : "Contact"}
                </Link>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <h6 className="text-primary text-uppercase mt-4 mb-3">
                {lang === "uz"
                  ? "Obuna Boling"
                  : lang === "ru"
                    ? "Подписаться"
                    : "Follow Us"}
              </h6>
              <div className="d-flex">
                <Link
                  className="btn btn-lg btn-primary btn-lg-square rounded-circle me-2 footer-icons"
                  to=""
                >
                  <FaTwitter />
                </Link>
                <Link
                  className="btn btn-lg btn-primary btn-lg-square rounded-circle me-2 footer-icons"
                  to=""
                >
                  <FaFacebook />
                </Link>
                <Link
                  className="btn btn-lg btn-primary btn-lg-square rounded-circle me-2 footer-icons"
                  to=""
                >
                  <FaLinkedinIn />
                </Link>
                <Link
                  className="btn btn-lg btn-primary btn-lg-square rounded-circle me-2 footer-icons"
                  to=""
                >
                  <FaInstagram />
                </Link>
                <Link
                  className="btn btn-lg btn-primary btn-lg-square rounded-circle footer-icons"
                  to=""
                >
                  <FaTelegram />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid bg-dark text-light border-top border-secondary py-4">
        <div className="container">
          <div className="row g-5">
            <div className="col-md-6 text-center text-md-start">
              <p className="mb-md-0">
                &copy;{" "}
                <Link className="text-primary" to="#">
                  ShifoMed
                </Link>
                .
                {lang === "uz"
                  ? "Barcha huquqlar himoyalangan."
                  : lang === "ru"
                    ? "Все права защищены."
                    : "All Rights Reserved."}
              </p>
            </div>
            <div className="col-md-6 text-center text-md-end">
              <p className="mb-0">
                {lang === "uz"
                  ? ""
                  : lang === "ru"
                    ? "Разработан"
                    : "Designed by"}{" "}
                <a
                  className="text-primary"
                  href="https://t.me/backspacee"
                  target="_blank"
                >
                  Group
                </a>{" "}
                {lang === "uz"
                  ? "Tomonidan ishlab chiqilgan"
                  : lang === "ru"
                    ? ""
                    : ""}
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
