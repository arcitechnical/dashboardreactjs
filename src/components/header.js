import React from 'react';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';

function Header(){
    return(
        <section id="mainbar">
           <header className="top-header">
           <div class="header-left">
                <h2 class="toggle-btn"><i className="fa fa-bars bars" aria-hidden="true"></i><span  className='dashboard'>Dashboard</span></h2>
                
            </div>
            <div className="header-left search">
                <input type="text" className="search-bar" placeholder="Search here...." />
                <i class="fa fas fa-search"></i>
            </div>   
        </header>  
        </section>
    )
}
export default Header;