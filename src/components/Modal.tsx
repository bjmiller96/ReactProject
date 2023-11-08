import BookForm from './BookForm'

type Props = {
    id?: string[];
    open: boolean;
    onClose: () => void;
}

const Modal = (props: Props) => {
    if(!props.open) return (<></>);
    return (
        <div className="fixed top-0 left-0 w-full h-full flex overflow-auto z-1 align-middle items-center justify-center bg-black bg-opacity-75" onClick={props.onClose}>
            <div onClick={(e) => {e.stopPropagation()}} className="w-2/5 max-w-600px z-1 mt-1 fixed bg-white rounded shadow-xl">
                <div className="w-full flex flex-col">
                    <div className="flex flex-row justify-end">
                        <p onClick={props.onClose} className="flex justify-start text-white bg-slate-800 m-2 p-2 rounded hover:bg-gray-400 transition duration-150">X</p>
                    </div>
                    <div className="flex flex-col text-center pb-2 items-center">
                        <BookForm id={props.id} onClose={props.onClose}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal