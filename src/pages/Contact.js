import * as React from 'react';
import { CssVarsProvider, useColorScheme } from '@mui/joy/styles';
import Sheet from '@mui/joy/Sheet';
import Typography from '@mui/joy/Typography';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Textarea from '@mui/joy/Textarea'
import Input from '@mui/joy/Input';
import Button from '@mui/joy/Button';
import Link from '@mui/joy/Link';


export default function App() {
  return (
    <CssVarsProvider>
      <main>
        {/* <ModeToggle /> */}
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
            boxShadow: 'md',
          }}
          variant="outlined"
        >
          <div>
            <Typography level="h4" component="h1">
              <b>Send me a message!</b>
            </Typography>
            <Typography level="body2">Fill out your information and hit send.</Typography>
          </div>
          <FormControl>
            <FormLabel>Name</FormLabel>
            <Input
              // html input attribute
              name="name"
              type="name"
              placeholder="Your Name"
              color="info"
            />
          </FormControl>
          <FormControl>
            <FormLabel>Email</FormLabel>
            <Input
              // html input attribute
              name="email"
              type="email"
              placeholder="johndoe@email.com"
              color="info"
            />
          </FormControl>
          <FormControl>
            <FormLabel>Message</FormLabel>
            <Textarea
              // html input attribute
              name="message"
              type="message"
              placeholder="type your message here"
              minRows={3}
              maxRows={5}
              color="info"
            />
          </FormControl>

          <Button sx={{ mt: 1 /* margin top */ }}
          color="info"
          >Send</Button>
          {/* <Typography
            endDecorator={<Link href="/sign-up">Sign up</Link>}
            fontSize="sm"
            sx={{ alignSelf: 'center' }}
          >
            Don&apos;t have an account?
          </Typography> */}
        </Sheet>
      </main>
    </CssVarsProvider>
  );
}