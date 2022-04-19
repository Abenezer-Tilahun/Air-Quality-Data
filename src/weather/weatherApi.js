export const fetchCountryData = async (reg) => {
  const res = await fetch('https://restcountries.com/v3.1/all')
    .then((data) => data.json());
  const result = res.filter((country) => country.region === reg);
  return result;
};

const url = 'https://api.openweathermap.org/data/2.5/air_pollution?';
const id = '7b4ebec73fcf1dcb94b593a6f754f06c';

export const fetchPollutionData = async (lat, lon) => {
  const res = await fetch(`${url}lat=${lat}&lon=${lon}&appid=${id}`);
  return res.json();
};
