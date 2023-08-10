import { Button, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import style from "./Allmodal.module.css";
import { useDispatch, useSelector } from 'react-redux'; 
import { handleChanges } from '../../../Redux/userauth/action';


const MobileChanger = () => {
    const data = useSelector((store) => store.userreducer);
    const { isOpen, onOpen, onClose } = useDisclosure();  
    const [mobile, setmobile] = useState(""); 
    const dispatch = useDispatch(); 

    // console.log(data); 
    const handleupdate = () => {
        let id = data.user._id;
        let authorization = data.user.token;

        let headers = {
            'Content-Type': 'application/json',
                id,
                authorization
        }
        let body = { mobile: mobile }
        dispatch(handleChanges(headers, body)); 
        onClose();

    }

    useEffect(()=>{
        if(data.user.mobile){
            setmobile(data.user.mobile); 
        } 
    },[data]) 

    return (
        <>
            <button onClick={onOpen} className={style.edit_btn}>Edit</button>

            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Mobile </ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Input type='text' value={mobile} onChange={(e)=>setmobile(e.target.value)} />
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

export default MobileChanger ; 
