const ts = 1;
const md5 = require('md5');
//aggiungere limit
const getAllCharacters = async (req, res) => {
  const { limit, name } = req.query;
  const response = await fetch(
    `${process.env.BASE_URL}/characters?${
      limit && limit !== 0 ? `limit=${limit}&` : ''
    }apikey=${process.env.PUBLIC_KEY}&hash=${md5(
      ts + process.env.PRIVATE_KEY + process.env.PUBLIC_KEY
    )}&ts=${ts}`
  );
  const jsonData = await response.json();
  console.log(JSON.stringify(jsonData));
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
  console.log(JSON.stringify(jsonData));

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
