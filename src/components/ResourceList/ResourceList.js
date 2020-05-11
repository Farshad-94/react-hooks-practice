import React, { useState, useEffect } from 'react';
import { getResource } from '../../services/appApis';

const ResourceList = ({ resource }) => {
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

    return (
      <div>{resources.length}</div>
    );
}

export default ResourceList;
