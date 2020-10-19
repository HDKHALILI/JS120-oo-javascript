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

const school = {
  students: [],

  addStudent(name, year) {
    const validYears = ["1st", "2nd", "3rd", "4th", "5th"];
    if (validYears.includes(year)) {
      this.students.push(createStudent(name, year));
    } else {
      console.log("Invalid Year");
    }
  },

  enrollStudent(studentName, courseName, courseCode) {
    this.getStudent(studentName).addCourse({
      name: courseName,
      code: courseCode,
    });
  },

  getStudent(studentName) {
    return this.students.find(student => student.name === studentName);
  },

  addGrade(studentName, courseCode, grade) {
    this.getStudent(studentName).getCourse(courseCode).grade = grade;
  },

  getReportCard(studentName) {
    this.getStudent(studentName).courses.forEach(course => {
      if (course.grade) {
        console.log(`${course.name}: ${course.grade}`);
      } else {
        console.log(`${course.name}: In progress`);
      }
    });
  },

  courseReport(courseName) {
    const courses = this.getCoursesWithGrade(courseName);

    if (courses.length > 0) {
      const averageGrade =
        courses.reduce((sum, course) => sum + course.grade, 0) / courses.length;

      console.log(`=${courseName} Grades=`);
      courses.forEach(course => {
        console.log(`${course.name}: ${course.grade}`);
      });
      console.log("---");
      console.log(`Course Average: ${averageGrade}`);
    }
  },

  getCoursesWithGrade(courseName) {
    const courses = [];
    this.students.forEach(student => {
      student.listCourses().forEach(course => {
        if (course.name === courseName && course.hasOwnProperty("grade")) {
          courses.push(course);
        }
      });
    });

    return courses;
  },
};

console.log("foo =======");
school.addStudent("foo", "3rd");
school.enrollStudent("foo", "Math", 101);
school.enrollStudent("foo", "Advanced Math", 102);
school.enrollStudent("foo", "Physics", 202);
school.addGrade("foo", 101, 95);
school.addGrade("foo", 102, 90);
school.getReportCard("foo");
console.log("");

console.log("bar =======");
school.addStudent("bar", "1st");
school.enrollStudent("bar", "Math", 101);
school.addGrade("bar", 101, 91);
school.getReportCard("bar");
console.log("");

console.log("qux =======");
school.addStudent("qux", "2nd");
school.enrollStudent("qux", "Math", 101);
school.enrollStudent("qux", "Advanced Math", 102);
school.addGrade("qux", 101, 93);
school.addGrade("qux", 102, 90);
school.getReportCard("qux");
console.log("");

school.courseReport("Math");
console.log("");
school.courseReport("Advanced Math");
school.courseReport("Physics");
