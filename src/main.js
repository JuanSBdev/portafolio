import { createApp } from 'vue/dist/vue.esm-bundler.js';
import App from './App.vue';
import router from './router';
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css';
import 'bootstrap/dist/css/bootstrap.css';
import BootstrapVue3 from 'bootstrap-vue-3';
import { MotionPlugin } from '@vueuse/motion';
import { createI18n } from 'vue-i18n';
import VueGtag from 'vue-gtag';



const browserLang = navigator.language || navigator.userLanguage;
const defaultLocale = browserLang.split('-')[0];
export const i18n = createI18n({
    locale: defaultLocale,
    messages: {
      es: {
        button: 'Español',
        img_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhNtJIukleMQJMm1Ec4pB6UcamkohWzCv0V6MEYg2BkG-WEV2p1p_NfBY2ioRrRsRLF0I&usqp=CAU',
    },
      en: {
        button: 'English',
      },
    },
  });
  
const app = createApp(App);
app.use(router);
app.use(BootstrapVue3);
app.use(MotionPlugin);
app.use(i18n);



app.mount('#app');
