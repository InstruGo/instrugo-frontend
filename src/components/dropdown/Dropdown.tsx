import React from 'react';

interface DropdownProps {
  // Values to be available in the dropdown
  options: { key: string; value: string }[];
  // Passed setter from parent component will be used to get the currently selected value of the dropdown component
  onOptionSelect: (value: string) => void;
  selectedOption?: string;
}

export const Dropdown = ({
  options,
  onOptionSelect,
  selectedOption,
}: DropdownProps) => {
  return (
    <select
      onChange={(e) => onOptionSelect(e.target.value)}
      value={!!selectedOption ? selectedOption : options[0].key}
    >
      {options.map((option) => {
        return (
          <option key={option.key} value={option.key}>
            {option.value}
          </option>
        );
      })}
    </select>
  );
};
