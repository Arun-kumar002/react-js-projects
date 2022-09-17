//app component is the root component js or jsx recommended jsx
import React,{Component} from "react";
import ClassBasedComp from './components/ClassBasdComp'
import FunctionalBasedComp from "./components/FunctionalBaseComp";
class App extends Component{
    render(){
        return (
            <>
            {/* component composition and this is reusable */}
            <ClassBasedComp/> 
            <hr/>
            <FunctionalBasedComp/>
            <h1>im root Component</h1>
            </>
        )
    }
}
export default App;