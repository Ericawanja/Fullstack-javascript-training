import { useState } from "react";

const withValue = (WrappedComponent) => {
  return () => {
    const [value, setValue] = useState(0);
    return <WrappedComponent value={value} setValue={setValue} />;
  };
};

export default withValue;