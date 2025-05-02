'use client';

import { useEffect, useRef, useState } from 'react';
import { useCountUp } from '@/hooks/useCountUp';

interface AnimatedStatProps {
  end: number;
  label: string;
  prefix?: string;
  suffix?: string;
}

export default function AnimatedStat({ end, label, prefix = '', suffix = '' }: AnimatedStatProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const count = useCountUp({ end: isVisible ? end : 0, duration: 2000, start: 0 });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div ref={ref}>
      <div className="text-6xl font-bold mb-2 text-gray-700">
        {prefix}
        {typeof count === 'number' ? count.toLocaleString() : count}
        {suffix}
      </div>
      <div className="text-gray-500">{label}</div>
    </div>
  );
} 