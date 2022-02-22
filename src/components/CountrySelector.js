import { useState } from 'react';
import useStats from '../utils/useStats';
import Stats from './Stats';
export default function CountrySelector(){
const { stats: countries, loading, error } = useStats('https://covid19.mathdro.id/api/countries');

//default to USA
const [selectedCountry, setSelectedCountry] = useState('USA');
if (loading) return <p>Loading...</p>;
  if (error) return <p>Error...</p>;
return (
<div>
<h2>Currently showing {selectedCountry}</h2>
<select onChange={ e => {
    setSelectedCountry(e.target.value);
    }}
>

{Object.entries(countries.countries).map(([country, code]) => (

<option key={code.iso3} value={code.iso3}>{code.name}</option>

))}
</select>
<Stats url={`https://covid19.mathdro.id/api/countries/${selectedCountry}`}></Stats>
</div>
);
}