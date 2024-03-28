import { motion } from "framer-motion"
import Input from "../components/input"
import Button from "../components/button"
import AuthAccounts from "../components/accounts"
import { useState } from "react"

interface props {
    onRegister: () => void
    onLogin: (username: string, password: string) => void
    onClickAccount: (index: number) => void
}

const AuthLogin = ({ onRegister, onLogin, onClickAccount }: props) => {
    const [username, setUsername] = useState<string>('')
    const [password, setPassword] = useState<string>('')

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
                    <div className="text-white font-bold text-[6vh]">
                        Authorization
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
                    title="Password"
                    placeholder="Password"
                    onChange={value => setPassword(value)}
                    type='password'
                />
                <Button
                    onClick={() => onLogin(username, password)}
                >
                    Login
                </Button>
                <div
                    className="text-[1.6vh] w-full text-center font-bold hover:text-[#FE80CC] transition-colors duration-300"
                    onClick={() => onRegister()}
                >
                    Register Account
                </div>
                <AuthAccounts
                    accounts={[...new Array(5)].map(() => ({
                        name: 'HPQ123',
                        level: 20,
                        date: '25 dec 2024',
                        image: require('../assets/user.png')
                    }))}
                    onClick={onClickAccount}
                />
            </motion.div>
        </div>
    </div>
}

export default AuthLogin