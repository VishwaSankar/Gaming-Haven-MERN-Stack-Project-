import session from 'express-session';
import MongoStore from 'connect-mongo';

const sessionConfig = {
  secret: "secret",
  resave: false,
  saveUninitialized: false,
  store: MongoStore.create({
    mongoUrl: "mongodb+srv://vishwaexpert7788:12345qwert@cluster001.vzfz843.mongodb.net/Gaminghaven",
    collectionName: 'sessions',
  }),
  cookie: {
    httpOnly: true,
    maxAge: 1000 * 60 * 60 * 24 * 7, // one week
  },
};

const sessionMiddleware = session(sessionConfig);

export default sessionMiddleware;
