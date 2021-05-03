import express from 'express';
import faker from 'faker';
import mysql from 'mysql';

const db = mysql.createConnection({
  host: process.env.MYSQL_HOST,
  database: process.env.MYSQL_DATABASE,
  user: process.env.MYSQL_ROOT_USER,
  password: process.env.MYSQL_ROOT_PASSWORD,
});

db.connect((connectionError) => {
  if (connectionError) throw connectionError;

  console.log('🔌 DB connected!');
});

const app = express();

app.get('/', async (_, res) => {
  await db.query(
    `INSERT INTO people (name) VALUES ('${faker.name.firstName()}')`
  );
  return await db.query(
    `SELECT * FROM people ORDER BY name`,
    (selectError, people) => {
      if (selectError) throw selectError;

      console.log('🧍🧍🧍 People successfully queried!');
      const peopleList = people.map((p) => `<li>${p.name}</li>`).join('');

      return res.send(
        `<h1>Full Cycle Rocks!</h1><p>Reload the page to add a new name</p><ul>${peopleList}</ul>`
      );
    }
  );
});

const { PORT = 3000 } = process.env;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
