/**
 * Created by Vermaas on 10/8/2017.
 */
import React from 'react';
import './Header.css';

class Header extends React.Component {
    render() {
        return (
            <header className="component-header">
                <img alt=""
                    src="../assets/logo.svg"
                    width="32"
                    height="32"
                />
                Hike Search
            </header>
        );
    }
}
export default Header;