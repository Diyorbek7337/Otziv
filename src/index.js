import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import i18n from "i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';
import { initReactI18next } from "react-i18next";

i18n
  .use(initReactI18next) 
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    supportedLngs: ['Uz', 'Ru', 'En'],
    fallbackLng: "Uz",
    detection: {
      order: ['cookie', 'htmlTag', 'localStorage', 'path', 'subdomain'],
      caches: ['cookie']
    },
    backend: {
      loadPath: '/assets/locales/{{lng}}/translation.json',
    },  
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Suspense>
    <App />
  </Suspense>
);
