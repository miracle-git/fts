const mysql = require('mysql');
const connection = mysql.createConnection({
  host: 'localhost',
  port: '3306',
  user: 'root',
  password: '1984_$hmy810',
  database: 'myblog'
});

connection.connect();
const sql = 'select * from users';
connection.query(sql, (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(data);
  }
);
connection.end();
