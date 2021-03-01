// where you implement functions
const { google } = require('googleapis');
const OAuth2 = google.auth.OAuth2;
const calendar = google.calendar('v3');

// SCOPES allow you to set access levels, set to readonly for now because
// we're using another google calendar and not one we can change

const SCOPES = ['https://www.googleapis.com/auth/calendar.readonly'];

// credentials are values required to get access to your calendar. 
// process.env means the value is in the config.json file

const credentials = {
  client_id: process.env.CLIENT_ID,
  project_id: process.env.PROJECT_ID,
  client_secret: process.env.CLIENT_SECRET,
  calendar_id: process.env.CALENDAR_ID,
  auth_uri: 'https://accounts.google.com/o/oauth2/auth',
  token_uri: 'https://oauth2.googleapis.com/token',
  auth_provider_x509_cert_url: 'https://www.googleapis.com/oauth2/v1/certs',
  redirect_uris: ['https://KSFlynn007.github.io/meet-app/'],
  javascript_origins: ['https://KSFlynn007.github.io', 'http://localhost:3000', 'http://localhost:8080'],
};
const { client_secret, client_id, redirect_uris, calendar_id } = credentials;
const oAuth2Client = new google.auth.OAuth2(
  client_id,
  client_secret,
  redirect_uris[0]
);

// first step in oAuth process is to generate a url to users can login with
// google ad be authorized to see your calendar, after login they get a code as
// url parameter

module.exports.getAuthURL = async () => {
  // scopes array passed to 'scope' ptions. Any scopes passed must be enabled in the 
  // oAuth consent screen settings in project on google console. Any passed scopes ar ethe ones
  // users will see when the consent screen is displayed to them
  const authUrl = oAuth2Client.generateAuthUrl({
    access_type: 'offline',
    scope: SCOPES,
  });

  return {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': true
    },
    body: JSON.stringify({
      authUrl: authUrl,
    }),
  };
};

module.exports.getAccessToken = async (event) => {
  const oAuth2Client = new google.auth.OAuth2(
    client_id,
    client_secret,
    redirect_uris[0]
  );
  // decode authorization code extracted from the URL query
  const code = decodeURIComponent(`${event.pathParameters.code}`);

  return new Promise((resolve, reject) => {
    // exchange auth code for access token with callback after exchagnge. Callback is arrow function
    
    oAuth2Client.getToken(code, (err, token) => {
      if(err) {
        return reject(err);
      }
      return resolve(token);
    });
  })
  .then((token) => {
    // respond with OAuth token
    return {
      statusCode: 200,
      headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': true
      },
      body: JSON.stringify(token),
    };
  })
  .catch((err) => {
    console.error(err);
    return{
      statusCode: 500,
      body: JSON.stringify(err),
    };
  });
};

module.exports.getCalendarEvents = async (event) => {
  const oAuth2Client = new google.auth.OAuth2(
    client_id,
    client_secret,
    redirect_uris[0]
  )
  const access_token = decodeURIComponent(`${event.pathParameters.access_token}`);
  oAuth2Client.setCredentials({ access_token });

  return new Promise((resolve, reject) => {

    calendar.events.list(
      {
        calendarId: calendar_id,
        auth: oAuth2Client,
        timeMin: new Date().toISOString(),
        singleEvents: true,
        orderBy: 'startTime',
      },
      (error, response) => {
        if (error) {
          reject (error);
        } else {
          resolve(response);
        }
      }
    );
  })
  .then((results) => {
    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': true
      },
      body: JSON.stringify({ events: results.data.items })
    }
  })
  .catch((err) => {
    console.error(err);
    return{
      statusCode: 500,
      body: JSON.stringify(err),
    };
  });
};
