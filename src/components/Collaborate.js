import React, {Component} from 'react';
import '../css/collaborate.css';
import bgDetail from "../icons/bgDetail.png";

class Collaborate extends Component{
	render(){
		return(
			<div className = "collaborate" id="contact">
				<div className="message">
					<div>
						<p className="f1">COLLABORATE</p>
						<p className="f2">WITH US</p>
					</div>
					<div>
						<p className="f3">The Downtown Seattle Transit Tunnel is a public transit tunnel for buses and light rail trains in Seattle, Washington, in the United States.</p>
						<p className="f4"> the tunnel was exclusively used by dual-mode buses that ran on overhead wires; they were later replaced with hybrid electric buses using batteries within the tunnel.</p>
					</div>
				</div>	
				<div className="partition">
					<img src={bgDetail} alt="bgDetail"/>
					<div className = "form1">
						<form >
							  <p>
							  <label>First Name</label><br/>
							  <input className="mixer" type="text"/></p>
							  <p>
							  <label>Last Name</label><br/>
							  <input className="mixer" type="text"/></p>
							  <p>
							  <label>Email</label><br/>
							  <input className="mixer" type="text"/></p>
						</form>
					</div>
			</div>
		</div>
			);
	}
}

export default Collaborate;
