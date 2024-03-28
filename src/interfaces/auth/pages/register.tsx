import { motion } from "framer-motion"
import Input from "../components/input"
import Button from "../components/button"
import { useState } from "react"
import Check from "../components/check"

interface props {
    onBack: () => void
    onRules: () => void
    onRegister: (username: string, email: string, password: string, referral: string) => void
}

const AuthRegister = ({ onBack, onRules, onRegister }: props) => {
    const [username, setUsername] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [rePassword, setRePassword] = useState<string>('')
    const [referral, setReferral] = useState<string>('')
    const [email, setEmail] = useState<string>('')

    const [rules, setRules] = useState<boolean>(false)

    return <div>
        <motion.img
            className="h-full w-auto absolute left-0 top-0"
            src={require('../assets/login.layout.png')}
            alt="login layout"
            animate={{
                translateX: ['-20vh', '0vh'],
                opacity: [0, 1]
            }}
            transition={{
                duration: 1
            }}
        />

        <div className="absolute top-1/2 -translate-y-1/2 right-[15vw]">
            <motion.div
                className="relative w-[24vw] grid grid-cols-1 gap-y-[1.5vh]"
                animate={{
                    translateX: ['20vh', '0vh'],
                    opacity: [0, 1]
                }}
            >
                <div className="w-full mb-[2vh]">
                    <div className="text-white font-bold text-[5vh]">
                        Register Account
                    </div>
                    <div className="text-[1.4vh] text-[#ffffffDD]">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.
                    </div>
                </div>
                <Input
                    title="Username"
                    placeholder="Your username"
                    onChange={value => setUsername(value)}
                    type='text'
                />
                <Input
                    title="Email"
                    placeholder="Your email"
                    onChange={value => setEmail(value)}
                    type='email'
                />
                <Input
                    title="Password"
                    placeholder="Password"
                    onChange={value => setPassword(value)}
                    type='password'
                />
                <Input
                    title="Repeat Password"
                    placeholder="Password"
                    onChange={value => setRePassword(value)}
                    type='password'
                />
                <Input
                    title="Referral ID"
                    placeholder="ID / Username"
                    onChange={value => setReferral(value)}
                    type='text'
                />
                <Check
                    value={rules}
                    onChange={value => setRules(value)}
                >
                    <div className="flex gap-x-[.5vh] items-center">
                        i read <div
                            className="font-bold text-white underline hover:opacity-50 transition-opacity duration-300"
                            onClick={() => onRules()}
                        >the rules</div>
                    </div>
                </Check>
                <Button
                    onClick={() => onRegister(username, email, password, referral)}
                >
                    REGISTER ACCOUNT
                </Button>
                <div
                    className="text-[1.6vh] w-full text-center font-bold hover:text-[#FE80CC] transition-colors duration-300"
                    onClick={() => onBack()}
                >
                    Back
                </div>
            </motion.div>
        </div>
    </div>
}

export default AuthRegister