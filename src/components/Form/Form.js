import React from "react";
import Input from "@mui/material/Input";
import InputAdornment from "@mui/material/InputAdornment";
import LocationSearchingIcon from "@mui/icons-material/LocationSearching";
import styles from "./form.module.css";

export const Form = () => {
  return (
    <form className={styles.form}>
      <Input
      type="text"
        placeholder="Enter City Name"
        className={styles.input}
        startAdornment={
          <InputAdornment position="start">
            <LocationSearchingIcon color="info" />
          </InputAdornment>
        }
      />
    </form>
  );
};
