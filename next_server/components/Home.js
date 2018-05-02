const Home = (props) => (
    <div>
        <div className="container">
            <div align="center">
                <h1>Invoice</h1>
            </div>
            <div>
                <select value={props.pageSize} name="pageSize" type="dropDown"
                        onChange={props.handleChange}>
                    <option> 20</option>
                    <option> 50</option>
                    <option> 100</option>
                </select>
            </div>
            <table className="table table-striped table-hover">
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Date</th>
                    <th>Type</th>
                    <th>Price</th>
                    <th>Comment</th>
                </tr>
                </thead>
                <tbody>
                {props.data.invoices.map((invoice, i) => {
                    return (
                        <tr key={i}>
                            <td>{invoice._id}</td>
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
                        <a onClick={props.handleClick} name="prev" tabindex="-1">Prev</a>
                    </li>
                    <li className="page-item">
                        <a onClick={props.handleClick} name="next">Next</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
)

export default Home