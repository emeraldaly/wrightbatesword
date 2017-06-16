const express = require('express');
const app = express();
const PORT = process.env.PORT || 6070;

app.listen(PORT, function () {
        console.log("listening on PORT:" + PORT);
});


