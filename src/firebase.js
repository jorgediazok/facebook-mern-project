import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyAz2vpA0HFIKWjxRF0VeGXNGH2If7pqOqE',
  authDomain: 'facebook-mern-project.firebaseapp.com',
  databaseURL: 'https://facebook-mern-project.firebaseio.com',
  projectId: 'facebook-mern-project',
  storageBucket: 'facebook-mern-project.appspot.com',
  messagingSenderId: '521860035283',
  appId: '1:521860035283:web:6d24fd3257109a623c5a26',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
export { auth, provider };
export default db;
