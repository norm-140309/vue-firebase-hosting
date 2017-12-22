import { initializeApp } from 'firebase';

const app = initializeApp ({
  apiKey: "AIzaSyBNmJmsSW_3OK8i_QFR13vU_DQNH6MIKZg",
  authDomain: "blackbird-colorcodes-7172e.firebaseapp.com",
  databaseURL: "https://blackbird-colorcodes-7172e.firebaseio.com",
  projectId: "blackbird-colorcodes-7172e",
  storageBucket: "blackbird-colorcodes-7172e.appspot.com",
  messagingSenderId: "41670104781"
});

export const db = app.database();
export const colorCodesRef = db.ref('color_code_key');