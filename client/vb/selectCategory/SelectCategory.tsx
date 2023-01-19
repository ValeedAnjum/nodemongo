import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { VideoBankContext } from "../videoBankContext/VideoBankContext";

const useStyles = makeStyles(() => {
  return {
    category: {
      width: "200px",
    },
  };
});
const SelectCategory = () => {
  const [age, setAge] = React.useState("0");
  const { infoCon, handleCategoryChange } = useContext(VideoBankContext);
  const { categories, selectedCategoy } = infoCon;
  const classes = useStyles();
  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    handleCategoryChange(event.target.value as string);
  };

  return (
    <div>
      <FormControl variant="outlined">
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={selectedCategoy}
          onChange={handleChange}
          label="Age"
          className={classes.category}
        >
          {categories &&
            categories.map(({ name }) => {
              return <MenuItem value={name}>{name}</MenuItem>;
            })}
        </Select>
      </FormControl>
    </div>
  );
};

export default SelectCategory;
