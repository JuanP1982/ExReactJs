import React, { useState, useEffect } from 'react';

export function Relogiofunc (){
  const [hora, setHora] = useState(new Date());

  useEffect(() => {
    const horaNova = setInterval(() => setHora(new Date()), 1000);
    return () => clearInterval(horaNova);
  }, []);

  return (
    <div>
      {hora.toLocaleTimeString()}
    </div>
  );
};

