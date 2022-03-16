import { getAuth } from "firebase/auth";
import { getDatabase, push, ref, set, onValue } from "firebase/database";

const db = getDatabase();
const getRef = (dataRef) => ref(db, `users/${getAuth().currentUser.uid}/${dataRef}`);

const DataRepository = {
  add: (dataRef, data) => getAuth().currentUser && set(push(getRef(dataRef), data)),
  update: (dataRef, data) => getAuth().currentUser && set(getRef(dataRef), data),
  dataListen: (dataRef, callback) => {
    if (callback instanceof Function && getAuth().currentUser)
      onValue(getRef(dataRef), (snapshot) => callback(snapshot.val()));
  },
};

export default DataRepository;
