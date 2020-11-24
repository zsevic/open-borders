const loadCountries = async () => { 
  const countries = await fetch('http://localhost:8080/api/countries').then(response => response.json());
  const groups = countries.reduce((acc, current) => {
    if (acc[current.status]) acc[current.status].push(current);
    else acc[current.status] = [current];
    return acc;
  }, {});
  console.log(groups);
};

loadCountries();
