import Button from "./Button"
import Input from "./Input"
import { useForm } from "react-hook-form"
import { server_calls } from "../api/server"
import { useDispatch, useStore } from "react-redux"
import { chooseAuthor, chooseCover, chooseDate, chooseISBN, choosePages, chooseTitle } from "../redux/slices/RootSlice"

interface BookFormProps {
    id?: string[];
    onClose: () => void;
}

const BookForm = (props: BookFormProps) => {
    const {register, handleSubmit} = useForm({})
    const dispatch = useDispatch();
    const store = useStore();

    const onSubmit = (data: any, event: any) => {
        console.log(`ID: ${typeof props.id}`)
        console.log(props.id)
        console.log(data);
        
        if(props.id && props.id.length > 0) {
            server_calls.update(props.id[0], data)
            console.log(`Updated: ${data.title} ${props.id}`);
            setTimeout(() => {window.location.reload()}, 500);
            event.target.reset()
        } else {
            dispatch(chooseAuthor(data.author));
            dispatch(chooseCover(data.cover_type));
            dispatch(chooseDate(data.date_published));
            dispatch(chooseISBN(data.isbn));
            dispatch(choosePages(data.pages));
            dispatch(chooseTitle(data.title));

            server_calls.create(store.getState());
            setTimeout(() => {window.location.reload()}, 500);
            event.target.reset()
            props.onClose()
        }    
    }

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor="title">Title</label>
                    <Input {...register('title')} name='title' placeholder='Title'/>
                </div>
                <div>
                    <label htmlFor="author">Author</label>
                    <Input {...register('author')} name='author' placeholder='Author'/>
                </div>
                <div>
                    <label htmlFor="isbn">ISBN</label>
                    <Input {...register('isbn')} name='isbn' placeholder='ISBN'/>
                </div>
                <div>
                    <label htmlFor="date_published">Date Published</label>
                    <Input {...register('date_published')} name='date_published' placeholder='Date Published'/>
                </div>
                <div>
                    <label htmlFor="cover_type">Cover Type</label>
                    <Input {...register('cover_type')} name='cover_type' placeholder='Cover Type'/>
                </div>
                <div>
                    <label htmlFor="pages">Number of Pages</label>
                    <Input {...register('pages')} name='pages' placeholder='Number of Pages'/>
                </div>
                <div className="flex p-1 justify-center">
                    <Button className="flex text-white bg-slate-800 justify-start m-2 p-2 hover:bg-gray-400 transition duration-150 rounded">Submit</Button>
                </div>
            </form>
        </div>
    )
}

export default BookForm