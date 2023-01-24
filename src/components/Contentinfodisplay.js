import React from 'react';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import 'font-awesome/css/font-awesome.css';
import './Image/admin3.jpg';


function Contentinfodispaly(){
    return(
        <section id="mainbar">
        <div className="content-table container ">
    
    <div className="project-table">
        <div className="newprojects">
            <div className="pro-h">
                <h4>Recent users</h4>
            </div>
        
            
        </div>
    <table>
        <tr>
       
        <td>Users reviewed it many days ago </td>
        <td><span className="review"></span>11 May 2022</td>
        <td className='button'><button type="button">Reject</button></td> 
        <td className='button'><button type="button">Approve</button></td> 
        </tr>
        
        <tr>
       
        <td>Users marksed it as pending</td>
        <td><span className="pending"></span>16 June 2022</td>
        <td className='button'><button type="button">Reject</button></td> 
        <td className='button'><button type="button">Approve</button></td> 
        </tr>
        
        <tr>
        
        <td>Users</td>
        <td><span className="review"></span>16 June 2022</td>
        <td className='button'><button type="button">Reject</button></td> 
        <td className='button'><button type="button">Approve</button></td> 
        </tr> 

            <tr>
      
        <td>Users marksed it as pending</td>
        <td><span className="pending"></span>16 June 2022</td>
        <td className='button'><button type="button" >Reject</button></td> 
        <td className='button'><button type="button">Approve</button></td> 
        </tr>  

         <tr>
       
        <td>Users</td>
        <td><span className="review"></span>16 June 2022</td>
        <td className='button'><button type="button">Reject</button></td> 
        <td className='button'><button type="button">Approve</button></td> 
        </tr> 

              
    </table>
    
    </div>
</div> 
<div className="customer-table ">

        <h6 className="custo-num ">Upcoming Events <button type="button" className='events'>34%</button> </h6>
        <span className='competitors'>45<sub>Competitors</sub></span>
        <p >You can participate in events <i className="fa fa-angellist fa-2x victory" aria-hidden="true"></i></p>
        
</div>
<div className="customer-table location">   
        <p><i class="fa fa-lightbulb-o fa-3x lightbulb" aria-hidden="true"></i><span className='ideas'>235 Total ideas</span> </p>
        <hr></hr>
        <p><i class="fa fa-map-marker fa-3x mapmaker" aria-hidden="true"></i><span className='ideas'>26 Total Locations</span></p>  
</div>
        </section>
    )
}
export default Contentinfodispaly;