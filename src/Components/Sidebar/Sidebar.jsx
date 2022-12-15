
import CollectionContainer from '../../Components/Sidebar/CollectionContainer/CollectionContainer';
import Collection from '../../Components/Sidebar/CollectionContainer/Collection';
import CardViewer from '../CardContainer/CardViewer';

import React, { useEffect, useState } from 'react';


export default function Sidebar({collections, setCollections, center, setCenter}) {

  const[collection, setCollection] = useState(null);


  useEffect(() => {
    collection === null ? 
    (setCenter(false) 

    ):setCenter(true)
    }, [center]);
  


  return (
      <div className  ='sidebar-container'> 
         

         
          <div className = 'sidebar'>
            <div><h3 className = 'collection-title'>Collections</h3></div>
            <div className = "collection-item" onClick= {()=>{setCollection(collections[0])}}><h4 >Flutter</h4></div>
            <div className = "collection-item" onClick= {()=>{setCollection(collections[1])}}><h4 >CSS</h4></div>
            <div className = "collection-item" onClick= {()=>{setCollection(collections[2])}}><h4 >PANDAS</h4></div> 
          </div>
          
          {/* <div>
          {collection === null ? 
          (<Collection/> 

          ):( <CardViewer />)
          }
          </div> */}
{/* 
          <div>
            {collection === null ? 
            (setCenter(false) 

            ):setCenter(true)
            }
          </div> */}



          {/* <CollectionContainer setCollection = {setCollection} collection = {collection}/> */}

        
          

    </div>
  )
}
