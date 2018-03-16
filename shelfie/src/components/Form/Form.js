import React, {Component} from 'react';

export default class Form extends Component {
    constructor() {
        super()
        this.state = {
           imageURL: '',
           productName: '',
           price: 0 
        }
    }

    updateState(prop, val){
        this.setState({
            [prop]: val
        })
    }

    clearInput(){
        console.log(this.state)
        this.setState({
            imageURL: '',
            productName: '',
            price: 0
        })
    }

    render() {
        return(
            <div>
                <input onChange={(e)=>this.updateState('imageURL', e.target.value)}
                        placeholder='Image URL'
                />
                <input onChange={(e)=>this.updateState('productName', e.target.value)}
                        placeholder='Product Name'
                />
                <input onChange={(e)=>this.updateState('price', e.target.value)}
                        placeholder='Price'
                />
                <div>
                    <button onClick={() => this.clearInput()}>Cancel</button>
                    <button>Add to Inventory</button>
                </div>
            </div>
        )
    }
}