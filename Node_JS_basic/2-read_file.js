const fs = require('node:fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf-8');
    const lines = data.trim().split('\n');
    lines.shift();
    const fieldMap = new Map();

    for (const line of lines) {
      const i = line.split(',');
      if (fieldMap.has(i[3])) {
        const field = fieldMap.get(i[3]);
        field.push(i[0]);
      } else {
        fieldMap.set(i[3], [i[0]]);
      }
    }
    // console.log(fieldMap)
    console.log(`Number of students: ${lines.length}`);

    fieldMap.forEach((value, key) => {
      console.log(`Number of students in ${key}: ${value.length}. List: ${value.join(', ')}`);
    });
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
