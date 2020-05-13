import React from 'react';
import useResources from '../UseResources';


const ResourceList = ({ resource }) => {
  //call the useResources function to render logic into ResourceList comp. 
  const resources = useResources(resource);
  
    return (
      <div>
        {resources.map(record =>{
          return (
            <div key={record.id}>
              <li>{record.title}</li>
            </div>
          )
        })}
      </div>
    );
}

export default ResourceList;
