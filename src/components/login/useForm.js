import { useEffect, useState } from "react";
import { useHistory } from "react-router";

const useForm = (callback, Validate) => {
  const history = useHistory();

  //GENERAL

  const [error, setError] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  //SIGN IN
  const [signValues, setSignValues] = useState({
    mainusername: "",
    mainpassword: "",
  });

  console.log(signValues);

  const handleChangeSign = (e) => {
    const { name, value } = e.target;
    setSignValues({
      ...signValues,
      [name]: value,
    });
  };

  //SET TO LOCAL STORAGE

  const onSubmitSignin = (e) => {
    e.preventDefault();
    localStorage.setItem("SignIn", JSON.stringify(signValues));
    setError(Validate(signValues));
    setIsSubmitting(true);
  };

  useEffect(() => {
    if (Object.keys(error).length === 0 && isSubmitting) {
      callback();
      history.push({
        pathname: "/",
      });
    }
    // eslint-disable-next-line
  }, [error]);

  return {
    signValues,
    onSubmitSignin,
    handleChangeSign,
    error,
  };
};

export default useForm;
