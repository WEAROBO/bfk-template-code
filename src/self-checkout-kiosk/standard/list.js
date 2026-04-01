const fileList = [
  { main: "normal", title: '기본 프로레스' },
  { title: '셀프계산 프로세스(포인트X, 카드결제)' },
  { html: '1_card_1_main.html', title: "01. 메인" },
  { html: '1_card_2_barcode.html', title: "02. 바코드 스캔 메인" },
  { html: '1_card_3_scan.html', title: "03. 바코드 스캔 중" },
  { html: '1_card_4_payment.html', title: "04. 결제방법 선택" },
  { html: '1_card_5_card.html', title: "05. 신용카드 투입" },
  { html: '1_card_6_progress.html', title: "06. 결제중" },
  { html: '1_card_7_receipt.html', title: "07. 영수증 출력 선택" },
  { html: '1_card_8_complete.html', title: "08. 완료" },

  { title: '셀프계산 프로세스 (포인트X, 현금결제)' },
  { html: '2_cash_1_main.html', title: "01. 메인" },
  { html: '2_cash_2_barcode.html', title: "02. 바코드 스캔 메인" },
  { html: '2_cash_3_scan.html', title: "03. 바코드 스캔 중" },
  { html: '2_cash_4_payment.html', title: "04. 결제방법 선택" },
  { html: '2_cash_5_cash.html', title: "05. 현금 투입" },  
  { html: '2_cash_6_receipt.html', title: "06. 현금 영수증 발급 선택" },
  { html: '2_cash_7_phone.html', title: "07. 전화번호 입력" },
  { html: '2_cash_8_progress.html', title: "08. 현금영수증 발급 중" },
  { html: '2_cash_9_change.html', title: "09. 거스름돈 회수" },

  { title: '셀프계산 프로세스 (포인트O, 잔금X)' },
  { html: '3_point_1_main.html', title: "01. 메인" },  
  { html: '3_point_2_barcode.html', title: "02. 바코드 스캔 메인" },
  { html: '3_point_3_scan.html', title: "03. 바코드 스캔 중" },
  { html: '3_point_4_payment.html', title: "04. 결제방법 선택" },
  { html: '3_point_5_phone.html', title: "05. 조회 전화번호 입력" },
  { html: '3_point_6_select.html', title: "06. 사용 포인트 선택" },
  { html: '3_point_7_confirm.html', title: "07. 포인트 최종 확인" },
  { html: '3_point_8_complete.html', title: "08. 결제 완료" },

  { title: '셀프계산 프로세스 (포인트O, 잔금O)' },
  { html: '4_change_1_main.html', title: "01. 메인" },
  { html: '4_change_2_barcode.html', title: "02. 바코드 스캔 메인" },
  { html: '4_change_3_scan.html', title: "03. 바코드 스캔 중" },
  { html: '4_change_4_payment.html', title: "04. 결제방법 선택" },
  { html: '4_change_5_phone.html', title: "05. 조회 전화번호 입력" },  
  { html: '4_change_6_select.html', title: "06. 사용 포인트 선택" },
  { html: '4_change_7_confirm.html', title: "07. 포인트 최종 확인" },
  { html: '4_change_8_payment.html', title: "08. 결제방법 선택" },
  { html: '4_change_9_phone.html', title: "09. 신용카드 투입" },
  { html: '4_change_10_select.html', title: "10. 결제중" },
  { html: '4_change_11_confirm.html', title: "11. 영수증 출력 선택" },
  { html: '4_change_12_complete.html', title: "12. 완료" },

  { title: '바코드 없는 상품 구매' },
  { html: '5_nobarcode_2_popup.html', title: "02. 바코드 없는 상품 선택" },
  { html: '5_nobarcode_3_cart.html', title: "03. 선택 완료" },

  { title: '기타 공통 화면' },
  { html: '6_common_1_point.html', title: "01. 거스름돈 포인트 알림" },
  { html: '6_common_2_privacy.html', title: "02. 개인정보 수집 동의" },


  { main: "contrast", title: '고대비' },
  { title: '접근성_고대비' },
  { html: '1_card_1_main_contrast.html', title: "01. 메인" },
  { html: '1_card_2_barcode_contrast.html', title: "02. 바코드 스캔 메인" },
  { html: '1_card_3_scan_contrast.html', title: "03. 바코드 스캔 중" },
  { html: '1_card_4_payment_contrast.html', title: "04. 결제방법 선택" },
  { html: '1_card_5_card_contrast.html', title: "05. 신용카드 투입" },
  { html: '1_card_6_progress_contrast.html', title: "06. 결제중" },
  { html: '1_card_7_receipt_contrast.html', title: "07. 영수증 출력 선택" },
  { html: '1_card_8_complete_contrast.html', title: "08. 완료" },
  { html: '6_common_1_point_contrast.html', title: "09. 거스름돈 포인트 알림" },
  { html: '5_nobarcode_2_popup_contrast.html', title: "10. 바코드 없는 상품 선택" },
  { html: '3_point_6_select_contrast.html', title: "11. 포인트 선택" },
  { html: '3_point_7_confirm_contrast.html', title: "12. 포인트 최종 확인" },
  { html: '2_cash_7_phone_contrast.html', title: "13. 전화번호 입력" },
  { html: '6_common_2_privacy_contrast.html', title: "14. 개인정보 수집 동의" },


  { main: "lower", title: '낮은 화면 회원 프로레스' },
  { title: '접근성_낮은화면' },
  { html: '1_card_1_main_lower.html', title: "01. 메인" },
  { html: '1_card_2_barcode_lower.html', title: "02. 바코드 스캔 메인" },
  { html: '1_card_3_scan_lower.html', title: "03. 바코드 스캔 중" },
  { html: '1_card_4_payment_lower.html', title: "04. 결제방법 선택" },
  { html: '1_card_5_card_lower.html', title: "05. 신용카드 투입" },
  { html: '1_card_6_progress_lower.html', title: "06. 결제중" },
  { html: '1_card_7_receipt_lower.html', title: "07. 영수증 출력 선택" },
  { html: '1_card_8_complete_lower.html', title: "08. 완료" },
  { html: '6_common_1_point_lower.html', title: "09. 거스름돈 포인트 알림" },
  { html: '5_nobarcode_2_popup_lower.html', title: "10. 바코드 없는 상품 선택" },
  { html: '3_point_6_select_lower.html', title: "11. 포인트 선택" },
  { html: '4_change_11_confirm_lower.html', title: "12. 포인트 최종 확인" },
  { html: '6_common_2_privacy_lower.html', title: "14. 개인정보 수집 동의" },


  { main: "zoom", title: '접근성_화면확대' },  
  { title: '접근성_화면확대' },
  { html: '7_zoom_1_scan.html', title: "01. 화면확대 적용" },
  { html: '7_zoom_2_payment_contrast.html', title: "02. 화면확대 적용 (고대비 ver)" },  
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