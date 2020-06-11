// Q1 - Create a function called getStudentById which takes a parameter called id and returns the student object from the students array that matches the given id

// Q2 - Create a function called getTeacherById which takes a parameter called id and returns the teacher object from the teachers array that matches the given id

// Q3 - Create a function called getClassById which takes a parameter called id and returns the class object from the classes array that matches the given id

// Q4 - Create a function called getTeacherById which takes a parameter called teacherId and returns the teacher for that class

// Q5 - Create a function called getStudentsInClass which takes a parameter called classId and returns an array of all the students in that class. A student is in a class if there is an element in the studentClasses array that has a studentId that matches the student and a classId that matches the class
const subjects = Object.freeze({
    math: "math",
    science: "science",
    english: "english"
});

const timeslots = Object.freeze({
    morning: "morning",
    afternoon: "afternoon",
});

let students = [
    {
        id: "27349f20-8fa2-4d6d-b8ef-faa9630494e6",
        firstName: "Ida",
        lastName: "Kemp"
    },
    {
        id: "ae025246-b36b-46cb-9de7-d52e46b4a6f7",
        firstName: "Aiysha",
        lastName: "Carlson"
    },
    {
        id: "f332c68b-f0ce-4e7a-9c27-2d51a92e94d0",
        firstName: "Jameson",
        lastName: "Cabrera"
    },
    {
        id: "46d4e75f-6e00-4343-a1bb-9e9339ec7e39",
        firstName: "Vicky",
        lastName: "Walker"
    },
    {
        id: "c04407a1-9be9-46a6-960c-c462b994122d",
        firstName: "Janelle",
        lastName: "Charles"
    },
    {
        id: "da8c8e15-117f-42a2-af9d-361e664d4773",
        firstName: "Catherine",
        lastName: "Lowe"
    },
    {
        id: "5e2ca1b5-fd09-4640-8c3b-63026336c3aa",
        firstName: "Arham",
        lastName: "Harwood"
    },
    {
        id: "aef2d930-ef76-4525-92b0-9199cebbcb43",
        firstName: "Kerry",
        lastName: "Lucas"
    },
    {
        id: "2d1158ef-a61e-44d3-9f8d-13a3004f5ecc",
        firstName: "Daniaal",
        lastName: "Holloway"
    },
    {
        id: "68424d92-75b0-41e7-971d-caedb762a66e",
        firstName: "Faith",
        lastName: "Howe"
    },
];

let teachers = [
    {
        id: "948c3641-f95d-483b-8c59-b84c27041313",
        title: "Mr",
        firstName: "Franky",
        lastName: "Calvert",
        subject: subjects.math
    }, {
        id: "6ee455cc-ed20-47f7-91b7-f89b08e9dae1",
        title: "Mrs",
        firstName: "Raheel",
        lastName: "Mejia",
        subject: subjects.english
    }, {
        id: "dd798187-7880-4294-aa51-cc9ed0bc7779",
        title: "Miss",
        firstName: "Amiya",
        lastName: "Conley",
        subject: subjects.science
    }, {
        id: "34bbfa11-2afd-43a2-8e80-5d7ae853b153",
        title: "Mr",
        firstName: "Owen",
        lastName: "Stewart",
        subject: subjects.english
    }
];

let classes = [
    {
        id: "55e63d2d-0ed6-44c5-b161-e95fdd76a2d5",
        teacherId: "948c3641-f95d-483b-8c59-b84c27041313",
        timeslot: timeslots.morning
    }, {
        id: "710a36ce-f6ea-4f23-9d8d-09f55ea9f503",
        teacherId: "948c3641-f95d-483b-8c59-b84c27041313",
        timeslot: timeslots.afternoon
    }, {
        id: "3fc0fb62-fd0a-4fd8-9be8-4ee61f622265",
        teacherId: "6ee455cc-ed20-47f7-91b7-f89b08e9dae1",
        timeslot: timeslots.morning
    }, {
        id: "abe6da2b-6597-4083-8ea2-9fe8aed0471b",
        teacherId: "34bbfa11-2afd-43a2-8e80-5d7ae853b153",
        timeslot: timeslots.afternoon
    }, {
        id: "0e78c68a-c0b6-4c19-99a3-8ef342b93ad5",
        teacherId: "dd798187-7880-4294-aa51-cc9ed0bc7779",
        timeslot: timeslots.morning
    }, {
        id: "d95e1f30-2160-4ab2-87a2-138b315bf680",
        teacherId: "dd798187-7880-4294-aa51-cc9ed0bc7779",
        timeslot: timeslots.afternoon
    }
];

let studentClasses = [
    {
        studentId: "27349f20-8fa2-4d6d-b8ef-faa9630494e6",
        classId: "55e63d2d-0ed6-44c5-b161-e95fdd76a2d5"
    }, {
        studentId: "ae025246-b36b-46cb-9de7-d52e46b4a6f7",
        classId: "55e63d2d-0ed6-44c5-b161-e95fdd76a2d5"
    }, {
        studentId: "f332c68b-f0ce-4e7a-9c27-2d51a92e94d0",
        classId: "55e63d2d-0ed6-44c5-b161-e95fdd76a2d5"
    }, {
        studentId: "46d4e75f-6e00-4343-a1bb-9e9339ec7e39",
        classId: "0e78c68a-c0b6-4c19-99a3-8ef342b93ad5"
    }, {
        studentId: "c04407a1-9be9-46a6-960c-c462b994122d",
        classId: "3fc0fb62-fd0a-4fd8-9be8-4ee61f622265"
    }, {
        studentId: "da8c8e15-117f-42a2-af9d-361e664d4773",
        classId: "3fc0fb62-fd0a-4fd8-9be8-4ee61f622265"
    }, {
        studentId: "5e2ca1b5-fd09-4640-8c3b-63026336c3aa",
        classId: "3fc0fb62-fd0a-4fd8-9be8-4ee61f622265"
    }, {
        studentId: "aef2d930-ef76-4525-92b0-9199cebbcb43",
        classId: "0e78c68a-c0b6-4c19-99a3-8ef342b93ad5"
    }, {
        studentId: "27349f20-8fa2-4d6d-b8ef-faa9630494e6",
        classId: "710a36ce-f6ea-4f23-9d8d-09f55ea9f503"
    }, {
        studentId: "ae025246-b36b-46cb-9de7-d52e46b4a6f7",
        classId: "710a36ce-f6ea-4f23-9d8d-09f55ea9f503"
    }, {
        studentId: "f332c68b-f0ce-4e7a-9c27-2d51a92e94d0",
        classId: "710a36ce-f6ea-4f23-9d8d-09f55ea9f503"
    }, {
        studentId: "46d4e75f-6e00-4343-a1bb-9e9339ec7e39",
        classId: "abe6da2b-6597-4083-8ea2-9fe8aed0471b"
    }, {
        studentId: "c04407a1-9be9-46a6-960c-c462b994122d",
        classId: "abe6da2b-6597-4083-8ea2-9fe8aed0471b"
    }, {
        studentId: "da8c8e15-117f-42a2-af9d-361e664d4773",
        classId: "abe6da2b-6597-4083-8ea2-9fe8aed0471b"
    }, {
        studentId: "5e2ca1b5-fd09-4640-8c3b-63026336c3aa",
        classId: "dd798187-7880-4294-aa51-cc9ed0bc7779"
    }, {
        studentId: "aef2d930-ef76-4525-92b0-9199cebbcb43",
        classId: "dd798187-7880-4294-aa51-cc9ed0bc7779"
    }, {
        studentId: "2d1158ef-a61e-44d3-9f8d-13a3004f5ecc",
        classId: "dd798187-7880-4294-aa51-cc9ed0bc7779"
    }, {
        studentId: "68424d92-75b0-41e7-971d-caedb762a66e",
        classId: "dd798187-7880-4294-aa51-cc9ed0bc7779"
    },
];
console.log("getStudentById which takes a parameter called id and returns the student object from the students array that matches the given id");
function getStudentById(studentId){
    return students.find(s=>s.id==studentId);
}
console.log(getStudentById("ae025246-b36b-46cb-9de7-d52e46b4a6f7"));//aiysha

console.log("getTeacherById which takes a parameter called id and returns the teacher object from the teachers array that matches the given id");
function getTeacherById(teacherId){
    return teachers.find(t=>t.id==teacherId)
}
console.log(getTeacherById("6ee455cc-ed20-47f7-91b7-f89b08e9dae1"));//raheel

console.log(" getClassById which takes a parameter called id and returns the class object from the classes array that matches the given id");
function getClassById(classId){
    return classes.find(c=>c.id==classId);
}
console.log(getClassById("3fc0fb62-fd0a-4fd8-9be8-4ee61f622265"));//Morning slot of teacher
console.log("getTeacherById which takes a parameter called classId and returns the teacher for that class");
function getTeacherByClassId(classId){
    let classObject=getClassById(classId);
    let teacherObject=getTeacherById(classObject.teacherId);
    return teacherObject;
   
}
let teacher =getTeacherByClassId("3fc0fb62-fd0a-4fd8-9be8-4ee61f622265");//class ID of tecaher Raheel
console.log(teacher);

console.log("getStudentsInClass which takes a parameter called classId and returns an array of all the students in that class.");
// A student is in a class if there is an element in the studentClasses array that has a studentId that matches the student and a classId that matches the class
function getStudentsInClass(classId){
   //all students in thi class
   let classObject= studentClasses.find(c=>c.classId==classId);
   //console.log(classObject);use this studentId to call all students from student class
   let student=students.map(id=>getStudentById(classObject.studentId))
  return student;
   //let studentMatch=classMatch.find(s=>s.studentId);
  // return studentMatch.map(id=>getStudentById(id));
//   let classMatch= studentClasses.filter(c=>c.classId==classId);
//   let studentMatch=classMatch.map(s=>s.studentId);
//   return studentMatch.map(id=>getStudentById(id));
}
console.log(getStudentsInClass("3fc0fb62-fd0a-4fd8-9be8-4ee61f622265"));
