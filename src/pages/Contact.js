import React, {useState} from 'react';
import Sheet from '@mui/joy/Sheet';
import Typography from '@mui/joy/Typography';
import FormLabel from '@mui/joy/FormLabel';
import Textarea from '@mui/joy/Textarea'
import Input from '@mui/joy/Input';
import Button from '@mui/joy/Button';
import Alert from '@mui/joy/Alert';

export default function App() {
  const [IsEmailValid, setIsEmailValid] = useState(true);
  const checkEmail = (e) => {
    const email = e.target.value;
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    const isValid = emailRegex.test(email);
    setIsEmailValid(isValid); // Update email validity state
  };

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
        >
          <div>
            <Typography level="h4" component="h1">
              <b>Send me a message!</b>
            </Typography>
            <Typography level="body2" style={{color: 'lightgray'}}>Fill out your information and hit send.</Typography>
          </div>
          {/* using formsubmit.io to send email */}
          <form action="https://formsubmit.io/send/a04d493a-ab3f-4cb2-96b5-f553425dc84c">
            <FormLabel style={{color: 'white'}}>Name</FormLabel>
            <Input
              name="name"
              type="name"
              placeholder="Your Name"
              color="info"
            />

            <FormLabel style={{color: 'white'}}>Email</FormLabel>
            <Input
              name="email"
              type="email"
              placeholder="johndoe@email.com"
              color="info"
              onBlur={checkEmail}
              required
            />
            {!IsEmailValid && ( 
            <Alert severity='warning' color='warning'>Please make sure you to enter a valid email</Alert>
            )}
            <FormLabel style={{color: 'white'}}>Message</FormLabel>
            <Textarea
              name="message"
              type="message"
              placeholder="type your message here"
              minRows={3}
              maxRows={5}
              color="info"
            />
          <Button sx={{ mt: 1 /* margin top */ }}
          type='submit'
          style={{cursor: 'crosshair'}}
          color="info"
          >Send</Button>
        </form>
      </Sheet>
        
      </main>
  );
}