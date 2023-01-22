import { useState } from "react";
import { FiChevronRight, FiChevronDown } from "react-icons/fi";

const Accordion = ({ items }) => {
  const [expandedIndex, setExpandedIndex] = useState(-1);

  const handleClick = (netxIndex) => {
    if(expandedIndex === netxIndex) {
      setExpandedIndex(-1);
    } else {
      setExpandedIndex(netxIndex);
    }
  }

  const renderedItems = items.map((item, index) => {
    const isExpanded = index === expandedIndex;

    const content = isExpanded && (
      <div className="border-b p-5">{item.content}</div>
    );

    const icon = (
      <span className="text-2xl">
        {" "}
        {isExpanded ? <FiChevronDown /> : <FiChevronRight />}
      </span>
    );

    return (
      <div key={index}>
        <div
          className="flex justify-between p-3 bg-gray-100 border-b items-center cursor-pointer"
          onClick={() => {handleClick(index)}}
        >
          {item.label}
          {icon}
        </div>
        {content}
      </div>
    );
  });
  return <div className="border-x border-t rounded">{renderedItems}</div>;
};

export default Accordion;
