const fileList = [
  { main: "normal", title: '기본 프로레스' },
  { title: '27" 기본 상품구매' },
  { html: '1_base_1_main.html', title: "01. 메인" },
  { html: '1_base_2_barcode.html', title: "02. 상품 스캔 전" },
  { html: '1_base_3_scan.html', title: "03. 상품 스캔 후" },
  { html: '1_base_4_payment.html', title: "04. 결제 방법 선택" },
  { html: '1_base_5_card.html', title: "05. 카드 투입" },
  { html: '1_base_6_progress.html', title: "06. 카드 읽는 중" },
  { html: '1_base_7_success.html', title: "07. 결제 완료" },
  { html: '1_base_8_phone.html', title: "08. 포인트 적립 번호 입력" },
  { html: '1_base_9_receipt.html', title: "09. 영수증 출력" },
  { html: '1_base_10_complete.html', title: "10. 완료" },

  { title: '27" 기본 상품 구매(포인트 적립)' },
  { html: '2_point_1_main.html', title: "01. 메인" },
  { html: '2_point_2_barcode.html', title: "02. 상품 스캔 전" },
  { html: '2_point_3_scan.html', title: "03. 상품 스캔 후" },
  { html: '2_point_4_phone.html', title: "04. 포인트 조회 번호 입력" },
  { html: '2_point_5_set.html', title: "05. 포인트 금액 설정" },
  { html: '2_point_6_apply.html', title: "06. 포인트 적용 완료" },
  { html: '2_point_7_progress.html', title: "07. 결제 중" },
  { html: '2_point_8_success.html', title: "08. 결제 완료" },
  { html: '2_point_9_phone.html', title: "09. 포인트 적립 번호 입력" },
  { html: '2_point_10_receipt.html', title: "10. 영수증 출력" },
  { html: '2_point_11_complete.html', title: "11. 완료" },

  { title: '27" 기본 기타 상품 구매' },
  { html: '3_etc_1_main.html', title: "01. 메인" },
  { html: '3_etc_2_barcode.html', title: "02. 상품 스캔 전" },
  { html: '3_etc_3_popup-nobarcode.html', title: "03. 바코드 없는 상품" },
  { html: '3_etc_4_add.html', title: "04. 추가 완료" },
  { html: '3_etc_5_popup-plasticbag.html', title: "05. 비닐 봉투" },
  { html: '3_etc_6_add.html', title: "06. 추가 완료" },


  { main: "contrast", title: '고대비' },
  { title: '27" 고대비 상품구매' },
  { html: '1_base_1_main_contrast.html', title: "01. 메인" },
  { html: '1_base_2_barcode_contrast.html', title: "02. 상품 스캔 전" },
  { html: '1_base_3_scan_contrast.html', title: "03. 상품 스캔 후" },
  { html: '1_base_4_payment_contrast.html', title: "04. 결제 방법 선택" },
  { html: '1_base_5_card_contrast.html', title: "05. 카드 투입" },
  { html: '1_base_6_progress_contrast.html', title: "06. 카드 읽는 중" },
  { html: '1_base_7_success_contrast.html', title: "07. 결제 완료" },
  { html: '1_base_8_phone_contrast.html', title: "08. 포인트 적립 번호 입력" },
  { html: '1_base_9_receipt_contrast.html', title: "09. 영수증 출력" },
  { html: '1_base_10_complete_contrast.html', title: "10. 완료" },

  { title: '27" 고대비 상품 구매(포인트 적립)' },
  { html: '2_point_1_main_contrast.html', title: "01. 메인" },
  { html: '2_point_2_barcode_contrast.html', title: "02. 상품 스캔 전" },
  { html: '2_point_3_scan_contrast.html', title: "03. 상품 스캔 후" },
  { html: '2_point_4_phone_contrast.html', title: "04. 포인트 조회 번호 입력" },
  { html: '2_point_5_set_contrast.html', title: "05. 포인트 금액 설정" },
  { html: '2_point_6_apply_contrast.html', title: "06. 포인트 적용 완료" },
  { html: '2_point_7_progress_contrast.html', title: "07. 결제 중" },
  { html: '2_point_8_success_contrast.html', title: "08. 결제 완료" },
  { html: '2_point_9_phone_contrast.html', title: "09. 포인트 적립 번호 입력" },
  { html: '2_point_10_receipt_contrast.html', title: "10. 영수증 출력" },
  { html: '2_point_11_complete_contrast.html', title: "11. 완료" },

  { title: '27" 고대비 기타 상품 구매' },
  { html: '3_etc_1_main_contrast.html', title: "01. 메인" },
  { html: '3_etc_2_barcode_contrast.html', title: "02. 상품 스캔 전" },
  { html: '3_etc_3_popup-nobarcode_contrast.html', title: "03. 바코드 없는 상품" },
  { html: '3_etc_4_add_contrast.html', title: "04. 추가 완료" },
  { html: '3_etc_5_popup-plasticbag_contrast.html', title: "05. 비닐 봉투" },
  { html: '3_etc_6_add_contrast.html', title: "06. 추가 완료" },


  { main: "lower", title: '낮은 화면 회원 프로레스' },
  { title: '27" 화면 내리기 상품구매' },
  { html: '1_base_1_main_lower.html', title: "01. 메인" },
  { html: '1_base_2_barcode_lower.html', title: "02. 상품 스캔 전" },
  { html: '1_base_3_scan_lower.html', title: "03. 상품 스캔 후" },
  { html: '1_base_4_payment_lower.html', title: "04. 결제 방법 선택" },
  { html: '1_base_5_card_lower.html', title: "05. 카드 투입" },
  { html: '1_base_6_progress_lower.html', title: "06. 카드 읽는 중" },
  { html: '1_base_7_success_lower.html', title: "07. 결제 완료" },
  { html: '1_base_8_phone_lower.html', title: "08. 포인트 적립 번호 입력" },
  { html: '1_base_9_receipt_lower.html', title: "09. 영수증 출력" },
  { html: '1_base_10_complete_lower.html', title: "10. 완료" },

  { title: '27" 화면 내리기 상품 구매(포인트 적립)' },
  { html: '2_point_1_main_lower.html', title: "01. 메인" },
  { html: '2_point_2_barcode_lower.html', title: "02. 상품 스캔 전" },
  { html: '2_point_3_scan_lower.html', title: "03. 상품 스캔 후" },
  { html: '2_point_4_phone_lower.html', title: "04. 포인트 조회 번호 입력" },
  { html: '2_point_5_set_lower.html', title: "05. 포인트 금액 설정" },
  { html: '2_point_6_apply_lower.html', title: "06. 포인트 적용 완료" },
  { html: '2_point_7_progress_lower.html', title: "07. 결제 중" },
  { html: '2_point_8_success_lower.html', title: "08. 결제 완료" },
  { html: '2_point_9_phone_lower.html', title: "09. 포인트 적립 번호 입력" },
  { html: '2_point_10_receipt_lower.html', title: "10. 영수증 출력" },
  { html: '2_point_11_complete_lower.html', title: "11. 완료" },

  { title: '27" 화면 내리기 기타 상품 구매' },
  { html: '3_etc_1_main_lower.html', title: "01. 메인" },
  { html: '3_etc_2_barcode_lower.html', title: "02. 상품 스캔 전" },
  { html: '3_etc_3_popup-nobarcode_lower.html', title: "03. 바코드 없는 상품" },
  { html: '3_etc_4_add_lower.html', title: "04. 추가 완료" },
  { html: '3_etc_5_popup-plasticbag_lower.html', title: "05. 비닐 봉투" },
  { html: '3_etc_6_add_lower.html', title: "06. 추가 완료" },
  

  { main: "lower-contrast", title: '낮은 화면 회원 프로레스' },  
  { title: '27" 고대비 / 화면 내리기 상품구매' },
  { html: '1_base_1_main_lower-contrast.html', title: "01. 메인" },
  { html: '1_base_2_barcode_lower-contrast.html', title: "02. 상품 스캔 전" },
  { html: '1_base_3_scan_lower-contrast.html', title: "03. 상품 스캔 후" },
  { html: '1_base_4_payment_lower-contrast.html', title: "04. 결제 방법 선택" },
  { html: '1_base_5_card_lower-contrast.html', title: "05. 카드 투입" },
  { html: '1_base_6_progress_lower-contrast.html', title: "06. 카드 읽는 중" },
  { html: '1_base_7_success_lower-contrast.html', title: "07. 결제 완료" },
  { html: '1_base_8_phone_lower-contrast.html', title: "08. 포인트 적립 번호 입력" },
  { html: '1_base_9_receipt_lower-contrast.html', title: "09. 영수증 출력" },
  { html: '1_base_10_complete_lower-contrast.html', title: "10. 완료" },

  { title: '27" 고대비 / 화면 내리기 상품 구매(포인트 적립)' },
  { html: '2_point_1_main_lower-contrast.html', title: "01. 메인" },
  { html: '2_point_2_barcode_lower-contrast.html', title: "02. 상품 스캔 전" },
  { html: '2_point_3_scan_lower-contrast.html', title: "03. 상품 스캔 후" },
  { html: '2_point_4_phone_lower-contrast.html', title: "04. 포인트 조회 번호 입력" },
  { html: '2_point_5_set_lower-contrast.html', title: "05. 포인트 금액 설정" },
  { html: '2_point_6_apply_lower-contrast.html', title: "06. 포인트 적용 완료" },
  { html: '2_point_7_progress_lower-contrast.html', title: "07. 결제 중" },
  { html: '2_point_8_success_lower-contrast.html', title: "08. 결제 완료" },
  { html: '2_point_9_phone_lower-contrast.html', title: "09. 포인트 적립 번호 입력" },
  { html: '2_point_10_receipt_lower-contrast.html', title: "10. 영수증 출력" },
  { html: '2_point_11_complete_lower-contrast.html', title: "11. 완료" },

  { title: '27" 고대비 / 화면 내리기 기타 상품 구매' },
  { html: '3_etc_1_main_lower-contrast.html', title: "01. 메인" },
  { html: '3_etc_2_barcode_lower-contrast.html', title: "02. 상품 스캔 전" },
  { html: '3_etc_3_popup-nobarcode_lower-contrast.html', title: "03. 바코드 없는 상품" },
  { html: '3_etc_4_add_lower-contrast.html', title: "04. 추가 완료" },
  { html: '3_etc_5_popup-plasticbag_lower-contrast.html', title: "05. 비닐 봉투" },
  { html: '3_etc_6_add_lower-contrast.html', title: "06. 추가 완료" },

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