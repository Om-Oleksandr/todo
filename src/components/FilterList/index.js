import cx from "classnames";
import React, { useContext, useState } from "react";
import Select from "react-select";
import { FilterContext } from "../../contexts";
import styles from "./FilterList.module.scss";
const options = [
  { value: "any", label: "Any" },
  { value: "done", label: "Done" },
  { value: "undone", label: "Undone" },
];
const FilterList = () => {
  const { selectedOption, setSelectedOption } = useContext(FilterContext);
  return (
    // <div>
    //   <select id="" name="filterState" value={filter} onChange={filterTasks}>
    //     <option value={"Any"}>Any</option>
    //     <option value={"Done"}>Done</option>
    //     <option value={"Undone"}>Undone</option>
    //   </select>
    // </div>
    <Select
      defaultValue={selectedOption}
      onChange={setSelectedOption}
      options={options}
      // menuIsOpen={true}
      classNames={{
        control: (state) => styles.select,
        dropdownIndicator: (state) => cx({ [styles.open]: state.selectProps.menuIsOpen }),
        menu: (state) => cx(styles.options),
        menuList: (state) => styles.options__list,
        container: (state) => cx(styles.container, { [styles.open]: state.selectProps.menuIsOpen }),
        menuPortal: (state) => styles.loh,
      }}
      styles={{
        menu: (baseStyles, state) => ({
          ...baseStyles,
        }),
        indicator: (baseStyles, state) => ({
          ...baseStyles,
          padding: "0",
        }),
      }}
    />
  );
};

export default FilterList;
