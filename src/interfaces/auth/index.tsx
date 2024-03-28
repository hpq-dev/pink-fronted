import { useState } from "react"
import AuthLogin from "./pages/login"
import AuthRegister from "./pages/register"
import AuthRules from "./pages/rules"
import { motion } from 'framer-motion'

enum PAGES {
    LOGIN,
    REGISTER,
    RULES
}

const Auth = () => {
    const [page, setPage] = useState<PAGES>(PAGES.LOGIN)

    const onLogin = (username: string, password: string): void => {
        console.log('on login', username, password)
    }

    const onClickAccount = (index: number): void => {
        console.log(`on click account ${index} id`)
    }

    const onRegister = (username: string, email: string, password: string, referral: string) => {
        console.log(username, email, password, referral)
    }

    const Pages = () => {
        switch (page) {
            case PAGES.LOGIN: return <AuthLogin 
                onLogin={onLogin}
                onRegister={() => setPage(PAGES.REGISTER)}
                onClickAccount={onClickAccount}
            />
            case PAGES.REGISTER: return <AuthRegister 
                onBack={() => setPage(PAGES.LOGIN)}
                onRules={() => setPage(PAGES.RULES)}
                onRegister={onRegister}
            />
            case PAGES.RULES: return <AuthRules
                onAgree={() => setPage(PAGES.REGISTER)}
            />
        }
        return null
    }

    return <motion.div
        className="w-full h-[100vh] fixed left-0 top-0 font-inter text-white"
        animate={{
            opacity: [0, 1]
        }}
    >
        <img
            className="w-full h-full object-fill absolute z-[-1]"
            src={require('./assets/bg.png')}
            alt="bg"
        />
        <Pages />
    </motion.div>
}

export default Auth