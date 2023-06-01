function Calculator(){
  
    const [display , setDisplay] = React.useState({
      current : "0",
      total : "0",
      isInitial : true,
      preOp : ""
    });
    
    
    function handleNumber(value){
     let newValue = value;
      
      if(!display.isInitial){
     newValue = display.current + value;
      } 
     setDisplay({current:newValue, total:display.total, isInitial:false, preOp:display.preOp});
    }
    
    
    
    function renderDisplay(){
      return display.current;
    }
    
   
    
    function handleClear(){
      setDisplay({
      current : "0",
      total : "0",
      isInitial : true,
      preOp : ""
      })
    }
    
  
    
    function handleOperator(value){
     const total = doCalculation();
     setDisplay({current:total.toString(),total:total.toString(),isInitial:true,preOp:value});
    }
    
    
    
    function doCalculation(){
      let total = parseInt(display.total);
    
    
      switch(display.preOp){
        case "+":
          total += parseInt(display.current);
          break;
          
         case "-":
          total -= parseInt(display.current);
          break;
          
         case "*":
          total *= parseInt(display.current);
          break;
          
         case "/":
          total /= parseInt(display.current);
          break;
          
         default :
          total = parseInt(display.current);
      }
      return total;
    }
    
    
    return (
      
      <div className="Calculator">
        <div className="display">{renderDisplay()}</div>
        <CalButton value="1" onClick={handleNumber}/>
        <CalButton value="2" onClick={handleNumber}/>
        <CalButton value="3" onClick={handleNumber}/>
        <CalButton className="Operator" onClick={handleOperator} value="*"/> 
        
        <CalButton value="4" onClick={handleNumber}/>
        <CalButton value="5" onClick={handleNumber}/>
        <CalButton value="6" onClick={handleNumber}/>
        <CalButton className="Operator" onClick={handleOperator} value="/"/> 
        
        <CalButton value="7" onClick={handleNumber}/>
        <CalButton value="8" onClick={handleNumber}/>
        <CalButton value="9" onClick={handleNumber}/>
        <CalButton className="Operator" onClick={handleOperator} value="+"/> 
        
        <CalButton value="C" onClick={handleClear}/>
        <CalButton value="0" onClick={handleNumber}/>
        <CalButton value="=" onClick={handleOperator}/>
        <CalButton className="Operator" onClick={handleOperator} value="-"/> 
        </div>
       
      
    )
  }
  
  
  function CalButton(props){
    return <button className={props.className} onClick={() => props.onClick(props.value)}>{props.value}</button>
    
  }
  
  ReactDOM.render(<div className="app-container"><Calculator/></div>,document.getElementById("root"));