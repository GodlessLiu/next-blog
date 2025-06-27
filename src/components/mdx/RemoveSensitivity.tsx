'use client';
import { useState } from 'react';

const defaultSensitivity = '*****';

export function RemoveSensitivity({ content }: { content: string }) {
  const [value, setValue] = useState(defaultSensitivity);

  return (
    <span>
      {value}
      <span
        className="cursor-pointer h-full align-middle"
        onClick={() => setValue(value === defaultSensitivity ? content : defaultSensitivity)}
      >
        {value === defaultSensitivity ? (
          <span className="icon-[prime--eye] w-6"></span>
        ) : (
          <span className="icon-[prime--eye-slash] w-6"></span>
        )}
      </span>
    </span>
  );
}
