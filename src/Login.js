import React from 'react';

function Login() {
    return (
        <div className='App'>
            <h1>Welcome to the Meet App</h1>
            <h4>
                Log in to see upcoming events around the world for full-stack developers
            </h4>
            <div className='button_cont' align='center'>
                <div className='google-btn'>
                    <div className='google-icon-wrapper'>
                        <img
                        className='google-icon'
                        src='https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg'
                        alt='Google sign-in'
                        />
                    </div>
                    <a
                    href='https://accounts.google.com/o/oauth2/v2/auth?access_type=offline&scope=https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fcalendar.readonly&response_type=code&client_id=841717757727-88vckej4dd8ul7sd5u72c8fe47qb999i.apps.googleusercontent.com&redirect_uri=https%3A%2F%2FKSFlynn007.github.io%2Fmeet-app%2F'
                    rel='nofollow noopener'
                    className='btn-text'
                    >
                        <b>Sign in with Google</b>
                    </a>
                </div>
            </div>
            <a
            href='https://glenzy.github.io/meet/privacy.html'
            rel='nofollow noopener'
            >
                Privacy Policy
            </a>
        </div>
    );
}

export default Login;