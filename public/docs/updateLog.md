### Patch for v1.0

##### Date: Feb 6, 2022

This is an update of yesterday's submission which fixes the problem with Heroku as described in the markdown doc.

- heroku doesn't install `devDependencies`: have to move them to `dependencies` in `package.json`
  ```json
  "devDependencies": {},
  "dependencies": {
      "express": "^4.17.2",
      "ejs": "^3.1.6",
      "nodemon": "^2.0.15"
  }
  ```
- heroku bind port dynamically: manually specified port can only be used an implicit port as fallback
  ```javascript
  const express = require("express");
  const app = express();
  const port = 3000;

  app.listen(process.env.PORT || port);
  ```
