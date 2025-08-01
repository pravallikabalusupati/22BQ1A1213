 // logger.js

function Log(source, level, type, message) {
  const timestamp = new Date().toISOString();
  const logEntry = {
    timestamp,
    source,
    level,
    type,
    message,
  };

  // Simulate log sending
  console.log("📦 Dummy Log Sent:", JSON.stringify(logEntry, null, 2));
}

module.exports = Log;
