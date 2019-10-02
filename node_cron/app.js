const cron = require('node-cron');
const nodemailer = require('nodemailer');

// stack cron
const task = cron.schedule('5 * * * *', () => {
    sendMail().then(console.log('succes'));
});

// send email
async function sendMail() {
    let  configMail, transporter, emailTarget, mail;
    
    // Service email
    configMail = {
      service: 'gmail',
      auth: {
        user: 'your usernama  gmail',
        pass: 'your password gmail'
      }
    };
  
    transporter = await nodemailer.createTransport(configMail);
    emailTarget = 'your target email';
    
    // email send target
    mail = {
      to: emailTarget,
      from: configMail.auth.user,
      subject: '[Penting Bro ] Backup Pesan',
      html: `Hallo Iqbal Nur Backup Messages Succes Please And Enjoyy <br> Thanks Mr`
    };
    transporter.sendMail(mail);
}

task.start();
