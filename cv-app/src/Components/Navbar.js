import React, { Component } from 'react';
import { MenuItems } from './MenuItems';
import { Link } from "react-router-dom"
import "./Navbar.css"
class Navbar extends Component{

    render(){
            return (
            
        <nav  className="navbar_items">
            <ul className="nav_menu">
            {MenuItems.map((item, index) => {
                return (
                    <li key={index}>
                        <Link className={`${item.cName} menu_item`} to={item.url}>{item.title}</Link>
                    </li>
                )
            })}
            </ul>
        </nav>
            
    )
            }
        }

export default Navbar;