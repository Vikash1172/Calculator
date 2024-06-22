import React from 'react'
import './Calculator.css'
let Input = 0;
export default function CalculatorBody() {

  function clear(){
    
  }
  return (
    <div className="container">
        <div className="input" id='input'>
            <input type="text" placeholder="0"/>
        </div>
        <div className="button">
            <button Id="C">C</button>
            <button Id="arrow">+-</button>
            <button Id="percent">%</button>
            <button Id="divide">/</button>
            <button Id="seven">7</button>
            <button Id="eight">8</button>
            <button Id="nine">9</button>
            <button Id="multiply">X</button>
            <button Id="four">4</button>
            <button Id="five">5</button>
            <button Id="six">6</button>
            <button Id="minus">-</button>
            <button Id="one">1</button>
            <button Id="two">2</button>
            <button Id="three">3</button>
            <button Id="plus">+</button>
            <button Id="zero">0</button>
            <button Id="dot">.</button>
            <button Id="equal">=</button>

        </div>
    </div>
  )
}
