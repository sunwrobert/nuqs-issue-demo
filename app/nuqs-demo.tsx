'use client';
import {
  useQueryState,
  parseAsArrayOf,
  parseAsString,
} from 'next-usequerystate';
import { useRef } from 'react';

export function NuqsDemo() {
  const [values, setValues] = useQueryState(
    'market',
    parseAsArrayOf(parseAsString)
      .withOptions({ shallow: false })
      .withDefault([])
  );
  const counter = useRef(0);

  return (
    <>
      <button
        onClick={() => {
          setValues([...values, `${counter.current++}`]);
        }}
      >
        Add query param
      </button>
      <br />

      {values.join(', ')}
    </>
  );
}
