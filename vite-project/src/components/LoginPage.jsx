import React from 'react';
import { FormControl, Button, TextField, Container, Stack, FormLabel, FormGroup, FormControlLabel, Checkbox, Switch } from '@mui/material';

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
            </form>
        </Container>
    );
};
