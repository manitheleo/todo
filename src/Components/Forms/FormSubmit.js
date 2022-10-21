import { Button, InputAdornment, TextField } from "@mui/material";
const FormSubmit = ({ handleSubmit, getFieldProps }) => {
  return (
    <>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Name"
          name="task"
          variant="outlined"
          {...getFieldProps}
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
