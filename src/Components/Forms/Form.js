import { Button, InputAdornment, TextField } from "@mui/material";

const FormSubmit = (props) => {
  return (
    <>
      <form onSubmit={props.handleFormSubmit}>
        <TextField
          label="Name"
          variant="outlined"
          value={props.todo}
          onChange={props.handleInputChange}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <Button type="submit" variant="contained" color="primary">
                  add to todo list
                </Button>
              </InputAdornment>
            ),
          }}
        />
      </form>
    </>
  );
};
export default FormSubmit;
