const fs = require("fs");
const path = require("path");

exports.handler = async () => {
  const dirPath = path.resolve(__dirname, "../../your-directory");
  try {
    const files = fs.readdirSync(dirPath);
    return {
      statusCode: 200,
      body: JSON.stringify(files),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: `Error: ${error.message}`,
    };
  }
};
