# PORTFOLIO PROJECT - Event Brite Clone

## Run Locally

Create an env file and provide the following values.
`PORT`
`MONGODB_URL`
`JWT_SECRET`
`JWT_LIFETIME`
`SENDGRID_API_KEY`
`GOOGLE_OAUTH_CLIENT_ID`
`GOOGLE_OAUTH_CLIENT_SECRET`
`CLIENT_URL`

```bash
  clone the project
  git clone https://github.com/osmnfdrcn/PORTFOLIO-mern-event-brite-clone.git
  cd event-brite/
  npm run install-dependencies
  npm run start
```

## FEATURES (COMPLETED ONLY)

### SIGNUP

User should fill up a registration form in order to start sign up process. Aftrwards, an account validation link with an expiration time will be sent to user's email address. In case the expiration time is up, user must request another one. Unless the account's validated, usage of application remains limited.

### SIGNIN

USer can sign in either with the account s/he's created before or by using Google authentication.
