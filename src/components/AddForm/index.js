import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import cx from "classnames";
import { Add } from "@mui/icons-material";
import React, { useContext } from "react";
import { TasksContext } from "../../contexts";
import styles from "./AddForm.module.scss";
const ADD_SCHEMA = Yup.object({
  body: Yup.string()
    .trim()
    .min(5, "min 5")
    .lowercase()
    .matches(/^[a-zA-Z0-9\s|/\\]{5,120}$/),
});

const AddForm = () => {
  const { addTask } = useContext(TasksContext);

  return (
    <Formik initialValues={{ body: "" }} onSubmit={addTask} validationSchema={ADD_SCHEMA}>
      <Form>
        <label className={styles.body}>
          <Field name="body">
            {({ field, form, meta }) => {
              const classNames = cx({
                [styles.invalid]: meta.error && meta.touched,
              });
              console.log(meta.error);
              return <input className={classNames} {...field} />;
            }}
          </Field>
          <ErrorMessage component="span" name="body" className={styles.error} />
          <button type="submit">{<Add />}</button>
        </label>
      </Form>
    </Formik>
  );
};

export default AddForm;
