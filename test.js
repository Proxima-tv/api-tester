const request = require('request');
const crypto = require('crypto');

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

request.get({
    uri: "http://localhost:3000/user/login",
    json: true,
    body: encrypt(JSON.stringify( { username:"test", password:"test" } )) 
}, (err,res,body) => {
    console.log(body);
});