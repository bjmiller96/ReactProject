import BGImage from '../assets/images/future_library_office.png'

const TheApp = () => {
    return (
        <div style={{backgroundImage: `url(${BGImage})`}} className='relative mx-auto bg-center bg-cover bg-fixed min-h-screen'>
            <div className="absolute bg-black opacity-25 inset-0"></div>
            <div className="flex flex-col justify-center place-items-center py-32">
                <h1 className="relative text-6xl rounded p-2 bg-slate-800 z-10 font-semibold text-white mb-20 pb-4">The App</h1>
                <div className='relative text-center text-xl p-6 bg-slate-800 z-10 text-white w-2/5 rounded-lg'>
                    <p className='m-10'>Hey there! This website is a small web application that I made to help you keep track of those endless numbers of books! Consider it your new "Digital Library"...see what I did there ;)</p>
                    <p className='m-10'>All you need to do is login and then you'll have access to the Dashboard. From there, you can add, update, and delete whatever books you can think of! You can use it to make an organized list of what books you currently have or even to make a shopping/wishlist for yourself, I mean the holidays are right around the corner after all!</p>
                </div>
            </div>
        </div>
    )
}

export default TheApp