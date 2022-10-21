import { Button, InputAdornment, TextField } from "@mui/material";
// import {useFormik} from 'formik'
const FormSubmit = ({ formik }) => {
  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <TextField
          label="Name"
          name="task"
          variant="outlined"
          {...formik.getFieldProps("task")}
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
