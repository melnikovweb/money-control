import { Component } from "react";

class Form extends Component{
    constructor(){
        super();

        this.state = {
            value:0
        }

    }

    onSubmit = (e) =>{
        e.preventDefault();
    }
    onChange = (e) =>{
        debugger
    }
    render () {
        return(
        <form onSubmit={this.onSubmit}>
            <input name="balance" 
            type="number" 
            placeholder="Сума"
            onChange={this.onChange}
            />
            <button>Зберегти</button>
        </form>
        )
    }
}

export default Form