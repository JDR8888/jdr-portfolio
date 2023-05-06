import React, {useState} from 'react';
import Sheet from '@mui/joy/Sheet';
import Typography from '@mui/joy/Typography';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Textarea from '@mui/joy/Textarea'
import Input from '@mui/joy/Input';
import Button from '@mui/joy/Button';
import Alert from '@mui/joy/Alert';
import sendMessage from '../assets/sendMessage';

export default function App() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [IsEmailValid, setIsEmailValid] = useState(true);
  
  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputName = target.name;
    const inputValue = target.value;
    // console.log(inputValue);
    if (inputName === 'name') {
        setName(inputValue);
      } else if (inputName === 'email') {
        setEmail(inputValue);
      } else {
        setMessage(inputValue);
      }
  };

  const checkEmail = (e) => {
    const email = e.target.value;
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    const isValid = emailRegex.test(email);
    setIsEmailValid(isValid); // Update email validity state
  };

  // const handleSubmit = () => {
  //   sendMessage(name, email, message)
  // }

  const handleSubmit = () => {
    // Construct the email link with the pre-populated message
    const subject = 'Message from ' + name + ' at ' + email;
    const body = message;
    const emailLink = 'mailto:yashapeter7@gmail.com?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
  
    // Open the email link in a new tab
    window.open(emailLink, '_blank');
  }


  return (
      <main 
      style={{paddingTop: '3em'}}
      >
        <Sheet
          sx={{
            width: 300,
            mx: 'auto', // margin left & right
            my: 4, // margin top & bottom
            py: 3, // padding top & bottom
            px: 2, // padding left & right
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            borderRadius: 'sm',
            boxShadow: 'xl',
            backgroundColor: 'black'
          }}
          // variant="outlined"
        >
          <div>
            <Typography level="h4" component="h1">
              <b>Send me a message!</b>
            </Typography>
            <Typography level="body2" style={{color: 'lightgray'}}>Fill out your information and hit send.</Typography>
          </div>
          <FormControl>
            <FormLabel style={{color: 'white'}}>Name</FormLabel>
            <Input
              // html input attribute
              name="name"
              type="name"
              placeholder="Your Name"
              color="info"
              onChange={handleInputChange}
            />
          </FormControl>
          <FormControl>
            <FormLabel style={{color: 'white'}}>Email</FormLabel>
            <Input
              // html input attribute
              name="email"
              type="email"
              placeholder="johndoe@email.com"
              color="info"
              onChange={handleInputChange}
              onBlur={checkEmail}
            />
            {!IsEmailValid && ( 
            <Alert severity='warning' color='warning'>Please make sure you to enter a valid email</Alert>
            )}
          </FormControl>
          <FormControl>
            <FormLabel style={{color: 'white'}}>Message</FormLabel>
            <Textarea
              // html input attribute
              name="message"
              type="message"
              placeholder="type your message here"
              minRows={3}
              maxRows={5}
              color="info"
              onChange={handleInputChange}
            />
          </FormControl>

          <Button sx={{ mt: 1 /* margin top */ }}
          style={{cursor: 'crosshair'}}
          color="info"
          onClick={handleSubmit}
          >Send</Button>
        </Sheet>
        
      </main>
  );
}