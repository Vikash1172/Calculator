import logo from './logo.svg';
// import './App.css';
import CalculatorBody from './Components/CalculatorBody';
import React, { useState } from 'react';





function App() {
  const [text,setText]=useState("");
  function One(){
    setText(text+"1");
  }
  function two(){
    setText(text+"2");
  }
  function three(){
    setText(text+"3");
  }
  function four(){
    setText(text+"4");
  }
  function five(){
    setText(text+"5");
  }
  function six(){
    setText(text+"6");
  }
  function seven(){
    setText(text+"7");
  }
  function eight(){
    setText(text+"8");
  }
  function nine(){
    setText(text+"9");
  }
  function zero(){
    setText(text+"0");
  }
  function C(){
    setText("");
  }
  function plus(){
    setText(text+"+");
  }
  function minus(){
    setText(text+"-");
  }
  function multiply(){
    setText(text+"X");
  }
  function divide(){
    setText(text+"/");
  }
  function percent(){
    setText(text+"%");
  }
  function dot(){
    setText(text+".");
  }
  function arrow(){
    setText(text.slice(0,text.length-1));
  }
  function equal(){
    let a = [];
    let o = [];
    let s=text;

    let i = 0;
    while (i < s.length) {
        if (["+", "-", "X", "/", "%"].includes(s[i])) {
            a.push(parseFloat(s.slice(0, i)));
            o.push(s[i]);
            s = s.slice(i + 1, s.length);
            i = 0;
        } 
        else {
            i++;
        }
    }

    a.push(parseFloat(s));

  
    let indices={};
    indices=o.map((e,i)=>e==="%"?i:-1).filter(e=>e!==-1);
    if(indices.length>0){
      for(let i=0;i<indices.length;i++){
        a[indices[i]] = a[indices[i]]*a[indices[i]+1]/100;
      }
      for(let i=0;i<indices.length;i++){
        a.splice(indices[i]+1,1);
        o.splice(indices[i],1);
      }
    }
    indices=o.map((e,i)=>e==="/"?i:-1).filter(e=>e!==-1);
    if(indices.length>0){
      for(let i=0;i<indices.length;i++){
        if(a[i+1]==0){
          setText("ZeroDivisionError");
          return;
        }
        else{
          a[indices[i]] = a[indices[i]]/a[indices[i]+1];
        }
      }
      for(let i=0;i<indices.length;i++){
        a.splice(indices[i]+1,1);
        o.splice(indices[i],1);
      }
    }
    indices=o.map((e,i)=>e==="X"?i:-1).filter(e=>e!==-1);
    if(indices.length>0){
      for(let i =0;i<indices.length;i++){
        a[indices[i]] = a[indices[i]]*a[indices[i]+1];
       
      }
      for(let i=0;i<indices.length;i++){
        a.splice(indices[i]+1,1);
        o.splice(indices[i],1);
      }
    }

    indices=o.map((e,i)=>e==="+"? i:-1).filter(e=>e!==-1);
    if(indices.length>0){
      for(let i=0;i<indices.length;i++){
        a[indices[i]] = a[indices[i]]+a[indices[i]+1];
        
      }
      for(let i=0;i<indices.length;i++){
        a.splice(indices[i]+1,1);
        o.splice(indices[i],1);}
    }
    indices=o.map((e,i)=>e==="-"?i:-1).filter(e=>e!==-1);
    if(indices.length>0){
      for(let i =0 ;i<indices.length;i++){
        a[indices[i]] = a[indices[i]]-a[indices[i]+1];
      }
      for(let i=0;i<indices.length;i++){
        a.splice(indices[i]+1,1);
        o.splice(indices[i],1); 
      }
    }
    setText(a[0]);
  }
  return (
    <div className="App">
    <div className="container">
        <h3>Vikash Mehra</h3>
        <div className="input" id='input' >
            <input type="text" placeholder="0" value={text}/>
        </div>
        <div className="button">
            <button Id="C" onClick={C}>C</button>
            <button Id="arrow" onClick={arrow}><i class="fa-solid fa-delete-left"></i></button>
            <button Id="percent" onClick={percent}>%</button>
            <button Id="divide" onClick={divide}>/</button>
            <button Id="seven" onClick={seven}>7</button>
            <button Id="eight" onClick={eight}>8</button>
            <button Id="nine" onClick={nine}>9</button>
            <button Id="multiply" onClick={multiply}>X</button>
            <button Id="four" onClick={four}>4</button>
            <button Id="five" onClick={five}>5</button>
            <button Id="six" onClick={six}>6</button>
            <button Id="minus" onClick={minus}>-</button>
            <button Id="one" onClick={One}>1</button>
            <button Id="two" onClick={two}>2</button>
            <button Id="three" onClick={three}>3</button>
            <button Id="plus" onClick={plus}>+</button>
            <button Id="zero" onClick={zero}>0</button>
            <button Id="dot" onClick={dot}>.</button>
            <button Id="equal" onClick={equal}>=</button>

        </div>
    </div>
</div>

  );
}

export default App;
