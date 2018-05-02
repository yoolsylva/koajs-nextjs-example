import React from 'react'
import fetch from 'node-fetch'
import Router from 'next/router'
import Add from '../components/Add'
import Layout from "../components/Layout";

export default class App extends React.Component {

    constructor(props) {
        super(props)
        const isoStr = new Date().toISOString()
        const currentTime = isoStr.substr(0, isoStr.length - 1)
        this.state = {
            createdDate: currentTime,
            type: "Electronic",
            price: "",
            comment: ""
        }
    }

    handleChange = (e) => {
        const target = e.target
        const name = target.name
        const value = target.value

        this.setState({
            [name]: value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        fetch('http://localhost:3000/api/invoices', {
            method: 'POST',
            body: JSON.stringify(this.state),
            headers: {'Content-Type': 'application/json'},
        })
            .then(res => res.json())
            .then(json => {
                this.setState({
                    createdDate: "",
                    type: "Electronic",
                    price: "",
                    comment: ""
                })
                alert("success")
            });
    }

    handleCancel = (e) => {
        e.preventDefault()
        Router.push({
            pathname: '/'
        })
    }

    render() {
        return (
            <Layout>
                <Add data={this.state} handleChange={e => this.handleChange(e)} handleSubmit={e => this.handleSubmit(e)}
                     handleCancel={e => this.handleCancel(e)}/>
            </Layout>
        )
    }
}
