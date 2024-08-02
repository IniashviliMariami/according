

 function AccordionItems(props) {

    const{handleCkilck,activeAccordionNumber,itemNumber,title,content}=props;
     
  return (
    <div  onClick={()=>handleCkilck(itemNumber)}>
        {title}
        {activeAccordionNumber==itemNumber?<p>{content}</p>:null}
    </div>
  )
}

export default  AccordionItems;