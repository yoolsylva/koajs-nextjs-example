import React from 'react'
import Head from 'next/head'
import Link from 'next/link'

export default class Add extends React.Component{
    render(){
        return (
            <div className="container">
                <Head>
                    <meta name="viewport" content="width=device-width, initial-scale=1"/>
                    <link rel="stylesheet" href="//cdn.bootcss.com/spectre.css/0.5.1/spectre.min.css"/>
                </Head>
                <ul className="breadcrumb">
                    <li className="breadcrumb-item">
                        <Link href="/">Home</Link>
                    </li>
                    <li className="breadcrumb-item">
                        <Link href="/add">Add</Link>
                    </li>
                </ul>
                <div className="columns">
                    <div className="comlumn col-9 col-sm-12" align="center">
                        <form onSubmit={this.props.handleSubmit} className="form-horizontal" target="iframe-id" method="post"
                              action="http://localhost:3000/api/invoices">
                            <div className="form-group">
                                <div className="col-3 col-sm-12">
                                    <label className="form-label">Date</label>
                                </div>
                                <div className="col-9 col-sm-12">
                                    <input value={this.props.data.createdDate} onChange={this.props.handleChange}
                                           className="form-input" type="datetime-local" name="createdDate"/>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="col-3 col-sm-12">
                                    <label className="form-label">Type</label>
                                </div>
                                <div className="col-9 col-sm-12">
                                    <select value={[this.props.data.type]} onChange={this.props.handleChange}
                                            className="form-select col-12 col-sm-12" multiple name="type">
                                        <option>Electronic</option>
                                        <option>Kitchen</option>
                                        <option>Car</option>
                                    </select>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="col-3 col-sm-12">
                                    <label className="form-label">Price</label>
                                </div>
                                <div className="col-9 col-sm-12">
                                    <input value={this.props.data.price} onChange={this.props.handleChange} className="form-input"
                                           type="number" placeholder="Price" name="price"/>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="col-3 col-sm-12">
                                    <label className="form-label">Comment</label>
                                </div>
                                <div className="col-9 col-sm-12">
                                    <input value={this.props.data.comment} onChange={this.props.handleChange}
                                           className="form-input" type="text" placeholder="Comment" name="comment"/>
                                </div>
                            </div>
                            <input type="submit" className="btn btn-primary input-group-btn" value="Add"/>
                            <button onClick={this.props.handleCancel} className="btn" style={{marginLeft: 10}}>Cancel</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}