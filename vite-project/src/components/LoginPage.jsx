import React from 'react';
import { FormControl, Button, TextField, Container, Stack, FormLabel, FormGroup, FormControlLabel, Checkbox, Switch, Typography, Icon } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';


export default function LoginForm() {

    const handleSubmit = (event) => {
        event.preventDefault();
        // Implement your login logic here
    };

    // <Container onSubmit={handleSubmit} sx={{ height: '77%', width: '25%', padding: '', bgcolor: 'grey', position: 'absolute' }}>
    // <FormControl sx={{ height: '20%', width: '80%', bgcolor: 'white' }}>
    //     <TextField
    //         label="Username"
    //         variant="outlined"
    //         type="text"
    //         name="username"
    //         required
    //     />
    // </FormControl>
    // <FormControl sx={{ height: '77%', width: '25%' }}>
    //     <TextField
    //         label="Password"
    //         variant="outlined"
    //         type="password"
    //         name="password"
    //         required
    //     />
    // </FormControl>
    // <Button type="submit" variant="contained" color="primary">
    //     Login
    // </Button>

    // </Container>
    return (
        <Container sx={{ height: '100%', minWidth: '100%', bgcolor: '', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', padding: '0%', margin: '0%', }}>
            <img src='../../public/MrFrogBanner.png' />
            <form>
                <HomeIcon></HomeIcon>
                <FormControl sx={{ bgcolor: '', minWidth: '80%', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', }}>
  
                    <Typography variant="subtitle1" component="h2">
                        Virtual Showcase
                    </Typography>
                </FormControl>
                <FormControl sx={{ bgcolor: 'lightBlue', minWidth: '80%', }}>
                    <TextField
                        label="Username"
                        variant='outlined'
                        type='text'
                        name='username'
                        required
                    />
                </FormControl>
                <FormControl sx={{ bgcolor: 'lightBlue', minWidth: '80%', }}>
                    <TextField
                        label="Password"
                        variant='outlined'
                        type='password'
                        name='password'
                        required
                    />
                </FormControl>
                <FormControl sx={{ bgcolor: 'lightBlue', minWidth: '80%', }}>
                    <Checkbox
                        
                    >Keep me signed in</Checkbox>
                </FormControl>
                <FormControl sx={{ bgcolor: 'lightBlue', minWidth: '80%', }}>
                        <Button
                            variant='contained'
                        >Sign In</Button>
                </FormControl>
            </form>
        </Container>
    );
};


//logo
//Brand Name
//Brand info

//Sign in with google
//Sign in with linked in

//--or--

//Username
//Password
//Keep me signed in
//Sign in button
//