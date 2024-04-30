"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

type Country = {
  name: object;
  continents: string[];
  capital: string;
  population: number;
  flags: object;
}

export default function Home() {

  const [ countries, setCountries ] = useState([]);
  const [ isLoading, setLoading ] = useState(true);

  useEffect(() => {
    const fetchCountries = async () => {
      const response = await fetch("https://restcountries.com/v3.1/all");
      const data = await response.json();
      setCountries(data);
      setLoading(false);
    }
    fetchCountries();
  }, []);

  if (isLoading) return <p>Loading...</p>
  if (!countries) return <p>No countries found</p>

  return (
    <main>
      {
        countries.map((country: any) => (
          <div key={country.name.common}>
            <img src={country.flags.png} className="max-w-[320px] h-auto object-fit" alt={country.flags.alt} />
            <h2>{country.name.common}</h2>
            <div><strong>Population:</strong> {country.population}</div>
            <div><strong>Region:</strong> {country.continents[0]}</div>
            <div><strong>Capital:</strong> {country.capital}</div>
          </div>
        ))
      }
    </main>
  );
}
