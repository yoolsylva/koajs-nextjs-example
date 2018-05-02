import Head from 'next/head'
import Link from 'next/link'

const Layout = (props) => (
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
        </div>
        {props.children}
    </div>
)

export default Layout