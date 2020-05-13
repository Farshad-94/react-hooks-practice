import React, { useState, useEffect } from 'react';
import { getResource } from '../../services/appApis';

//Extract hooks related logic into a separate function
const useResources = (resource) => {
  const [resources, setResources] = useState([]);

  const fetchResource = (resource) => {
    getResource(resource)
    .then(response => {
      setResources(response);
    })
  };

  useEffect(() => {
    fetchResource(resource);
  }, [resource]);

  return resources;
}

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
