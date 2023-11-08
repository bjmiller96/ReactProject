import Button from './Button'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { auth, provider } from '../config/firebase'
import { signInWithPopup, signOut } from 'firebase/auth'

const Navbar = () => {
    const [isVisible, setIsVisible] = useState(false);
    const navigate = useNavigate();

    const signInOnClick = () => {
        signInWithPopup(auth, provider.google);
    }

    const signOutOnClick = () => {
        signOut(auth);
        navigate('/')
        location.reload()
    };

    const dropDown = () => {
        setIsVisible(!isVisible);
    };

    const clicked = () => {
        setIsVisible(false);
    };

    return (
        <nav className='flex items-center flex-wrap justify-between p-6 bg-slate-800'>
            <div className="flex items-center flex-shrink-0 mr-6 text-white" onClick={clicked}>
                <Link className="hover:text-gray-400 text-2xl font-semibold tracking-tight transition duration-150" to='/'>Digital Library</Link>
            </div>
            <div className="block">
                <button onClick={dropDown} className="flex items-center text-white rounded hover:text-slate-400 transition duration-150">
                    <i className="fa-solid fa-circle-chevron-down fa-2xl"></i>
                </button>
            </div>
            {isVisible ? (
                <div className="w-full block flex-grow items-center">
                    <div className="flex justify-end items-center flex-grow mt-5">
                        <Link to='/'>
                            <Button onClick={clicked} className="bg-white border-white hover:text-white hover:bg-gray-400 p-2 m-2 rounded transition duration-150">Home</Button>
                        </Link>
                        <Link to='/about'>
                            <Button onClick={clicked} className="bg-white border-white hover:text-white hover:bg-gray-400 p-2 m-2 rounded transition duration-150">About</Button>
                        </Link>
                        <Link to='/dashboard'>
                            <Button onClick={clicked} className="bg-white border-white hover:text-white hover:bg-gray-400 p-2 m-2 rounded transition duration-150">Dashboard</Button>
                        </Link>
                        {!auth.currentUser ? (
                            <Link to="/" onClick={signInOnClick}>
                                <Button className="bg-white border-white hover:text-white hover:bg-gray-400 p-2 m-2 rounded transition duration-150">Sign In</Button>
                            </Link>
                        ) : (
                            <Link to="/" onClick={signOutOnClick}>
                                <Button className="bg-white border-white hover:text-white hover:bg-gray-400 p-2 m-2 rounded transition duration-150">Sign Out</Button>
                            </Link>
                        )}
                    </div>
                </div>
            ) : (
                <></>
            )}
        </nav>
    )
}

export default Navbar