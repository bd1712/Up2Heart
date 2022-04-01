import SignUpForm from "../components/SignUp/SignUpForm/SignUpForm";
import '../styles/_SignUp.scss';

function SignUp() {
    return (
        <>
            <div className='container'>
                <div className='White-Block-SignUp'></div>
                <SignUpForm />
            </div>
        </>
    )
}

export default SignUp;