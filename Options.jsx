import React,{Component} from 'react';
import Navbar from './Navbar';
import Category from './Option';
import '../css/Options.css';
// import Footer from './footer';
import Option from './Option';
class Categories extends Component{
    render(){
        return(
            <div>
        <div className='categories'>
            
            <div className='catalogue row'>
                <Option />
                
            </div>
            
        </div>
        
        </div>
        );
    }
}

export default Categories;