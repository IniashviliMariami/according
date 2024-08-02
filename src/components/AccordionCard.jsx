import React, { useState } from 'react'
import styles from './AccordionCard.module.css'
import AccordionItems from './AccordionItems'
import Data from './Data'



function AccordionCard() {
  const[activeAccordionNumber,setActiveAccordionNumber]=useState(null)
  
 const handleCkilck=(accordionNumber)=>{
  if(activeAccordionNumber==accordionNumber){
    setActiveAccordionNumber(null)
  }else{
    setActiveAccordionNumber(accordionNumber)
  }
 }
 
 
  return (
    <div className={styles.accordionCard}>
      {Data.map((item)=>(
      <AccordionItems className="box"
          activeAccordionNumber={activeAccordionNumber}
          handleCkilck={handleCkilck}
          itemNumber={item.itemNumber}
          title={item.title}
          content={item.content}>
      </AccordionItems>
      ))}
    </div>
  )
}

export default AccordionCard
