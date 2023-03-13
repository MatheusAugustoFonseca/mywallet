const fetchCurrencies = async () => {
  const URL = 'https://economia.awesomeapi.com.br/json/all';
  try {
    const response = await fetch(URL);
    const json = await response.json();
    return json;
  } catch (error) {
    throw new Error(error);
  }
};

export default fetchCurrencies;
