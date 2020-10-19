function createStudent(name, year) {
  return {
    name,
    year,
    courses: [],

    info() {
      return `${this.name} is a ${this.year} student`;
    },

    addCourse(course) {
      this.courses.push(course);
    },

    listCourses() {
      return this.courses;
    },

    addNote(courseCode, note) {
      const course = this.getCourse(courseCode);
      course.notes = course.notes || [];
      course.notes.push(note);
    },

    viewNotes() {
      this.courses.forEach(course => {
        if (course.notes) {
          const notes = course.notes.join("; ");
          console.log(`${course.name}: ${notes}`);
        }
      });
    },

    updateNote(courseCode, note) {
      const course = this.getCourse(courseCode);
      course.notes = [];
      course.notes.push(note);
    },

    getCourse(courseCode) {
      return this.courses.find(course => course.code === courseCode);
    },
  };
}

let foo = createStudent("Foo", "1st");
console.log(foo.info());
console.log(foo.listCourses());
foo.addCourse({ name: "Math", code: 101 });
foo.addCourse({ name: "Advanced Math", code: 102 });
console.log(foo.listCourses());
foo.addNote(101, "Fun course");
foo.addNote(101, "Remember to study for algebra");
foo.viewNotes();
foo.addNote(102, "Difficult subject");
foo.viewNotes();
foo.updateNote(101, "Fun course");
foo.viewNotes();
