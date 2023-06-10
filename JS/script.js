var data = {
  "subject": [
    {
      "subjectname": "lý thuyết đồ thị",
      "subjectid": "ct175",
      "image": "image/8022682955_421bc6ff5a_b-e1629676847648.webp",
      "hard": "5",
      "author": "Gia Bảo",
      "detail": "Document/CT175.pdf",
      "describe": "Đi sâu nghiên cứu về đồ thị, các thuật toán liên quan tới đồ thị khó vải ra mà các em phải hiểu và học thuộc. Có code tổng hợp thi cuối kỳ nhưng phải hiểu bài nha.",
      "documentname": {
        "1": "Code cả kỳ",
        "2" : "Bài giảng"
      },
      "document": {
        "1": "https://link1s.com/yBlb9A",
        "2" : "https://link1s.com/1bvOBO"
      }
    },
    {
      "subjectname": "phân tích và thiết kế thuật toán",
      "subjectid": "ct174",
      "image": "image/images.jpg",
      "hard": "4",
      "author": "Gia Bảo, Thành An",
      "detail": "Document/CT174.pdf",
      "describe": "Học về các thuật toán do các nhà khoa học khác nghĩ ra chứ không có bắt tụi em code thuật toán mới đâu :))",
      "documentname": {
        "1": "Lý thuyết cuối kỳ",
        "2" : "Code cả kỳ",
        "3" : "Bài giảng"
      },
      "document": {
        "1": "https://link1s.com/YFQZ7",
        "2" : "https://link1s.com/ey66fU",
        "3" : "https://link1s.com/eS3SxwUi"
      }
    },
    {
      "subjectname": "kinh tế chính trị",
      "subjectid": "ml016",
      "image": "image/download.jpg",
      "hard": "4",
      "author": "Gia Bảo",
      "detail": "Document/KTCT/ML016.pdf",
      "describe": "Cũng như Triết học Mác - Lên Nin dị đóa",
      "documentname": {
        "1": "Trắc nghiệm cả kỳ"
      },
      "document": {
        "1": "https://link1s.com/Zld49vM"
      }
    },
    {
      "subjectname": "nhập môn lập trình web",
      "subjectid": "ct188",
      "image": "image/8022682955_421bc6ff5a_b-e1629676847648.webp",
      "hard": "5",
      "author": "Gia Bảo",
      "detail": "Document/CT175.pdf",
      "describe": "Học về HTML, CSS, JS và các thư viện, Framework. Môn này rất nặng về lý thuyết và cả thực hành do học rất nhiều thứ trong 3 chỉ.",
      "documentname": {
        "1": "Sữa chua Free",
        "2" : "Bài giảng"
      },
      "document": {
        "1": "https://link1s.com/mrG3n",
        "2" : "https://link1s.com/1Z96p2Xb"
      }
    },
    {
      "subjectname": "Lập trình hướng đối tượng",
      "subjectid": "ct173",
      "image": "image/8022682955_421bc6ff5a_b-e1629676847648.webp",
      "hard": "5",
      "author": "Gia Bảo",
      "detail": "",
      "describe": "Học về kiểu lập trình mới thoy, thực hành dễ nhưng lý thuyết khó lắm",
      "documentname": {
        "1": "Code nè",
        "2" : "Bài giảng"
      },
      "document": {
        "1": "https://link1s.com/aDYQLG",
        "2" : "https://drive.google.com/drive/folders/1lEMtoa-_slAg8aR_qfnx3vV_bpbfPr-l?usp=sharing"
      }
    }
  ]
};

function load() {
  var searchSpace = document.getElementById("search-space");
  window.location.href = "index.html";
}

function show() {
  var searchSpace = document.getElementById("search-space").value.toLowerCase();
  var show_container = document.getElementsByClassName("show-container");
  var flag = 0;

  while (show_container[0].firstChild) {
    show_container[0].removeChild(show_container[0].firstChild);
  }

  for (var i = 0; i < data.subject.length; i++) {
    if (data.subject[i].subjectname == searchSpace || data.subject[i].subjectid == searchSpace) {
      flag = 1;
      var div = document.createElement("div");
      div.innerHTML = `
        <div class="content">
          <div class="content-top">
            <div class="img">
              <img src="${data.subject[i].image}" alt="">
            </div>
            <div class="topic">
              <p>${data.subject[i].subjectname.toUpperCase()} - <span style="color: rgb(186, 186, 70);">${data.subject[i].subjectid.toUpperCase()}</span></p>
              <p>Độ khó: ${data.subject[i].hard}</p>
              <p style="color: rgb(192, 192, 77);"><i class="fas fa-pen-square"></i> ${data.subject[i].author}</p>
            </div>
          </div>
          <div class="content-bottom">
            <p>${data.subject[i].describe}</p>
          </div>
          <div class="document">
            <a href="${data.subject[i].detail}"><i class="fas fa-info-circle"></i></a>
          </div>
        </div>
      `;
      show_container[0].appendChild(div);

      var documentContainer = document.getElementsByClassName("document");

      for (var j = 1; j <= Object.keys(data.subject[i].documentname).length; j++) {
        var a = document.createElement("a");
        a.href = data.subject[i].document[j];
        a.innerHTML = data.subject[i].documentname[j];
        documentContainer[documentContainer.length-1].appendChild(a);
      }
      return;
    }
  }

  if (searchSpace == "all") {
    flag = 1;
    for (var i = 0; i < data.subject.length; i++) {
      var div = document.createElement("div");
      div.innerHTML = `
        <div class="content">
          <div class="content-top">
            <div class="img">
              <img src="${data.subject[i].image}" alt="">
            </div>
            <div class="topic">
              <p>${data.subject[i].subjectname.toUpperCase()} - <span style="color: rgb(186, 186, 70);">${data.subject[i].subjectid.toUpperCase()}</span></p>
              <p>Độ khó: ${data.subject[i].hard}</p>
              <p style="color: rgb(192, 192, 77);"><i class="fas fa-pen-square"></i> ${data.subject[i].author}</p>
            </div>
          </div>
          <div class="content-bottom">
            <p>${data.subject[i].describe}</p>
          </div>
          <div class="document">
            <a href="${data.subject[i].detail}"><i class="fas fa-info-circle"></i></a>
          </div>
        </div>
      `;
      show_container[0].appendChild(div);

      var documentContainer = div.getElementsByClassName("document");

      for (var j = 1; j <= Object.keys(data.subject[i].documentname).length; j++) {
        var a = document.createElement("a");
        a.href = data.subject[i].document[j];
        a.innerHTML = data.subject[i].documentname[j];
        documentContainer[0].appendChild(a);
      }
    }
    return;
  }

  if(flag == 0){
    var div = document.createElement("div");
      div.innerHTML = `
        <div>
          <p style="color: red; margin-left: 68px;"><i>Không tìm thấy dữ liệu</i></p>
        </div>
      `;
      show_container[0].appendChild(div);
  }
}

function show_script(){
  var script = document.getElementById("script");

  if(script.style.display == "none")
    script.style.display = "block";
  else 
    script.style.display = "none";
}