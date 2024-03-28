import { motion } from "framer-motion"
import { Content, useScrollEffect } from "../../../util/scroll"
import Button from "../components/button"

interface props {
    onAgree: () => void
}

const AuthRules = ({ onAgree }: props) => {
    const ref = useScrollEffect()

    return <div>
        <motion.img
            className="h-full w-auto absolute right-0 top-0"
            src={require('../assets/rules.png')}
            alt="rules layout"
            animate={{
                translateX: ['20vh', '0vh'],
                opacity: [0, 1]
            }}
            transition={{
                duration: 1
            }}
        />
        <div className="absolute left-[5vw] top-1/2 -translate-y-1/2 w-[40vw]">
            <motion.div
                animate={{
                    translateX: ['-20vh', '0vh'],
                    opacity: [0, 1]
                }}
            >
                <div
                    className="w-full h-[70vh] bg-[#2C2C2C] rounded-[.5vh] relative py-[1vh] mb-[2vh]"
                >
                    <Content
                        className="w-[96%] m-auto h-full relative pr-[1vh]"
                        contentProps='grid grid-cols-1 gap-y-[1vh] max-h-full overflow-y-auto'
                        ref={ref}
                    >
                        <div className="flex w-full justify-between">
                            <div className="text-white text-[2.4vh] font-bold">
                                PINK Inc.
                            </div>
                            <div className="text-[1.6vh] text-white">
                                Rules - 2024
                            </div>
                        </div>
                        {[...new Array(20)].map((_, i) => <div
                            className="w-full relative"
                            key={i}
                        >
                            <div className="text-white font-bold text-[2.4vh]">
                                Rules
                            </div>
                            {[...new Array(3)].map((_, x) => <div className="w-full text-[1.6vh] my-[.5vh]">
                                1.1 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna. Сonsectetur adipiscing elit, sed do eiusmod tempor.
                            </div>)}
                        </div>)}
                    </Content>
                </div>
                <Button
                    onClick={onAgree}
                >
                    Agree
                </Button>
            </motion.div>
        </div>
    </div>
}

export default AuthRules