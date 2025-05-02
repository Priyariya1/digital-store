const crypto = require('crypto');
const fs = require('fs');
const path = require('path');

// Generate a secure random string for JWT secret
const generateJWTSecret = () => {
  return crypto.randomBytes(64).toString('hex');
};

// Read existing .env file if it exists
const envPath = path.join(__dirname, '..', '.env');
let envContent = '';

if (fs.existsSync(envPath)) {
  envContent = fs.readFileSync(envPath, 'utf8');
}

// Generate new JWT secret
const jwtSecret = generateJWTSecret();

// Update or add JWT_SECRET to .env content
if (envContent.includes('JWT_SECRET=')) {
  envContent = envContent.replace(/JWT_SECRET=.*/, `JWT_SECRET="${jwtSecret}"`);
} else {
  envContent += `\nJWT_SECRET="${jwtSecret}"`;
}

// Write back to .env file
fs.writeFileSync(envPath, envContent);

console.log('✅ JWT secret has been generated and added to .env file');
console.log('🔑 Your JWT secret:', jwtSecret); 