import { useEffect, useState } from "react";
import { Provider } from 'react-redux'


import Auth from "./interfaces/auth";
import store from "./hooks";

const sys: any = {
    Auth
}

const Config = () => {
    const [systems, setSystems] = useState<[string, any][]>([[Object.keys(sys)[0], null]]);

    useEffect(() => {
        const handler = (e: MouseEvent) => {
            e.preventDefault()
        }

        document.addEventListener('contextmenu', handler)
        return () => document.removeEventListener('contextmenu', handler)
    }, [sys])

    return <>
        <img
            className="fixed left-0 top-0 w-full h-[100vh] object-cover object-center"
            src={require('./bg.png')}
            alt="bg"
        />
        <Provider store={store}>
            {systems.map((system, i: number) => {
                try {
                    const OBJ: any = sys[system[0]];
                    return !system[1] ? <OBJ key={i} /> : <OBJ {...system[1]} key={i} />;
                } catch {
                    return null;
                }
            })}
        </Provider>
    </>
}

export default Config