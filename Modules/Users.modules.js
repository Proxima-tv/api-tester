const request = require("request");
const crypto = require('crypto');
const { ipcRenderer, ipcMain } = require("electron");

const algorithm = 'aes-256-ctr';
const secretKey = 'vOVH6sdmpNWjRRIqCc7rdxs01lwHzfr3';
const iv = crypto.randomBytes(16);

const encrypt = (text) => {

    const cipher = crypto.createCipheriv(algorithm, secretKey, iv);
    const encrypted = Buffer.concat([cipher.update(text), cipher.final()]);

    return {
        iv: iv.toString('hex'),
        content: encrypted.toString('hex')
    };
};

request.get("http://localhost:3000/user/login", {
    json: true,
    body: encrypt(JSON.stringify( { username:"test", password:"test" } )) 
});

request.on("response", response => {
    console.log(response);
})