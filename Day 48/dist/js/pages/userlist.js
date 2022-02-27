/*** REGION 1 - Global variables - Vùng khai báo biến, hằng số, tham số TOÀN CỤC */
/* Mảng userObjects là mảng chứa dữ liệu user. Từng phần tử là object
* id: tự tăng lên 1. Ví dụ, hiện id lớn nhất là 6, thì khi thêm user mới, id sẽ là 7
*/
var gUserDb = {
  users: [
    {
      id: 2,
      username: "quannv",
      firstname: "Quan",
      lastname: "Ngo Van",
      age: 18,
      email: "quan@gmail.com",
      roleId: 5
    },
    {
      id: 3,
      username: "longdh",
      firstname: "Long",
      lastname: "Do Hoang",
      age: 19,
      email: "long@gmail.com",
      roleId: 8
    },
    {
      id: 4,
      username: "hiendt",
      firstname: "Hien",
      lastname: "Do Thi",
      age: 29,
      email: "hien@gmail.com",
      roleId: 11
    },
    {
      id: 6,
      username: "lanht",
      firstname: "Lan",
      lastname: "Ho Thi",
      age: 27,
      email: "lan@gmail.com",
      roleId: 13
    }
  ],

  // method filter user by role
  filterUser: function (paramRoleVal) {
    var vResultArr = [];
    vResultArr = this.users.filter(e => paramRoleVal == e.roleId || paramRoleVal == 0)
    return vResultArr;
  },

  // method add new user (creat) OR edit (update)
  addNewOrEdit: function (paramUser) {
    if (gFormMode === gFORM_MODE_INSERT) {
      // thêm mới, vào cuối mảng
      this.users.push(paramUser);
    } else {
      // sửa, update vào đúng user location
      var vUserIndex = gUserDb.findIndexByUserId(paramUser.id);
      this.users.splice(vUserIndex, 1, paramUser);
    }
  },

  // method delete user
  deleteUser: function () {
    // lấy về index của phần tử user trong Arr dựa vào Id lấy bằng username
    var vUserIndex = gUserDb.findIndexByUserId(gUserId);
    // xóa 
    this.users.splice(vUserIndex, 1);
  },

  // method get userId from icon button
  // input: icon element, out put: userId
  findIdByIcon: function (paramIcon) {
    var vTableRow = $(paramIcon).parents("tr");
    var vUserRowData = gUserTable.row(vTableRow).data();
    // tìm id thông qua username vì username là duy nhất
    var vUserNameRow = vUserRowData.username;
    for (var bI = 0; bI < gUserDb.users.length; bI++) {
      if (vUserNameRow === gUserDb.users[bI].username) {
        return gUserDb.users[bI].id;
      }
    }
  },

  // method get user Index in arr by user Id
  // input: userId, output: Index of element
  findIndexByUserId: function (paramUserId) {
    var vUserIndex = -1;
    var vUserFound = false;
    var vLoopIndex = 0;
    while (!vUserFound && vLoopIndex < gUserDb.users.length) {
      if (gUserDb.users[vLoopIndex].id === paramUserId) {
        vUserIndex = vLoopIndex;
        vUserFound = true;
      }
      else {
        vLoopIndex++;
      }
    }
    return vUserIndex;
  },

  // method check username used to exist or not
  // input: username, output: boolean (vFound)
  isExistUsername: function (paramUsername) {
    var vFound = false;
    var vIndex = 0;
    if (gFormMode === gFORM_MODE_INSERT) { //thêm mới, ko được trùng
      while (!vFound && vIndex < gUserDb.users.length) {
        if (paramUsername === gUserDb.users[vIndex].username) {
          alert("Trùng username");
          vFound = true;
        } else {
          vIndex++;
        }
      }
    } else { //sửa, chỉ đc trùng với chính dòng đang sửa
      while (!vFound && vIndex < gUserDb.users.length) {
        if (paramUsername === gUserDb.users[vIndex].username && gUserId != gUserDb.users[vIndex].id) {
          alert("Trùng username");
          vFound = true;
        } else {
          vIndex++;
        }
      }
    }
    return vFound;
  },

  // method check email used to exist or not
  // input: email, output: boolean
  isExistEmail: function (paramEmail) {
    var vFound = false;
    var vIndex = 0;
    if (gFormMode === gFORM_MODE_INSERT) { // thêm mới, ko đc trùng
      while (!vFound && vIndex < gUserDb.users.length) {
        if (paramEmail === gUserDb.users[vIndex].email) {
          alert("Trùng email");
          vFound = true;
        } else {
          vIndex++;
        }
      }
    } else { // sửa, chỉ đc trùng với dòng đang sửa
      while (!vFound && vIndex < gUserDb.users.length) {
        if (paramEmail === gUserDb.users[vIndex].email && gUserId != gUserDb.users[vIndex].id) {
          alert("Trùng email");
          vFound = true;
        } else {
          vIndex++;
        }
      }
    }
    return vFound;
  }
}

var gRoleDb = {
  roles: [
    {
      roleId: 5,
      roleName: "Admin"
    },
    {
      roleId: 8,
      roleName: "Manager"
    },
    {
      roleId: 11,
      roleName: "Teacher"
    },
    {
      roleId: 13,
      roleName: "Staff"
    }
  ],

  // method render roleName
  renderRoleName: function (paramRoleId) {
    var vRoleName = "";
    for (var bI = 0; bI < gRoleDb.roles.length; bI++) {
      if (paramRoleId === gRoleDb.roles[bI].roleId) {
        vRoleName = gRoleDb.roles[bI].roleName;
      }
    }
    return vRoleName;
  }
};

/** Các biến toàn cục hằng số Form mode: 4 trạng thái của form. Mặc định sẽ là Normal
* Khi ấn vào nút Thêm, cần đổi biến trạng thái về trạng thái Insert
* Khi ấn vào nút Sửa, cần đổi biến trạng thái về trạng thái Update
* Khi ấn vào nút Xóa, cần đổi biến trạng thái về trạng thái Delete
* Tại một thời điểm, trạng thái của form luôn là 1 trong 4 trạng thái
*/
var gFORM_MODE_NORMAL = "Normal";
var gFORM_MODE_INSERT = "Insert";
var gFORM_MODE_UPDATE = "Update";
var gFORM_MODE_DELETE = "Delete";

// biến toàn cục cho trạng thái của form: mặc định ban đầu là trạng thái Normal
var gFormMode = gFORM_MODE_NORMAL;

// Biến toàn cục để lưu trữ id user đang đc update or delete. Mặc định = 0;
var gUserId = 0;

// Biến mảng hằng số chứa danh sách tên các thuộc tính
const gUSER_COLS = ["stt", "username", "firstname", "lastname", "email", "age", "roleId", "action"];

// Biến mảng toàn cục định nghĩa chỉ số các cột tương ứng
const gSTT_COL = 0;
const gUNAME_COL = 1;
const gFNAME_COL = 2;
const gLNAME = 3;
const gEMAIL_COL = 4;
const gAGE_COL = 5;
const gROLE_COL = 6;
const gACTION_COL = 7;

// Biến toàn cục để hiển lưu STT
var gSTT = 1;
// Khai báo DataTable & mapping collumns
var gUserTable = $("#user-table").DataTable({
  columns: [
    { data: gUSER_COLS[gSTT_COL] },
    { data: gUSER_COLS[gUNAME_COL] },
    { data: gUSER_COLS[gFNAME_COL] },
    { data: gUSER_COLS[gLNAME] },
    { data: gUSER_COLS[gEMAIL_COL] },
    { data: gUSER_COLS[gAGE_COL] },
    { data: gUSER_COLS[gROLE_COL] },
    { data: gUSER_COLS[gACTION_COL] }
  ],
  columnDefs: [
    { // định nghĩa lại cột STT
      targets: gSTT_COL,
      render: function () {
        return gSTT++;
      }
    },
    {
      targets: gROLE_COL,
      render: function (dataId) {
        return gRoleDb.renderRoleName(dataId);
      }
    },
    { // định nghĩa lại cột action
      targets: gACTION_COL,
      defaultContent: `
      <img class="edit-user" src="https://cdn0.iconfinder.com/data/icons/glyphpack/45/edit-alt-512.png" style="width: 20px;cursor:pointer;">
      <img class="delete-user" src="https://cdn4.iconfinder.com/data/icons/complete-common-version-6-4/1024/trash-512.png" style="width: 20px;cursor:pointer;">
    `
    }
  ]
});

/*** REGION 2 - Vùng gán / thực thi sự kiện cho các elements */
onPageLoading();

// Gán sự kiện vào btn Lọc dữ liệu (filter)
$("#btn-filter").on("click", function () {
  onBtnFilterClick();
});

// 2 - C: gán sự kiện Create - Thêm mới voucher
$("#btn-add-user").on("click", function () {
  onBtnAddNewUserClick();
});
// 3 - U: gán sự kiện Update - Sửa 1 voucher
$("#user-table").on("click", ".edit-user", function () {
  onIconEditUserClick(this);
});

// 4 - D: gán sự kiện Delete - Xóa 1 user
$("#user-table").on("click", ".delete-user", function () {
  onIconDeleteUserClick(this);
});

// thêm sự kiện cho nút Save Voucher
$("#btn-save-data").on("click", function () {
  onBtnSaveUserClick();
});

//thêm sự kiện cho nút Delete confirm
$("#btn-confirm-delete-user").on("click", function () {
  onBtnDeleteUserClick();
});

//reset dữ liệu khi ẩn modal user
$('#user-modal').on('hidden.bs.modal', function () {
  resetUserData();
})

//reset dữ liệu khi ẩn modal confirm delete
$('#delete-confirm-modal').on('hidden.bs.modal', function () {
  resetUserData();
})

/*** REGION 3 - Event handlers - Vùng khai báo các hàm xử lý sự kiện */
// Hàm xử lý sự kiện load trang
function onPageLoading() {
  "use strict";
  // load role list
  loadRoleList(gRoleDb.roles);
  // 1 - R: Read / Load data to DataTable
  loadDataToTable(gUserDb.users);
  // hiển thị formMode
  $("#div-form-mod").html(gFormMode);
}

// Hàm xử lý sự kiện click vào btn Thêm người dùng
function onBtnAddNewUserClick() {
  "use strict";
  // chuyển đổi trạng thái form về update
  gFormMode = gFORM_MODE_INSERT;
  // load role list
  loadRoleListModal(gRoleDb.roles);
  // hiển thị formMode
  $("#div-form-mod").html(gFormMode);
  // hiển thị modal insert
  $("#user-modal").modal("show");

}

// Hàm xử lý sự kiện click vào btn Lọc
function onBtnFilterClick() {
  "use strict";
  // B1: thu thập dữ liệu (role được select)
  var vRoleSelect = $("#select-role").find(":selected").val();
  // B2: validate dữ liệu (bỏ qua)
  // B3: xử lý dữ liệu
  var vFilterArray = gUserDb.filterUser(vRoleSelect);
  // B4: xử lý sự kiện hiển thị 
  loadDataToTable(vFilterArray);
}

// Hàm xử lý sự kiện khi icon edit user trên bảng đc click
function onIconEditUserClick(paramIconEdit) {
  "use strict";
  // chuyển đổi trạng thái form về update
  gFormMode = gFORM_MODE_UPDATE;

  // hiện form mode lên màn hình
  $("#div-form-mod").html(gFormMode);
  // load role list
  loadRoleListModal(gRoleDb.roles);
  // lưu thông tin userId đang được edit vào biến toàn cục
  gUserId = gUserDb.findIdByIcon(paramIconEdit);
  // load dữ liệu vào các trường dữ liệu trong modal
  showUserDataToModal(gUserId);
  // hiển thị modal lên
  $("#user-modal").modal("show");
}

// Hàm xủ lý dự kiện khi icon delete user được click
function onIconDeleteUserClick(paramIconDelete) {
  "use strict";
  // chuyển đổi trang thái form mode về delete
  gFormMode = gFORM_MODE_DELETE;
  $("#div-form-mod").html(gFormMode);
  // lưu thông tin userId đang được delete vào biến toàn cục
  gUserId = gUserDb.findIdByIcon(paramIconDelete);
  console.log("gUserId: " + gUserId);
  // hiển thị modal
  $("#delete-confirm-modal").modal("show");
}

/*** REGION 4 - Common funtions - Vùng khai báo hàm dùng chung trong toàn bộ chương trình*/
// Hàm load role list vào select
function loadRoleList(paramRoleArr) {
  "use strict";
  // debugger;
  var vSelectRole = $("#select-role");

  for (var bI = 0; bI < paramRoleArr.length; bI++) {
    var bNewOption = $("<option/>", {
      text: paramRoleArr[bI].roleName,
      value: paramRoleArr[bI].roleId
    }).appendTo(vSelectRole);
  }
}

// Hàm load role list trong modal
function loadRoleListModal(paramRoleArr) {
  "use strict";
  var vSelectRoleModal = $("#modal-select-role");

  $("<option/>", {
    text: "--- Chọn một role ---",
    value: 0
  }).appendTo(vSelectRoleModal);

  for (var bI = 0; bI < paramRoleArr.length; bI++) {
    var bNewOption = $("<option/>", {
      text: paramRoleArr[bI].roleName,
      value: paramRoleArr[bI].roleId
    }).appendTo(vSelectRoleModal);
  }
}

// Hàm load user data to table
function loadDataToTable(paramUserArr) {
  "use strict";
  gSTT = 1;
  gUserTable.clear();
  gUserTable.rows.add(paramUserArr);
  gUserTable.draw();
}

// Hàm xử lý sự kiện click btn Save Data
function onBtnSaveUserClick() {
  "use strict";
  // B0: khai báo biến lưu trữ dữ liệu new user
  var vUser = {
    id: -1,
    username: "",
    firstname: "",
    lastname: "",
    age: -1,
    email: "",
    roleId: -1
  }
  // B1: thu thập dữ liệu
  getDataOnForm(vUser);

  // B2: validate dữ liệu
  var vIsDataValid = validateData(vUser);

  if (vIsDataValid) {
    // B3: xử lý dữ liệu
    // saveUserData(vUser);
    gUserDb.addNewOrEdit(vUser);

    // B4:xử lý hiển thị
    loadDataToTable(gUserDb.users);
    // thông báo
    gFormMode === gFORM_MODE_INSERT ? alert("Thêm mới thành công") : alert("Cập nhật dữ liệu thành công");
    // ẩn modal form
    $("#user-modal").modal("hide");
    // reset dữ liệu
    resetUserData();
  }
}

// Hàm xử lý sự kiện click btn Confirm
function onBtnDeleteUserClick() {
  "use strict";
  //B0: khai báo 1 biến chưa dữ liệu (bỏ qua)
  //B1: thu thập dữ liệu (bỏ qua)
  //B2: kiểm tra dữ liệu (bỏ qua)
  //B3: xử lý dữ liệu
  gUserDb.deleteUser();

  //B4: hiển thị kết quả
  loadDataToTable(gUserDb.users);
  //thông báo
  alert("Xóa dữ liệu thành công");
  // ẩn modal form delete
  $("#delete-confirm-modal").modal("hide");
  //reset dữ liệu
  resetUserData();
}

// Hàm thu thập dữ liệu trên form
function getDataOnForm(paramUser) {
  "use strict";
  // id
  if (gFormMode === gFORM_MODE_INSERT) {
    // thêm mới (INSERT)
    paramUser.id = getNextId();
  } else {
    // sửa (EDIT)
    paramUser.id = gUserId;
  }
  // thu thập dữ liệu khác
  paramUser.username = $("#input-username").val().trim();
  paramUser.firstname = $("#input-firstname").val().trim();
  paramUser.lastname = $("#input-lastname").val().trim();
  paramUser.email = $("#input-email").val().trim();
  paramUser.age = $("#input-age").val().trim();
  paramUser.roleId = parseInt($("#modal-select-role option:selected").val());
  console.log(paramUser);
}

// hàm show user obj lên modal
function showUserDataToModal(paramUserId) {
  "use strict";
  var vUserIndex = gUserDb.findIndexByUserId(paramUserId);
  $("#input-username").val(gUserDb.users[vUserIndex].username);
  $("#input-firstname").val(gUserDb.users[vUserIndex].firstname);
  $("#input-lastname").val(gUserDb.users[vUserIndex].lastname);
  $("#input-email").val(gUserDb.users[vUserIndex].email);
  $("#input-age").val(gUserDb.users[vUserIndex].age);

  var vRoleName = gRoleDb.renderRoleName(gUserDb.users[vUserIndex].roleId);
  console.log("roleName: " + vRoleName);
  console.log("roleId: " + gUserDb.users[vUserIndex].roleId);
  $("#modal-select-role option:selected").text(vRoleName);
  $("#modal-select-role option:selected").val(gUserDb.users[vUserIndex].roleId);
}

// hàm lấy ra id user tiếp theo, khi Insert
function getNextId() {
  "use strict";
  var vNextId = 0;
  // nếu mảng rỗng, thì id sẽ chạy từ 1
  if (gUserDb.users.length == 0) {
    vNextId = 1;
  } else {
    // id tiếp theo sẽ = (id của element cuối) + 1
    vNextId = gUserDb.users[gUserDb.users.length - 1].id + 1;
  }
  return vNextId;
}

// hàm kiểm tra dữ liệu
function validateData(paramUser) {
  "use strict";
  if (gUserDb.isExistUsername(paramUser.username) || paramUser.username === "") {
    alert("Username không hợp lệ");
    return false;
  }
  if (paramUser.firstname === "") {
    alert("Firstname không hợp lệ");
    return false;
  }
  if (paramUser.lastname === "") {
    alert("Lastname không hợp lệ");
    return false;
  }
  if (!validateEmail(paramUser.email) || paramUser.email === "") {
    alert("Email không hợp lệ");
    return false;
  }
  if (gUserDb.isExistEmail(paramUser.email)) {
    alert("Trùng Email");
    return false;
  }

  return true;
}

// hàm validate email
function validateEmail(paramEmail) {
  "use strict";
  var vEmailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
  return vEmailReg.test(paramEmail);
}

// hàm reset dữ liệu
function resetUserData() {
  "use strict";
  //resest trạng thái
  gFormMode = gFORM_MODE_NORMAL;
  $("#div-form-mod").html(gFormMode);

  //reset voucherid
  gUserId = 0;

  //reset modal form
  $("#input-username").val("");
  $("#input-firstname").val("");
  $("#input-lastname").val("");
  $("#input-email").val("");
  $("#input-age").val("");
  $("#modal-select-role").empty();
}
