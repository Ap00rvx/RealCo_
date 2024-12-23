import React, { useState, useEffect, useRef } from 'react';

const CounterSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const counters = [
    { label: 'Happy Clients', value: 50 },
    { label: 'Projects Done', value: 150 },
    { label: 'Days of Work', value: 1000 },

  ];

  const [counts, setCounts] = useState(counters.map(() => 0));

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      const intervalIds = counters.map((counter, index) => {
        return setInterval(() => {
          setCounts((prevCounts) => {
            const newCounts = [...prevCounts];
            if (newCounts[index] < counter.value) {
              newCounts[index] += Math.ceil(counter.value / 50); // Increment speed
            } else {
              clearInterval(intervalIds[index]);
              newCounts[index] = counter.value;
            }
            return newCounts;
          });
        }, 30);
      });

      return () => intervalIds.forEach((id) => clearInterval(id));
    }
  }, [isVisible, counters]);

  return (
    <div
      ref={sectionRef}
      className="bg-green-200 py-16 text-center text-black flex justify-center items-center"
    >
      <div className="container mx-auto grid grid-cols-2 sm:grid-cols-3 gap-8">
        {counters.map((counter, index) => (
          <div key={counter.label} className="flex flex-col items-center justify-center">
            <h2 className="text-4xl font-bold text-green-600">{counts[index]}+</h2>
            <p className="text-lg mt-2">{counter.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CounterSection;
