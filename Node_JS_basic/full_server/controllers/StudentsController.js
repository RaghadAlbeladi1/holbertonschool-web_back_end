import readDatabase from '../utils';

export default class StudentsController {
  static getAllStudents(req, res) {
    const database = process.argv[2];

    readDatabase(database)
      .then((fields) => {
        let output = 'This is the list of our students\n';

        const fieldNames = Object.keys(fields).sort(
          (a, b) => a.toLowerCase().localeCompare(b.toLowerCase()),
        );

        fieldNames.forEach((field, index) => {
          const list = fields[field];
          output += `Number of students in ${field}: ${list.length}. List: ${list.join(', ')}`;
          if (index < fieldNames.length - 1) {
            output += '\n';
          }
        });

        res.status(200).send(output);
      })
      .catch((err) => {
        res.status(500).send(err.message);
      });
  }

  static getAllStudentsByMajor(req, res) {
    const { major } = req.params;
    const database = process.argv[2];

    if (major !== 'CS' && major !== 'SWE') {
      res.status(500).send('Major parameter must be CS or SWE');
      return;
    }

    readDatabase(database)
      .then((fields) => {
        const list = fields[major] || [];
        const output = `List: ${list.join(', ')}`;
        res.status(200).send(output);
      })
      .catch((err) => {
        res.status(500).send(err.message);
      });
  }
}
