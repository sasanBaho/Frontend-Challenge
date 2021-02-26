import React,{Component} from 'react';
import sitesAPI from '../../apis/sitesAPI';
import SiteItem from '../SiteItem/SiteItem';
import './SiteInfo.css';

class SiteInfo extends Component {
    state = {
        loadedSite: ''
    }

    componentDidMount(){
        sitesAPI.get('/sites/'+ this.props.match.params.id).then(response =>{
            this.setState({loadedSite: response.data});
        }); 
     }

    render(){
        let site, email, name, phone, address = '';
        if(this.props.match.params.id){
             let site = <p style={{textAlign: 'center'}}>Loading...</p>
        }
        if(this.state.loadedSite){
            site = <SiteItem site={this.state.loadedSite} />
                
            name= <span>{this.state.loadedSite.contacts.main.firstName}             {this.state.loadedSite.contacts.main.lastName} </span>
            
            phone= <span>{this.state.loadedSite.contacts.main.phoneNumber}</span>
            
            email= <span>{this.state.loadedSite.contacts.main.email}</span>
            
            address= <span>{this.state.loadedSite.contacts.main.address.street}</span>
        }
        return (
            <div>
                <div>{site}</div>
                {/*I used this path for image src because API images not working*/}
                <div  className='site-img'>
                    <img src="https://picsum.photos/1000/300" alt={this.state.loadedSite.title} />
                </div>
                <ul className="list-group ">
                    <li className='list-group-item font-weight-bold'>
                        <i className="user icon icon-style" >{name}</i>
                    </li>
                    <li className='list-group-item'>
                        <i className="envelope icon">{email}</i>
                    </li>
                    <li className='list-group-item'>
                        <i className="map marker alternate icon">{address}</i>
                    </li>
                    <li className='list-group-item'>
                        <i className="phone icon">{phone}</i>
                    </li>
                </ul>
            </div>
        );
    }
}

export default SiteInfo;