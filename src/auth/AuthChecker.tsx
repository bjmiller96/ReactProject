import { useEffect, useState} from "react"
import { useNavigate } from "react-router-dom"
import { auth, provider } from "../config/firebase"
import { signInWithPopup } from "firebase/auth"

interface Props {
    children: React.ReactNode;
}

const AuthChecker = ({children}: Props) => {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(async (user) => {
            if(user) {
                setIsLoading(false)
            } else {
                await signInWithPopup(auth, provider.google)
            }
        });

        return () => unsubscribe()
    }, [navigate])

    if(isLoading) {
        return <div className='flex justify-center py-96 text-4xl font-bold bg-slate-800 text-white h-screen'>Loading...</div>
    }

    return <>{auth.currentUser ? children: null}</>
}

export default AuthChecker

