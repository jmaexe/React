const ts = 1;
const md5 = require('md5');
const getAllCharacters = async (req, res) => {
  const { limit, name } = req.query;
  //errore encode fetch
  const baseURL = new URL(`${process.env.BASE_URL}/characters`);
  const params = new URLSearchParams();
  limit !== 0 ? params.append('limit', limit) : null;
  name !== '' ? params.append('nameStartsWith', name) : null;
  params.append('apikey', process.env.PUBLIC_KEY);
  params.append(
    'hash',
    md5(ts + process.env.PRIVATE_KEY + process.env.PUBLIC_KEY)
  );
  params.append('ts', ts);

  const response = await fetch(baseURL + '?' + params);
  console.log(response.url);
  const jsonData = await response.json();
  if (jsonData.code == 200 && jsonData.status == 'Ok') {
    const { results } = jsonData.data;
    res.json(results);
  } else {
    res.status(500).send('error fetching data characters');
  }
};

const getCharacterByName = async (req, res) => {
  const { name } = req.params;

  const response = await fetch(
    `${process.env.BASE_URL}/characters?nameStartsWith=${name}&apikey=${
      process.env.PUBLIC_KEY
    }&hash=${md5(
      ts + process.env.PRIVATE_KEY + process.env.PUBLIC_KEY
    )}&ts=${ts}`
  );
  const jsonData = await response.json();
  if (jsonData.code == 200 && jsonData.status == 'Ok') {
    res.json(jsonData);
  } else {
    res.status(500).send('error fetching data character: ' + name);
  }
};

module.exports = {
  getAllCharacters,
  getCharacterByName,
};
