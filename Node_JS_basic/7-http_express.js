const express = require('express');
const countStudents = require('./3-read_file_async');

const app = express();

app.get('/', (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.write('This is the list of our students\n');
  try {
    const studentData = await countStudents(process.argv[2]);
    res.write(studentData);
  } catch (error) {
    res.end('Cannot load the database');
  }
  res.end();
});

app.listen(1245);

module.exports = app;
