import logo from './logo.svg';
import './App.css';
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
    setText(text+"*");
  }
  function divide(){
    setText(text+"/");
  }
  function percent(){
    setText(text+"%");
  }
  function equal(){
    let a = [];
    let o = [];
    let s=text;

    let i = 0;
    while (i < s.length) {
        if (["+", "-", "X", "/", "%"].includes(s[i])) {
            a.push(parseInt(s.slice(0, i)));
            o.push(s[i]);
            s = s.slice(i + 1, s.length);
            i = 0;
        } 
        else {
            i++;
        }
    }

    a.push(parseInt(s));

    let ans = a[0];
    for (let i = 0; i < o.length; i++) {
        if (o[i] == "+") {
            ans += a[i + 1];
        }
        if (o[i] == "-") {
            ans -= a[i + 1];
        }
        if (o[i] == "X") {
            ans *= a[i + 1];
        }
        if (o[i] == "/") {
            ans /= a[i + 1];
        }
        if (o[i] == "%") {
            ans %= a[i + 1];
        }
    }
    setText(ans);
  }



  return (
    <div className="container">
        <div className="input" id='input' >
            <input type="text" placeholder="0" value={text}/>
        </div>
        <div className="button">
            <button Id="C" onClick={C}>C</button>
            <button Id="arrow">+-</button>
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
            <button Id="dot">.</button>
            <button Id="equal" onClick={equal}>=</button>

        </div>
    </div>

  );
}

export default App;
