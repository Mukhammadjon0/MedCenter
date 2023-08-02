import Staff1 from './assets/img/team-1.jpg'
import Staff2 from './assets/img/team-2.jpg'
import Staff3 from './assets/img/team-3.jpg'

import Comment1Img from './assets/img/testimonial-1.jpg'
import Comment2Img from './assets/img/testimonial-2.jpg'
import Comment3Img from './assets/img/testimonial-3.jpg'

import Blog1 from './assets/img/blog-1.jpg'
import Blog2 from './assets/img/blog-2.jpg'
import Blog3 from './assets/img/blog-3.jpg'

import About1 from './assets/img/about.jpg'
import About2 from './assets/img/about2.jpg'
import About3 from './assets/img/about3.jpg'
import About4 from './assets/img/about4.jpg'
import About5 from './assets/img/about5.jpg'
import About6 from './assets/img/about6.jpg'

import MedPlus from './assets/img/med+.jpg'
import ShifoMed from './assets/img/shifoMed.jpg'
import Darmon from './assets/img/darmonMed.jpg'
import MedCenter from './assets/img/medCenter.jpg'


import { FaHandHoldingMedical, FaMicroscope, FaProcedures, FaRegHospital, FaStethoscope, FaUserMd, FaClinicMedical, FaFileMedical, FaFileMedicalAlt, FaPills } from 'react-icons/fa'

export const staff = [
    { img: Staff1, name: 'Doctor Name', space: 'Cardiology Specialist', text: 'Dolor lorem eos dolor duo eirmod sea. Dolor sit magna rebum clita rebum dolor', id: 1 },
    { img: Staff2, name: 'Doctor Name', space: 'Cardiology Specialist', text: 'Dolor lorem eos dolor duo eirmod sea. Dolor sit magna rebum clita rebum dolor', id: 2 },
    { img: Staff3, name: 'Doctor Name', space: 'Cardiology Specialist', text: 'Dolor lorem eos dolor duo eirmod sea. Dolor sit magna rebum clita rebum dolor', id: 3 },
]

export const comments = [
    { img: Comment1Img, text: 'Dolores sed duo clita tempor justo dolor et stet lorem kasd labore dolore lorem ipsum. At lorem lorem magna ut et, nonumy et labore et tempor diam tempor erat. Erat dolor rebum sit ipsum.', name: 'Patient Name', space: 'Profession', id: 1 },
    { img: Comment2Img, text: 'Dolores sed duo clita tempor justo dolor et stet lorem kasd labore dolore lorem ipsum. At lorem lorem magna ut et, nonumy et labore et tempor diam tempor erat. Erat dolor rebum sit ipsum.', name: 'Patient Name', space: 'Profession', id: 2 },
    { img: Comment3Img, text: 'Dolores sed duo clita tempor justo dolor et stet lorem kasd labore dolore lorem ipsum. At lorem lorem magna ut et, nonumy et labore et tempor diam tempor erat. Erat dolor rebum sit ipsum.', name: 'Patient Name', space: 'Profession', id: 3 },
]

export const blog = [
    { img: Blog1, title: 'Dolor clita vero elitr sea stet dolor justo diam', text: 'Dolor lorem eos dolor duo et eirmod sea. Dolor sit magna rebum clita rebum dolor stet amet justo', id: 1 },
    { img: Blog2, title: 'Dolor clita vero elitr sea stet dolor justo diam', text: 'Dolor lorem eos dolor duo et eirmod sea. Dolor sit magna rebum clita rebum dolor stet amet justo', id: 2 },
    { img: Blog3, title: 'Dolor clita vero elitr sea stet dolor justo diam', text: 'Dolor lorem eos dolor duo et eirmod sea. Dolor sit magna rebum clita rebum dolor stet amet justo', id: 3 },
    { img: Blog1, title: 'Dolor clita vero elitr sea stet dolor justo diam', text: 'Dolor lorem eos dolor duo et eirmod sea. Dolor sit magna rebum clita rebum dolor stet amet justo', id: 4 },
    { img: Blog2, title: 'Dolor clita vero elitr sea stet dolor justo diam', text: 'Dolor lorem eos dolor duo et eirmod sea. Dolor sit magna rebum clita rebum dolor stet amet justo', id: 5 },
    { img: Blog3, title: 'Dolor clita vero elitr sea stet dolor justo diam', text: 'Dolor lorem eos dolor duo et eirmod sea. Dolor sit magna rebum clita rebum dolor stet amet justo', id: 6 },
]

export const about = [
    { img: About1 },
    { img: About2 },
    { img: About3 },
    { img: About4 },
    { img: About5 },
    { img: About6 },
]

export const services = [
    {
        icon: <FaUserMd />,
        title_ru: 'Консультации специалистов',
        title_uz: 'Mutaxassis maslahati',
        title_en: 'Specialist consultations',
        text_ru: 'Достаточно связаться с врачом посредством видеосвязи либо сделать аудиозвонок, или написать в чат — подойдет любой удобный для пациента вид связи.',
        text_uz: "Video orqali shifokor bilan bog'lanish yoki audio qo'ng'iroq qilish yoki chatga yozish kifoya - bemor uchun qulay bo'lgan har qanday aloqa turi amalga oshiriladi.",
        text_en: 'It is enough to contact the doctor via video, or make an audio call, or write to the chat - any type of communication convenient for the patient will do.',
        id: 1
    },
    {
        icon: <FaStethoscope />,
        title_ru: 'Диагностика',
        title_uz: 'Tashxis',
        title_en: 'Diagnostics',
        text_ru: 'Современный метод диагностики заболеваний органов и систем, не связанных с ионизирующим излучением.',
        text_uz: "Ionlashtiruvchi nurlanish bilan bog'liq bo'lmagan organlar va tizimlarning kasalliklarini tashxislashning zamonaviy usuli.",
        text_en: 'A modern method of diagnosing diseases of organs and systems not related to ionizing radiation.',
        id: 2
    },
    {
        icon: <FaProcedures />,
        title_ru: 'Операция и Хирургия',
        title_uz: 'Operatsia & Jarrohlik',
        title_en: "Operation & Surgery",
        text_ru: 'Доступен любой тип качественной хирургии и операции',
        text_uz: "Istalgan turdagi sifatli jarrohlik va operatsiya turlari mavjud",
        text_en: 'Any type of quality surgery and operation is available',
        id: 3
    },
    {
        icon: <FaHandHoldingMedical />,
        title_ru: 'Хирургическое лечение',
        title_uz: 'Jarrohlik bilan davolash',
        title_en: "Surgery Treatment",
        text_ru: 'Метод лечения заболеваний путём разъединения и соединения тканей в ходе хирургической операции.',
        text_uz: "Jarrohlik operatsiyasi paytida to'qimalarni ajratish va bog'lash orqali kasalliklarni davolash usuli.",
        text_en: 'A method of treating diseases by separating and connecting tissues during a surgical operation.',
        id: 4
    },
    {
        icon: <FaMicroscope />,
        title_ru: 'Анализ',
        title_uz: 'Tahlil',
        title_en: "Analysis",
        text_ru: 'Метод лечения заболеваний путём разъединения и соединения тканей в ходе хирургической операции.',
        text_uz: "Jarrohlik operatsiyasi paytida to'qimalarni ajratish va bog'lash orqali kasalliklarni davolash usuli.",
        text_en: 'A method of treating diseases by separating and connecting tissues during a surgical operation.',
        id: 5
    },
    {
        icon: <FaRegHospital />,
        title_ru: 'Услуги Стационара',
        title_uz: 'Shifoxona Xizmatlari',
        title_en: "Hospital Services",
        text_ru: 'Метод лечения заболеваний путём разъединения и соединения тканей в ходе хирургической операции.',
        text_uz: "Jarrohlik operatsiyasi paytida to'qimalarni ajratish va bog'lash orqali kasalliklarni davolash usuli.",
        text_en: 'A method of treating diseases by separating and connecting tissues during a surgical operation.',
        id: 6
    },
    {
        icon: <FaClinicMedical />,
        title_ru: 'Процедурный Кабинет',
        title_uz: 'Davolash Xonasi',
        title_en: "Treatment Room",
        text_ru: 'Метод лечения заболеваний путём разъединения и соединения тканей в ходе хирургической операции.',
        text_uz: "Jarrohlik operatsiyasi paytida to'qimalarni ajratish va bog'lash orqali kasalliklarni davolash usuli.",
        text_en: 'A method of treating diseases by separating and connecting tissues during a surgical operation.',
        id: 7
    },
    {
        icon: <FaFileMedical />,
        title_ru: 'Медицинские Справки',
        title_uz: "Tibbiy Ma'lumotnomalar",
        title_en: "Medical Certificates",
        text_ru: 'Метод лечения заболеваний путём разъединения и соединения тканей в ходе хирургической операции.',
        text_uz: "Jarrohlik operatsiyasi paytida to'qimalarni ajratish va bog'lash orqali kasalliklarni davolash usuli.",
        text_en: 'A method of treating diseases by separating and connecting tissues during a surgical operation.',
        id: 8
    },
    {
        icon: <FaFileMedicalAlt />,
        title_ru: 'Екстренная Хирургическая Помощь',
        title_uz: "Shoshilinch Jarrohlik Yordami",
        title_en: "Emergency Surgical Care",
        text_ru: 'Метод лечения заболеваний путём разъединения и соединения тканей в ходе хирургической операции.',
        text_uz: "Jarrohlik operatsiyasi paytida to'qimalarni ajratish va bog'lash orqali kasalliklarni davolash usuli.",
        text_en: 'A method of treating diseases by separating and connecting tissues during a surgical operation.',
        id: 9
    },
    {
        icon: <FaPills />,
        title_ru: "Медицина & Фармацевтика",
        title_uz: "Tibbiyot & Dorixona",
        title_en: 'Medicine & Pharmacy',
        text_ru: 'Метод лечения заболеваний путём разъединения и соединения тканей в ходе хирургической операции.',
        text_uz: "Jarrohlik operatsiyasi paytida to'qimalarni ajratish va bog'lash orqali kasalliklarni davolash usuli.",
        text_en: 'A method of treating diseases by separating and connecting tissues during a surgical operation.',
        id: 10
    },
    {
        icon: <FaPills />,
        title_ru: 'Сопровождение пациента в клинику',
        title_uz: "Bemorni klinikaga kuzatib borish",
        title_en: "Accompanying the patient to the clinic",
        text_ru: 'Метод лечения заболеваний путём разъединения и соединения тканей в ходе хирургической операции.',
        text_uz: "Jarrohlik operatsiyasi paytida to'qimalarni ajratish va bog'lash orqali kasalliklarni davolash usuli.",
        text_en: 'A method of treating diseases by separating and connecting tissues during a surgical operation.',
        id: 11
    },
]



export const medCenters = [
    {
        name: 'MEDPlus',
        img: MedPlus,
        title: "MED+ klinikasida biz eng ilg‘or texnologiyalarni chinakam g‘amxo‘rlik iliqligi bilan uyg‘unlashtirib, an’anaviy sog‘liqni saqlash chegaralaridan oshib ketamiz. Bizning muassasamiz eng yangi tibbiy asbob-uskunalar va keng qamrovli mutaxassisliklar bo'yicha tengsiz tibbiy xizmatlarni taqdim etish uchun ilg'or yondashuvga ega.Taniqli tibbiyot mutaxassislari jamoasi boshchiligidagi bizning vazifamiz odamlarga o'z sog'lig'ini nazorat qilish imkoniyatini berish va ularning noyob ehtiyojlarini qondiradigan moslashtirilgan echimlarni taklif qilishdir. Profilaktik yordamdan tortib murakkab tibbiy aralashuvlargacha, biz sizning sog'lomlikka bo'lgan sayohatingiz qulay va samarali bo'lishini ta'minlash uchun yuqoridan va undan ham ko'proq narsani qilamiz.",
        id: 1
    },
    {
        name: 'ShifoMed',
        img: ShifoMed,
        title: "MED+ klinikasida biz eng ilg‘or texnologiyalarni chinakam g‘amxo‘rlik iliqligi bilan uyg‘unlashtirib, an’anaviy sog‘liqni saqlash chegaralaridan oshib ketamiz. Bizning muassasamiz eng yangi tibbiy asbob-uskunalar va keng qamrovli mutaxassisliklar bo'yicha tengsiz tibbiy xizmatlarni taqdim etish uchun ilg'or yondashuvga ega.Taniqli tibbiyot mutaxassislari jamoasi boshchiligidagi bizning vazifamiz odamlarga o'z sog'lig'ini nazorat qilish imkoniyatini berish va ularning noyob ehtiyojlarini qondiradigan moslashtirilgan echimlarni taklif qilishdir. Profilaktik yordamdan tortib murakkab tibbiy aralashuvlargacha, biz sizning sog'lomlikka bo'lgan sayohatingiz qulay va samarali bo'lishini ta'minlash uchun yuqoridan va undan ham ko'proq narsani qilamiz.",
        id: 2
    },
    {
        name: 'Darmon$Service',
        img: Darmon,
        title: "MED+ klinikasida biz eng ilg‘or texnologiyalarni chinakam g‘amxo‘rlik iliqligi bilan uyg‘unlashtirib, an’anaviy sog‘liqni saqlash chegaralaridan oshib ketamiz. Bizning muassasamiz eng yangi tibbiy asbob-uskunalar va keng qamrovli mutaxassisliklar bo'yicha tengsiz tibbiy xizmatlarni taqdim etish uchun ilg'or yondashuvga ega.Taniqli tibbiyot mutaxassislari jamoasi boshchiligidagi bizning vazifamiz odamlarga o'z sog'lig'ini nazorat qilish imkoniyatini berish va ularning noyob ehtiyojlarini qondiradigan moslashtirilgan echimlarni taklif qilishdir. Profilaktik yordamdan tortib murakkab tibbiy aralashuvlargacha, biz sizning sog'lomlikka bo'lgan sayohatingiz qulay va samarali bo'lishini ta'minlash uchun yuqoridan va undan ham ko'proq narsani qilamiz.",
        id: 3
    },
    {
        name: 'MEDCenter',
        img: MedCenter,
        title: "MED+ klinikasida biz eng ilg‘or texnologiyalarni chinakam g‘amxo‘rlik iliqligi bilan uyg‘unlashtirib, an’anaviy sog‘liqni saqlash chegaralaridan oshib ketamiz. Bizning muassasamiz eng yangi tibbiy asbob-uskunalar va keng qamrovli mutaxassisliklar bo'yicha tengsiz tibbiy xizmatlarni taqdim etish uchun ilg'or yondashuvga ega.Taniqli tibbiyot mutaxassislari jamoasi boshchiligidagi bizning vazifamiz odamlarga o'z sog'lig'ini nazorat qilish imkoniyatini berish va ularning noyob ehtiyojlarini qondiradigan moslashtirilgan echimlarni taklif qilishdir. Profilaktik yordamdan tortib murakkab tibbiy aralashuvlargacha, biz sizning sog'lomlikka bo'lgan sayohatingiz qulay va samarali bo'lishini ta'minlash uchun yuqoridan va undan ham ko'proq narsani qilamiz.",
        id: 4
    },
]