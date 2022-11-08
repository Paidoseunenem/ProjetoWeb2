
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import Firebase from './FirebasaConfig';
import { Navigate, useLocation  } from "react-router-dom";
export default function FuncaoCadastrar(email, password) {

    const location = useLocation();



    const auth = getAuth(Firebase);
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {

            const user = userCredential.user;
            console.log('Logodo com sucessis')
            return <Navigate to="/home" state={{ from: location }} replace />;

        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage)
        });

}