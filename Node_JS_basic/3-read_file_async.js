const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf-8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      // نقسم الأسطر
      const lines = data
        .split('\n')
        .map((line) => line.trim())
        .filter((line) => line.length > 0); // نتجاهل الأسطر الفارغة

      // أول سطر = header
      lines.shift();

      const fieldMap = {};

      for (const line of lines) {
        const parts = line.split(',');
        const firstName = parts[0];
        const field = parts[3];

        if (!fieldMap[field]) {
          fieldMap[field] = [];
        }
        fieldMap[field].push(firstName);
      }

      // عدد كل الطلاب (بدون الـ header)
      console.log(`Number of students: ${lines.length}`);

      // نطبع عدد الطلاب في كل field
      for (const [field, students] of Object.entries(fieldMap)) {
        console.log(
          `Number of students in ${field}: ${students.length}. List: ${students.join(', ')}`
        );
      }

      // نرجع resolve (ما يهم إيش القيمة، المهم الـ Promise يكمّل)
      resolve();
    });
  });
}

module.exports = countStudents;

