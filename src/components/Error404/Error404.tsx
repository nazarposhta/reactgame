import React from 'react';
import { Link } from "react-router-dom";
import styles from './Error404.module.css';

const Error404 = () => (
    <div className={styles.Error404}>
        <p>Page not found <Link to="/">Go Home</Link></p>
    </div>
);
export default Error404;
