const fileList = [
{ main: "normal", title: '기본 프로세스' },
  { title: '출금' },
  { html: '1_withdraw_1_main.html', title: "01. 메인" },
  { html: '1_withdraw_2_select.html', title: "02. (출금)거래선택" },
  { html: '1_withdraw_3_caution.html', title: "03. 안내_불법카드복제" },
  { html: '1_withdraw_4_insert-card.html', title: "04. 카드투입" },
  { html: '1_withdraw_5_scanning-card.html', title: "05. 카드 스캔" },
  { html: '1_withdraw_6_caution-voice-phishing.html', title: "06. 안내_보이스피싱" },
  { html: '1_withdraw_7_enter-password.html', title: "07. 비밀번호 입력" },
  { html: '1_withdraw_8_select-amount.html', title: "08. 금액 선택" },
  { html: '1_withdraw_9_select-denomination.html', title: "09. 권종 선택" },
  { html: '1_withdraw_10_confirm-amount.html', title: "10. 금액 확인" },
  { html: '1_withdraw_11_progress.html', title: "11. 전문송수신" },
  { html: '1_withdraw_12_counting-cash.html', title: "12. 현금 계수" },
  { html: '1_withdraw_13_receipt.html', title: "13. 명세표 출력 선택" },
  { html: '1_withdraw_14_take-card.html', title: "14. 카드(명세표) 회수" },
  { html: '1_withdraw_15_take-cash.html', title: "15. 현금 회수" },
  { html: '1_withdraw_16_complete.html', title: "16. 완료" },

  { title: '입금' },
  { html: '2_deposit_1_main.html', title: "01. 메인" },
  { html: '2_deposit_2_select.html', title: "02. (입금)거래선택" },
  { html: '2_deposit_3_caution.html', title: "03. 안내_불법카드복제" },
  { html: '2_deposit_4_insert-card.html', title: "04. 카드투입" },
  { html: '2_deposit_5_scanning-card.html', title: "05. 카드 스캔 중" },
  { html: '2_deposit_6_enter-password.html', title: "06. 비밀번호 입력" },
  { html: '2_deposit_7_insert-cash.html', title: "07. 현금 투입" },
  { html: '2_deposit_8_counting-cash.html', title: "08. 현금 계수 중" },
  { html: '2_deposit_9_confirm-amount.html', title: "09. 금액 확인" },
  { html: '2_deposit_10_progress.html', title: "10. 전문송수신" },
  { html: '2_deposit_11_receipt.html', title: "11. 명세표 출력 선택" },
  { html: '2_deposit_12_take-card.html', title: "12. 카드(명세표) 회수" },
  { html: '2_deposit_13_complete.html', title: "13. 완료" },

  { title: '이체' },
  { html: '3_transfer_1_main.html', title: "01. 메인" },
  { html: '3_transfer_2_caution.html', title: "02. 안내_불법카드복제" },
  { html: '3_transfer_3_insert-card.html', title: "03. 카드투입" },
  { html: '3_transfer_4_scanning-card.html', title: "04. 카드 스캔 중" },
  { html: '3_transfer_5_caution-voice-phishing.html', title: "05. 안내_보이스피싱" },
  { html: '3_transfer_6_enter-password.html', title: "06. 비밀번호 입력" },
  { html: '3_transfer_7_select-bank.html', title: "07. 은행 선택" },
  { html: '3_transfer_8_enter-account-number.html', title: "08. 계좌번호 입력" },
  { html: '3_transfer_9_enter-transfer-amount.html', title: "09. 이체금액 입력" },
  { html: '3_transfer_10_confirm-amount.html', title: "10. 이체정보 확인" },
  { html: '3_transfer_11_progress.html', title: "11. 전문송수신" },
  { html: '3_transfer_12_receipt.html', title: "12. 명세표 출력 선택" },
  { html: '3_transfer_13_take-card.html', title: "13. 카드(명세표) 회수" },
  { html: '3_transfer_14_complete.html', title: "14. 완료" },

  { title: '조회' },
  { html: '4_inquiry_1_main.html', title: "01. 메인" },
  { html: '4_inquiry_2_select.html', title: "02. (조회)거래선택" },
  { html: '4_inquiry_3_caution.html', title: "03. 안내_불법카드복제" },
  { html: '4_inquiry_4_insert-card.html', title: "04. 카드투입" },
  { html: '4_inquiry_5_scanning-card.html', title: "05. 카드 스캔 중" },
  { html: '4_inquiry_6_enter-password.html', title: "06. 비밀번호 입력" },
  { html: '4_inquiry_7_balance.html', title: "07. 잔액 조회" },
  { html: '4_inquiry_8_take-card.html', title: "08. 카드(명세표) 회수" },
  { html: '4_inquiry_9_complete.html', title: "09. 완료" },

  { title: '기타 레이아웃' },
  { html: '5_layout_1_select-bank.html', title: "01. 은행코드 입력" },
  { html: '5_layout_2_loan.html', title: "02. 콘텐츠가 많은 경우" },
  { html: '5_layout_2-3_loan_guide.html', title: "03. 항목이 많은 경우" },
  { html: '5_layout_3_confirm.html', title: "04. 동의가 필요한 화면" },
  { html: '5_layout_5_cancel.html', title: "05. 거래 취소" },
  { html: '5_layout_6_extend_time.html', title: "06. 시간 연장" },
  { html: '5_layout_7-1_keyboard-kr.html', title: "07. 키보드" },
  { html: '5_layout_8-1_keypad.html', title: "08. 넘버 패드" },

  { title: '접근성 팝업형' },
  { html: '6_accessibility_1_popup-help.html', title: "01. 접근성" },
  { html: '6_accessibility_2_popup-sound.html', title: "02. 음량조절" },

  { title: '접근성_화면확대' },
  { html: '7_accessibility_1_zoom.html', title: "01. 화면확대" },
  { html: '7_accessibility_2_zoom.html', title: "02. 화면확대" },

  { main: "contrast", title: '고대비' },
  { title: '접근성_고대비' },
  { html: '1_withdraw_1_main_contrast.html', title: "01. 메인" },
  { html: '1_withdraw_2_select_contrast.html', title: "02. (출금)거래선택" },
  { html: '1_withdraw_3_caution_contrast.html', title: "03. 안내_불법카드복제" },
  { html: '1_withdraw_4_insert-card_contrast.html', title: "04. 카드투입" },
  { html: '1_withdraw_5_scanning-card_contrast.html', title: "05. 카드 스캔" },
  { html: '1_withdraw_6_caution-voice-phishing_contrast.html', title: "06. 안내_보이스피싱" },
  { html: '1_withdraw_7_enter-password_contrast.html', title: "07. 비밀번호 입력" },
  { html: '1_withdraw_8_select-amount_contrast.html', title: "08. 금액 선택" },
  { html: '1_withdraw_9_select-denomination_contrast.html', title: "09. 권종 선택" },
  { html: '1_withdraw_10_confirm-amount_contrast.html', title: "10. 금액 확인" },
  { html: '1_withdraw_11_progress_contrast.html', title: "11. 전문 송수신 중" },
  { html: '1_withdraw_12_counting-cash_contrast.html', title: "12. 현금 계수" },
  { html: '1_withdraw_13_receipt_contrast.html', title: "13. 명세표 출력 선택" },
  { html: '1_withdraw_14_take-card_contrast.html', title: "14. 카드(명세표) 회수" },
  { html: '1_withdraw_15_take-cash_contrast.html', title: "15. 현금 회수" },
  { html: '1_withdraw_16_complete_contrast.html', title: "16. 완료" },

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