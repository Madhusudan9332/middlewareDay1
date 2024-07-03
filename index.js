const express = require("express");
const app = express();

function logginReqs(req, res, next) {
  const startTime = Date.now();

  res.on("finish", () => {
    const endTime = Date.now();
    const timeDiff = endTime - startTime;

    console.log(
      `${new Date(startTime).toLocaleString()} - ${req.method} ${
        req.url
      } - ${timeDiff}ms`
    );
  });

  next();
}

app.use(logginReqs);

app.get("/", (req, res) => {
  res.json({ success: true, results: "Api is working" });
});

app.listen(3300, () => {
  console.log(`Server is running on port 3300`);
});
