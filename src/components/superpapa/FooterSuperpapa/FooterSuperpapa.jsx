import { useTranslation } from 'react-i18next';
import './FooterSuperpapa.scss';

function FooterSuperpapa() {
    const { t } = useTranslation();

    return (
       <footer className='FooterSuperpapa'>
           <div className='container'>
               <div className="FooterSuperpapa__Inner">
                    <div className='FooterSuperpapa__Inner__Logo'>
                        <a href="/">
                            <svg width="150" height="50" viewBox="0 0 535 158" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_454_2)">
<path d="M181.6 78.93H90.7998L136.2 0.290039L181.6 78.93Z" fill="#EDE942"/>
<path d="M181.6 78.9302L136.2 157.57L90.7998 78.9302H181.6Z" fill="#ACF62D"/>
<path d="M136.2 0.290039L90.8 78.93H0L45.4 0.290039H136.2Z" fill="#4166B0"/>
<path d="M136.2 157.57H45.4L0 78.9302H90.8L136.2 157.57Z" fill="#FAA54C"/>
<path d="M240.376 48.6H251.104V80.064C251.104 82.944 250.696 85.536 249.88 87.84C249.064 90.144 247.96 92.04 246.568 93.528C245.176 95.016 243.52 96.264 241.6 97.272C239.68 98.28 237.664 98.976 235.552 99.36C233.488 99.792 231.304 100.008 229 100.008C226.696 100.008 224.488 99.792 222.376 99.36C220.312 98.976 218.32 98.28 216.4 97.272C214.48 96.264 212.824 95.016 211.432 93.528C210.04 92.04 208.936 90.144 208.12 87.84C207.304 85.536 206.896 82.944 206.896 80.064V48.6H217.696V79.488C217.696 86.688 221.464 90.288 229 90.288C236.584 90.288 240.376 86.688 240.376 79.488V48.6ZM268.331 69.48C271.163 65.448 275.339 63.432 280.859 63.432C286.091 63.432 290.195 65.232 293.171 68.832C296.195 72.384 297.707 76.68 297.707 81.72C297.707 86.76 296.195 91.08 293.171 94.68C290.195 98.232 286.091 100.008 280.859 100.008C276.107 100.008 272.315 98.448 269.483 95.328V114.84H259.475V64.44H268.331V69.48ZM285.035 88.776C286.667 86.856 287.483 84.504 287.483 81.72C287.483 78.936 286.667 76.608 285.035 74.736C283.403 72.816 281.195 71.856 278.411 71.856C276.347 71.856 274.499 72.408 272.867 73.512C271.283 74.616 270.131 75.984 269.411 77.616V85.824C270.131 87.456 271.283 88.824 272.867 89.928C274.499 91.032 276.347 91.584 278.411 91.584C281.195 91.584 283.403 90.648 285.035 88.776ZM304.552 54.216C309.4 50.76 315.016 49.032 321.4 49.032C326.632 49.032 330.904 50.256 334.216 52.704C337.576 55.152 339.256 58.752 339.256 63.504C339.256 67.2 338.056 70.368 335.656 73.008C333.304 75.6 330.088 78.096 326.008 80.496C321.208 83.328 318.256 85.248 317.152 86.256C315.856 87.504 315.184 88.68 315.136 89.784L339.616 89.712V99H302.896V94.176C302.896 91.536 303.28 89.16 304.048 87.048C304.864 84.936 306.16 83.04 307.936 81.36C309.76 79.68 311.272 78.432 312.472 77.616C313.672 76.752 315.496 75.6 317.944 74.16C318.088 74.064 318.208 73.992 318.304 73.944C318.4 73.896 318.52 73.824 318.664 73.728C318.808 73.632 318.928 73.56 319.024 73.512C319.312 73.32 319.912 72.984 320.824 72.504C321.784 71.976 322.408 71.616 322.696 71.424C322.984 71.232 323.488 70.92 324.208 70.488C324.928 70.008 325.432 69.648 325.72 69.408C326.008 69.12 326.368 68.736 326.8 68.256C327.28 67.776 327.616 67.344 327.808 66.96C328 66.576 328.168 66.12 328.312 65.592C328.456 65.064 328.528 64.512 328.528 63.936C328.528 62.16 327.808 60.816 326.368 59.904C324.928 58.944 322.936 58.464 320.392 58.464C314.92 58.464 309.64 60.408 304.552 64.296V54.216ZM381.714 48.6H392.514V99H381.714V78.696H359.106V99H348.306V48.6H359.106V68.904H381.714V48.6ZM399.351 81.72C399.351 78.6 399.903 75.84 401.007 73.44C402.111 70.992 403.551 69.072 405.327 67.68C407.151 66.288 409.047 65.232 411.015 64.512C413.031 63.792 415.071 63.432 417.135 63.432C420.591 63.432 423.567 64.08 426.063 65.376C428.607 66.672 430.479 68.352 431.679 70.416C432.879 72.432 433.695 74.736 434.127 77.328C434.607 79.872 434.487 82.416 433.767 84.96H409.431C409.959 87.36 411.351 89.16 413.607 90.36C415.863 91.512 418.527 92.088 421.599 92.088C425.391 92.088 428.871 91.392 432.039 90V97.848C428.631 99.288 424.407 100.008 419.367 100.008C413.607 100.008 408.831 98.4 405.039 95.184C401.247 91.968 399.351 87.48 399.351 81.72ZM424.767 78.48C425.007 76.896 424.551 75.264 423.399 73.584C422.247 71.904 420.279 71.064 417.495 71.064C415.287 71.064 413.391 71.736 411.807 73.08C410.223 74.376 409.407 76.176 409.359 78.48H424.767ZM471.558 90.072C471.558 91.608 472.374 92.376 474.006 92.376C474.678 92.376 475.302 92.28 475.878 92.088V98.64C474.054 99.312 472.206 99.648 470.334 99.648C466.686 99.648 464.142 98.352 462.702 95.76C459.102 98.592 454.95 100.008 450.246 100.008C446.838 100.008 443.958 99.072 441.606 97.2C439.302 95.28 438.15 92.688 438.15 89.424C438.15 86.688 438.966 84.408 440.598 82.584C442.23 80.76 444.126 79.536 446.286 78.912C448.446 78.24 450.798 77.904 453.342 77.904C456.174 77.904 458.91 78.216 461.55 78.84V77.616C461.55 75.84 460.854 74.424 459.462 73.368C458.07 72.312 456.054 71.784 453.414 71.784C449.574 71.784 445.494 72.648 441.174 74.376V65.736C445.782 64.2 450.246 63.432 454.566 63.432C465.894 63.432 471.558 68.64 471.558 79.056V90.072ZM455.646 83.88C453.582 83.88 451.854 84.264 450.462 85.032C449.07 85.8 448.374 87 448.374 88.632C448.374 89.88 448.878 90.912 449.886 91.728C450.942 92.496 452.238 92.88 453.774 92.88C456.798 92.88 459.39 91.944 461.55 90.072V84.672C459.342 84.144 457.374 83.88 455.646 83.88ZM489.463 69.624C490.759 67.608 492.631 66.048 495.079 64.944C497.527 63.84 500.311 63.432 503.431 63.72V73.44C500.695 72.96 498.127 73.2 495.727 74.16C493.375 75.12 491.671 76.632 490.615 78.696V99H480.607V64.44H489.463V69.624ZM511.324 54.36L521.26 51.984V64.44H532.204V72.864H521.26V86.4C521.26 89.856 523.108 91.584 526.804 91.584C529.012 91.584 531.1 91.2 533.068 90.432V98.496C530.188 99.504 527.092 100.008 523.78 100.008C520.132 100.008 517.132 99.072 514.78 97.2C512.476 95.328 511.324 92.376 511.324 88.344V72.864H505.492V64.44H511.324V54.36Z" fill="black" fill-opacity="0.62"/>
</g>
<defs>
<clipPath id="clip0_454_2">
<rect width="535" height="158" fill="white"/>
</clipPath>
</defs>
                            </svg>
                        </a>
                    </div>

                    <nav className='FooterSuperpapa__Inner__Nav'>
                        <ul className='FooterSuperpapa__Inner__Nav__List'>
                            <li className='FooterSuperpapa__Inner__Nav__List__Item'>
                                <a className='FooterSuperpapa__Inner__Nav__List__Item__Link' href="/">{t('main-page.1')}</a>
                            </li>

                            <li className='FooterSuperpapa__Inner__Nav__List__Item'>
                                <a className='FooterSuperpapa__Inner__Nav__List__Item__Link' href="/">{t('project.1')}</a>
                            </li>

                            <li className='FooterSuperpapa__Inner__Nav__List__Item'>
                                <a className='FooterSuperpapa__Inner__Nav__List__Item__Link' href="/">{t('contacts.1')}</a>
                            </li>
                        </ul>
                    </nav>

                    <div className='FooterSuperpapa__Inner__SocialIcons'>
                        <a className='FooterSuperpapa__Inner__SocialIcons__Link' href="/">
                            <svg width="36" height="36" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M34.017 41.99L14.017 42.009C9.61699 42.013 6.01399 38.417 6.00899 34.017L5.98999 14.017C5.98599 9.61699 9.58199 6.01399 13.982 6.00899L33.982 5.98999C38.382 5.98599 41.985 9.58199 41.99 13.982L42.009 33.982C42.014 38.383 38.417 41.986 34.017 41.99Z" fill="url(#paint0_radial_27_17)"/>
<path d="M34.017 41.99L14.017 42.009C9.61699 42.013 6.01399 38.417 6.00899 34.017L5.98999 14.017C5.98599 9.61699 9.58199 6.01399 13.982 6.00899L33.982 5.98999C38.382 5.98599 41.985 9.58199 41.99 13.982L42.009 33.982C42.014 38.383 38.417 41.986 34.017 41.99Z" fill="url(#paint1_radial_27_17)"/>
<path d="M24 31C20.141 31 17 27.86 17 24C17 20.14 20.141 17 24 17C27.859 17 31 20.14 31 24C31 27.86 27.859 31 24 31ZM24 19C21.243 19 19 21.243 19 24C19 26.757 21.243 29 24 29C26.757 29 29 26.757 29 24C29 21.243 26.757 19 24 19Z" fill="white"/>
<path d="M31.5 18C32.3284 18 33 17.3284 33 16.5C33 15.6716 32.3284 15 31.5 15C30.6716 15 30 15.6716 30 16.5C30 17.3284 30.6716 18 31.5 18Z" fill="white"/>
<path d="M30 37H18C14.141 37 11 33.86 11 30V18C11 14.14 14.141 11 18 11H30C33.859 11 37 14.14 37 18V30C37 33.86 33.859 37 30 37ZM18 13C15.243 13 13 15.243 13 18V30C13 32.757 15.243 35 18 35H30C32.757 35 35 32.757 35 30V18C35 15.243 32.757 13 30 13H18Z" fill="white"/>
<defs>
<radialGradient id="paint0_radial_27_17" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(19.38 42.035) scale(44.899)">
<stop stop-color="#FFDD55"/>
<stop offset="0.328" stop-color="#FF543F"/>
<stop offset="0.348" stop-color="#FC5245"/>
<stop offset="0.504" stop-color="#E64771"/>
<stop offset="0.643" stop-color="#D53E91"/>
<stop offset="0.761" stop-color="#CC39A4"/>
<stop offset="0.841" stop-color="#C837AB"/>
</radialGradient>
<radialGradient id="paint1_radial_27_17" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(11.786 5.5403) scale(29.813 19.8644)">
<stop stop-color="#4168C9"/>
<stop offset="0.999" stop-color="#4168C9" stop-opacity="0"/>
</radialGradient>
</defs>
                            </svg>
                        </a>

                        <a className='FooterSuperpapa__Inner__SocialIcons__Link' href="/">
                            <svg width="36" height="36" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M24 4C12.954 4 4 12.954 4 24C4 35.046 12.954 44 24 44C35.046 44 44 35.046 44 24C44 12.954 35.046 4 24 4Z" fill="url(#paint0_linear_27_14)"/>
<path d="M26.707 29.301H31.883L32.696 24.043H26.707V21.169C26.707 18.985 27.421 17.048 29.464 17.048H32.747V12.46C32.17 12.382 30.95 12.212 28.645 12.212C23.831 12.212 21.009 14.754 21.009 20.546V24.044H16.06V29.302H21.008V43.754C21.988 43.9 22.981 44 24 44C24.921 44 25.82 43.916 26.707 43.796V29.301Z" fill="white"/>
<defs>
<linearGradient id="paint0_linear_27_14" x1="9.993" y1="9.993" x2="40.615" y2="40.615" gradientUnits="userSpaceOnUse">
<stop stop-color="#2AA4F4"/>
<stop offset="1" stop-color="#007AD9"/>
</linearGradient>
</defs>
                            </svg>
                        </a>

                        <a className='FooterSuperpapa__Inner__SocialIcons__Link' href="/">
                            <svg width="36" height="36" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M46.105 11.02C44.554 11.707 42.886 12.165 41.126 12.382C42.915 11.32 44.292 9.626 44.938 7.624C43.264 8.605 41.409 9.326 39.436 9.706C37.86 8.036 35.612 7 33.122 7C28.339 7 24.461 10.843 24.461 15.582C24.461 16.253 24.54 16.906 24.687 17.54C17.491 17.179 11.108 13.758 6.83801 8.566C6.08801 9.835 5.66601 11.32 5.66601 12.888C5.66601 15.867 7.19101 18.49 9.51701 20.035C8.09701 19.992 6.76101 19.597 5.59101 18.963C5.59101 18.989 5.59101 19.027 5.59101 19.064C5.59101 23.227 8.57701 26.694 12.535 27.483C11.812 27.681 11.047 27.791 10.259 27.791C9.70001 27.791 9.15501 27.728 8.62701 27.633C9.72901 31.035 12.926 33.522 16.714 33.596C13.75 35.894 10.017 37.27 5.95801 37.27C5.25701 37.27 4.57101 37.23 3.89301 37.148C7.73001 39.577 12.283 41 17.171 41C33.098 41 41.812 27.921 41.812 16.574C41.812 16.202 41.8 15.832 41.783 15.466C43.483 14.265 44.948 12.751 46.105 11.02Z" fill="url(#paint0_linear_27_23)"/>
<defs>
<linearGradient id="paint0_linear_27_23" x1="10.341" y1="8.312" x2="40.798" y2="38.769" gradientUnits="userSpaceOnUse">
<stop stop-color="#2AA4F4"/>
<stop offset="1" stop-color="#007AD9"/>
</linearGradient>
</defs>
                            </svg>
                        </a>
                    </div>
                </div> 
           </div>
       </footer>
    )
}

export default FooterSuperpapa;