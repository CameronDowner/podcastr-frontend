import { useState, useEffect } from "react";
import qs from "query-string";

function useLocationHash() {
  const { hash } = window.location;

  const [hashParameters, setHashParameters] = useState(qs.parse(hash));

  useEffect(() => {
    const parameters = qs.parse(hash);
    setHashParameters(parameters);
  }, [hash]);

  return [hashParameters];
}

export default useLocationHash;
