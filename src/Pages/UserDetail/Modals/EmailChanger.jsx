import { Button, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import style from "./Allmodal.module.css";
import { useDispatch, useSelector } from 'react-redux';
import { handleChanges } from '../../../Redux/userauth/action';

const EmailChanger = () => { 
    const data = useSelector((store) => store.userreducer);
    const { isOpen, onOpen, onClose } = useDisclosure();  
    const [val, setval] = useState(""); 
    const dispatch = useDispatch(); 

    const handleupdate = () => {
        let id = data.user._id;
        let authorization = data.user.token;

        let config = {
            headers: {
                id,
                authorization
            },
            body: { email: val }
        } 
        dispatch(handleChanges(config)); 
    } 

    useEffect(()=>{
        if(data.user.email){
            setval(data.user.email); 
        } 
    },[data]) 

    return (
        <>
            <button onClick={onOpen} className={style.edit_btn}>Edit</button>

            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Email </ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Input type='text' value={val} onChange={(e)=>setval(e.target.value)} />
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme='blue' mr={3} onClick={onClose}>
                            Close
                        </Button>
                        <Button onClick={handleupdate} variant='ghost'>Change</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}

export default EmailChanger;

