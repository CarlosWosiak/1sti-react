import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.scss';
import {I18nextProvider} from 'react-i18next';
import i18next from 'i18next';
import common_en from './translations/en/common.json';

i18next.init({
  interpolation: {escapeValue: false},
  lng: 'en',
  resources: {
    en: {
      common: common_en,
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
      <App />
    </I18nextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
