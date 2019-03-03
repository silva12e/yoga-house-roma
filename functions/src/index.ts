const functions = require('firebase-functions');

// SendDrid properties
const sendGrid = require('sendgrid');
const client = sendGrid('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');

// Parsing email body from request
function parseBody(body: any) {
  const helper = sendGrid.mail;
  const fromEmail = new helper.Email(body.from);
  const toEmail = new helper.Email(body.to);
  const subject = body.subject;
  const content = new helper.Content('text/html', body.content);
  const mail = new helper.Mail(fromEmail, subject, toEmail, content);
  return  mail.toJSON();
}

exports.httpEmail = functions.https.onRequest((req: any, res: any) => {
  return Promise.resolve()
    .then(() => {
      // if (req.method !== 'POST') {
      //   const error: any = new Error('Only POST requests are accepted');
      //   error.code = 405;
      //   throw error;
      // }


      const request = client.emptyRequest({
        method: 'POST',
        path: '/v3/mail/send',
        body: parseBody(req.body)
      });

      return client.API(request)


    })
    .then((response) => {
      if (response.body) {
        res.send(response.body);
      } else {
        res.end();
      }
    })

    .catch((err) => {
      console.error(err);
      return Promise.reject(err);
    });
})
