import { Button } from "@mui/material"

const EditButton=(props)=>{
    return(
        <>
        <Button onClick={()=>props.handleEditClick(props.item)}>edit</Button>
        </>
    )
}
export default EditButton