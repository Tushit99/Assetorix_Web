import { CloseIcon } from '@chakra-ui/icons';
import { Box, Button, Input, useToast } from '@chakra-ui/react';
import axios from 'axios';
import style from "./Allmodal.module.css";
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { handleEmailDataChange } from '../../../Redux/userauth/action';

const EmailChanger = () => {
    const [showbox, setShowBox] = useState(false);
    // timer 
    const [seconds, setSeconds] = useState(300); // 5 minutes in seconds
    const [isActive, setIsActive] = useState(false);
    // data 
    const data = useSelector((store) => store.userreducer);
    const [phase, setPhase] = useState(true);
    const toast = useToast();
    // email
    const [newemail, setNewEmail] = useState("");
    // pin 
    const [pin, setPin] = useState("");
    const [timer, settimer] = useState("");
    const dispatch = useDispatch(); 

    const handleEmailChange = (event) => {
        setNewEmail(event.target.value);
    }; 

    useEffect(() => {
        let interval;

        if (isActive && seconds > 0) {
            interval = setInterval(() => {
                setSeconds((prevSeconds) => prevSeconds - 1);
            }, 1000);
        }

        if (seconds === 0) {
            clearInterval(interval);
            setSeconds(10);
            setIsActive(false);
            setPhase(true); 
        }


        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;

        const formattedMinutes = String(minutes).padStart(2, '0');
        const formattedSeconds = String(remainingSeconds).padStart(2, '0');

        settimer(`${formattedMinutes}:${formattedSeconds}`);

        return () => {
            clearInterval(interval);
        };

    }, [isActive, seconds]);



    const handleSubmit = () => {

        if (newemail == "") {
            toast({
                title: 'Empty',
                description: "Enter Your Email",
                status: 'info',
                duration: 2000,
                isClosable: true,
            })
            return;
        }
        try {
            let id = data.user.id;
            let authorization = data.user.token; 
            console.log(id,authorization); 
            let headers = {
                'Content-Type': 'application/json',
                id,
                authorization
            }
            let body = { email: newemail }
            axios.post(`${process.env.REACT_APP_URL}/user/emailOTP`, body, { headers }).then((e) => {
                console.log(e);
                toast({
                    title: `${e.data.msg}`,
                    status: 'success',
                    duration: 2000,
                    isClosable: true,
                })
                // calling funtion 
                setIsActive(true);
                setPhase(false);
            }).catch((err) => {
                toast({
                    title: `${err.response.data.msg}`,
                    status: 'error',
                    duration: 2000,
                    isClosable: true,
                })
                console.log(err.response.data.msg);
            })
        } catch (error) {
            console.log(error.response.data.msg);
        }
    };

    const handlePinChange = (e) => {
        if (pin.length > 6) {
            toast({
                title: "Pin should be of 6 numbers",
                status: 'error',
                duration: 2000,
                isClosable: true,
            })
        }
        setPin(e);
    }

    const handleSendOtp = () => {
        try {
            let id = data.user.id;
            let authorization = data.user.token;
            console.log(id,authorization); 
            let headers = {
                'Content-Type': 'application/json',
                id,
                authorization
            }
            let body = { email: newemail, otp: pin }
            axios.post(`${process.env.REACT_APP_URL}/user/emailVerify`, body, { headers }).then((e) => {
                // console.log(e);
                setPhase(false);
                setShowBox(false);
                dispatch(handleEmailDataChange(newemail)); 
                toast({
                    title: "Email Saved Successfully",
                    status: 'success',
                    duration: 2000, 
                    isClosable: true, 
                })
                return ; 
            }).catch((err) => {
                if (err && err.response && err.response.data && err.response.data.msg ) {
                    toast({
                        title: `${err.response.data.msg}`,
                        status: 'error',
                        duration: 2000,
                        isClosable: true, 
                    })
                    return; 
                } 
            })
        } catch (error) { 
            if(error){
                toast({
                    title: `${error.response.data.msg}`,
                    status: 'error',
                    duration: 2000,
                    isClosable: true, 
                })
            }
        }
    }

    useState(() => {
        if (data.user.email) {
            setNewEmail(data.user.email);
        }
    }, []);

    return (
        <Box>
            <button onClick={() => setShowBox(true)} className={style.edit_btn}>Edit</button>
            <Box position={"fixed"} display={showbox == true ? "flex" : "none"} alignItems={"center"} justifyContent={"center"} zIndex={55} backgroundColor={"rgba(232, 232, 232, 0.612)"} top={0} left={0} right={0} bottom={0} >
                <Box backgroundColor={"white"} padding={"50px 30px 30px 30px"} position={"relative"} boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px"} borderRadius={10}>
                    <Box className={style.crosebutton}>
                        <button onClick={() => setShowBox(false)} >
                            <CloseIcon color={"blackAlpha.600"} />
                        </button>
                    </Box>
                    <Box w={"300px"} display={"grid"} gap={4}>
                        <Input type="text" value={newemail} onChange={handleEmailChange} w={"100%"} placeholder={"Enter New Email"} />
                        <Input type="text" value={pin} onChange={(e) => handlePinChange(e.target.value)} placeholder={"Enter pincode"} hidden={phase} />
                        <Button w={"100%"} hidden={phase ? false : true} onClick={handleSubmit} colorScheme={"twitter"}> Send Otp </Button>
                        <Button hidden={phase} colorScheme={"twitter"} onClick={handleSendOtp}> Confirm Change </Button>
                    </Box>
                    <Box display={phase ? "none" : "flex"} alignItems={"center"} justifyContent={"end"} marginTop={2} >
                        <Box w={"90px"} position={"absolute"} bottom={"10px"} right={"10px"} >
                            Time: {timer}
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default EmailChanger;


