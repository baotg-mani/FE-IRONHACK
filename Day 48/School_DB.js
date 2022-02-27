/**
 * CƠ SỞ DỮ LIỆU QUẢN LÝ TRƯỜNG HỌC
*/

// Bảng chứa dữ liệu sinh viên
var gStudentDB = {
    students: [
      {
        id: 1,
        studentCode: 20071750,
        username: "linhdh",
        firstname: "Linh",
        lastname: "Dinh",
        birthday: "25/09/1990",
        email: "linh.dinh@gmail.com",
        studyYear: 2015
      },
      {
        id: 2,
        studentCode: 20102345,
        username: "namdh",
        firstname: "Do",
        lastname: "Nam",
        birthday: "12/10/1990",
        email: "nam.d@gmail.com",
        studyYear: 2016
      },
      {
        id: 3,
        studentCode: 20071850,
        username: "longtt",
        firstname: "Tran",
        lastname: "Long",
        birthday: "04/07/1991",
        email: "long@gmail.com",
        studyYear: 2015
      },
      {
        id: 4,
        studentCode: 20101234,
        username: "dungnp",
        firstname: "Ngo",
        lastname: "Phuong Dung",
        birthday: "10/12/1990",
        email: "dung.ngo@hotmail.com",
        studyYear: 2017
      },
      {
        id: 5,
        studentCode: 20082850,
        username: "minhvd",
        firstname: "Vu",
        lastname: "Minh",
        birthday: "12/12/1992",
        email: "minhvu@yahoo.com",
        studyYear: 2015
      },
      {
        id: 6,
        studentCode: 20091234,
        username: "trungtt",
        firstname: "Tran",
        lastname: "Trung",
        birthday: "05/07/1990",
        email: "trungthanh@gmail.com",
        studyYear: 2018
      },
      {
        id: 7,
        studentCode: 20077001,
        username: "nganp",
        firstname: "Ngo Phuong",
        lastname: "Nga",
        birthday: "04/10/1991",
        email: "nganp.mail@yahoo.com",
        studyYear: 2014
      },
      {
        id: 8,
        studentCode: 20077002,
        username: "kienpc",
        firstname: "Pham",
        lastname: "Kien",
        birthday: "08/10/1990",
        email: "kienp@hotmail.com",
        studyYear: 2015
      },
      {
        id: 9,
        studentCode: 20077003,
        username: "longnp",
        firstname: "Ngo",
        lastname: "Long",
        birthday: "03/11/1990",
        email: "longngo@gmail.com",
        studyYear: 2014
      },
      {
        id: 10,
        studentCode: 20078750,
        username: "minhnt",
        firstname: "Nguyen",
        lastname: "Minh",
        birthday: "12/01/1991",
        email: "minhnguyen@yahoo.com",
        studyYear: 2016
      }
    ],
    // student methods
  };

// Bảng chứa dữ liệu môn học
var gSubjects = {
    subjects: [
      {
        id: 1,
        subjectCode: "MAT101",
        subjectName: "Toán cao cấp",
        credit: 4
      },
      {
        id: 2,
        subjectCode: "PHY101",
        subjectName: "Vật lý đại cương",
        credit: 3
      },
      {
        id: 3,
        subjectCode: "MAT102",
        subjectName: "Giải tích 1",
        credit: 4
      },
      {
        id: 4,
        subjectCode: "MAT103",
        subjectName: "Toán rời rạc",
        credit: 4
      },
      {
        id: 5,
        subjectCode: "PHY103",
        subjectName: "Vật lý nguyên tử",
        credit: 5
      },
      {
        id: 6,
        subjectCode: "PHY401",
        subjectName: "Vật lý chuyên ngành 1",
        credit: 2
      },
      {
        id: 7,
        subjectCode: "CHEM301",
        subjectName: "Hóa học hữu cơ",
        credit: 3
      },
      {
        id: 8,
        subjectCode: "ENG403",
        subjectName: "Tiếng Anh chuyên ngành 1",
        credit: 3
      },
      {
        id: 9,
        subjectCode: "ENG101",
        subjectName: "Tiếng Anh đại cương",
        credit: 3
      },
      {
        id: 10,
        subjectCode: "ECO101",
        subjectName: "Kinh tế học đại cương",
        credit: 3
      }
    ],
    // subject methods
  };

// Bảng chứa dữ liệu Bảng điểm học viên theo từng môn
var gGrades = {
    grades: [
      {
        id: 1,
        studentId: 1,
        subjectId: 1,
        grade: 7.6,
        examDate: "23/04/2021"
      },
      {
        id: 3,
        studentId: 2,
        subjectId: 1,
        grade: 7.6,
        examDate: "23/04/2021"
      },
      {
        id: 4,
        studentId: 1,
        subjectId: 2,
        grade: 5,
        examDate: "14/04/2021"
      },
      {
        id: 5,
        studentId: 1,
        subjectId: 3,
        grade: 8,
        examDate: "14/04/2021"
      },
      {
        id: 6,
        studentId: 2,
        subjectId: 10,
        grade: 5.9,
        examDate: "04/05/2021"
      },
      {
        id: 7,
        studentId: 1,
        subjectId: 9,
        grade: 4.5,
        examDate: "14/03/2021"
      },
      {
        id: 8,
        studentId: 2,
        subjectId: 7,
        grade: 9,
        examDate: "14/03/2021"
      },
      {
        id: 9,
        studentId: 3,
        subjectId: 1,
        grade: 6,
        examDate: "23/04/2021"
      },
      {
        id: 10,
        studentId: 3,
        subjectId: 2,
        grade: 8,
        examDate: "14/04/2021"
      },
      {
        id: 11,
        studentId: 3,
        subjectId: 3,
        grade: 10,
        examDate: "14/04/2021"
      },
      {
        id: 12,
        studentId: 3,
        subjectId: 4,
        grade: 5,
        examDate: "04/05/2021"
      },
      {
        id: 13,
        studentId: 3,
        subjectId: 10,
        grade: 6,
        examDate: "04/05/2021"
      },
      {
        id: 14,
        studentId: 4,
        subjectId: 6,
        grade: 5.9,
        examDate: "14/02/2021"
      },
      {
        id: 15,
        studentId: 4,
        subjectId: 7,
        grade: 7,
        examDate: "14/03/2021"
      },
      {
        id: 16,
        studentId: 5,
        subjectId: 8,
        grade: 5.5,
        examDate: "10/05/2021"
      },
      {
        id: 17,
        studentId: 5,
        subjectId: 5,
        grade: 9,
        examDate: "04/05/2021"
      },
      {
        id: 18,
        studentId: 5,
        subjectId: 1,
        grade: 4,
        examDate: "23/04/2021"
      },
      {
        id: 19,
        studentId: 5,
        subjectId: 2,
        grade: 6,
        examDate: "14/04/2021"
      },
      {
        id: 20,
        studentId: 6,
        subjectId: 10,
        grade: 7.6,
        examDate: "04/05/2021"
      },
      {
        id: 21,
        studentId: 6,
        subjectId: 9,
        grade: 4,
        examDate: "14/03/2021"
      },
      {
        id: 22,
        studentId: 6,
        subjectId: 8,
        grade: 5,
        examDate: "10/05/2021"
      },
      {
        id: 23,
        studentId: 6,
        subjectId: 4,
        grade: 5.5,
        examDate: "04/05/2021"
      },
      {
        id: 24,
        studentId: 6,
        subjectId: 3,
        grade: 4,
        examDate: "14/04/2021"
      },
      {
        id: 25,
        studentId: 6,
        subjectId: 1,
        grade: 6,
        examDate: "23/04/2021"
      },
      {
        id: 26,
        studentId: 7,
        subjectId: 6,
        grade: 5,
        examDate: "14/02/2021"
      },
      {
        id: 27,
        studentId: 7,
        subjectId: 5,
        grade: 10,
        examDate: "04/05/2021"
      },
      {
        id: 28,
        studentId: 7,
        subjectId: 9,
        grade: 7,
        examDate: "14/03/2021"
      },
      {
        id: 29,
        studentId: 7,
        subjectId: 10,
        grade: 7,
        examDate: "04/05/2021"
      },
      {
        id: 30,
        studentId: 8,
        subjectId: 4,
        grade: 7.6,
        examDate: "04/05/2021"
      },
      {
        id: 31,
        studentId: 8,
        subjectId: 1,
        grade: 5,
        examDate: "23/04/2021"
      },
      {
        id: 32,
        studentId: 8,
        subjectId: 1,
        grade: 8,
        examDate: "23/04/2021"
      },
      {
        id: 33,
        studentId: 8,
        subjectId: 10,
        grade: 10,
        examDate: "04/05/2021"
      },
      {
        id: 34,
        studentId: 9,
        subjectId: 2,
        grade: 9,
        examDate: "14/04/2021"
      },
      {
        id: 35,
        studentId: 9,
        subjectId: 1,
        grade: 8.8,
        examDate: "23/04/2021"
      },
      {
        id: 36,
        studentId: 9,
        subjectId: 3,
        grade: 7.6,
        examDate: "14/04/2021"
      },
      {
        id: 37,
        studentId: 9,
        subjectId: 7,
        grade: 4,
        examDate: "14/03/2021"
      },
      {
        id: 38,
        studentId: 10,
        subjectId: 10,
        grade: 10,
        examDate: "04/05/2021"
      },
      {
        id: 39,
        studentId: 10,
        subjectId: 9,
        grade: 9,
        examDate: "14/03/2021"
      },
      {
        id: 40,
        studentId: 10,
        subjectId: 8,
        grade: 8,
        examDate: "10/05/2021"
      },
      {
        id: 41,
        studentId: 10,
        subjectId: 7,
        grade: 7,
        examDate: "14/03/2021"
      },
      {
        id: 42,
        studentId: 10,
        subjectId: 1,
        grade: 4,
        examDate: "23/04/2021"
      },
      {
        id: 43,
        studentId: 10,
        subjectId: 3,
        grade: 3,
        examDate: "14/04/2021"
      },
      {
        id: 44,
        studentId: 1,
        subjectId: 5,
        grade: 6,
        examDate: "04/05/2021"
      },
      {
        id: 45,
        studentId: 10,
        subjectId: 5,
        grade: 5,
        examDate: "04/05/2021"
      },
      {
        id: 46,
        studentId: 3,
        subjectId: 5,
        grade: 4,
        examDate: "04/05/2021"
      },
      {
        id: 47,
        studentId: 9,
        subjectId: 5,
        grade: 10,
        examDate: "04/05/2021"
      }
    ],
    // grade methods
  };