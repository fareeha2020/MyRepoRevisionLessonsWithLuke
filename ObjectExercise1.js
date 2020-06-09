let schools = [{
    name: "school1",
    address: "address1",
    headTeacher: { title: "TeacherTitle1", lastName: "Teacher1" },
}, {
    name: "school2",
    address: "address2",
    headTeacher: { title: "TeacherTitle2", lastName: "Teacher2" },
},];
schools[0].students = [{ fName: "student1", lName: "ONE", age: 20, yearGroup: 10 }, { fName: "student2", lName: "TWO", age: 25, yearGroup: 8 }, { fName: "student10", lName: "TEN", age: 20, yearGroup: 10 }];
schools[1].students = [{ fName: "student3", lName: "THREE", age: 12, yearGroup: 7 }, { fName: "student4", lName: "FOUR", age: 35, yearGroup: 5 },];

console.log("all the students with a yearGroup greater than 9");
for (const school of schools) {
    for (const student of school.students) {
        if (student.yearGroup > 9) {
            console.log(`${student.fName}  ${student.lName}`);
        }
    }
}

console.log("all the teachers that work at a school with 4 students or less");
let count;
for (const school of schools) {
    count = school.students.length;
    if (count <= 4) {
        console.log(school.headTeacher.lastName);

    }
}
console.log(" the full names of all students who have an age of 12 and a  yearGroup of 7  ");
for (const school of schools) {
    for (const student of school.students) {
        if ((student.age == 12) && (student.yearGroup == 7)) {
            console.log(`${student.fName}  ${student.lName}`);
        }

    }
}
//IDEA IS TO STORE EACH INDEX in ARRAY REPRESENTS YEAR GRADE
//THen COUNT IS INCREMENTED FOR EACH INDEX

console.log(" any other method you know to log how many students are in each yearGroup Across all schools (assume yearGroup is a whole number from 0 - 12");
for (const eschool of schools) {
    console.log(`The ${eschool.name} has Following Students `);
    //for (const estudent of eschool.students) {
    console.log(eschool.students.filter(element => {
        if (element.yearGroup == 10) {
            return `${element.fName}${element.lName}`;
        }
    }
        )
);
    }

    //const grades=eschool.students.filter(eschool.students.yearGroup=> eschool.students.lName);
    //console.log(grades);


//     


//        const x= estudent.filter((estudent.yearGroup));
//        //('${estudent.fName}  ${estudent.lName}'));
//        console.log(x);
//        // console.log(` Student Name: ${estudent.fName}  ${estudent.lName}   Grade: ${estudent.yearGroup}`);  
//     }
// }
//        // let eachGrade=0;
// //                for (const each in  student) {
// //                    if(each=="yearGroup")
// //                   {

// //                       console.log(`The grade ${student[each]} students are below:`);
//                       //const name=()
// //                   }

// //                }
// //        //
// //        // console.log(count);



// // }
// // }
