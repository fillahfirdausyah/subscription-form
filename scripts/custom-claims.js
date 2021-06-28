let admin = require("firebase-admin");
import { auth } from "../src/firebase";

admin
  .auth()
  .setCustomUserClaims("yC3lxxvLaaYUdhr3vOeQ5gzEKTm2", {
    admin: true,
  })
  .then((x) => {
    console.log("berhasil");
  });
