const request = require('request');
const crypto = require('crypto');
const {Buffer} = require("buffer");

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

const decrypt = (data) => {
    const decipher = crypto.createDecipheriv(algorithm, secretKey, Buffer.from(data['iv'], 'hex'));
    const decrpyted = Buffer.concat([decipher.update(Buffer.from(data['content'], 'hex')), decipher.final()]);
    return decrpyted.toString();
}
/**
request.get({
    uri: "http://localhost:3000/user/login",
    json: true,
    body: encrypt(JSON.stringify( { email:"mauricefl@outlook.de", password:"25565" } )) 
}, (err,res,body) => {
    console.log(body);
    console.log(decrypt(body));
});
*/

request.post({
    uri: "http://localhost:3000/user/register",
    json:true,
    body: {
        username: "steev", 
        password:"25565", 
        name:"maurice", 
        lastname:"fletgen", 
        email:"mauricefl@outlook.de",
        profile_likes: 0,
        profile_pic: "test",
        profile_id: 0989
    }
}, (err,res,body) => {
    console.log(decrypt(body));
});