import React, { Component } from "react"
import { css, jsx } from "@emotion/core"
/** @jsx jsx */
import ItemCard from "./ItemCard"

const products = [
    {
        name: 'Potato',
        price: 1,
    },
    {
        name: 'Rice',
        price: 2
    }
]

const style = css`
    display: flex;
    flex-grow: flex;
`

export default class Home extends Component {
    constructor(props) {
        super(props) 
        this.state = {
            products
        }
    }

    render() {
        return (
            <div css={style}>
                {this.state.products.map(
                    (p)=>{
                        return <ItemCard {...p} />
                    }
                )}
            </div>
        )
    }
}