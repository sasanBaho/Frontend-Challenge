import React, {Component} from 'react';
import SiteItem from '../SiteItem/SiteItem';
import sitesAPI from '../../apis/sitesAPI';
import {Link} from 'react-router-dom';
import './SiteList.css';

class SiteList extends Component {
     state = {
        sites : [],
        SelectedSite: null
    }

    componentDidMount(){
        sitesAPI.get('/sites').then(response =>{
                this.setState({sites: response.data});
        });
    }

    onSiteSelect = (site) =>{
        this.setState({SelectedSite: site})
    }
        
    render(){
        let renderedList=''
        if(this.state.sites.length === 0){
            renderedList = <div className="loader">Loading...</div>
        }
        if(this.state.sites.length > 0){
            renderedList = this.state.sites.map( site => {
              return ( 
                  <Link to={'/' + site.id} key={site.id}>
                     <SiteItem 
                      site={site} 
                      onSiteSelect = {() => this.onSiteSelect(site) }/>
                  </Link> 
               ) 
            })
        }
        
        
         return (
             
            <React.Fragment>
                <div className='page-title'>Sites</div>
                <ul  className="list-group">
                    {renderedList}
                </ul>
                
            
            </React.Fragment>
          );
     
     }

};

export default SiteList;