import BGImage from '../assets/images/future_library_office.png'

const Home = () => {
    return (
        <div style={{backgroundImage: `url(${BGImage})`}} className='relative mx-auto bg-center bg-cover bg-fixed min-h-screen'>
            <div className="absolute bg-black opacity-25 inset-0"></div>
            <div className="flex flex-col justify-center place-items-center py-32">
                <h1 className="relative text-9xl z-10 font-bold bg-slate-800 text-white rounded-lg mt-40 mb-20 p-4 pb-7">Digital Library</h1>
                <p className='relative text-2xl rounded-md text-white bg-slate-800 mb-20 p-4'>The best way to keep track of books</p>
            </div>
        </div>
    )
}

export default Home