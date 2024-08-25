function Select({ titleSelect, handelSelect, options, defaultValue }) {
  return (
    <label>
      {titleSelect}
      <select onChange={handelSelect} value={defaultValue}>
        {options.map((option, ind) => {
          return (
            <option key={ind} value={option}>
              {option}
            </option>
          );
        })}
      </select>
    </label>
  );
}

export default Select;
