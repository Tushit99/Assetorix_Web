import { Box, Heading, Input } from '@chakra-ui/react'
import React, { useState } from 'react'

const OfficeSetup = () => { 
    const [furnish, setFurnish] = useState("");
    const [condition, setCondition] = useState("");
    const [oxygen, setOxygen] = useState("");
    const [ups, setUps] = useState("");


    return (
        <div>
            <Box padding={"10px 0"}>
                <Heading as={"h3"} margin={"5px 0"} size={"md"}>
                    Describe your office setup
                </Heading>
                <Box display={"flex"} gap={5}  >
                    <Input type="text" variant="flushed" placeholder="Mini. no. of seats" />
                    <Input type="text" variant="flushed" placeholder="Max. no. of Seats (optional) " />
                    <Input type="text" variant="flushed" placeholder="No. of Cabins " />
                </Box>
            </Box>
            <Box display={"grid"} gap={5} padding={"20px 0"} >
                <Heading as={"h3"} margin={"5px 0"} size={"md"}>
                    No. of Meeting Rooms
                </Heading>
                <Input type="text" placeholder="No. of Meeting Rooms" borderRadius={0} />
            </Box>
            <Box className={style.optional_box}>
                <Heading as={"h3"} margin={"5px 0"} size={"md"}>
                    Washrooms
                </Heading>
                <Box >
                    <button className={style.btn}>Available</button>
                    <button className={style.btn}>Not-Available</button>
                </Box>
            </Box>
            <Box className={style.optional_box}>
                <Heading as={"h3"} margin={"5px 0"} size={"md"}>
                    Conference Room
                </Heading>
                <Box >
                    <button className={style.btn}>Available</button>
                    <button className={style.btn}>Not-Available</button>
                </Box>
            </Box>
            <Box className={style.optional_box}>
                <Heading as={"h3"} margin={"5px 0"} size={"md"}>
                    Reception Area
                </Heading>
                <Box >
                    <button className={style.btn}>Available</button>
                    <button className={style.btn}>Not-Available</button>
                </Box>
            </Box>
            <Box className={style.optional_box}>
                <Heading as={"h3"} margin={"5px 0"} size={"md"}>
                    Pantry Type
                </Heading>
                <Box >
                    <button className={style.btn}>Private</button>
                    <button className={style.btn}>Shared</button>
                    <button className={style.btn}>Not-Available</button>
                </Box>
            </Box>
            <Box textAlign={"left"}>
                <Heading textAlign={"left"} as={"h3"} margin={"5px 0"} size={"md"}>
                    Please select the facilities availble
                </Heading>
                <Box display={"grid"} textAlign={"center"} margin={"20px auto"} >
                    <Box display={"flex"}>
                        <Box flex={1} textAlign={"left"}>Furnishing</Box>
                        <Box flex={1}>
                            <RadioGroup onChange={setFurnish} value={furnish}>
                                <Stack direction='row'>
                                    <Radio value='Available'>Available</Radio>
                                    <Radio value='Not_Available'> Not Available</Radio>
                                </Stack>
                            </RadioGroup>
                        </Box>
                    </Box>
                    <Box display={"flex"}>
                        <Box flex={1} textAlign={"left"}>Central Air Conditioning</Box>
                        <Box flex={1}>
                            <RadioGroup onChange={setCondition} value={condition}>
                                <Stack direction='row'>
                                    <Radio value='Available'>Available</Radio>
                                    <Radio value='Not_Available'> Not Available</Radio>
                                </Stack>
                            </RadioGroup>
                        </Box>
                    </Box>
                    <Box display={"flex"}>
                        <Box flex={1} textAlign={"left"}>Oxygen Duct</Box>
                        <Box flex={1}>
                            <RadioGroup onChange={setOxygen} value={oxygen}>
                                <Stack direction='row'>
                                    <Radio value='Available'>Available</Radio>
                                    <Radio value='Not_Available'> Not Available</Radio>
                                </Stack>
                            </RadioGroup>
                        </Box>
                    </Box>
                    <Box display={"flex"}>
                        <Box flex={1} textAlign={"left"}>UPS</Box>
                        <Box flex={1}>
                            <RadioGroup onChange={setUps} value={ups}>
                                <Stack direction='row'>
                                    <Radio value='Available'>Available</Radio>
                                    <Radio value='Not_Available'> Not Available</Radio>
                                </Stack>
                            </RadioGroup>
                        </Box>
                    </Box>
                </Box>
            </Box>
            {/* ===Fire safety=== */}
            <Box className={style.optional_box}>
                <Heading textAlign={"left"} as={"h3"} margin={"5px 0"} size={"md"}>
                    Fire safety measures include
                </Heading>
                <Box>
                    <button className={style.btn}>Fire Extinguisher</button>
                    <button className={style.btn}>Fire Sensors</button>
                    <button className={style.btn}>Sprinklers</button>
                    <button className={style.btn}>Fire Hose</button>
                </Box>
            </Box>
            <Box>
                <Heading textAlign={"left"} as={"h3"} margin={"5px 0"} size={"md"}>
                    Floor Details
                </Heading>
                <Heading textAlign={"left"} as={"h4"} margin={"8px 0 14px 0"} size={"xs"} fontWeight={400}  >
                    Enter the total number of floors and select the floors your office space occupies.
                </Heading>
                <Box display={"flex"} gap={6}>
                    <Input type="text" flex={1} borderRadius={0} placeholder={"Total Floors"} />
                    <Input type="text" flex={1} borderRadius={0} placeholder={"Year Floor No.(optional)"} />
                </Box>
            </Box>
            <Box >
                <Heading textAlign={"left"} as={"h3"} margin={"5px 0"} size={"md"}>
                    No. of Staircase (Optional)
                </Heading>
                <Input type="number" />
            </Box>  
        </div>
    )
}

export default OfficeSetup  
