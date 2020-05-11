import React, { useState, useEffect } from 'react';
import { getResource } from '../../services/appApis';

const ResourceList = ({ resource }) => {
  const [resources, setResources] = useState([]);

  const fetchResource = (resource) => {
    getResource(resource)
    .then(response => {
      console.log(response);
      setResources(response);
    })
  };

  useEffect(() => {
    fetchResource(resource);
  }, [resource]);

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
