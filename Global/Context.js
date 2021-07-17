import React, { createContext, useEffect, useState } from "react";
import auth from '../firebase/firebase_config'

export const contextProvider = createContext();
const Context = ({ children }) => {
  const [user, setUser] = useState(null);
  const [checkingUser, setcheckingUser] = useState(null)
  const [formErrors, setErrors] = useState({
    exists: false,
    errors: [],
  });

  const Register = async (user) => {
    const { email, username, password } = user;
    try {
      const User = await auth.createUserWithEmailAndPassword(email, password);
      if (!User) return alert("Reigistration failed");
      await User.user.updateProfile({ displayName: username });
      console.log("User Registered Successfully");
      closeModel();
    } catch (error) {
      // console.log(error.message);

      setErrors({
        ...formErrors,
        exists: true,
        errors: [...formErrors.errors, error.message],
      });
    }
  };

  const Logout = async () => {
    await auth.signOut();
    setUser(null);
  };
  const Login = (user)=>{
    if(user){
      var uid = user.uid;
        setUser({
          displayName: user.displayName,
          email: user.email,
          uid,
        });
    }
  }

  useEffect(() => {
    setcheckingUser(true)
    auth.onAuthStateChanged((user) => {
      if (user) {
        var uid = user.uid;
        setUser({
          displayName: user.displayName,
          email: user.email,
          uid,
        });
        setcheckingUser(false)
      } else {
        setUser(null);
        setcheckingUser(false)
      }
    });
  }, []);
  return (
    <contextProvider.Provider
      value={{
        Register,
        setErrors,
        user,checkingUser,
        Logout,Login
      }}
    >
      {children}
    </contextProvider.Provider>
  );
};

export default Context;
