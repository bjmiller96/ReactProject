import BGImage from '../assets/images/future_library_office.png'

const About = () => {
    return (
        <div style={{backgroundImage: `url(${BGImage})`}} className='relative mx-auto bg-center bg-cover bg-fixed min-h-screen'>
            <div className="absolute bg-black opacity-25 inset-0"></div>
            <div className="flex flex-col justify-center place-items-center py-32">
                <h1 className="relative text-6xl rounded p-2 bg-slate-800 z-10 font-semibold text-white mb-20 pb-4">The Developer</h1>
                <div className='relative text-center text-xl p-6 bg-slate-800 z-10 text-white w-2/5 rounded-lg'>
                    <p className='m-10'>Hey there! My name is Brandon and I'm the developer behind this simple web app. I'm excited to share it with you. I know it doesn't look like much but it was a lot to learn and I learned a lot from it!</p>
                    <p className='m-10'>I'm currently enrolled in Coding Temple's Self-Paced Software Engineering course. This is the last project for the final module and then I have the final capstone, which I'm very excited to start!</p>
                    <p className='m-10'>Anyways I'm 27 years old and I currently live in Wisconsin. I also work a full-time job as a IT Technician at a manufacturing company and part-time as an Infantryman in the Army National Guard. The end goal is to finally transition to my dream career of being a Software Engineer!</p>
                </div>
            </div>
        </div>
    )
}

export default About