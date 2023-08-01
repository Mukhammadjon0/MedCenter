import React, { useContext } from 'react'
import './Header.css'

import UzFlag from '../../assets/icon/uz.svg'
import UsFlag from '../../assets/icon/us.svg'
import RuFlag from '../../assets/icon/ru.svg'

import { BsTelephone } from 'react-icons/bs'
import { VscMail } from 'react-icons/vsc'
import { FaFacebook, FaInstagram, FaOdnoklassniki, FaTelegram, FaTiktok, FaTwitter, FaYoutube } from 'react-icons/fa'
import { StateContext } from '../../context/context'
function Header() {
  const { contact, lang, setLang } = useContext(StateContext)
  return (
    <div className="container-fluid py-2 border-bottom d-none d-lg-block">
      <div className="container">
        <div className="row">
          <div className="col-md-6 text-center text-lg-start mb-2 mb-lg-0">
            <div className="d-inline-flex align-items-center">
              <a className="text-decoration-none text-body pe-3" href={contact?.phone_clinica}
              > <BsTelephone className='' />{contact?.phone_clinica}</a>
              <span className="text-body">|</span>
              <a className="text-decoration-none text-body px-3" href={contact?.email}
              > <VscMail /> {contact?.email}</a>
            </div>
          </div>
          <div className="col-md-6 text-center text-lg-end">
            <div className="d-inline-flex align-items-center">
              <img
                onClick={() => setLang('uz')}
                className="text-body mx-2 border-1 border-secondary border cursor-pointer"
                width="20px"
                height="16px"
                src={UzFlag}
                alt="icon"
              />
              <img
                onClick={() => setLang('ru')}
                className="text-body mx-2 border-1 border-secondary border cursor-pointer"
                width="20px"
                height="16px"
                src={RuFlag}
                alt="icon"
              />
              <img
                onClick={() => setLang('en')}
                className="text-body mx-2 border-1 border-secondary border cursor-pointer"
                width="20px"
                height="16px"
                src={UsFlag}
                alt="icon"
              />
              <a className="text-body ps-2 cursor-pointer" href={contact?.telegram}>
                <FaTelegram />
              </a>
              <a className="text-body ps-2 cursor-pointer" href={contact?.facebook}>
                <FaFacebook />
              </a>
              <a className="text-body ps-2 cursor-pointer" href={contact?.twitter}>
                <FaTwitter />
              </a>
              <a className="text-body ps-2 cursor-pointer" href={contact?.odnoklassniki}>
                <FaOdnoklassniki />
              </a>
              <a className="text-body ps-2 cursor-pointer" href={contact?.instagramm}>
                <FaInstagram />
              </a>
              <a className="text-body ps-2 cursor-pointer" href={contact?.youtube}>
                <FaYoutube />
              </a>
              <a className="text-body ps-2 cursor-pointer" href="">
                <FaTiktok />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header