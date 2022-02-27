
var gJsonUser = `{
    "description": "Data user",
    "users": [
      {
        "userId": 1,
        "firstname": "Test1",
        "lastname": "User1",
        "age": 18
      },
      {
        "userId": 2,
        "firstname": "Test2",
        "lastname": "User2",
        "age": 19
      },
      {
        "userId": 3,
        "firstname": "Test3",
        "lastname": "User3",
        "age": 18
      },
      {
        "userId": 4,
        "firstname": "Test4",
        "lastname": "User4",
        "age": 20
      },
      {
        "userId": 5,
        "firstname": "Test5",
        "lastname": "User5",
        "age": 21
      },
      {
        "userId": 6,
        "firstname": "Test6",
        "lastname": "User6",
        "age": 20
      }
    ]
  }`;

// Biến mảng toàn cục chứa danh sách tên các thuộc tính
const gUSER_COLS = ["userId", "firstname", "lastname", "age", "action"];

// Biến mảng toàn cục định nghĩa chỉ số các cột tương ứng
const gUSER_ID_COL = 0;
const gUSER_FIRSTNAME_COL = 1;
const gUSER_LASTNAME_COL = 2;
const gUSER_AGE_COL = 3;
const gUSER_ACTION_COL = 4;

var gUserObj = JSON.parse(gJsonUser);
var gUserTable = $("#table-users").DataTable({
  data: gUserObj.users,
  columns: [
    { data: gUSER_COLS[gUSER_ID_COL] },
    { data: gUSER_COLS[gUSER_FIRSTNAME_COL] },
    { data: gUSER_COLS[gUSER_LASTNAME_COL] },
    { data: gUSER_COLS[gUSER_AGE_COL] },
    { data: gUSER_COLS[gUSER_ACTION_COL] }
  ],
  columnDefs: [
    {
      targets: gUSER_ACTION_COL,
      defaultContent: "<button class='btn btn-primary user-detail'>Chi tiết</button>"
    }
  ]
});

$("#table-users tbody").on("click", ".user-detail", function () {
  onUserDetailClick(this);
});

// hàm xử lý khi click vào nút user detail
function onUserDetailClick(paramUserDetailBtn) {
  var vUserDetailBtn = $(paramUserDetailBtn);
  var vTableRow = vUserDetailBtn.parents("tr");
  var vDataTableRow = gUserTable.row(vTableRow);
  var vData = vDataTableRow.data();
  /***
   * TODO: xử lý tiếp để show dữ liệu user lên Modal 
   */

  $("#input-user-id").val(vData.userId);
  $("#input-firstname").val(vData.firstname);
  $("#input-lastname").val(vData.lastname);
  $("#input-age").val(vData.age);
  $("#modal-user-detail").modal("show");
}


