import { useState, useEffect } from 'react';
import { getResource } from '../../services/appApis';

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
};

export default useResources;