import BGImage from '../assets/images/future_library_office.png'

const About = () => {
    return (
        <div style={{backgroundImage: `url(${BGImage})`}} className='relative mx-auto bg-center bg-cover bg-fixed min-h-screen'>
            <div className="absolute bg-black opacity-25 inset-0"></div>
            <div className="flex flex-col justify-center place-items-center py-32">
                <h1 className="relative text-6xl rounded p-2 bg-slate-800 z-10 font-semibold text-white mb-20 pb-4">About The App</h1>
                <div className='relative text-center text-xl p-6 bg-slate-800 z-10 text-white w-2/5 rounded-lg'>
                    <p className='m-10'>Hey there! This website is a small React application that I made to help you keep track of those endless numbers of books! Consider it your new "Digital Library"...see what I did there ;)</p>
                    <p className='m-10'>All you need to do is login and then you'll have access to the Dashboard. From there, you can add, update, and delete whatever books you can think of! You can use it to make an organized list of what books you currently have or even to make a shopping/wishlist for yourself, I mean the holidays are right around the corner after all! Anyways I truly hope you find this useful.</p>
                    <p className='m-10'>Also if you have any questions or issues, please feel free to reach out to me, which if you have access to this site, you should already know how to get in touch with me lol. But if you truly don't, then just click on my email to send me a message: <a href='mailto:bjmiller96@proton.me' className='bg-white text-slate-800 rounded p-0.5 hover:bg-gray-400 hover:text-white transition duration-150'>bjmiller96@proton.me</a></p>
                </div>
            </div>
        </div>
    )
}

export default About