import React from 'react'
import Head from 'next/head'
import Link from 'next/link'

export default class Home extends React.Component {

    render() {
        return (
            <div>
                <Head>
                    <meta name="viewport" content="width=device-width, initial-scale=1"/>
                    <link rel="stylesheet" href="//cdn.bootcss.com/spectre.css/0.5.1/spectre.min.css"/>
                </Head>
                <div className="container">
                    <ul className="breadcrumb">
                        <li className="breadcrumb-item">
                            <Link href="/">Home</Link>
                        </li>
                        <li className="breadcrumb-item">
                            <Link href="/add">Add</Link>
                        </li>
                    </ul>
                    <div align="center">
                        <h1>Invoice</h1>
                    </div>
                    <div>
                        <select value={this.props.pageSize} name="pageSize" type="dropDown" onChange={this.props.handleChange}>
                            <option> 20</option>
                            <option> 50</option>
                            <option> 100</option>
                        </select>
                    </div>
                    <table className="table table-striped table-hover">
                        <thead>
                        <tr>
                            <th>Date</th>
                            <th>Type</th>
                            <th>Price</th>
                            <th>Comment</th>
                        </tr>
                        </thead>
                        <tbody>
                        {this.props.data.invoices.map((invoice, i) => {
                            return (
                                <tr key={i}>
                                    <td>{new Date(invoice.createdDate).toString()}</td>
                                    <td>{invoice.type}</td>
                                    <td>{invoice.price}</td>
                                    <td>{invoice.comment}</td>
                                </tr>
                            );
                        })}
                        </tbody>
                    </table>
                </div>

                <div className="divider"></div>
                <div className="container">
                    <div className="float-right">
                        <ul className="pagination">
                            <li className="page-item">
                                <a onClick={this.props.handleClick} name="prev" tabindex="-1">Prev</a>
                            </li>
                            <li className="page-item">
                                <a onClick={this.props.handleClick} name="next">Next</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}