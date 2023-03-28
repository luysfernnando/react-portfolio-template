import { initializeApp } from 'firebase/app';
import { getAnalytics, logEvent, isSupported } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: 'AIzaSyAbStjF999V2CjOCOfOx8OwHrqWJtAcmmo',
  authDomain: 'portfolio-react-378705.firebaseapp.com',
  projectId: 'portfolio-react-378705',
  storageBucket: 'portfolio-react-378705.appspot.com',
  messagingSenderId: '719413842888',
  appId: '1:719413842888:web:4e5f5ddc4976b3dc64e6fd',
  measurementId: 'G-1ELENSY1N9',
};

const app = initializeApp(firebaseConfig);

const isGaSupported = isSupported();

const analytics = isGaSupported ? getAnalytics(app) : null;

export const logGa = (eventName, eventParams = {}) => {
  isGaSupported ? logEvent(analytics, eventName, eventParams) : console.log(eventName, eventParams);
};
