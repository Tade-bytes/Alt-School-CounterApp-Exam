import React from 'react';
import { Link } from 'react-router-dom';


const Page404 = () => (
    <>
        <section>
            <div className="page-not-found">
                <h1>Error 404</h1>
                <p>Sorry, the page you are looking for does not exist.</p>
                <Link to="/" className="button">Come Home</Link>
            </div>
        </section>
    </>
);

export default Page404;