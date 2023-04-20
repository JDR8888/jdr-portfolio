// import axios from 'axios';
// const API_KEY = '9e13ed0fdf7d9e7df5eb39d216c9d62d48da4f8b13d121c3be99fd30c743e45b';

// async function createInbox() {
//   // call MailSlurp createInbox endpoint
//   return await axios
//     .post(`https://api.mailslurp.com/createInbox?apiKey=${API_KEY}`)
//     .then((res) => res.data);
// }

// createInbox();

// const sendMessage = async (name, email, message) => {
//   try {
    // Replace the following URL with the URL for your email API endpoint
    // const url = `https://api.mailslurp.com/sendEmail`; 

    // Replace the following email address with your desired recipient email address
    // const recipientEmail = 'yashapeter7@gmail.com'; 

    // // Create the email body with the data from the form
    // const emailBody = `Name: ${name}\nEmail: ${email}\nMessage: ${message}`;

    // Send the email using Axios with Authorization header
//   await axios.post(`https://api.mailslurp.com/sendEmail?apiKey=${API_KEY}`, {
//   senderId: recipientEmail,
//   to: recipientEmail,
//   subject: "Hello from visitor",
//   body: emailBody
// }, {
//   headers: {
//     'Authorization': API_KEY
//   }
// });
// const inboxId = `3a726c0a-97f4-432d-af7f-b623df98542f`;

// await axios
// .get(
//   `https://api.mailslurp.com/waitForLatestEmail?apiKey=${API_KEY}&inboxId=${inboxId}`
// )
// .then((res) => res.data);
// expect(email.from).toEqual(recipientEmail);
// expect(email.subject).toEqual("Hello inbox 2");
// expect(email.body).toEqual(emailBody);

//     // Handle success
//   console.log('Email sent successfully!');
//     // You can add additional logic here, such as showing a success message to the user

//   } catch (error) {
//     // Handle error
//     console.error('Failed to send email:', error);
//     // You can add additional error handling logic here, such as showing an error message to the user
//   }
// };

// export default sendMessage;

import axios from 'axios';
const API_KEY = '9e13ed0fdf7d9e7df5eb39d216c9d62d48da4f8b13d121c3be99fd30c743e45b';

async function createInbox() {
  // call MailSlurp createInbox endpoint
  return await axios
    .post(`https://api.mailslurp.com/createInbox?apiKey=${API_KEY}`)
    .then((res) => res.data);
}

const sendMessage = async (name, email, message) => {
  try {
    // Replace the following URL with the URL for your email API endpoint
    const url = `https://api.mailslurp.com/sendEmail?apiKey=${API_KEY}`; 

    // Replace the following email address with your desired recipient email address
    const recipientEmail = 'yashapeter7@gmail.com'; 

    // Create the email body with the data from the form
    const emailBody = `Name: ${name}\nEmail: ${email}\nMessage: ${message}`;

    // Send the email using Axios
    await axios.post(url, {
      senderId: recipientEmail,
      to: recipientEmail,
      subject: 'Hello from visitor',
      body: emailBody
    }, {
      headers: {
        'Authorization': API_KEY
      }
    });

    // Wait for the latest email in the inbox
    const inbox = await createInbox();
    const inboxId = inbox.id;
    const email = await axios.get(`https://api.mailslurp.com/waitForLatestEmail?apiKey=${API_KEY}&inboxId=${inboxId}`)
      .then((res) => res.data);

    // Verify the received email
    expect(email.from).toEqual(recipientEmail);
    expect(email.subject).toEqual('Hello from visitor');
    expect(email.body).toEqual(emailBody);

    // Handle success
    console.log('Email sent successfully!');
    // You can add additional logic here, such as showing a success message to the user

  } catch (error) {
    // Handle error
    console.error('Failed to send email:', error);
    // You can add additional error handling logic here, such as showing an error message to the user
  }
};

export default sendMessage;
