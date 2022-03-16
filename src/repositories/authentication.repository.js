import {
  GoogleAuthProvider,
  signInWithPopup,
  getAuth,
  browserLocalPersistence,
  browserSessionPersistence,
} from "firebase/auth";

const auth = getAuth();

const provider = new GoogleAuthProvider();
provider.addScope("profile");
provider.addScope("email");

const FirebaseRepository = {
  login: async (keep) => {
    auth.setPersistence(
      keep ? browserLocalPersistence : browserSessionPersistence
    );
    return signInWithPopup(auth, provider)
      .then(() => true)
      .catch((error) => {
        console.error(error);
        return false;
      });
  },
  logout: async () => {
    return auth.signOut();
  },
  sessionListen: async (callback) => {
    if (callback instanceof Function) auth.onAuthStateChanged(callback);
  },
};

export default FirebaseRepository;
