import React from 'react';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import 'font-awesome/css/font-awesome.css';


function Footer(){
    return(
    <section id="mainbar">
        <div className="card-box footer">
        <h4 className="custo-num "><i className="fa fa-facebook facebook" aria-hidden="true"></i><span className='socialmedia'>12,281</span><br></br><span>
        -7.2%Total Likes</span></h4>
        
        <hr></hr>
        <h4 className="custo-num "><span className='target'>Target:35,890</span> <span className='duration'>Duration:350</span> </h4>
        </div>

        <div className="card-box footer">
        <h4 className="custo-num "><i className="fa fa-twitter twitter" aria-hidden="true"></i><span className='socialmedia'>12,281</span><br></br><span>
        +6.2%Total Likes</span><hr></hr></h4>
        <h4 className="custo-num "><span className='target'>Target:35,890</span> <span className='duration'>Duration:350</span> </h4>
        </div>

        <div className="card-box footer">
        <h4 className="custo-num "><i className="fa fa-google-plus google" aria-hidden="true"></i><span className='socialmedia'>12,281</span><br></br><span>
        +5.9%Total Likes</span><hr></hr></h4>
        <h4 className="custo-num "><span className='target'>Target:35,890</span> <span className='duration'>Duration:350</span> </h4>
        </div>
    </section>
    )
}
export default Footer;