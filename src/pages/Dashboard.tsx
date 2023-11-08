import BGImage from '../assets/images/future_library_office.png'
import DataTable from '../components/DataTable'

const Home = () => {
    return (
        <div style={{backgroundImage: `url(${BGImage})`}} className='relative mx-auto bg-center bg-cover bg-fixed min-h-screen'>
            <div className="absolute bg-black opacity-25 inset-0"></div>
            <div className="flex justify-center place-items-center">
                <div className="mt-10 pt-10 z-10">
                    <DataTable />
                </div>
            </div>
        </div>
    )
}

export default Home