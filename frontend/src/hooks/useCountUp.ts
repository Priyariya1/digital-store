import { useState, useEffect, useRef } from 'react';

interface CountUpProps {
  end: number;
  duration?: number;
  start?: number;
}

export const useCountUp = ({ end, duration = 2000, start = 0 }: CountUpProps) => {
  const [count, setCount] = useState(start);
  const countRef = useRef(start);
  const timeRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    const stepTime = Math.abs(Math.floor(duration / (end - start)));
    const step = (end - start) / (duration / stepTime);

    timeRef.current = setInterval(() => {
      if (countRef.current < end) {
        const next = countRef.current + step;
        if (next > end) {
          setCount(end);
          countRef.current = end;
          if (timeRef.current) clearInterval(timeRef.current);
        } else {
          setCount(next);
          countRef.current = next;
        }
      } else {
        if (timeRef.current) clearInterval(timeRef.current);
      }
    }, stepTime);

    return () => {
      if (timeRef.current) clearInterval(timeRef.current);
    };
  }, [end, duration, start]);

  return Math.floor(count);
}; 