require("dotenv").config();
const express = require('express')
const app = express()

require('express-async-errors');
const morgan = require('morgan')
const helmet = require("helmet");
const xss = require('xss-clean')
const mongoSanitize = require('express-mongo-sanitize');
const passport = require("passport");
const cors = require("cors");
const cookieSession = require("cookie-session");
const session = require('express-session')
const passportStrategy = require("./utils/passport");


// Sessions Middleware
app.use(
  session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false,
  }),
);

app.use(passport.initialize());
app.use(passport.session());

app.use(
  cors({
    origin: "http://localhost:3000",
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
  })
)


// db and authenticateUser
const connectDB = require('./db/connect.js')

// routers
const userRouter = require('./routes/userRoutes.js')
const eventRouter = require('./routes/eventRoutes.js')
const authRouter = require('./routes/socialAuth.js')

// middleware
const notFoundMiddleware = require('./middlewares/not-found.js')
const errorHandlerMiddleware = require('./middlewares/error-handler.js')

app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));
app.use(helmet())
app.use(xss())
app.use(mongoSanitize())

if (process.env.NODE_ENV !== 'production') {
  app.use(morgan('dev'))
}

app.use('/api/v1/users', userRouter)
app.use('/api/v1/events', eventRouter)
app.use("/api/v1/users/auth", authRouter);
// app.use('/api/v1/tags', tagRoutes)

app.use(notFoundMiddleware)
app.use(errorHandlerMiddleware)

const port = process.env.PORT || 5000

const start = async () => {
  try {
    await connectDB(process.env.MONGODB_URL)
    app.listen(port, () => {
      console.log(`Server is listening on port ${port}...`)
    })
  } catch (error) {
    console.log(error)
  }
}

start()