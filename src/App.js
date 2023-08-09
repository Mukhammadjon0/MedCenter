import { Route, Routes } from 'react-router-dom';
import './App.css';
import './assets/css/bootstrap.min.css'
import './assets/css/style.css'
import './assets/library/tempusdominus-bootstrap-4.css'
import './assets/library/tempusdominus-bootstrap-4.min.css'
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import Blog from './pages/Blog/Blog';
import Contact from './pages/Contact/Contact';
import Footer from './components/Footer/Footer';
import AboutPage from './pages/About/About';
import BackTop from './components/BackTop/BackTop';
import ServicesPage from './pages/Services/Services';
import BlogDetail from './pages/Blog/BlogDetail';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { BASE_URL } from './constant/constant';
import { StateContext } from './context/context';
import Main from './pages/Main/Main';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import ServiceDetail from './pages/Services/ServiceDetail';
import DocInfo from "./components/DocInfo/DocInfo";

function App() {
  const [news, setNews] = useState();
  const [contact, setContact] = useState();
  const [lang, setLang] = useState(
    JSON.parse(localStorage.getItem("lang")) || "uz"
  );

  const fetchData = async () => {
    try {
      // const response = await axios.get(`${BASE_URL}/api/v1/new/?lan=${lang}`);
      // const data = response?.data;
      // setNews(data?.data)
      // Handle the data as needed
    } catch (error) {
      console.error("Error:", error);
      // Handle the error
    }
  };
  const getContact = async () => {
    try {
      // const response = await axios.get(`${BASE_URL}/api/v1/contact`)
      // const data = response?.data
      // setContact(data?.data)
    } catch (error) {
      console.log("Error:", error);
    }
  };
  useEffect(() => {
    localStorage.setItem("lang", JSON.stringify(lang));
    fetchData();
    getContact();
  }, [lang]);

  console.log(contact);
  return (
    <div className="App">
      <StateContext.Provider value={{ news, contact, setLang, lang }}>
        <Header />
        <Navbar />
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/med' element={<Home />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/services' element={<ServicesPage />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/blogDetail/:id' element={<BlogDetail />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='serviceDetail/:id' element={<ServiceDetail />} />
        </Routes>
        <DocInfo />
        <Footer />
        <BackTop />
      </StateContext.Provider>
    </div>
  );
}

export default App;
