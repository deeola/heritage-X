import { useEffect, useState } from "react";

const useForm = (callback, Validate) => {

  //GENERAL

  const [error, setError] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false)


  //SIGN IN
  const [signValues, setSignValues] = useState({
    mainusername: "",
    mainpassword: "",
  });



  const handleChangeSign = (e) => {
    const { name, value } = e.target;
    setSignValues({
      ...signValues,
      [name]: value,
    });
  };



  const onSubmitSignin = (e) => {
    e.preventDefault();
    setError(Validate(signValues))
    signUpLocalSign();
    setIsSubmitting(true)
  };

  //SET TO LOCAL STORAGE


  const signUpLocalSign = () => {
    localStorage.setItem("SignInDetails", JSON.stringify(signValues));
  };

  useEffect(() => {
    if(Object.keys(error).length === 0 && isSubmitting){
      callback();
    }
  },[error])



  return {

    signValues,
    onSubmitSignin,
    handleChangeSign,
    error
  };
};

export default useForm;
