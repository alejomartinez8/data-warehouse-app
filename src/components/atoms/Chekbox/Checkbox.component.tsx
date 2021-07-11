import { checkboxEnum } from 'constans';
import React, { useEffect, useRef } from 'react';

const { CHECKED, INDETERMINATE } = checkboxEnum;
export const Checkbox = ({ value, ...props }) => {
  const checkRef = useRef<HTMLInputElement>();

  useEffect(() => {
    checkRef.current.checked = value === CHECKED;
    checkRef.current.indeterminate = value === INDETERMINATE;
  }, [value]);

  // eslint-disable-next-line react/jsx-props-no-spreading
  return <input type="checkbox" ref={checkRef} {...props} />;
};
