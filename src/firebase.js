import { initializeApp } from 'firebase';

const app = initializeApp ({
  apiKey: "AIzaSyDD6YX_MgNQ2R2ng9eabNL0H-qn-heRNoM",
  authDomain: "stoneriver-fb.firebaseapp.com",
  databaseURL: "https://stoneriver-fb.firebaseio.com",
  projectId: "stoneriver-fb",
  storageBucket: "stoneriver-fb.appspot.com",
  messagingSenderId: "1036316879514"
});

export const db = app.database();
export const moviesRef = db.ref('movies');
export const charsRef = db.ref('characters');
export const namesRef = db.ref('names');