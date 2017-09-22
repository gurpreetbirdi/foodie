import React, {Component} from 'react';
import Navigation from './Navigation';
import '../css/navigation.css';
class Home extends Component{
	render(){
		return(
		 <div className = "BackgroundImg">
		 	<Navigation />
		 </div>
			);
	}
}

export default Home;