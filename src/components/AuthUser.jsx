import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const authUser = getAuth()
createUserWithEmailAndPassword(authUser, email, password)
  .then((userCredential) => {
    const user = userCredential.user;
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
})