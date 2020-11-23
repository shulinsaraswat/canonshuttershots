import React, {useState,useEffect} from 'react';
import Sidebar from './Sidebar';
import '../css/people.css';
import Scroll from './BackTopButton';
import NavbarSmall from './NavbarSmall';
import people from '../images/people.jpeg';
import pp1 from '../images/people/pp1.jpeg';
import pp2 from '../images/people/pp2.jpeg';
import pp3 from '../images/people/pp3.jpeg';
import pp4 from '../images/people/pp4.jpeg';
import pp6 from '../images/people/pp6.jpeg';
import pp7 from '../images/people/pp7.jpeg';
import pp8 from '../images/people/pp8.jpg';
import pp9 from '../images/people/pp9.jpeg';
import pp10 from '../images/people/pp10.jpeg';
import pp11 from '../images/people/pp11.jpg';
import pp12 from '../images/people/pp12.jpeg';
import pp13 from '../images/people/pp13.jpeg';
import pp14 from '../images/people/pp14.jpeg';
import pp15 from '../images/people/pp15.jpeg';
import pp16 from '../images/people/pp16.jpeg';
import pp17 from '../images/people/pp17.jpeg';

export default function People(){
    const [isLoading, setLoading] = useState(true);

  function fakeRequest() {
    return new Promise(resolve => setTimeout(() => resolve(), 2500));
  }
  useEffect(() => {
    fakeRequest().then(() => {
      const el = document.querySelector(".loader-container");
      if (el) {
        el.remove();
        setLoading(!isLoading);
      }
    });
  }, []);

  if (isLoading) {
    return null;
  }

    return(
        <div>
            <Sidebar/>
            <NavbarSmall/>
            <Scroll showBelow={250} />
            <div className="jumbotron jumbotron-fluid" 
            style={{
                height:'230px', 
                //marginTop:'45px', 
                background:' linear-gradient(90deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.7) 35%, rgba(0,0,0,0.1) 100%),url("https://remingtonsolar.com/wp-content/uploads/banner-background.jpg") right no-repeat', 
                marginBottom: '0', 
                color: 'white', 
                backgroundSize:' cover'}}> 
                <div className="container1" > 
                    <h2 className="display-4 banner-pp">
                    People </h2> 
                    <hr className="line-pp"></hr><br/>
                </div> 
            </div><br/>
            <div className="background-pp">
            <div className="container"><br/>
            <div className="row row-cols-1 row-cols-md-3">
                <div className="col mb-4">
                    <div className="card box-wl">
                    <img src={pp1} className="card-img-top" alt="People1"/>
                    </div>
                </div>
                <div className="col mb-4">
                    <div className="card box-pp">
                    <img src={pp2} className="card-img-top" alt="People2"/>
                    </div>
                </div>
                <div className="col mb-4">
                    <div className="card box-pp">
                    <img src={pp3} className="card-img-top" alt="People3"/>
                    </div>
                </div>
                <div className="col mb-4">
                    <div className="card box-pp pp4">
                    <img src={pp4} className="card-img-top" alt="People4"/>
                    </div>
                </div>
                <div className="col mb-4">
                    <div className="card box-pp">
                    <img src={people} className="card-img-top" alt="People5"/>
                    </div>
                </div>
                <div className="col mb-4">
                    <div className="card box-pp pp6">
                    <img src={pp6} className="card-img-top" alt="People16"/>
                    </div>
                </div>
                <div className="col mb-4">
                    <div className="card box-pp pp13">
                    <img src={pp13} className="card-img-top" alt="People7"/>
                    </div>
                </div>
                <div className="col mb-4">
                    <div className="card box-pp">
                    <img src={pp8} className="card-img-top" alt="People8"/>
                    </div>
                </div>
                <div className="col mb-4">
                    <div className="card box-pp pp9">
                    <img src={pp9} className="card-img-top" alt="People9"/>
                    </div>
                </div>
                <div className="col mb-4">
                    <div className="card box-pp pp10">
                    <img src={pp10} className="card-img-top" alt="People10"/>
                    </div>
                </div>
                <div className="col mb-4">
                    <div className="card box-pp">
                    <img src={pp11} className="card-img-top" alt="People11"/>
                    </div>
                </div>
                <div className="col mb-4">
                    <div className="card box-pp pp12">
                    <img src={pp12} className="card-img-top" alt="People12"/>
                    </div>
                </div>
                <div className="col mb-4">
                    <div className="card box-pp pp7">
                    <img src={pp7} className="card-img-top" alt="People13"/>
                    </div>
                </div>
                <div className="col mb-4">
                    <div className="card box-pp pp15">
                    <img src={pp15} className="card-img-top" alt="People14"/>
                    </div>
                </div>
                <div className="col mb-4">
                    <div className="card box-pp pp14">
                    <img src={pp14} className="card-img-top" alt="People15"/>
                    </div>
                </div>
                <div className="col mb-4">
                    <div className="card box-pp pp17">
                    <img src={pp17} className="card-img-top" alt="People16"/>
                    </div>
                </div>
                <div className="col mb-4"></div>
                <div className="col mb-4">
                    <div className="card box-pp pp16">
                    <img src={pp16} className="card-img-top" alt="People17"/>
                    </div>
                </div>
            </div>
            </div>
            </div><hr style={{width:'75%'}}></hr>
            <div id="footer" className="navbar" style={{ paddingBottom:'17px', backgroundColor:'#f1f1f1'}}><br/>
                <i className="fa fa-copyright footerCR" aria-hidden="true" style={{marginLeft:'57px',position:'absolute'}}> 2020<strong> Shulin Saraswat</strong>. All Rights Reserved</i>
                <p className="footerMade" style={{position:'relative', textAlign:'right',marginRight:'25px'}}>Made with lots of <span><i className="fa fa-heart"></i></span></p>
            </div>
        </div>
    );
}