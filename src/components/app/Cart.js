import React, { Component } from "react"
import {css} from '@emotion/core'
import ItemCard from "./ItemCard"
import { Button } from "mvp-webapp";

const img = "https://digitalcontent.api.tesco.com/v2/media/ghs-mktg/59f9081f-561b-4095-a463-eb7077e9d7cb/2004-GHS-TopOffer-457x457-Meat-Free.jpeg"

const items = [
    {
        name : 'Bread',
        price : '1',
        store : 
    },
    {
        name : 'Bread',
        price : '1'
    },
    {
        name : 'Bread',
        price : '1'
    }
]

class Cart extends Component {
    render() {
        return (
            <div>
            {items.map(
                    (p)=>{
                        return shoppingCartTile(p)
                    }
                )}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        cart: state.cart
    }
}


const shoppingCartTile(props) => {
    const style_shoppingCartTile = css `

    display: flex;
    flex-direction: row;
    justify-content: space-between;

    .img{
        padding: 10px,
        max-width: 100%;
        max-height: 100%;
    }
    .name,.price,.store{
        float: right;
        border: 1px solid green;
        border-radius: 2005px;
        // padding: 5px;
        display: flex;
        flex-direction: column;
        width: 5%;
        --dim: 30px;
        height: var(--dim);
        width: var(--dim);
        font-weight: 1000;
        font-size: 30px;
    }

    `
    return(  
        <div css={style_shoppingCartTile}>
            <div className = 'img' style={{backgroundImage : `url(${img})`}}>
            </div>
            <div className = 'name'>
                {props.name}
            </div>
            <div className = 'price'>
                {props.price}
            </div>
            <div className = 'store'>
                {props.store}
            </div>
        </div>
    )
}

export default connect(mapStateToProps)(Cart)