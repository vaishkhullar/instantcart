import React, { Component } from "react"
import {css} from '@emotion/core'
import ItemCard from "./ItemCard"

class Cart extends Component {
    render() {
        return (
            <div>
            {
                this.props.cart.map((c)=>{
                    <ItemCard />
                })
            }
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        cart: state.cart
    }
}

export default connect(mapStateToProps)(Cart)