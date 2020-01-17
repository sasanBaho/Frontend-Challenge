import React, {Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import SiteInfo from './SiteInfo/SiteInfo';
import SiteList from './SiteList/SiteList';
import Menu from './menu/Menu';

class App extends Component {
    
   
    render() {
         return (
            <BrowserRouter> 
                <div>
                    <Menu />
                    <Route path='/' exact component={SiteList} />
                    <Route path='/:id' exact component={SiteInfo} />
                </div>
                
             </BrowserRouter>
        );
    }
 
}

export default App;
