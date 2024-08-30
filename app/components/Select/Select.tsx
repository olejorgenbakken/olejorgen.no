interface Props {
  options: {
    label: string;
    value: string;
  }[];
}

export const Select = ({ options }: Props) => {
  return (
    <select>
      {options.map((option) => (
        <option
          value={option.value}
          key={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};
