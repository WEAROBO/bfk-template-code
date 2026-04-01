const fileList = [
  { main: "normal", title: '기본 프로레스' },
  { title: '회원 프로세스(세탁기, 신용카드 결제)' },
  { html: '1_washing_1_main.html', title: "01. 메인" },
  { html: '1_washing_2_phone.html', title: "02. 전화번호" },
  { html: '1_washing_3_password.html', title: "03. 비밀번호 입력" },
  { html: '1_washing_4_service.html', title: "04. 서비스 선택" },
  { html: '1_washing_5_machine.html', title: "05. 세탁기 장비 선택" },
  { html: '1_washing_6_course.html', title: "06. 세탁기 코스 선택" },
  { html: '1_washing_7_payment.html', title: "07. 내역 확인" },
  { html: '1_washing_8_method.html', title: "08. 결제방법 선택" },
  { html: '1_washing_9_card.html', title: "09. 카드투입" },
  { html: '1_washing_10_progress.html', title: "10 카드 읽는 중" },
  { html: '1_washing_11_complete.html', title: "11 결제완료" },
  { html: '1_washing_12_guide.html', title: "12 완료 및 세탁기 사용법" },

  { title: '회원 프로세스(건조기, 신용카드 결제)' },
  { html: '2_dryer_5_machine.html', title: "05. 건조기 장비선택" },
  { html: '2_dryer_6_time.html', title: "06. 건조기 시간설정" },
  { html: '2_dryer_12_guide.html', title: "12 완료 및 건조기 사용법" },

  { title: '포인트 충전(카드 결제)' },
  { html: '3_charge_1_method.html', title: "01. 충전방법 선택" },
  { html: '3_charge_2_amount.html', title: "02. 충전 금액 선택" },
  { html: '3_charge_3_card.html', title: "03. 카드 투입" },
  { html: '3_charge_4_progress.html', title: "04. 카드 읽는 중" },
  { html: '3_charge_5_complete.html', title: "05. 결제완료" },
  { html: '3_charge_6_confirm.html', title: "06. 충전 금액 확인" },

  { title: '포인트 충전(카드 결제)' },
  { html: '4_charge_3_cash.html', title: "03. 현금 투입" },
  { html: '4_charge_4_complete.html', title: "04. 결제 완료" },

  { title: '기타화면' },
  { html: '5_other_1_point.html', title: "01. 포인트 결제 입력" },
  { html: '5_other_2_receipt.html', title: "02. 영수증" },
  { html: '5_other_3_detail.html', title: "03. 과거 거래명세서 조회" },
  { html: '5_other_4_balance.html', title: "04. 보유잔액 확인" },


  { main: "contrast", title: '고대비' },
  { title: '회원 프로세스(세탁기, 신용카드 결제)' },
  { html: '1_washing_1_main_contrast.html', title: "01. 메인" },
  { html: '1_washing_2_phone_contrast.html', title: "02. 전화번호 입력" },
  { html: '1_washing_3_password_contrast.html', title: "03. 비밀번호 입력" },
  { html: '1_washing_4_service_contrast.html', title: "04. 서비스 선택" },
  { html: '1_washing_5_machine_contrast.html', title: "05. 세탁기 장비선택" },
  { html: '1_washing_6_course_contrast.html', title: "06. 세탁기 코스 선택" },
  { html: '1_washing_7_payment_contrast.html', title: "07. 내역 확인" },
  { html: '1_washing_8_method_contrast.html', title: "08. 결제방법 선택" },
  { html: '1_washing_9_card_contrast.html', title: "09. 카드투입" },
  { html: '1_washing_10_progress_contrast.html', title: "10 카드 읽는 중" },
  { html: '1_washing_11_complete_contrast.html', title: "11 결제완료" },
  { html: '1_washing_12_guide_contrast.html', title: "12 완료 및 세탁기 사용법" },

  { title: '회원 프로세스(건조기, 신용카드 결제)' },
  { html: '2_dryer_5_machine_contrast.html', title: "05 건조기 장비선택" },
  { html: '2_dryer_6_time_contrast.html', title: "06 건조기 시간 설정" },
  { html: '2_dryer_12_guide_contrast.html', title: "12 완료 및 건조기 사용법" },

  { title: '포인트 충전(카드 결제)' },
  { html: '3_charge_1_method_contrast.html', title: "01 충전방법 선택" },
  { html: '3_charge_2_amount_contrast.html', title: "02 충전 금액 선택" },
  { html: '3_charge_3_card_contrast.html', title: "03 카드 투입" },
  { html: '3_charge_4_progress_contrast.html', title: "04 카드 읽는 중" },
  { html: '3_charge_5_complete_contrast.html', title: "05 결제완료" },
  { html: '3_charge_6_confirm_contrast.html', title: "06 충전 금액 확인" },

  { title: '포인트 충전(카드 결제)' },
  { html: '4_charge_3_cash_contrast.html', title: "03 현금 투입" },

  { title: '기타화면' },
  { html: '5_other_1_point_contrast.html', title: "01 포인트 결제 입력" },
  { html: '5_other_2_receipt_contrast.html', title: "02 영수증" },
  { html: '5_other_3_detail_contrast.html', title: "03 과거 거래명세서 조회" },
  { html: '5_other_4_balance_contrast.html', title: "04 보유잔액 확인" },



  { main: "lower", title: '낮은 화면 회원 프로레스' },
  { title: '회원 프로세스(세탁기, 신용카드 결제)' },
  { html: '1_washing_1_main_lower.html', title: "01. 메인" },
  { html: '1_washing_2_phone_lower.html', title: "02. 전화번호" },
  { html: '1_washing_3_password_lower.html', title: "03. 비밀번호 입력" },
  { html: '1_washing_4_service_lower.html', title: "04. 서비스 선택" },
  { html: '1_washing_5_machine_lower.html', title: "05. 세탁기 장비 선택" },
  { html: '1_washing_6_course_lower.html', title: "06. 세탁기 코스 선택" },
  { html: '1_washing_7_payment_lower.html', title: "07. 내역 확인" },
  { html: '1_washing_8_method_lower.html', title: "08. 결제방법 선택" },
  { html: '1_washing_9_card_lower.html', title: "09. 카드투입" },
  { html: '1_washing_10_progress_lower.html', title: "10 카드 읽는 중" },
  { html: '1_washing_11_complete_lower.html', title: "11 결제완료" },
  { html: '1_washing_12_guide_lower.html', title: "12 완료 및 세탁기 사용법" },


  { title: '회원 프로세스(건조기, 신용카드 결제)' },
  { html: '2_dryer_5_machine_lower.html', title: "05 건조기 장비선택" },
  { html: '2_dryer_6_time_lower.html', title: "06 건조기 시간설정" },
  { html: '2_dryer_12_guide_lower.html', title: "12 완료 및 건조기 사용법" },

  { title: '포인트 충전(카드 결제)' },
  { html: '3_charge_1_method_lower.html', title: "01 충전방법 선택" },
  { html: '3_charge_2_amount_lower.html', title: "02 충전 금액 선택" },
  { html: '3_charge_3_card_lower.html', title: "03 카드 투입" },
  { html: '3_charge_5_complete_lower.html', title: "05 결제완료" },
  { html: '3_charge_6_confirm_lower.html', title: "06 충전 금액 확인" },

  { title: '포인트 충전(카드 결제)' },
  { html: '4_charge_3_cash_lower.html', title: "03 현금 투입" },


  { title: '기타화면' },
  { html: '5_other_1_point_lower.html', title: "01 포인트 결제 입력" },
  { html: '5_other_2_receipt_lower.html', title: "02 영수증" },
  { html: '5_other_3_detail_lower.html', title: "03 과거 거래명세서 조회" },
  { html: '5_other_4_balance_lower.html', title: "04 보유잔액 확인" },

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