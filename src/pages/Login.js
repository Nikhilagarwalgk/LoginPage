import { TextField, Box, Stack, FormControl, InputLabel, Typography, Button } from '@mui/material';
import { postLoginUp } from "../config/api";
import { useState } from 'react';
import { useForm, SubmitHandler, Controller, control } from "react-hook-form"
import signUp from "../utils/image/signUp.png";

import Grid from '@mui/material/Grid';
import { redirect } from "react-router-dom";


const Login = () => {

    const { control, handleSubmit } = useForm({})

    const onSubmit = (data) => {
        console.log("Called-->", data)

        postLoginUp(data).then((res) => {
            console.log("ress-->", res)
            if (res?.data?.status == true) {
                localStorage.setItem("access", true);
                // redirect('/dashboard');
                window.location.reload();
            }
        });
    };

    return (
        <>
            <Stack >
                <Grid container spacing={2} sx={{ height: "102.7vh" }} >
                    <Grid item xs={7} sx={{
                        display: "flex",
                        justifyContent: "space-evenly",
                        alignItems: "center",
                        backgroundColor: "#242121",
                    }}>
                        <img src={signUp} alt="" />
                    </Grid>
                    <Grid item xs={5} sx={{
                        display: "flex",
                        alignContent: "flex-start",
                        justifyContent: "center",
                        alignItems: "center",
                    }}>
                        <Box>
                            {/* "SignUP" */}
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <Stack spacing={2}>
                                    <Typography variant="subtitle2" >Create a account?<a href="/SignUp" class="link"> SignUp Now</a> </Typography>

                                    <Controller
                                        name="user_email"
                                        control={control}
                                        rules={{ required: true }}
                                        render={({
                                            field: { onChange, value },
                                            fieldState: { error },
                                            formState
                                        }) =>
                                            <div>
                                                <InputLabel shrink={false} htmlFor={"user_email"} > <Typography>Email Id</Typography> </InputLabel>
                                                <TextField error={!!error} fullWidth id="outlined-basic" onChange={onChange} name="user_email" variant="outlined" helperText={error ? "Mandatory field." : null} />
                                            </div>

                                        }
                                    />

                                    <Controller
                                        name="user_password"
                                        control={control}
                                        rules={{ required: true }}
                                        render={({
                                            field: { onChange, value },
                                            fieldState: { error },
                                            formState
                                        }) =>
                                            <div>
                                                <InputLabel shrink={false} htmlFor={"user_password"} > <Typography>Password*</Typography> </InputLabel>
                                                <TextField error={!!error} fullWidth id="outlined-basic" onChange={onChange} name="user_password" variant="outlined" helperText={error ? "Mandatory field." : null} />
                                            </div>
                                        }
                                    />

                                    <Button variant="contained" type="submit">Login</Button>
                                </Stack >
                            </form>

                        </Box>
                    </Grid>
                </Grid>
            </Stack >


        </>
    )
};
export default Login;