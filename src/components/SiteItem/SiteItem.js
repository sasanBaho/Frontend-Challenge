import React from 'react';
import './SiteItem.css';
import placeholderImg from '../../assets/images/image-placeholder-blue.png';



const SiteItem = ({site, onSiteSelect}) => {
    
    return (
        <li className="list-group-item list-item">
            <div className='inline-item-s'>
                <img src={placeholderImg} />
            </div>
            <div className='card-body inline-item-l'>
                <h4 className="card-title">{site.title}</h4>
                <div className="card-subtitle mb-2 text-muted">
                    {site.contacts.main.address.street}, {site.contacts.main.address.city}, {site.contacts.main.address.country}
                </div>
                <p>{site.contacts.main.firstName} {site.contacts.main.lastName}</p>
            </div>
            
        </li>
    );
};

export default SiteItem;