import Axios from "axios";
import React, { createContext, useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

export const AdminContext = createContext();
const AdminContextProvider = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState("");

  const history = useHistory();
  const logout = () => {
    setToken("");
  };
  const emailChangeHandler = (e) => {
    setEmail(e.target.value);
  };
  const passwordChangeHandler = (e) => {
    setPassword(e.target.value);
  };

  const signIn = () => {
    axios
      .post("/login", {
        email,
        password,
      })
      .then((res) => {
        console.log(res.data.token);
        setToken(res.data.token);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <AdminContext.Provider
        value={{
          signIn,
          emailChangeHandler,
          passwordChangeHandler,
          token,
          logout,
        }}
      >
        {props.children}
      </AdminContext.Provider>
    </div>
  );
};

export default AdminContextProvider;
