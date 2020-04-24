const express = require("express");

const app = express();

app.get("/api/v1", (req, res) => {});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => `Server running on port ${PORT}`);
