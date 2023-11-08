import { useState } from "react"
import Modal from "./Modal"
import Button from "./Button"
import { useGetData } from "../custom-hooks/FetchData"
import { DataGrid, GridColDef } from "@mui/x-data-grid"
import { server_calls } from "../api/server"

const columns: GridColDef[] = [
    {field: 'id', headerName: 'ID', width: 75, hideable: true},
    {field: 'title', headerName: 'Title', flex: 1},
    {field: 'author', headerName: 'Author', flex: 1},
    {field: 'isbn', headerName: 'ISBN', flex: 1},
    {field: 'date_published', headerName: 'Published', flex: 0.75},
    {field: 'cover_type', headerName: 'Cover Type', flex: 0.75},
    {field: 'pages', headerName: 'Pages', flex: 0.5}
]

const DataTable = () => {
    const [open, setOpen] = useState(false);
    const {bookData, getData} = useGetData();
    const [selectionModel, setSelectionModel] = useState<string[]>([])
    
    const handleOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    const deleteData = () => {
        server_calls.delete(selectionModel[0]);
        getData();
        console.log(`Selection Model: ${selectionModel}`)
        setTimeout(() => {window.location.reload()}, 500)
    }

    return (
        <>
            <Modal id={selectionModel}
                    open={open} 
                    onClose={handleClose} />
            <div className="flex flex-row justify-center mt-12">
                <div>
                    <button className="bg-slate-800 text-white m-3 p-3 hover:bg-white hover:text-slate-800 rounded transition duration-150" onClick={() => handleOpen()}>Add New Book</button> 
                </div>
                <Button className="bg-slate-800 text-white m-3 p-3 hover:bg-white hover:text-slate-800 rounded transition duration-150" onClick={handleOpen}>Update Book</Button>
                <Button className="bg-slate-800 text-white m-3 p-3 hover:bg-white hover:text-slate-800 rounded transition duration-150" onClick={deleteData}>Delete Book</Button>
            </div>
            <div className={open ? 'hidden' : 'container mx-10 my-10 flex flex-col'} style={{height: 600, width: 900}}>
                <h2 className="bg-white text-slate-800 text-center p-2 my-2 rounded">My Digital Library</h2>
                <DataGrid sx = {{backgroundColor: 'white', color: 'black'}} rows = {bookData} columns={columns} pageSizeOptions={[100]}
                checkboxSelection={true} onRowSelectionModelChange={(item:any) => {
                    setSelectionModel(item)
                }} 
                />
            </div>
        </>
    )
}

export default DataTable