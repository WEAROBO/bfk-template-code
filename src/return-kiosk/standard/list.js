const fileList = [

  { main: "normal", title: '기본 프로레스' },
  { title: '27"기본 본인 인증형' },
  { html: "1_basic_1_main.html", title: "1) 메인" },
  { html: "1_basic_2_barcode.html", title: "2) 본인 인증 바코드 스캔" },
  { html: "1_basic_3_info.html", title: "3) 회원 정보 확인" },
  { html: "1_basic_4_return_cup.html", title: "4) 컵 반납" },
  { html: "1_basic_5_cup_confirm.html", title: "5) 컵 확인 중" },
  { html: "1_basic_6_return_complete.html", title: "6) 컵 반납 완료" },
  { html: "1_basic_7_point_complete.html", title: "7) 적립 완료" },
  { html: "1_basic_8_complete.html", title: "8) 완료" },


  { title: '27"기본 현금 적립' },
  { html: "2_cash_1_main.html", title: "1) 메인" },
  { html: "2_cash_2_return_cup.html", title: "2) 컵 반납" },
  { html: "2_cash_3_cup_confirm.html", title: "3) 컵 확인 중" },
  { html: "2_cash_4_return_complete.html", title: "4) 컵 반납 완료" },
  { html: "2_cash_5_select.html", title: "5) 환불 방법 선택" },
  { html: "2_cash_6_out.html", title: "6) 현금 배출" },
  { html: "2_cash_7_complete.html", title: "7) 완료" },


  { title: '27"기본 포인트 적립' },
  { html: "3_point_1_main.html", title: "1) 메인" },
  { html: "3_point_2_return_cup.html", title: "2) 컵 반납" },
  { html: "3_point_3_cup_confirm.html", title: "3) 컵 확인 중" },
  { html: "3_point_4_return_complete.html", title: "4) 컵 반납 완료" },
  { html: "3_point_5_select.html", title: "5) 환불 방법 선택" },
  { html: "3_point_6_phone.html", title: "6) 전화번호 입력" },
  { html: "3_point_7_point_complete.html", title: "7) 적립 완료" },
  { html: "3_point_8_complete.html", title: "8) 완료" },



  { main: "contrast", title: '고대비 프로레스' },
  { title: '27"고대비 본인 인증형' },
  { html: "1_basic_1_main_contrast.html", title: "1) 메인" },
  { html: "1_basic_2_barcode_contrast.html", title: "2) 본인 인증 바코드 스캔" },
  { html: "1_basic_3_info_contrast.html", title: "3) 회원 정보 확인" },
  { html: "1_basic_4_return_cup_contrast.html", title: "4) 컵 반납" },
  { html: "1_basic_5_cup_confirm_contrast.html", title: "5) 컵 확인 중" },
  { html: "1_basic_6_return_complete_contrast.html", title: "6) 컵 반납 완료" },
  { html: "1_basic_7_point_complete_contrast.html", title: "7) 적립 완료" },
  { html: "1_basic_8_complete_contrast.html", title: "8) 완료" },


  { title: '27"고대비 현금 적립' },
  { html: "2_cash_1_main_contrast.html", title: "1) 메인" },
  { html: "2_cash_2_return_cup_contrast.html", title: "2) 컵 반납" },
  { html: "2_cash_3_cup_confirm_contrast.html", title: "3) 컵 확인 중" },
  { html: "2_cash_4_return_complete_contrast.html", title: "4) 컵 반납 완료" },
  { html: "2_cash_5_select_contrast.html", title: "5) 환불 방법 선택" },
  { html: "2_cash_6_out_contrast.html", title: "6) 현금 배출" },
  { html: "2_cash_7_complete_contrast.html", title: "7) 완료" },


  { title: '27"고대비 포인트 적립' },
  { html: "3_point_1_main_contrast.html", title: "1) 메인" },
  { html: "3_point_2_return_cup_contrast.html", title: "2) 컵 반납" },
  { html: "3_point_3_cup_confirm_contrast.html", title: "3) 컵 확인 중" },
  { html: "3_point_4_return_complete_contrast.html", title: "4) 컵 반납 완료" },
  { html: "3_point_5_select_contrast.html", title: "5) 환불 방법 선택" },
  { html: "3_point_6_phone_contrast.html", title: "6) 전화번호 입력" },
  { html: "3_point_7_point_complete_contrast.html", title: "7) 적립 완료" },
  { html: "3_point_8_complete_contrast.html", title: "8) 완료" },


  { main: "lower", title: '화면 내리기 프로레스' },
  { title: '27"화면 내리기 본인 인증형' },
  { html: "1_basic_1_main_lower.html", title: "1) 메인" },
  { html: "1_basic_2_barcode_lower.html", title: "2) 본인 인증 바코드 스캔" },
  { html: "1_basic_3_info_lower.html", title: "3) 회원 정보 확인" },
  { html: "1_basic_4_return_cup_lower.html", title: "4) 컵 반납" },
  { html: "1_basic_4-1_return_cup_notice_lower.html", title: "5) 컵 반납 주의사항" },
  { html: "1_basic_5_cup_confirm_lower.html", title: "6) 컵 확인 중" },
  { html: "1_basic_6_return_complete_lower.html", title: "7) 컵 반납 완료" },
  { html: "1_basic_7_point_complete_lower.html", title: "8) 적립 완료" },
  { html: "1_basic_8_complete_lower.html", title: "9) 완료" },


  { title: '27"화면 내리기 현금 적립' },
  { html: "2_cash_1_main_lower.html", title: "1) 메인" },
  { html: "2_cash_2_return_cup_lower.html", title: "2) 컵 반납" },
  { html: "2_cash_2-1_return_cup_notice_lower.html", title: "3) 컵 반납 주의사항" },
  { html: "2_cash_3_cup_confirm_lower.html", title: "4) 컵 확인 중" },
  { html: "2_cash_4_return_complete_lower.html", title: "5) 컵 반납 완료" },
  { html: "2_cash_5_select_lower.html", title: "6) 환불 방법 선택" },
  { html: "2_cash_6_out_lower.html", title: "7) 현금 배출" },
  { html: "2_cash_7_complete_lower.html", title: "8) 완료" },


  { title: '27"화면 내리기 포인트 적립' },
  { html: "3_point_1_main_lower.html", title: "1) 메인" },
  { html: "3_point_2_return_cup_lower.html", title: "2) 컵 반납" },
  { html: "3_point_2-1_return_cup_notice_lower.html", title: "3) 컵 반납 주의사항" },
  { html: "3_point_3_cup_confirm_lower.html", title: "4) 컵 확인 중" },
  { html: "3_point_4_return_complete_lower.html", title: "5) 컵 반납 완료" },
  { html: "3_point_5_select_lower.html", title: "6) 환불 방법 선택" },
  { html: "3_point_6_phone_lower.html", title: "7) 전화번호 입력" },
  { html: "3_point_7_point_complete_lower.html", title: "8) 적립 완료" },
  { html: "3_point_8_complete_lower.html", title: "9) 완료" },



  { main: "lower_contrast", title: '고대비 화면 내리기 프로레스' },
  { title: '27"화면 내리기 본인 인증형' },
  { html: "1_basic_1_main_lower_contrast.html", title: "1) 메인" },
  { html: "1_basic_2_barcode_lower_contrast.html", title: "2) 본인 인증 바코드 스캔" },
  { html: "1_basic_3_info_lower_contrast.html", title: "3) 회원 정보 확인" },
  { html: "1_basic_4_return_cup_lower_contrast.html", title: "4) 컵 반납" },
  { html: "1_basic_4-1_return_cup_notice_lower_contrast.html", title: "5) 컵 반납 주의사항" },
  { html: "1_basic_5_cup_confirm_lower_contrast.html", title: "6) 컵 확인 중" },
  { html: "1_basic_6_return_complete_lower_contrast.html", title: "7) 컵 반납 완료" },
  { html: "1_basic_7_point_complete_lower_contrast.html", title: "8) 적립 완료" },
  { html: "1_basic_8_complete_lower_contrast.html", title: "9) 완료" },


  { title: '27"화면 내리기 현금 적립' },
  { html: "2_cash_1_main_lower_contrast.html", title: "1) 메인" },
  { html: "2_cash_2_return_cup_lower_contrast.html", title: "2) 컵 반납" },
  { html: "2_cash_2-1_return_cup_notice_lower_contrast.html", title: "3) 컵 반납 주의사항" },
  { html: "2_cash_3_cup_confirm_lower_contrast.html", title: "4) 컵 확인 중" },
  { html: "2_cash_4_return_complete_lower_contrast.html", title: "5) 컵 반납 완료" },
  { html: "2_cash_5_select_lower_contrast.html", title: "6) 환불 방법 선택" },
  { html: "2_cash_6_out_lower_contrast.html", title: "7) 현금 배출" },
  { html: "2_cash_7_complete_lower_contrast.html", title: "8) 완료" },


  { title: '27"화면 내리기 포인트 적립' },
  { html: "3_point_1_main_lower_contrast.html", title: "1) 메인" },
  { html: "3_point_2_return_cup_lower_contrast.html", title: "2) 컵 반납" },
  { html: "3_point_2-1_return_cup_notice_lower_contrast.html", title: "3) 컵 반납 주의사항" },
  { html: "3_point_3_cup_confirm_lower_contrast.html", title: "4) 컵 확인 중" },
  { html: "3_point_4_return_complete_lower_contrast.html", title: "5) 컵 반납 완료" },
  { html: "3_point_5_select_lower_contrast.html", title: "6) 환불 방법 선택" },
  { html: "3_point_6_phone_lower_contrast.html", title: "7) 전화번호 입력" },
  { html: "3_point_7_point_complete_lower_contrast.html", title: "8) 적립 완료" },
  { html: "3_point_8_complete_lower_contrast.html", title: "9) 완료" },

]


window.onload = function () {
  const list_ul = document.getElementById("list_ul")


  let main_type;
  for (let i = 0; i < fileList.length; i++) {
    const file = fileList[i]
    let li = document.createElement('div');
    let a = document.createElement('div');
    if (file.main) {
      main_type = document.createElement('div');
      main_type.classList.add("main_type", file.main)
      const main_line = document.createElement('div');
      main_line.classList.add("main_line")
      main_type.append(main_line)

      li.classList.add("main")
      li.innerHTML = file.title
      main_type.append(li)
      
      list_ul.append(main_type)
    } else if (file.html) {
      li.classList.add("item")
      li.dataset.url = file.html;
      li.innerHTML = file.title
      li.addEventListener("click", () => {
        clickContent(i)
      })
      main_type.append(li)
    } else {
      li.classList.add("sub")
      a.innerHTML = file.title
      li.append(a)
      main_type.append(li)
    }
  }

  clickContent(2)

  // Navigation Logic
  const btnPrev = document.getElementById("btn_prev");
  const btnNext = document.getElementById("btn_next");

  if (btnPrev) {
    btnPrev.addEventListener("click", () => {
      clickPrev();
    });
  }

  if (btnNext) {
    btnNext.addEventListener("click", () => {
      clickNext();
    });
  }
}

let data_url;
let currentIndex = -1; // Track current index

function clickContent(index) {
  console.log("clickContent", index)

  // Update currentIndex if valid
  if (fileList[index] && fileList[index].html) {
    currentIndex = index;
    updateButtonState();
  }

  const iframe = document.getElementById("iframe")
  const item = fileList[index]
  console.log("clickContent item", item)
  if (!item || !item.html) return;
  if (data_url) {
    const target = document.querySelector(`.item[data-url="${data_url}"]`);
    console.log("target", target)
    if (target) target.classList.remove("active");
  }
  data_url = item.html;
  const target = document.querySelector(`.item[data-url="${item.html}"]`);
  console.log("target", target)

  if (target) {
    target.classList.add("active");
    // Auto scroll to active item
    target.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }

  iframe.src = "./html/" + item.html;
  iframe.classList.add("hide");
  iframe.onload = () => {
    const doc = iframe.contentDocument;
    const body = doc.body;

    const scale = iframe.clientHeight / body.scrollHeight;
    const html = doc.documentElement;

    const contentWidth = Math.max(body.scrollWidth, html.scrollWidth);
    const contentHeight = Math.max(body.scrollHeight, html.scrollHeight);

    console.log("scale", scale)
    body.style.transformOrigin = 'center top';
    body.style.transform = `scale(${scale})`;
    body.style.width = contentWidth + 'px';
    body.style.overflow = 'hidden';
    body.style.background = '#c4c4c4';

    iframe.style.height = contentHeight * scale + 'px';
    iframe.classList.remove("hide");
  }
}

function updateButtonState() {
  const btnPrev = document.getElementById("btn_prev");
  const btnNext = document.getElementById("btn_next");

  if (btnPrev) {
    let hasPrev = false;
    let prevIndex = currentIndex - 1;
    while (prevIndex >= 0) {
      if (fileList[prevIndex].html) {
        hasPrev = true;
        break;
      }
      prevIndex--;
    }
    btnPrev.disabled = !hasPrev;
  }

  if (btnNext) {
    let hasNext = false;
    let nextIndex = currentIndex + 1;
    while (nextIndex < fileList.length) {
      if (fileList[nextIndex].html) {
        hasNext = true;
        break;
      }
      nextIndex++;
    }
    btnNext.disabled = !hasNext;
  }
}

function clickPrev() {
  if (currentIndex <= 0) return;

  let newIndex = currentIndex - 1;
  while (newIndex >= 0) {
    if (fileList[newIndex].html) {
      clickContent(newIndex);
      return;
    }
    newIndex--;
  }
}

function clickNext() {
  if (currentIndex >= fileList.length - 1) return;

  let newIndex = currentIndex + 1;
  while (newIndex < fileList.length) {
    if (fileList[newIndex].html) {
      clickContent(newIndex);
      return;
    }
    newIndex++;
  }
}