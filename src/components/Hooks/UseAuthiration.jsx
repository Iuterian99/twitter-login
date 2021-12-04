import { useContext } from "react";
import { Context } from "../Context/Authiration";

const useAuth = (settrOnly) => {
  const { token, setToken } = useContext(Context);

  return settrOnly ? [token, setToken] : [token];
};

export default useAuth;
