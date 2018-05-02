import React from 'react'
import fetch from 'node-fetch'
import Home from '../components/Home'
import Router from 'next/router'
import Layout from "../components/Layout";

export default class App extends React.Component {
    static async getInitialProps({query}) {
        let page = 0;
        if (query.page !== undefined && parseInt(query.page)) {
            page = parseInt(query.page)
        }
        let pageSize = 20
        if (query.pageSize !== undefined && parseInt(query.pageSize)) {
            pageSize = parseInt(query.pageSize)
        }

        const res = await fetch(`http://localhost:3000/api/invoices?page=${page}&pageSize=${pageSize}`)
        const invoices = await res.json()

        return {
            invoices: invoices,
            page: page,
            pageSize: pageSize
        }
    }

    constructor(props) {
        super(props)
        this.state = props
    }

    //invoke when have new props, return nextState and call this.setState(nextState)
    static getDerivedStateFromProps(nextProps, prevState) {
        if (prevState.page !== nextProps.page || prevState.pageSize !== nextProps.pageSize) {
            return nextProps
        }
        return null
    }

    handleChange = (e) => {
        e.preventDefault()
        const target = e.target
        const name = target.name
        const value = target.value

        const pageSize = value
        Router.push({
            pathname: '/',
            query: {page: this.state.page, pageSize: pageSize}
        })
    }

    handleClick = (e) => {
        e.preventDefault()
        const target = e.target
        const name = target.name

        let page = name === 'prev' ? this.state.page - 1 : this.state.page + 1
        if (page < 0) page = 0

        Router.push({
            pathname: '/',
            query: {page: page, pageSize: this.state.pageSize}
        })
    }

    render() {
        console.log('render')
        return (
            <Layout>
                <Home data={this.state} handleChange={e => this.handleChange(e)}
                      handleClick={e => this.handleClick(e)}/>
            </Layout>
        )
    }
}
