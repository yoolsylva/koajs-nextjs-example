const Add = (props) => (
    <div className="container">
        <div className="columns">
            <div className="comlumn col-9 col-sm-12" align="center">
                <form onSubmit={props.handleSubmit} className="form-horizontal" target="iframe-id" method="post"
                      action="http://localhost:3000/api/invoices">
                    <div className="form-group">
                        <div className="col-3 col-sm-12">
                            <label className="form-label">Date</label>
                        </div>
                        <div className="col-9 col-sm-12">
                            <input value={props.data.createdDate} onChange={props.handleChange}
                                   className="form-input" type="datetime-local" name="createdDate"/>
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-3 col-sm-12">
                            <label className="form-label">Type</label>
                        </div>
                        <div className="col-9 col-sm-12">
                            <select value={[props.data.type]} onChange={props.handleChange}
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
                            <input value={props.data.price} onChange={props.handleChange}
                                   className="form-input"
                                   type="number" placeholder="Price" name="price"/>
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-3 col-sm-12">
                            <label className="form-label">Comment</label>
                        </div>
                        <div className="col-9 col-sm-12">
                            <input value={props.data.comment} onChange={props.handleChange}
                                   className="form-input" type="text" placeholder="Comment" name="comment"/>
                        </div>
                    </div>
                    <input type="submit" className="btn btn-primary input-group-btn" value="Add"/>
                    <button onClick={props.handleCancel} className="btn" style={{marginLeft: 10}}>Cancel</button>
                </form>
            </div>
        </div>
    </div>
)

export default Add