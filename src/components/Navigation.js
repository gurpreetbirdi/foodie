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
		<a href="">COMMUNITY</a><span>		</span>
		<a href="">LOCATION</a><span>		</span>
		<a href="">OUR MENU</a><span>		</span>
		<a href="">RECIPIES</a><span>		</span>
	</div>
	<div className="RightMenu">
		<a href="">CONTACT</a><span>		</span>	
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