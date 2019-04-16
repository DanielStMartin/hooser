import React, { Component } from "react"
import { Link, Route } from "react-router-dom"
import StepOne from "../StepOne/StepOne"
import StepTwo from "../StepTwo/StepTwo"
import StepThree from "../StepThree/StepThree"
 
export default class Wizard extends Component{
    constructor(){
        super()
    }
    render(){
        return(
            <div>
                Wizard
                <Link to = "/"><button>Cancel</button></Link>
                <Route component ={StepOne} path = "/wizard/StepOne" />
                <Route component ={StepTwo} path = "/wizard/StepTwo" />
                <Route component ={StepThree} path = "/wizard/StepThree" />
            </div>
        )
    }
}