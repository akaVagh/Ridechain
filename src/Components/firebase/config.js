import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

const firebaseConfig = {
    apiKey: 'AIzaSyBj5AksxGXIoVvyLy02tE8aZovUtrYCvC0',
    authDomain: 'ridechain-4a44d.firebaseapp.com',
    projectId: 'ridechain-4a44d',
    storageBucket: 'ridechain-4a44d.appspot.com',
    messagingSenderId: '568887763995',
    appId: '1:568887763995:web:86b93d8f143789df2d84be',
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase };
