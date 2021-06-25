import { useEffect, useState } from "react";
const useSign = (callback, ValidateSign) => {

  //GENERAL

  const [error, setError] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false)

    //SIGN UP
  const [values, setValue] = useState({
    username: "",
    email: "",
    password: "",
    password2: "",
  });

  //handle change event

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValue({
      ...values,
      [name]: value,
    });
  };

  //Set to local storage

  const signUpLocal = () => {
    localStorage.setItem("SignUp", JSON.stringify(values));
  };

  //On submit Event

  const onSubmit = (e) => {
    e.preventDefault();
    setError(ValidateSign(values))
    setIsSubmitting(true)


    signUpLocal();
  }; 

  useEffect(() => {
      if(Object.keys(error).length === 0 && isSubmitting){
          callback()
      }
      // eslint-disable-next-line
  }, [error])





  return {
    handleChange,
    values,
    onSubmit,
    error
  };
};

export default useSign;
