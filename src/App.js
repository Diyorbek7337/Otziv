import React, { useEffect, useState } from "react";
import Doctors from "./components/Doctors";
import Navbar from "./components/Navbar";
// import BoyDoc from './image/boydoc.png'
// import GirlDoc from './image/girldoc.png'
import i18next from 'i18next';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import './styles/style.css';
// import Clinika from "./components/Clinika";
// import Kassir from "./components/Kassir";
// import DoctorSamarqand from './components/DoctorSamarqand'
// import KassirSamarqand from "./components/KassirSamarqand";
// import ClinikaSamarqand from "./components/RegistraturaSamarqand";

function App() {
  const { t } = useTranslation("doctor")
  const changeLan = (lang) => {
    i18next.changeLanguage(lang)
  }
  // const posts = ([
  //   { id: 1, image: GirlDoc, Name: "Aliqulova Nozimaxonim", Job: t('doctor.jobNevrapatolog'), Skill: 5, rate: 5, route: "nozima" },
  //   { id: 2, image: GirlDoc, Name: "Xusanbayeva Diyora", Job: t('doctor.jobUzi'), Skill: 7, rate: 4, route: "diyora" },
  //   { id: 3, image: GirlDoc, Name: "Muradyan Viktoriya", Job: t('doctor.jobUzi'), Skill: 6, rate: 5, route: "viktoriya" },
  //   { id: 4, image: GirlDoc, Name: "Umarova Aziza", Job: t('doctor.jobMassaj'), Skill: 4, rate: 4, route: "aziza" },
  //   { id: 5, image: GirlDoc, Name: "Abduraximova Durdona", Job: t('doctor.jobPediatr'), Skill: 6, rate: 5, route: "durdona" },
  //   { id: 6, image: GirlDoc, Name: "Abduqaxarova Nargiza", Job: t('doctor.jobginekolog'), Skill: 8, rate: 3, route: "nargiza" },
  //   { id: 7, image: BoyDoc, Name: "Shokirov Saydullo", Job: t('doctor.joblabarant'), Skill: 7, rate: 5, route: "saydullo" },
  //   { id: 8, image: BoyDoc, Name: "Jabborov Javlon", Job: t('doctor.joburolog'), Skill: 8, rate: 5, route: "javlon" },
  //   { id: 9, image: GirlDoc, Name: "Musabaeva Malika", Job: t('doctor.jobPediatr'), Skill: 9, rate: 5, route: "malika" },
  //   { id: 10, image: GirlDoc, Name: "Mansurova Arofat", Job: t('doctor.joblabarant'), Skill: 9, rate: 5, route: "arofat" },
  //   { id: 11, image: GirlDoc, Name: "Axmadaliyeva Umida", Job: t('doctor.jobginekolog'), Skill: 9, rate: 5, route: "umida" },
  //   { id: 12, image: GirlDoc, Name: "Baxromova Mexriniso", Job: t('doctor.jobUzi'), Skill: 9, rate: 5, route: "mexriniso" },
  //   { id: 13, image: BoyDoc, Name: "Aminov Umid", Job: t('doctor.joburolog'), Skill: 9, rate: 5, route: "umid" },
  // ])
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://shy-plum-alligator-yoke.cyclic.app/teacher/")
      .then((response) => response.json())
      .then((resData) => setData(resData))
      .catch((err) => console.log(err))
  }, [])
  console.log();

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar changeLan={changeLan} />
        <Routes>
          {data.map(post => (
            <Route path={post._id} key={post._id} element={<Doctors value={post._id} />} />
          ))}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
