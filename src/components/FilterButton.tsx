import React from "react";
import { FilterType } from '../App'

interface Props {
  name: FilterType;
  setFilter: React.Dispatch<React.SetStateAction<FilterType>>;
  isPressed?: boolean;
}

const FilterButton: React.FC<Props> = ({name, setFilter, isPressed}) => {
  return (
    <button 
      type="button" 
      className="btn toggle-btn" 
      aria-pressed="true"
      onClick={() => setFilter(name)}
    >
      <span className="visually-hidden">Show </span>
      <span>{name}</span>
      <span className="visually-hidden"> tasks</span>
    </button>
  );
}

export default FilterButton;