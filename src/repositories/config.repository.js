import { getAuth } from "firebase/auth";
import { getDatabase, push, ref, set } from "firebase/database";

const db = getDatabase();
const getRef = (dataRef) => ref(db, `users/${getAuth().currentUser.uid}/config/${dataRef}`);

const DataRepository = {
  add: (dataRef, data) => getAuth().currentUser && set(push(getRef(dataRef), data)),
  update: (dataRef, data) => getAuth().currentUser && set(getRef(dataRef), data),
};

export default DataRepository;
