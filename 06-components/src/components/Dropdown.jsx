import { useEffect, useState, useRef } from "react"
import { FiChevronDown, FiChevronRight } from "react-icons/fi";
import Panel from "./Panel";

const Dropdown = ({options, value, onChange}) => {
  const [isOpen, setIsOpen] = useState(false);
  const divElement = useRef();

  useEffect(() => {
    const handler = (event) => {
      if(!divElement.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('click', handler, true);

    return () => {
      document.removeEventListener('click', handler);
    }
  }, [])
  

  const handleClick = () => {
    setIsOpen(!isOpen);
  }

  const handleOptionClick = (option) => {
    setIsOpen(false);
    onChange(option);
  }

  const renderedOptions = options.map((option) => {
    return <div className="hover:bg-sky-100 rounded cursor-pointer p-1" onClick={() => handleOptionClick(option)} key={option.value}>{option.label}</div>
  })

  let content = 'Select and option';
  if(value) {
    content = value.label
  }

  const icon = (
    <span >
      {" "}
      {!isOpen ? <FiChevronDown /> : <FiChevronRight />}
    </span>
  );

  return (
    <div ref={divElement} className="w-48 relative">
      <Panel className="flex justify-between items-center cursor-pointer" onClick={handleClick}>
        {content}
        {icon}
      </Panel>
      {isOpen && <Panel className="absolute top-full">{renderedOptions}</Panel> }
    </div>
  )
}

export default Dropdown