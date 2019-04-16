import React from "react"
import { Switch, Route} from "react-router-dom"
import Dashboard from "./Components/Dashboard/Dashboard";
import Wizard from "./Components/Wizard/Wizard";
// import StepOne from "./Components/StepOne/StepOne";
// import StepTwo from "./Components/StepTwo/StepTwo";
// import StepThree from "./Components/StepThree/StepThree";

export default
    (<Switch>
        <Route component ={Wizard} path = "/wizard" />
        <Route component ={Dashboard} exact path = "/" />
    </Switch>)