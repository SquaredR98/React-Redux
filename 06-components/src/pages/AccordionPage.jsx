import React from 'react'
import Accordion from '../components/Accordion';

const AccordionPage = () => {
  const items = [
    {
      label: 'Can I use React on Projects?',
      content: 'Yes, you can use React on any project you want to work on. Yes, you can use React on any project you want to work on.'
    },
    {
      label: 'Can I use React on HTML?',
      content: 'Yes, you can use HTML on any project you want to work on. Yes, you can use React on any project you want to work on.Yes, you can use React on any project you want to work on. Yes, you can use React on any project you want to work on.'
    },
    {
      label: 'Can I use React on CSS?',
      content: 'Yes, you can use CSS on any project you want to work on. Yes, you can use React on any project you want to work on.'
    }
  ]
  
  return (
    <div>
      <Accordion items={items} />
    </div>
  );
}

export default AccordionPage