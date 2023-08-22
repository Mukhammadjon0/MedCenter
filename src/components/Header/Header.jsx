import React, { useContext } from 'react'
import './Header.css'
import { BsTelephone } from 'react-icons/bs'
import { VscMail } from 'react-icons/vsc'
import { FaFacebook, FaInstagram, FaOdnoklassniki, FaTelegram, FaTiktok, FaTwitter, FaYoutube } from 'react-icons/fa'
import { StateContext } from '../../context/context'
import { useContactQuery } from '../../services/contactsApi'
function Header() {
  const { setLang, lang } = useContext(StateContext)

  const { data: contact } = useContactQuery()
  return (
    <div className="container-fluid py-2 border-bottom d-none d-lg-block">
      <div className="container">
        <div className="row">
          <div className="col-md-6 text-center text-lg-start mb-2 mb-lg-0">
            <div className="d-inline-flex align-items-center">
              <a className="text-decoration-none text-body pe-3" target='_blank' href={`tel:${contact?.result[0]?.phone}`}
              > <BsTelephone className='' />{contact?.result[0]?.phone}</a>
              <span className="text-body">|</span>
              <a className="text-decoration-none text-body px-3" target='_blank' href={`https://${contact?.result[0].email}`}
              > <VscMail /> {contact?.result[0]?.email}</a>
            </div>
          </div>
          <div className="col-md-6 text-center text-lg-end">
            <div className="d-inline-flex align-items-center">
              <select className='bg-transparent border border-0' name="" id="" value={lang} onChange={(e) => setLang(e.target.value)}>
                <option value="uz">uz</option>
                <option value="ru">ru</option>
                <option value="en">en</option>
              </select>
              <a className="text-body ps-2 cursor-pointer" target='_blank' href={contact?.result[0]?.telegram}>
                <FaTelegram />
              </a>
              <a className="text-body ps-2 cursor-pointer" target='_blank' href={contact?.result[0]?.facebook}>
                <FaFacebook />
              </a>
              <a className="text-body ps-2 cursor-pointer" target='_blank' href={contact?.result[0]?.twetter}>
                <FaTwitter />
              </a>
              <a className="text-body ps-2 cursor-pointer" target='_blank' href={contact?.result[0]?.insagram}>
                <FaInstagram />
              </a>
              <a className="text-body ps-2 cursor-pointer" target='_blank' href={contact?.result[0]?.youtube}>
                <FaYoutube />
              </a>
              <a className="text-body ps-2 cursor-pointer" target='_blank' href={contact?.result[0]?.tiktok}>
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