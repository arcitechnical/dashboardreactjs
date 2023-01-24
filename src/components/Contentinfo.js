import React from 'react';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import ProgressBar from 'react-bootstrap/ProgressBar';
import 'font-awesome/css/font-awesome.css';

function Contentinfo(){
    return(
        <section id="mainbar">
        <div className="card-box daily">
        <h5 class=" custo-num">Daily Sales</h5>
        <p><i class="fa fa-arrow-up" aria-hidden="true"></i>$249.95 <span>50%</span></p>
        <ProgressBar variant="success" now={50} />
    </div>

    <div className="card-box">
        <h5 className="custo-num ">Monthly Sales</h5>
        <p><i class="fa fa-arrow-down" aria-hidden="true"></i>$2.942.32 <span>36%</span></p>
        <ProgressBar variant="info" now={36} />
    </div>

    <div className="card-box">
        <h5 className="custo-num">Yearly Sales</h5>
        <p><i class="fa fa-arrow-up" aria-hidden="true"></i>$8.638.32 <span>70%</span></p>
        <ProgressBar variant="warning" now={70} />
    </div>
        </section>
    )
}
export default Contentinfo;