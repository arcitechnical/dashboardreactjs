import React from 'react';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.css';

function Sidebar(){
    return(
    <section id="sidebar" >
        <div className="sidebar-brand">
            <h4 ><i className="fa fa-signal" aria-hidden="true"></i><span >Data Able</span></h4>
        </div>
        <div className="sidebar-menu">
            <ul>
                <li><a href="#"><i class="fa fa-home" aria-hidden="true"></i><span>Dashboard</span></a></li>
                <hr></hr>
                <li><a href="#"><i class="fa fa-cube" aria-hidden="true"></i><span>Component</span></a></li>
                <hr></hr>
                <li><a href="#"><i class="fa fa-file" aria-hidden="true"></i><span>Forms Elements</span></a></li>
                <li><a href="#"><i class="fa fa-table" aria-hidden="true"></i><span>Tables</span></a></li>
                <hr></hr>
                <li><a href="#"><i class="fa fa-pie-chart" aria-hidden="true"></i><span>Charts</span></a></li>
                <li><a href="#"><i class="fa fa-map" aria-hidden="true"></i><span>Maps</span></a></li>
                <hr></hr>
                <li><a href="#"><i class="fa fa-user" aria-hidden="true"></i><span>Authentication</span></a></li>
                <li><a href="#"><i class="fa fa-file-text-o" aria-hidden="true"></i><span>Documentation</span></a></li>
                <li><a href="#"><i class="fa fa-columns" aria-hidden="true"></i><span>Sample</span></a></li>
            </ul>
        </div>
    </section>
    
    )
}
export default Sidebar;