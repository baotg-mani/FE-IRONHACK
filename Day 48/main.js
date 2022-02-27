"use strict";
/*** REGION 1 - Global variables - Vùng khai báo biến, hằng số, tham số TOÀN CỤC */
var gStudentId = null;
var gSubjectId = null;

// student object, chứa mảng dữ liệu sinh viên và các api đi kèm
var gStudentDb = {
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
  // method get full name
  fullname: function (paramStudentId) {
    var vIsFound = false;
    var vI = 0;
    var vStudentFullname = "";

    while (!vIsFound && vI < this.students.length) {
      if (this.students[vI].id === paramStudentId) {
        vIsFound = true;
        vStudentFullname = this.students[vI].firstname + " " + this.students[vI].lastname;
      }
      else vI++;
    }
    return vStudentFullname;
  },

  // method kiểm tra username có bị trùng hay không
  isUsernameExist: function (paramUsername) {
    var vUserNameFound = false;
    var vLoopIndex = 0;
    if (gFormMode === gFORM_MODE_INSERT) {
      while (!vUserNameFound && vLoopIndex < gStudentDb.students.length) {
        if (this.students[vLoopIndex].username === paramUsername) {
          vUserNameFound = true; // có tồn tại username
        } else {
          vLoopIndex++;
        }
      }
    }
    return vUserNameFound;
  },

  // method kiểm tra student Code có bị trùng không
  isStuCodeExist: function (paramStuCode) {
    var vStuCodeFound = false;
    var vLoopIndex = 0;
    if (gFormMode === gFORM_MODE_INSERT) {
      while (!vStuCodeFound && vLoopIndex < gStudentDb.students.length) {
        if (this.students[vLoopIndex].studentCode === paramStuCode) {
          vStuCodeFound = true; // trùng, thoát vòng lặp
        } else {
          vLoopIndex++;
        }
      }
    } else if (gFormMode === gFORM_MODE_UPDATE) {
      while (!vStuCodeFound && vLoopIndex < gStudentDb.students.length) {
        if (this.students[vLoopIndex].studentCode === paramStuCode
          && this.students[vLoopIndex].id !== gStudentId) { // được trùng với phần tử đang edit
          vStuCodeFound = true; // trùng, thoát vòng lặp
        } else {
          vLoopIndex++;
        }
      }
    }
    return vStuCodeFound;
  },

  // method kiểm tra email cóc trùng hay không
  isEmailExist: function (paramEmail) {
    var vEmailFound = false;
    var vLoopIndex = 0;
    if (gFormMode === gFORM_MODE_INSERT) {
      while (!vEmailFound && vLoopIndex < gStudentDb.students.length) {
        if (this.students[vLoopIndex].email === paramEmail) {
          vEmailFound = true; // có tồn tại email
        } else {
          vLoopIndex++;
        }
      }
    } else if (gFormMode === gFORM_MODE_UPDATE) {
      while (!vEmailFound && vLoopIndex < gStudentDb.students.length) {
        if (this.students[vLoopIndex].email === paramEmail
          && this.students[vLoopIndex].id !== gUserId) {
          vEmailFound = true; // có tồn tại email
        } else {
          vLoopIndex++;
        }
      }
    }
    return vEmailFound;
  }
};

// subject object, chứa mảng dữ liệu môn học và các api đi kèm
var gSubjectDb = {
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
  // method get subject name
  getSubjectName: function (paramSubjectId) {
    var vIsFound = false;
    var vI = 0;
    var vSubjectName = "";

    while (!vIsFound && vI < this.subjects.length) {
      if (this.subjects[vI].id === paramSubjectId) {
        vIsFound = true;
        vSubjectName = this.subjects[vI].subjectName;
      }
      else vI++;
    }
    return vSubjectName;
  },
  // method kiểm tra môn học thêm mới có bị trùng hay không
  isSubCodeExist: function (paramSubCode) {
    var vSubCodeFound = false;
    var vLoopIndex = 0;
    if (gFormMode === gFORM_MODE_INSERT) {
      while (!vSubCodeFound && vLoopIndex < gSubjectDb.subjects.length) {
        if (this.subjects[vLoopIndex].subjectCode === paramSubCode) {
          vSubCodeFound = true; // trùng, thoát vòng lặp
        } else {
          vLoopIndex++;
        }
      }
    } else if (gFormMode === gFORM_MODE_UPDATE) {
      while (!vSubCodeFound && vLoopIndex < gSubjectDb.subjects.length) {
        if (this.subjects[vLoopIndex].subjectCode === paramSubCode
          && this.subjects[vLoopIndex].id !== gSubjectId) { // được trùng với phần tử đang edit
          vSubCodeFound = true; // trùng, thoát vòng lặp
        } else {
          vLoopIndex++;
        }
      }
    }
    return vSubCodeFound;
  }
};

/*lưu ý: khi xử lý hãy bọc Object ra ngoài, và có các filter để dễ làm hơn, ko nên làm trực tiếp
với array, grades*/
var gGradeDb = {
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
  // method thực hiện filter grades
  filterGrades: function (paramFilterObj) {
    var vGrades = [];
    // cần thực hiện trả lại 01 array để display trong bảng
    vGrades = this.grades.filter(function (paramGrade) {
      return (
        (paramFilterObj.studentId == 0 || paramGrade.studentId == paramFilterObj.studentId) &&
        (paramFilterObj.subjectId == 0 || paramGrade.subjectId == paramFilterObj.subjectId)
      );
    });
    return vGrades;
  },
  // method find Index by Id
  findIndexById: function (paramId) {
    for (var bI = 0; bI < this.grades.length; bI++) {
      if (this.grades[bI].id === paramId) {
        return bI;
      }
    }
  }
};

var gUserId = -1;

// Khai báo biến hằng lưu trữ trạng thái form
const gFORM_MODE_NORMAL = 'Normal';
const gFORM_MODE_INSERT = 'Insert';
const gFORM_MODE_UPDATE = 'Update';
const gFORM_MODE_DELETE = 'Delete';

// Biến toàn cục lưu trạng thái form, mặc định NORMAL
var gFormMode = gFORM_MODE_NORMAL;

const gDATA_COLUMN = ["stt", "studentId", "subjectId", "grade", "examDate", "action"];

const gCOULUMN_STT = 0;
const gCOULUMN_STUDENT_ID = 1;
const gCOULUMN_SUBJECT_ID = 2;
const gCOULUMN_GRADE = 3;
const gCOULUMN_EXAMDATE = 4;
const gCOULUMN_ACTION = 5;

var gStt = 1;
var gId = -1;

// Khởi tạo DataTable, gán data và mapping các columns
var gGradeTable = $("#grade-table").DataTable({
  searching: false,
  columns: [
    { data: gDATA_COLUMN[gCOULUMN_STT] },
    { data: gDATA_COLUMN[gCOULUMN_STUDENT_ID] },
    { data: gDATA_COLUMN[gCOULUMN_SUBJECT_ID] },
    { data: gDATA_COLUMN[gCOULUMN_GRADE] },
    { data: gDATA_COLUMN[gCOULUMN_EXAMDATE] },
    { data: gDATA_COLUMN[gCOULUMN_ACTION] },
  ],
  // định nghĩa lại 02 cột studentId và SubjectId, để mapping
  columnDefs: [
    {
      targets: gCOULUMN_STT,
      render: function (data, type, full, meta) {
        return getSoThuTu();
      }
    },
    {
      targets: gCOULUMN_STUDENT_ID,
      // render lại cột studentId, thay bằng fullname
      render: function (data, type, full, meta) {
        return gStudentDb.fullname(data);
      }
    },
    {
      targets: gCOULUMN_SUBJECT_ID,
      // render lại cột subjectId, thay bằng subject name
      render: function (data, type, full, meta) {
        return gSubjectDb.getSubjectName(data);
      }
    },
    {
      targets: gCOULUMN_ACTION,
      defaultContent: `
      <button class='btn btn-primary btn-sm edit'><i class="far fa-edit mr-1"></i>EDIT</button>
      <button class='btn btn-danger btn-sm delete'>
        <i class='far fa-trash-alt mr-1'></i>DELETE
      </button> `
    }
  ]
});

/*** REGION 2 - Vùng gán / thực thi hàm xử lý sự kiện cho các elements */
// load trang
onPageLoading();

// xử lý hàm click filter
$("#btn-filter-data").on("click", onButtonFilterDataClick);

// gán sự kiện click vào button Thêm
$("#add-new").on("click", function () {
  onAddBtnClick();
});

// xử lý sự kiện khi ẩn Modal Student
$("#modal-student").on("hidden.bs.modal", function () {
  $("#modal-subject").modal("show");
  resetData();
});

// xử lý sự kiện khi ẩn Modal Subject
$("#modal-subject").on("hidden.bs.modal", function () {
  $("#modal-grade").modal("show");
  resetData();
});

// xử lý sự kiện khi ẩn Modal Grade
$("#modal-grade").on("hidden.bs.modal", function () {
  resetData();
});

// gán sự kiện click cho btn Save (student)
$("#save-student").click(function () {
  onSaveStuClick();
});

// gán sự kiện click cho btn Save (subject)
$("#save-subject").click(function () {
  onSaveSubClick();
});

// gán sự kiện click cho btn Save (grade)
$("#btn-save-grade").on("click", onSaveGradeClick);

// gán sự kiện click icon Edit
$(document).on("click", ".edit", function () {
  onBtnEditClick(this);
});

// gán sự kiện click icon Delete
$(document).on("click", ".delete", function () {
  onBtnDeleteClick(this);
});

// gán sự kiện click btn Confirm delete
$("#btn-confirm-delete").on("click", onBtnConfirmDelClick);

/*** REGION 3 - Event handlers - Vùng khai báo các hàm xử lý sự kiện */
// hàm xử lý sự kiện load trang
function onPageLoading() {
  loadGradeArrToTable(gGradeDb.grades);
  loadDataToStudentSelect();
  loadDataToSubjectSelect();
  loadSelectStuInModal();
  loadSelectSubInModal();
}

// Hàm filer dữ liệu theo điều kiện
function onButtonFilterDataClick() {
  // khai báo đối tượng chứa các tham số filter
  var vGradeFilterData = {
    studentId: "",
    subjectId: ""
  };
  // 1. đọc dữ liệu
  getGradeFilterData(vGradeFilterData);
  // 2. validate
  // bỏ qua bước validate này

  // 3. xử lý nghiệp vụ lọc dữ liệu, tại front-end (ko có gọi server)
  var vGradeResult = gGradeDb.filterGrades(vGradeFilterData);
  // 4 hiện thị dữ liệu
  loadGradeArrToTable(vGradeResult);
}

// Hàm xử lý sự kiện click của btn Thêm
function onAddBtnClick() {
  "use strict";
  // cập nhật trạng thái
  gFormMode = gFORM_MODE_INSERT;
  // hiển thị modal thêm new student (và các modal)
  $("#modal-student").modal("show");
}

// Hàm xử lý sự kiện khi click Save (student)
function onSaveStuClick() {
  // 0: khai báo biến lưu trữ
  var vNewStu = {
    id: gStudentDb.students[gStudentDb.students.length - 1].id + 1,
    studentCode: -1,
    username: "",
    firstname: "",
    lastname: "",
    birthday: "",
    email: "",
    studyYear: -1
  };
  // B1: thu thập dữ liệu
  getStudentOnForm(vNewStu);

  // B2: validate dữ liệu
  var vIsDataValid = validateStu(vNewStu);

  if (vIsDataValid) {
    // B3: xử lý dữ liệu
    // thêm dữ liệu Học sinh vào Cơ sở dữ liệu
    gStudentDb.students.push(vNewStu);
    console.log(gStudentDb.students);

    // B4: xử lý hiển thị
    $("#modal-student").modal("hide");
    $("#select-student-filter").empty(); // reset select stu
    loadDataToStudentSelect();
    loadSelectStuInModal();
    // thông báo
    toastr.success("Đã thêm học sinh vào dữ liệu");
    resetData();
  }
}

// Hàm xử lý sự kiện khi click Save (subject)
function onSaveSubClick() {
  "use strict"
  // B0: khai báo biến lưu trữ dữ liệu
  var vNewSub = {
    id: gSubjectDb.subjects[gSubjectDb.subjects.length - 1].id + 1,
    subjectCode: "",
    subjectName: "",
    credit: null
  };
  // B1: thu thập dữ liệu
  getSubjectOnForm(vNewSub);

  // B2: validate dữ liệu
  var vIsDataValid = validateSub(vNewSub);
  if (vIsDataValid) {
    // B3: xử lý dữ liệu
    // thêm Môn học vào Cơ sở dữ liệu
    gSubjectDb.subjects.push(vNewSub);
    console.log(gSubjectDb.subjects);

    // B4: xử lý hiển thị
    $("#modal-subject").modal("hide");
    $("#select-subject-filter").empty(); // reset select sub
    loadDataToSubjectSelect();
    loadSelectSubInModal();
    // thông báo
    toastr.success("Đã thêm môn học vào dữ liệu");
    resetData();
  }
}

// Ham xu ly su kien khi click Save (grade)
function onSaveGradeClick() {
  if (gFormMode === gFORM_MODE_INSERT) {
    // B0: khai bao bien luu du lieu
    var vNewGrade = {
      id: gGradeDb.grades[gGradeDb.grades.length - 1].id + 1,
      studentId: -1,
      subjectId: -1,
      grade: -1,
      examDate: ""
    }
    // B1: thu thap du lieu
    getGradeonForm(vNewGrade);
    // B2: validate du lieu
    var vIsDataValid = validateGrade(vNewGrade);
    if (vIsDataValid) {
      // B3: xu ly du lieu
      gGradeDb.grades.push(vNewGrade);
      // B4: xu ly hien thi
      loadGradeArrToTable(gGradeDb.grades);
      $("#modal-grade").modal("hide");
      resetData();
    }
  } else { // trạng thái Edit
    // B0: khai bao bien luu du lieu
    var vEditObj = {
      studentId: -1,
      subjectId: -1,
      grade: -1,
      examDate: ""
    }
    // B1: thu thap du lieu
    getGradeonForm(vEditObj);
    // B2: validate du lieu
    var vIsDataValid = validateGrade(vEditObj);
    if (vIsDataValid) {
      // B3: xu ly du lieu
      gGradeDb.grades[gGradeDb.findIndexById(gId)].studentId = vEditObj.studentId;
      gGradeDb.grades[gGradeDb.findIndexById(gId)].subjectId = vEditObj.subjectId;
      gGradeDb.grades[gGradeDb.findIndexById(gId)].grade = vEditObj.grade;
      gGradeDb.grades[gGradeDb.findIndexById(gId)].examDate = vEditObj.examDate;
      // B4: xu ly hien thi
      loadGradeArrToTable(gGradeDb.grades);
      $("#modal-grade").modal("hide");
      resetData();
    }
  }
}

// Hàm xử lý sự kiện click btn Edit
function onBtnEditClick(paramEdit) {
  "use strict";
  // đổi trạng thái: update
  gFormMode = gFORM_MODE_UPDATE;
  // B0: khai báo biến lưu trữ dữ liệu
  var vRowDataObj = {};

  // B1: thu thập dữ liệu
  var vTableRow = $(paramEdit).parents("tr");
  vRowDataObj = gGradeTable.row(vTableRow).data();

  // B2: validate dữ liệu (bỏ qua)
  // B3: xử lý dữ liệu
  gId = vRowDataObj.id;
  // B4: xử lý hiển thị
  $("#select-student-modal").val(vRowDataObj.studentId);
  $("#select-subject-modal").val(vRowDataObj.subjectId);
  $("#inp-grade").val(vRowDataObj.grade);
  $("#inp-examdate").val(vRowDataObj.examDate);
  $("#modal-grade").modal("show");
}

// Hàm xử lý sự kiện click btn Delete
function onBtnDeleteClick(paramDelete) {
  "use strict";
  // đổi trạng thái: update
  gFormMode = gFORM_MODE_UPDATE;
  // B0: khai báo biến lưu trữ dữ liệu
  var vRowDataObj = {};

  // B1: thu thập dữ liệu
  var vTableRow = $(paramDelete).parents("tr");
  vRowDataObj = gGradeTable.row(vTableRow).data();

  // B2: validate dữ liệu (bỏ qua)
  // B3: xử lý dữ liệu
  gId = vRowDataObj.id;
  // B4: xử lý hiển thị
  $("#modal-delete").modal("show");
}

// Hàm xử lý sự kiện click btn Confirm delete
function onBtnConfirmDelClick() {
  // B1: thu thập dữ liệu
  var vIndex = gGradeDb.findIndexById(gId);
  // B2: validate (bỏ qua)
  // B3: xử lý dữ liệu
  gGradeDb.grades.splice(vIndex, 1);
  // B4: hiển thị
  toastr.success("Xóa thành công");     // thông báo
  loadGradeArrToTable(gGradeDb.grades); // load lại table grade
  $("#modal-delete").modal("hide");
}

/*** REGION 4 - Common funtions - Vùng khai báo hàm dùng chung trong toàn bộ chương trình */
// Hàm thu thập dữ liệu học sinh mới
function getStudentOnForm(paramNewStu) {
  // debugger;
  paramNewStu.username = $("#inp-username").val().trim();
  paramNewStu.studentCode = parseInt($("#inp-studentcode").val().trim());
  paramNewStu.firstname = $("#inp-firstname").val().trim();
  paramNewStu.lastname = $("#inp-lastname").val().trim();
  paramNewStu.birthday = $("#inp-birthday").val().trim();
  paramNewStu.email = $("#inp-email").val().trim();
  paramNewStu.studyYear = parseInt($("#inp-studyyear").val().trim());
}

// Hàm thu thập dữ liệu môn học mới
function getSubjectOnForm(paramNewSub) {
  paramNewSub.subjectCode = $("#inp-subject-code").val().trim();
  paramNewSub.subjectName = $("#inp-subject-name").val().trim();
  paramNewSub.credit = parseInt($("#inp-credit").val().trim());
}

// Ham thu thap du lieu diem (grade) moi
function getGradeonForm(paramNewGrade) {
  paramNewGrade.studentId = parseInt($("#select-student-modal").val());
  paramNewGrade.subjectId = parseInt($("#select-subject-modal").val());
  paramNewGrade.grade = parseInt($("#inp-grade").val().trim());
  paramNewGrade.examDate = $("#inp-examdate").val();
}

// Ham validate grade
function validateGrade(paramNewGrade) {
  if (paramNewGrade.studentId == 0) {
    toastr.error("Chưa chọn sinh viên");
    $("#select-student-modal").focus();
    return false;
  }
  if (paramNewGrade.subjectId == 0) {
    toastr.error("Chưa chọn môn học");
    $("#select-subject-modal").focus();
    return false;
  }
  if (paramNewGrade.grade < 0 || paramNewGrade.grade > 10) {
    toastr.error("Điểm không nhỏ hơn 0 và không lớn hơn 10");
    $("#inp-grade").focus();
    return false;
  }
  if (isNaN(paramNewGrade.grade)) {
    toastr.error("Cần điền giá trị là 1 số tại trường nhập điểm");
    $("#inp-grade").focus();
    return false;
  }
  if (paramNewGrade.examDate === "") {
    toastr.error("Chưa điền ngày kiểm tra/thi");
    $("#inp-examdate").focus();
    return false;
  }
  return true;
}

// Hàm validate subject
function validateSub(paramNewSub) {
  if (paramNewSub.subjectCode == "") {
    toastr.error("Thiếu mã môn học");
    return false;
  }
  if (gSubjectDb.isSubCodeExist(paramNewSub.subjectCode)) {
    toastr.error("Trùng mã môn học");
    return false;
  }
  if (paramNewSub.subjectName == "") {
    toastr.error("Thiếu tên môn học");
    return false;
  }
  if (isNaN(paramNewSub.credit)) {
    toastr.error("Cần điền giá trị số tại trường nhập tín chỉ");
    return false;
  }
  if (paramNewSub.credit <= 0 || paramNewSub.credit >= 20) {
    toastr.error("Số lượng tín chỉ không hợp lệ (0 < credit < 20)");
    return false;
  }

  return true;
}

// Hàm validate student
function validateStu(paramNewStu) {
  if (gStudentDb.isUsernameExist(paramNewStu.username)) {
    toastr.error("Trùng username");
    $("#inp-username").focus();
    return false;
  }
  if (paramNewStu.username === "") {
    toastr.error("Thiếu username")
    $("#inp-username").focus();
    return false;
  }
  if (gStudentDb.isStuCodeExist(paramNewStu.studentCode)) {
    toastr.error("Trùng student code");
    $("#inp-studentcode").focus();
    return false;
  }
  if (isNaN(paramNewStu.studentCode)) {
    toastr.error("Student code phải là một số");
    $("#inp-studentcode").focus();
    return false;
  }
  if (paramNewStu.firstname === "") {
    toastr.error("Thiếu firstname");
    $("#inp-firstname").focus();
    return false;
  }
  if (paramNewStu.lastname === "") {
    toastr.error("Thiếu lastname");
    $("#inp-lastname").focus();
    return false;
  }
  if (paramNewStu.birthday === "") {
    toastr.error("Thiếu ngày sinh");
    $("#inp-birthday").focus();
    return false;
  }
  if (!validateEmail(paramNewStu.email) || paramNewStu.email === "") {
    toastr.error("Email không hợp lệ");
    $('#inp-email').focus();
    return false;
  }
  if (gStudentDb.isEmailExist(paramNewStu.email)) {
    toastr.error("Trùng email");
    $('#inp-email').focus();
    return false;
  }
  if (!Number.isInteger(paramNewStu.studyYear) || paramNewStu.studyYear <= 2000 || isNaN(paramNewStu.studyYear)) {
    toastr.error("Năm học phải là một số lớn hơn 2000");
    $("#inp-studyyear").focus();
    return false;
  }
  return true;
}

// Hàm validate Email
function validateEmail(paramEmail) {
  var vEmailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
  return vEmailReg.test(paramEmail);
}

// hàm tạo ra STT
function getSoThuTu() {
  return gStt++;
}

// load student select
function loadDataToStudentSelect() {
  var vStudentSelect = $("#select-student-filter");

  var vStudentOption = $("<option/>", {
    value: 0,
    text: "--- Tất cả ---"
  }).appendTo(vStudentSelect);

  for (var bI = 0; bI < gStudentDb.students.length; bI++) {
    var vStudentOption = $("<option/>", {
      value: gStudentDb.students[bI].id,
      text: gStudentDb.fullname(gStudentDb.students[bI].id)
    }).appendTo(vStudentSelect);
  }
}

// load subject select
function loadDataToSubjectSelect() {
  var vSubjectSelect = $("#select-subject-filter");

  var vSubjectOption = $("<option/>", {
    value: 0,
    text: "--- Tất cả ---"
  }).appendTo(vSubjectSelect);

  for (var bI = 0; bI < gSubjectDb.subjects.length; bI++) {
    var vSubjectOption = $("<option/>", {
      value: gSubjectDb.subjects[bI].id,
      text: gSubjectDb.getSubjectName(gSubjectDb.subjects[bI].id)
    }).appendTo(vSubjectSelect);
  }
}

// load grade array to data table
function loadGradeArrToTable(paramGradeArr) {
  gStt = 1;
  gGradeTable.clear();
  gGradeTable.rows.add(paramGradeArr);
  gGradeTable.draw();
}

// load student Select in Modal
function loadSelectStuInModal() {
  var vStuSelect = $("#select-student-modal");

  var vStuOption = $("<option/>", {
    value: 0,
    text: "--- Chọn sinh viên ---"
  }).appendTo(vStuSelect);

  for (var bI = 0; bI < gStudentDb.students.length; bI++) {
    var vStuOption = $("<option/>", {
      value: gStudentDb.students[bI].id,
      text: gStudentDb.fullname(gStudentDb.students[bI].id)
    }).appendTo(vStuSelect);
  }
}

// load subject Select inModal
function loadSelectSubInModal() {
  var vSubjectSelect = $("#select-subject-modal");

  var vSubOption = $("<option/>", {
    value: 0,
    text: "--- Chọn môn học ---"
  }).appendTo(vSubjectSelect);

  for (var bI = 0; bI < gSubjectDb.subjects.length; bI++) {
    var vSubjectOption = $("<option/>", {
      value: gSubjectDb.subjects[bI].id,
      text: gSubjectDb.subjects[bI].subjectName
    }).appendTo(vSubjectSelect);
  }
}

// ham thu thap du lieu de filter
function getGradeFilterData(paramGradeFilter) {
  paramGradeFilter.studentId = $("#select-student-filter").val();
  paramGradeFilter.subjectId = $("#select-subject-filter").val();
}

// hàm reset dữ liệu
function resetData() {
  gFormMode = gFORM_MODE_NORMAL;
  $("#inp-username").val("");
  $("#inp-studentcode").val("");
  $("#inp-firstname").val("");
  $("#inp-lastname").val("");
  $("#inp-birthday").val("");
  $("#inp-email").val("");
  $("#inp-studyyear").val("");
  $("#inp-subject-code").val("");
  $("#inp-subject-name").val("");
  $("#inp-credit").val("");
  $("#select-student-modal").val("");
  $("#select-subject-modal").val("");
  $("#inp-grade").val("");
  $("#inp-examdate").val("");
}
