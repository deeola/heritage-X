function Validate(signValues) {

    let errors = {}

    //Fetch signup details from local storage
    const signUpDetails = localStorage.getItem('SignUpDetails');

    const {username, password} = JSON.parse(signUpDetails)


    //Sign in Fetch

    const SignInDetails = localStorage.getItem('SignInDetails');
    const {mainpassword,mainusername} = JSON.parse(SignInDetails);




    //

    if(!signValues.mainusername){
        errors.mainusername = 'username cannot be empty'
    } else if (mainusername !== username){
        errors.mainusername = 'username not correct'
    }


    if(!signValues.mainpassword){
        errors.mainpassword = 'password cannot be empty'
    } else if (mainpassword !== password){
        errors.mainpassword = 'password not correct'
    }

    return errors;



}


export default Validate
