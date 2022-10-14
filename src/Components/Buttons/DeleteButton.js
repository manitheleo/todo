import { Button } from "@mui/material";

const DeleteButton = (props) => {
    return (
    <>
    <Button onClick={() => props.deleter(props.index)}>delete</Button>
    </>
    )
}
export default DeleteButton;