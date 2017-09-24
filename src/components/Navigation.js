import React, {Component} from 'react';
import logo  from '../icons/logo.png';

const Menu = () =>(
 <div className="Menu">
	<div>
  <a>
        <img id="logo" src={logo} alt="CompanyLogo" />
      </a>
	</div>
	<div className="LeftMenu">
		<a href="">ABOUT</a><span>		</span>
		<a href="#commPage">COMMUNITY</a><span>		</span>
		<a href="#map">LOCATION</a><span>		</span>
		<a href="#menu">OUR MENU</a><span>		</span>
		<a href="#chef">RECIPIES</a><span>		</span>
	</div>
	<div className="RightMenu">
		<a href="#contact">CONTACT</a><span>		</span>
		<a href="">LOGIN</a><span>		</span>
	</div>
 </div>
	)

const RequestInfo=()=>(
 <div className="RequestInfo">
 	<a href="">REQUEST INFO</a>
 </div>
	)

class Navigation extends Component {
    render() {
        return (
         <div>
         	<Menu />
         	<RequestInfo />
         </div>
    	);
    }
}

export default Navigation;
