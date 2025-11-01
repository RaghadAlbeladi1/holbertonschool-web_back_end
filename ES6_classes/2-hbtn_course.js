export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof (name) !== 'string') {
      throw new TypeError('only strings');
    }
    if (typeof (length) !== 'number') {
      throw new TypeError('only numbers');
    }
    if (Array.isArray(students)) {
      for (const i of students) {
        if (typeof (i) !== 'string') {
          throw new TypeError('need to be array of strings only');
        }
      }
    } else {
      throw new TypeError('only arrays');
    }

    this._name = name;
    this._length = length;
    this._students = students;
  }

  get name() {
    return this._name;
  }

  set name(newName) {
    if (typeof (newName) !== 'string') {
      throw new TypeError('only strings');
    }
    this._name = newName;
  }

  get length() {
    return this._length;
  }

  set length(newLength) {
    if (typeof (newLength) !== 'number') {
      throw new TypeError('only numbers');
    }
    this._length = newLength;
  }

  get students() {
    return this._students;
  }

  set students(newStudents) {
    if (Array.isArray(newStudents)) {
      for (const i of newStudents) {
        if (typeof (i) !== 'string') {
          throw new TypeError('need to be array of strings only');
        }
      }
    } else {
      throw new TypeError('only arrays');
    }
    this._students = newStudents;
  }
}
