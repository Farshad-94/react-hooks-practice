import React, { useState, useEffect } from 'react';
import { getResource } from '../../services/appApis';

const ResourceList = ({ resource }) => {
  const [resources, setResources] = useState([]);

  const fetchResource = (resource) => {
    console.log(resource);
    
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
      <div>{resources.length}</div>
    );
}

export default ResourceList;
