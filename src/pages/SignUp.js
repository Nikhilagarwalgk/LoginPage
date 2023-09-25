import { TextField, Box, Stack, FormControl, InputLabel, Typography, Button } from '@mui/material';
import { postSignUp } from "../config/api";
import { useState } from 'react';
import { useForm, SubmitHandler, Controller, control } from "react-hook-form"
import signUp from "../utils/image/signUp.png";

import Grid from '@mui/material/Grid';

const SignUp = () => {

    const { control, handleSubmit } = useForm({})

    const onSubmit = (data) => {
        let formatData = {
            "user_phone": "1234567890",
            "user_lastname": "kumari",
            "user_city": "Jamshedpur",
            "user_zipcode": "831001",
            ...data
        }
        console.log("Called-->", data, formatData)

        postSignUp(formatData).then((res) => {
            console.log("ress-->", res)
        })
    };

    const onChangeField = (event) => {
        console.log("evemt-->", event)
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

                        {/* </Box> */}
                        <Stack spacing={3}>
                            <Typography variant="h4" >Sign Up </Typography>
                            <Typography variant="subtitle2" >Already Signed In? <a href="/login" class="link">Login Now</a> </Typography>

                            <Stack>
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <Stack spacing={2}>
                                        <Controller
                                            name="user_firstname"
                                            control={control}
                                            rules={{ required: true }}
                                            render={({
                                                field: { onChange, value },
                                                fieldState: { error },
                                                formState
                                            }) =>
                                                <div>
                                                    <InputLabel shrink={false} htmlFor={"user_firstname"} > <Typography>Full Name*</Typography> </InputLabel>
                                                    <TextField error={!!error} id="outlined-basic" onChange={onChange} name="user_firstname" variant="outlined" helperText={error ? "Mandatory field." : null} />
                                                </div>

                                            }
                                        />

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
                                                    <InputLabel shrink={false} htmlFor={"user_email"} > <Typography>Email Address*</Typography> </InputLabel>
                                                    <TextField error={!!error} id="outlined-basic" onChange={onChange} name="user_email" variant="outlined" helperText={error ? "Mandatory field." : null} />
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
                                                    <TextField error={!!error} id="outlined-basic" onChange={onChange} name="user_password" variant="outlined" helperText={error ? "Mandatory field." : null} />
                                                </div>
                                            }
                                        />

                                        <Controller
                                            name="company"
                                            control={control}
                                            rules={{ required: true }}
                                            render={({
                                                field: { onChange, value },
                                                fieldState: { error },
                                                formState
                                            }) =>
                                                <div>
                                                    <InputLabel shrink={false} htmlFor={"company"} > <Typography>Company*</Typography> </InputLabel>
                                                    <TextField error={!!error} id="outlined-basic" onChange={onChange} name="company" variant="outlined" helperText={error ? "Mandatory field." : null} />

                                                </div>
                                            }
                                        />

                                        <Button variant="contained" type="submit">Create Your Account</Button>
                                    </Stack >
                                </form>
                            </Stack>
                        </Stack>

                    </Box>
                </Grid>
            </Grid>
        </Stack >
                    </>
                    )
};
export default SignUp;