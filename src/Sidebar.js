import React from "react";

export default function Sidebar( props ) {
    const navItems = props.navItems;
    /*const listNavItems = navItems.map(
        (navItem) => <li key={navItem}>{navItem}</li>
    );*/

        return(
            <div>
                <h3>side navigation</h3>
                <div>{navItems.map(
        (navItem) => <span key={navItem}><a href="#">{navItem}</a><br /></span>
    )}</div>
            </div>
        );
}