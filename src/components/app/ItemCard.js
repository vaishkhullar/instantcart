import React, { Component } from 'react'
import {jsx, css} from '@emotion/core'
/** @jsx jsx */
import { connect } from "react-redux"

const style = css`
    cursor: pointer;
    padding: 10px;
    margin: 10px;
    display: flex;
    flex-direction: column;
    content-align: center;
    width: 150px;
    height: 100px;
    font-family: var(--font1);
    font-weight: 1000;

    > .add{
        float: right;
        border: 1px solid green;
        border-radius: 2005px;
        // padding: 5px;
        display: flex;
        justify-content: center;
        flex-direction: column;
        width: 5%;
        --dim: 30px;
        height: var(--dim);
        width: var(--dim);
        font-weight: 1000;
        font-size: 30px;
    }
    > .add:hover{
        background-color: green;
    }
    >.image{
        >img{
            max-width: 100%;
            max-height: 100%;
        }
    }
    `
class ItemCard extends Component{

    constructor(props){
        super(props)
        this.state = {
            added : false
        }
    }

    render(){
        return(
            <div css={style}>
                <div className="add" onClick={()=>{this.props.add_item(this.props)}}>+</div>
                <div className="image"><img src={
                    'https://i.guim.co.uk/img/static/sys-images/Guardian/Pix/pictures/2014/9/24/1411574457061/03085543-87de-47ab-a4eb-58e7e39d022e-2060x1236.jpeg?width=300&quality=85&auto=format&fit=max&s=9de172e25562aede834c4e52c3c4d77d'
                    } /></div>
                <div className="text">
                    <div className="price">£{this.props.price}</div>
                    <div className="name">{this.props.name}</div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        cart: state.cart
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        add_item: (item) => {
            dispatch({
                type: "ADD_ITEM",
                item
            })
        },
        remove_item: (id)=>{
            dispatch({
                type: "REMOVE_ITEM",
                id
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemCard)