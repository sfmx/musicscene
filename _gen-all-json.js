const fs = require("fs");
const path = require("path");
const base = path.join(__dirname, "src", "data", "song-lessons");
function w(dir, slug, data) {
  fs.writeFileSync(path.join(base, dir, slug + ".json"), JSON.stringify(data, null, 2));
  console.log("Wrote " + slug);
}

// Read and decode base64 data chunks
const chunks = fs.readFileSync(path.join(__dirname, "_gen-data.b64"), "utf8").trim().split("
---
");
chunks.forEach(chunk => {
  const [header, b64] = chunk.split("
", 2);
  const [dir, slug] = header.split("/");
  const json = Buffer.from(b64, "base64").toString("utf8");
  const data = JSON.parse(json);
  w(dir, slug, data);
});