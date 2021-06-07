import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = firebase.initializeApp({
  apiKey: 'AIzaSyAyEBECVIyAAzR8QAhzdDoY7A_mncM03Gc',
  authDomain: 'todoist-1c5ee.firebaseapp.com',
  databaseURL: 'https://todoist-1c5ee-default-rtdb.firebaseio.com',
  projectId: 'todoist-1c5ee',
  storageBucket: 'todoist-1c5ee.appspot.com',
  messagingSenderId: '212014772567',
  appId: '1:212014772567:web:c50366a4ec36432259ce12',
});

export { firebaseConfig as firebase };
