const Students = [
    {
        student1: {
            name: 'abul',
            age: '17',
            isMale: true,
            education: {
                class: 7,
                subjects: ['bangla', 'english', 'math'],
                school: 'durgapur high school',
                marks: {
                    bangla: 35,
                    english: 23,
                    math: 36
                }
            }
        },
        student2: {
            name: 'jarina',
            age: '19',
            isMale: false,
            education: {
                class: 6,
                subjects: ['bangla', 'english', 'math'],
                school: 'Rajshahi high school',
                marks: {
                    bangla: 95,
                    english: 73,
                    math: 36
                }
            }
        },
        student3: {
            name: 'habul',
            age: '15',
            isMale: true,
            education: {
                class: 9,
                subjects: ['bangla', 'english', 'math'],
                school: 'Dhaka high school',
                marks: {
                    bangla: 75,
                    english: 53,
                    math: 96
                },
            }
        }
    }
];

// // console.log(Students[0].student1.education.subjects[1])

// // expected output
// /**
//  *          My Name is abul.
//             My age is 17.
//             My gender is Male
//             My subjects are: bangla,english,math
//  * 
//  */





Students.forEach(studentObject => {
    for (const student in studentObject) {
        
        const {name,age,isMale,education} = studentObject[student];
        const {subjects} = education;

        console.log(`
                        My Name is ${name}
                        My age is ${age}.
                        My gender is ${isMale ? "Male" : "Female"};
                        My subjects are: ${subjects.map(subject => subject)}
        
        `)
        
    }
})