import React,{Component} from 'react';
import '../css/sidebar.css';
import PetsIcon from '@mui/icons-material/Pets';
import NatureIcon from '@mui/icons-material/Nature';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import PlaceIcon from '@mui/icons-material/Place';
import HomeIcon from '@mui/icons-material/Home';

export default class Sidebar extends Component{

    componentDidMount(){
        window.addEventListener("scroll", this.handleScroll);
    } 
    componentWillUnmount(){
        window.removeEventListener("Scroll", this.handleScroll);
    }
    handleScroll=()=>{
        if(window.scrollY>120){
            document.querySelector(".sidebar").className="sidebar activeSide";
        } else{
            document.querySelector(".sidebar").className="sidebar hideSide";
        }
    }

    handleMouseEnter(e){
        let element = document.getElementById('mySidebar')
        element.style.width="200px";
        element.style.opacity="0.9";
    }
    handleMouseLeave(e){
        let element = document.getElementById('mySidebar')
        element.style.width="70px";
        element.style.opacity="1.0";
    }
    render(){
        return(
            <div id="mySidebar" className="sidebar" onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}>
                <a className="btnSide" href="/nature"><span><i className="material-icons "><NatureIcon/></i></span><span className="icon-text"> &emsp;Nature</span></a><br/>
                <a className="btnSide" href="/people"><span><i className="material-icons "><PeopleAltIcon/></i></span><span className="icon-text"> &emsp;People</span></a><br/>
                <a className="btnSide" href="/place"><span><i className="material-icons "><PlaceIcon/></i></span><span className="icon-text"> &emsp;Place</span></a><br/>
                <a className="btnSide" href="/wildlife"><span><i className="material-icons "><PetsIcon/></i></span><span className="icon-text"> &emsp;Wildlife</span></a><br/>
                <a className="btnSide" href="/"><span><i className="material-icons "><HomeIcon/></i></span><span className="icon-text"> &emsp;Home</span></a><br/>
            </div>
        );
    }
}
