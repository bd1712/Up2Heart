import './EntranceForm.scss';

import { useForm } from 'react-hook-form';
import { t } from 'i18next';

function EntranceForm() {

    const {
        register,
        formState: {
            errors,
            isValid,
        },
        handleSubmit,
        reset,
        trigger,
    } = useForm({
        mode: 'onBlur',
    });

    const onSubmit = data => {
        console.log(data);
        reset();
    }

    return (
        <section className='FormSection'>
            <h4 className='FormSection__Title'>{t('sign-in.1')}</h4>

            <div className='FormSection__Inner'>
                <form className='FormSection__Inner__Form' action="/">
                    <label className='FormSection__Inner__Form__Label' htmlFor="email" onSubmit={handleSubmit(onSubmit)}>{t('elec-email.1')}</label>
                    <br />
                    <input className='FormSection__Inner__Form__Email'
                        type="email"
                        id='email'
                        {...register('email', {
                            required: "↗ Поле обязательно для заполнения!",
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: "■ Неверный адрес электронной почты!",
                            },
                        })}
                        onKeyUp={() => {
                            trigger("email");
                        }}
                    />
                    <div className='Error-Message'>
                        {errors.email && <span>{errors.email.message || "Error!"}</span>}
                    </div>
                    <br />
                    <label className='FormSection__Inner__Form__Label' htmlFor="password">{t('password.1')}</label>
                    <br />
                    <input className='FormSection__Inner__Form__Password' type="password" />
                    <br />
                    <button className='FormSection__Inner__Form__Button' type="submit" disabled={!isValid}>{t('log-in.1')}</button>
                </form>

                <p className='FormSection__Inner__Desc'>{t('desc-text-signup.1')} <a href="/">{t('desc-text-signup.2')}</a></p>
                <p className='FormSection__Inner__Or'>{t('or.1')}</p>

                <div className='FormSection__Inner__SocialIcon'>
                    <a className='FormSection__Inner__SocialIcon__Icon' href="/">
                        <svg width="36" height="36" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M24 4C12.954 4 4 12.954 4 24C4 35.046 12.954 44 24 44C35.046 44 44 35.046 44 24C44 12.954 35.046 4 24 4Z" fill="url(#paint0_linear_27_14)" />
                            <path d="M26.707 29.301H31.883L32.696 24.043H26.707V21.169C26.707 18.985 27.421 17.048 29.464 17.048H32.747V12.46C32.17 12.382 30.95 12.212 28.645 12.212C23.831 12.212 21.009 14.754 21.009 20.546V24.044H16.06V29.302H21.008V43.754C21.988 43.9 22.981 44 24 44C24.921 44 25.82 43.916 26.707 43.796V29.301Z" fill="white" />
                            <defs>
                                <linearGradient id="paint0_linear_27_14" x1="9.993" y1="9.993" x2="40.615" y2="40.615" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#2AA4F4" />
                                    <stop offset="1" stop-color="#007AD9" />
                                </linearGradient>
                            </defs>
                        </svg>
                    </a>
                    <a className='FormSection__Inner__SocialIcon__Icon' href="/">
                        <svg width="30" height="30" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M49.514 19.8312H47.5V19.7299H25V29.4926H39.129C37.068 35.1756 31.529 39.2552 25 39.2552C16.716 39.2552 10 32.6984 10 24.6113C10 16.5242 16.716 9.96731 25 9.96731C28.824 9.96731 32.303 11.3756 34.951 13.6759L42.022 6.77251C37.557 2.71007 31.585 0.204742 25 0.204742C11.194 0.204742 0 11.1328 0 24.6113C0 38.0898 11.194 49.0178 25 49.0178C38.806 49.0178 50 38.0898 50 24.6113C50 22.9748 49.827 21.3774 49.514 19.8312Z" fill="#FFC107" />
                            <path d="M2.88232 13.2512L11.096 19.132C13.319 13.7601 18.701 9.96731 25 9.96731C28.824 9.96731 32.302 11.3756 34.951 13.6759L42.022 6.77251C37.557 2.71007 31.585 0.204742 25 0.204742C15.397 0.204742 7.06982 5.49731 2.88232 13.2512Z" fill="#FF3D00" />
                            <path d="M25 49.0178C31.457 49.0178 37.325 46.6052 41.761 42.6819L34.024 36.2898C31.514 38.1459 28.394 39.2552 25 39.2552C18.497 39.2552 12.976 35.2074 10.896 29.5585L2.74365 35.6906C6.88115 43.5947 15.284 49.0178 25 49.0178Z" fill="#4CAF50" />
                            <path d="M49.514 19.8312H47.5V19.7299H25V29.4926H39.129C38.139 32.2224 36.34 34.5764 34.02 36.291C34.021 36.2898 34.023 36.2898 34.024 36.2886L41.761 42.6806C41.214 43.1663 50 36.8145 50 24.6113C50 22.9748 49.827 21.3774 49.514 19.8312Z" fill="#1976D2" />
                        </svg>
                    </a>
                    <a className='FormSection__Inner__SocialIcon__Icon' href="/">
                        <svg width="36" height="36" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M46.105 11.02C44.554 11.707 42.886 12.165 41.126 12.382C42.915 11.32 44.292 9.626 44.938 7.624C43.264 8.605 41.409 9.326 39.436 9.706C37.86 8.036 35.612 7 33.122 7C28.339 7 24.461 10.843 24.461 15.582C24.461 16.253 24.54 16.906 24.687 17.54C17.491 17.179 11.108 13.758 6.83801 8.566C6.08801 9.835 5.66601 11.32 5.66601 12.888C5.66601 15.867 7.19101 18.49 9.51701 20.035C8.09701 19.992 6.76101 19.597 5.59101 18.963C5.59101 18.989 5.59101 19.027 5.59101 19.064C5.59101 23.227 8.57701 26.694 12.535 27.483C11.812 27.681 11.047 27.791 10.259 27.791C9.70001 27.791 9.15501 27.728 8.62701 27.633C9.72901 31.035 12.926 33.522 16.714 33.596C13.75 35.894 10.017 37.27 5.95801 37.27C5.25701 37.27 4.57101 37.23 3.89301 37.148C7.73001 39.577 12.283 41 17.171 41C33.098 41 41.812 27.921 41.812 16.574C41.812 16.202 41.8 15.832 41.783 15.466C43.483 14.265 44.948 12.751 46.105 11.02Z" fill="url(#paint0_linear_27_23)" />
                            <defs>
                                <linearGradient id="paint0_linear_27_23" x1="10.341" y1="8.312" x2="40.798" y2="38.769" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#2AA4F4" />
                                    <stop offset="1" stop-color="#007AD9" />
                                </linearGradient>
                            </defs>
                        </svg>
                    </a>
                    <a className='FormSection__Inner__SocialIcon__Icon' href="/">
                        <svg width="36" height="36" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M34.017 41.99L14.017 42.009C9.61699 42.013 6.01399 38.417 6.00899 34.017L5.98999 14.017C5.98599 9.61699 9.58199 6.01399 13.982 6.00899L33.982 5.98999C38.382 5.98599 41.985 9.58199 41.99 13.982L42.009 33.982C42.014 38.383 38.417 41.986 34.017 41.99Z" fill="url(#paint0_radial_27_17)" />
                            <path d="M34.017 41.99L14.017 42.009C9.61699 42.013 6.01399 38.417 6.00899 34.017L5.98999 14.017C5.98599 9.61699 9.58199 6.01399 13.982 6.00899L33.982 5.98999C38.382 5.98599 41.985 9.58199 41.99 13.982L42.009 33.982C42.014 38.383 38.417 41.986 34.017 41.99Z" fill="url(#paint1_radial_27_17)" />
                            <path d="M24 31C20.141 31 17 27.86 17 24C17 20.14 20.141 17 24 17C27.859 17 31 20.14 31 24C31 27.86 27.859 31 24 31ZM24 19C21.243 19 19 21.243 19 24C19 26.757 21.243 29 24 29C26.757 29 29 26.757 29 24C29 21.243 26.757 19 24 19Z" fill="white" />
                            <path d="M31.5 18C32.3284 18 33 17.3284 33 16.5C33 15.6716 32.3284 15 31.5 15C30.6716 15 30 15.6716 30 16.5C30 17.3284 30.6716 18 31.5 18Z" fill="white" />
                            <path d="M30 37H18C14.141 37 11 33.86 11 30V18C11 14.14 14.141 11 18 11H30C33.859 11 37 14.14 37 18V30C37 33.86 33.859 37 30 37ZM18 13C15.243 13 13 15.243 13 18V30C13 32.757 15.243 35 18 35H30C32.757 35 35 32.757 35 30V18C35 15.243 32.757 13 30 13H18Z" fill="white" />
                            <defs>
                                <radialGradient id="paint0_radial_27_17" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(19.38 42.035) scale(44.899)">
                                    <stop stop-color="#FFDD55" />
                                    <stop offset="0.328" stop-color="#FF543F" />
                                    <stop offset="0.348" stop-color="#FC5245" />
                                    <stop offset="0.504" stop-color="#E64771" />
                                    <stop offset="0.643" stop-color="#D53E91" />
                                    <stop offset="0.761" stop-color="#CC39A4" />
                                    <stop offset="0.841" stop-color="#C837AB" />
                                </radialGradient>
                                <radialGradient id="paint1_radial_27_17" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(11.786 5.5403) scale(29.813 19.8644)">
                                    <stop stop-color="#4168C9" />
                                    <stop offset="0.999" stop-color="#4168C9" stop-opacity="0" />
                                </radialGradient>
                            </defs>
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    )
}

export default EntranceForm;