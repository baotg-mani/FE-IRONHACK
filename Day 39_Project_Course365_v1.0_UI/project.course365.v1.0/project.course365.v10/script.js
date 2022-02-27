/*** REGION 1 - Global variables - Vùng khai báo biến, hằng số, tham số TOÀN CỤC */
var gCoursesDB = {
    description: "This DB includes all courses in system",
    courses: [
        {
            id: 1,
            courseCode: "FE_WEB_ANGULAR_101",
            courseName: "How to easily create a website with Angular",
            price: 750,
            discountPrice: 600,
            duration: "3h 56m",
            level: "Beginner",
            coverImage: "images/courses/course-angular.jpg",
            teacherName: "Morris Mccoy",
            teacherPhoto: "images/teacher/morris_mccoy.jpg",
            isPopular: false,
            isTrending: true
        },
        {
            id: 2,
            courseCode: "BE_WEB_PYTHON_301",
            courseName: "The Python Course: build web application",
            price: 1050,
            discountPrice: 900,
            duration: "4h 30m",
            level: "Advanced",
            coverImage: "images/courses/course-python.jpg",
            teacherName: "Claire Robertson",
            teacherPhoto: "images/teacher/claire_robertson.jpg",
            isPopular: false,
            isTrending: true
        },
        {
            id: 5,
            courseCode: "FE_WEB_GRAPHQL_104",
            courseName: "GraphQL: introduction to graphQL for beginners",
            price: 850,
            discountPrice: 650,
            duration: "2h 15m",
            level: "Intermediate",
            coverImage: "images/courses/course-graphql.jpg",
            teacherName: "Ted Hawkins",
            teacherPhoto: "images/teacher/ted_hawkins.jpg",
            isPopular: true,
            isTrending: false
        },
        {
            id: 6,
            courseCode: "FE_WEB_JS_210",
            courseName: "Getting Started with JavaScript",
            price: 550,
            discountPrice: 300,
            duration: "3h 34m",
            level: "Beginner",
            coverImage: "images/courses/course-javascript.jpg",
            teacherName: "Ted Hawkins",
            teacherPhoto: "images/teacher/ted_hawkins.jpg",
            isPopular: true,
            isTrending: true
        },
        {
            id: 8,
            courseCode: "FE_WEB_CSS_111",
            courseName: "CSS: ultimate CSS course from beginner to advanced",
            price: 750,
            discountPrice: 600,
            duration: "3h 56m",
            level: "Beginner",
            coverImage: "images/courses/course-css.jpg",
            teacherName: "Juanita Bell",
            teacherPhoto: "images/teacher/juanita_bell.jpg",
            isPopular: true,
            isTrending: true
        },
        {
            id: 14,
            courseCode: "FE_WEB_WORDPRESS_111",
            courseName: "Complete Wordpress themes & plugins",
            price: 1050,
            discountPrice: 900,
            duration: "4h 30m",
            level: "Advanced",
            coverImage: "images/courses/course-wordpress.jpg",
            teacherName: "Clevaio Simon",
            teacherPhoto: "images/teacher/clevaio_simon.jpg",
            isPopular: true,
            isTrending: false
        }
    ],

    // method up courses to div_popular
    upPopular: function () {
        "use strict";
        var vDivPopolar = $("#div_popular");
        var vCountCkeckPopular = 0; // biến kiểm soát số lượng course up lên

        for (let bI = 0; bI < this.courses.length; bI++) {

            // polular
            if (this.courses[bI].isPopular === true) {
                if (vCountCkeckPopular == 4)
                    return;

                var bNewCoure = $(`
                <div class="col-sm-3">
                    <div class="card border rounded">
                        <img src="${gCoursesDB.courses[bI].coverImage}" alt="">
                        <div class="card-body">
                        <h6 class="card-title text-primary" href="#">${gCoursesDB.courses[bI].courseName}</h6>
                        <div class="form-inline mt-1">
                            <i class="far fa-clock"></i>
                            <label class="card-text ml-1" for="">${gCoursesDB.courses[bI].duration}</label>
                            <label class="card-text ml-2" for="">${gCoursesDB.courses[bI].level}</label>
                        </div>
                        <label class="mt-3" for=""><b>${gCoursesDB.courses[bI].discountPrice} </b><s class="text-muted">${gCoursesDB.courses[bI].price}</s></label>
                        </div>
                        <div class="card-footer">
                        <div class="form-inline">
                            <img class="rounded-circle" style="width:2rem" src="${gCoursesDB.courses[bI].teacherPhoto}" alt="">
                            <small class="ml-3 mr-5">${gCoursesDB.courses[bI].teacherName}</small>
                            <i class="far fa-bookmark text-muted ml-4"></i>
                        </div>
                        </div>
                    </div>
                </div>
                `).appendTo(vDivPopolar);
                vCountCkeckPopular++;
            }
        }
    },

    // method up courses to div_trending
    upTrending: function () {
        "use strict";
        var vDivTrending = $("#div_trending");
        var vCountCkeckTrending = 0;// biến kiểm soát số lượng course up lên
        for (let bI = 0; bI < this.courses.length; bI++) {
            // trending
            if (this.courses[bI].isTrending === true) {
                if (vCountCkeckTrending == 4)
                    return;

                debugger;
                var bNewCoure = $(`
                <div class="col-sm-3">
                    <div class="card border rounded">
                        <img src="${gCoursesDB.courses[bI].coverImage}" alt="">
                        <div class="card-body">
                        <h6 class="card-title text-primary" href="#">${gCoursesDB.courses[bI].courseName}</h6>
                        <div class="form-inline mt-1">
                            <i class="far fa-clock"></i>
                            <label class="card-text ml-1" for="">${gCoursesDB.courses[bI].duration}</label>
                            <label class="card-text ml-2" for="">${gCoursesDB.courses[bI].level}</label>
                        </div>
                        <label class="mt-3" for=""><b>${gCoursesDB.courses[bI].discountPrice} </b><s class="text-muted">${gCoursesDB.courses[bI].price}</s></label>
                        </div>
                        <div class="card-footer">
                        <div class="form-inline">
                            <img class="rounded-circle" style="width:2rem" src="${gCoursesDB.courses[bI].teacherPhoto}" alt="">
                            <small class="ml-3 mr-5">${gCoursesDB.courses[bI].teacherName}</small>
                            <i class="far fa-bookmark text-muted ml-4"></i>
                        </div>
                        </div>
                    </div>
                </div>
                `).appendTo(vDivTrending);
                vCountCkeckTrending++;
            }
        }
    }
}

/*** REGION 2 - Vùng gán / thực thi hàm xử lý sự kiện cho các elements */
$(document).ready(function () {
    onPageLoading();
});
/*** REGION 3 - Event handlers - Vùng khai báo các hàm xử lý sự kiện */
// Hàm xử lý sự kiện khi load trang
function onPageLoading() {
    gCoursesDB.upPopular();
    gCoursesDB.upTrending();
}
/*** REGION 4 - Common funtions - Vùng khai báo hàm dùng chung trong toàn bộ chương trình*/
