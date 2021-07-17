import Firebase from 'Firebase/app';
import 'Firebase/auth';
const firebaseConfig = {
  apiKey: "AIzaSyD-KFOGr9OAcAsdBkymcxXccTspGIJanfs",
  authDomain: "nextair-43e3e.firebaseapp.com",
  projectId: "nextair-43e3e",
  storageBucket: "nextair-43e3e.appspot.com",
  messagingSenderId: "639509453354",
  appId: "1:639509453354:web:daa1d13b5b9248eb5cc153"

};
if (!Firebase.apps.length) {
  Firebase.initializeApp(firebaseConfig)
}
const auth = Firebase.auth()
export default auth