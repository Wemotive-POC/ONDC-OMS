// @ts-ignore
import AuthLogo from './extensions/AuthLogo.png';
// @ts-ignore
import MenuLogo from './extensions/AuthLogo.png';

const config = {
  auth: {
    logo: AuthLogo,
  },
  menu: {
    logo: MenuLogo,
  },
  translations: {
    en: {
      "app.components.LeftMenu.navbrand.title": "ONDC OMS",
      "Auth.form.welcome.title": "Welcome to ONDC OMS",
      "Auth.form.welcome.subtitle": "Login to your ONDC OMS account",
    },
  },
  locales: [
    // 'ar',
    // 'fr',
    // 'cs',
    // 'de',
    // 'dk',
    // 'es',
    // 'he',
    // 'id',
    // 'it',
    // 'ja',
    // 'ko',
    // 'ms',
    // 'nl',
    // 'no',
    // 'pl',
    // 'pt-BR',
    // 'pt',
    // 'ru',
    // 'sk',
    // 'sv',
    // 'th',
    // 'tr',
    // 'uk',
    // 'vi',
    // 'zh-Hans',
    // 'zh',
  ],
};

const bootstrap = (app) => {
  console.log(app);
};

export default {
  config,
  bootstrap,
};
