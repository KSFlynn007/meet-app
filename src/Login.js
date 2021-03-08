import React from 'react';

function Login() {
    return (
        <div className='App'>
            <h1 className='loginTitle'>Welcome to Code Club(Meet-App)</h1>
            <h4 className='loginDescription'>
                Log in to see upcoming events around the world for full-stack developers
            </h4>
          <p className='loginDisclosure'>The Meet App is a project given to students who are part of the Full Stack Web Development Course at CareerFoundry. 
              The intent of creating this app is to learn skills in building a serverless, progressive web application with React using a test-driven development technique. 
              In addition, it uses the Google Calendar API to fetch upcoming web development events from a calendar that the curriculum team at CareerFoundry have created for 
              this sole purpose.The login prompt is meant to demonstrate skills in using an API and OAuth2 authentication flow. <strong>This website is purely for educational purposes and has no commercial intent or use.</strong> 
              Please refer to the privacy policy below if needed. </p>
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