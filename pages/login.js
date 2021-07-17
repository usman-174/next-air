import { useRouter } from "next/dist/client/router";
import { useContext, useEffect, useState } from "react";
import auth from "../firebase/firebase_config";
import { contextProvider } from "../Global/Context";
export default function Login() {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [error, setError] = useState("");
  const [loginLoading, setLoginLoading] = useState(false);
  const { Login, user } = useContext(contextProvider);
  const router = useRouter();
  const logIn = () => {
    setError("");
    if (!email || email.length < 9 || !email.includes("@")) {
      setError("Invalid Email");
      return;
    } else if (!password.trim()) {
      setError("Please Enter Password");
      return;
    }
    console.log("lets login");
 
  return  auth
      .signInWithEmailAndPassword(email, password)
      .then(async (userCredential) => {
        // Signed in
        var user = userCredential.user;
        if (user) {
          await Login(user);
          setLoginLoading(false);
         return router.push("/");
        }
      }
      )
      .catch((error) => {
        var errorMessage = error.message;
        setError(errorMessage);
        console.log(errorMessage);
      });
  };
  
  useEffect(() => {
    if (user) {
      router.push("/");
    }
  }, []);
  return (
    <div className="container">
      <div className="row mx-auto">
        {!user && (
          <div className="col-md-6 offset-3 mt-5 bg-info border-primary rounded p-2">
            <div className="p-3">
              {error && <p className="text-danger mb-2 text-center">{error}</p>}
              <div className="form-group">
                <label className="text-bold mb-1">Email:</label>
                <input
                  type="email"
                  className="form-control"
                  onChange={(e) => setemail(e.target.value)}
                  value={email}
                  placeholder="Enter email"
                />
              </div>
              <div className="form-group">
                <label className="mb-1">Password:</label>
                <input
                  type="password"
                  value={password}
                  className="form-control"
                  placeholder="Enter password"
                  onChange={(e) => setpassword(e.target.value)}
                />
              </div>

              <div className="col-12 mx-auto text-center my-2">
                <button onClick={logIn} className="btn btn-success ">
                  Login
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
