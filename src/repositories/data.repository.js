import { getAuth } from "firebase/auth";
import { getDatabase, push, ref, set, onValue } from "firebase/database";

const db = getDatabase();
const getRef = (dataRef) => ref(getDatabase(), `users/${getAuth().currentUser.uid}/${dataRef}`);

const DataRepository = {
  add: (dataRef, data) => set(push(getRef(dataRef), data)),
  update: (dataRef, data) => set(getRef(dataRef), data),
  dataListen: (dataRef, callback) => {
    if (callback instanceof Function)
      onValue(getRef(dataRef), (snapshot) => callback(snapshot.val()));
  },
};

export default DataRepository;
