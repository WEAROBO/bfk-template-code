const fileList = [
  { main: "normal", title: '기본 프로세스' },
  { title: '출금' },
  { html: '1_withdraw_1_main.html', title: "01. 메인" },
  { html: '1_withdraw_2_select.html', title: "02. 거래선택" },
  { html: '1_withdraw_3_caution.html', title: "03. 안내_불법카드복제" },
  { html: '1_withdraw_4_insert-card.html', title: "04. 카드 투입" },
  { html: '1_withdraw_5_scanning-card.html', title: "05. 카드 스캔" },
  { html: '1_withdraw_6_caution-voice-phishing.html', title: "06. 안내_보이스피싱" },
  { html: '1_withdraw_7_enter-password.html', title: "07. 비밀번호 입력" },
  { html: '1_withdraw_8_select-amount.html', title: "08. 금액 선택" },
  { html: '1_withdraw_9_select-denomination.html', title: "09. 권종 선택" },
  { html: '1_withdraw_10_confirm-amount.html', title: "10. 금액 확인" },
  { html: '1_withdraw_11_progress.html', title: "11. 전문송수신" },
  { html: '1_withdraw_12_counting-cash.html', title: "12. 현금 계수" },
  { html: '1_withdraw_13_receipt.html', title: "13. 명세표 출력 선택" },
  { html: '1_withdraw_14_take-card.html', title: "14. 카드 회수" },
  { html: '1_withdraw_14_take-receipt.html', title: "14. 카드(명세표) 회수" },
  { html: '1_withdraw_15_take-cash.html', title: "15. 현금 회수" },
  { html: '1_withdraw_16_complete.html', title: "16. 완료" },

  { title: '입금' },
  { html: '2_deposit_2_select.html', title: "02. 거래선택" },
  { html: '2_deposit_7_insert-cash.html', title: "07. 현금 투입" },
  { html: '2_deposit_9_confirm-amount.html', title: "09. 금액 확인" },

  { title: '이체' },
  { html: '3_transfer_7_select.html', title: "07. 은행 선택" },
  { html: '3_transfer_8_enter-account-number.html', title: "08. 계좌번호 입력" },
  { html: '3_transfer_9_enter-transfer-amount.html', title: "09. 이체금액 입력" },
  { html: '3_transfer_10_confirm-amount.html', title: "10. 이체정보 확인" },

  { title: '잔액조회' },
  { html: '4_inquiry_2_select.html', title: "02. 거래선택" },
  { html: '4_inquiry_7_balance.html', title: "07. 잔액 조회" },

  { title: '기타 레이아웃' },
  { html: '5_layout_1_select-bank.html', title: "01. 은행코드 입력" },
  { html: '5_layout_2_loan.html', title: "02. 콘텐츠가 많은 경우(1)" },
  { html: '5_layout_2_loan_2.html', title: "02. 콘텐츠가 많은 경우(2)" },
  { html: '5_layout_4_loan-input-phone.html', title: "04. 휴대폰번호 입력" },
  { html: '5_layout_5_loan_guide.html', title: "05. 대출 안내" },
  { html: '5_layout_6_confirm.html', title: "06. 확인" },
  { html: '5_layout_7_cancel.html', title: "07. 거래 취소" },

  { title: '키패드' },
  { html: '6_keypad_1_keyboard_kr.html', title: "01. 키보드(한글)" },
  { html: '6_keypad_2_keyboard_en.html', title: "02. 키보드(영문)" },
  { html: '6_keypad_3_keyboard_symbol.html', title: "03. 키보드(특수문자)" },
  { html: '6_keypad_4_keypad_3x4.html', title: "04. 키패드(3x4)" },
  { html: '6_keypad_5_keypad_3x4_won.html', title: "05. 키패드(금액)" },
  { html: '6_keypad_6_keypad-enter-password.html', title: "06. 보안키패드" },

  { title: '도움기능' },
  { html: '7_popup_1_cancel.html', title: "01. 취소 팝업" },
  { html: '7_popup_2_help_three.html', title: "02. 도움말(3개)" },
  { html: '7_popup_3_help_two.html', title: "03. 도움말(2개)" },
  { html: '7_popup_4_extend_time.html', title: "04. 시간 연장" },
  { html: '7_popup_5_sound.html', title: "05. 음성 안내" },
  { html: '8_help_1_zoom.html', title: "06. 돋보기" },
  { html: '8_help_2_zoom-bar.html', title: "07. 확대바" },
  { html: '7_popup_5_sound_contrast.html', title: "08. 음성 안내" },

  { main: "contrast", title: '접근성_고대비' },
  { title: '고대비(주요화면)' },
  { html: '1_withdraw_1_main_contrast.html', title: "01. 메인" },
  { html: '1_withdraw_2_select_contrast.html', title: "02. 거래선택" },
  { html: '1_withdraw_3_caution_contrast.html', title: "03. 안내_불법카드복제" },
  { html: '1_withdraw_7_enter-password_contrast.html', title: "04. 비밀번호 입력" },
  { html: '1_withdraw_10_confirm-amount_contrast.html', title: "05. 금액 확인" },
  { html: '1_withdraw_11_progress_contrast.html', title: "06. 전문송수신" },
  { html: '1_withdraw_13_receipt_contrast.html', title: "07. 명세표 출력 여부" },
  { html: '1_withdraw_15_take-cash_contrast.html', title: "08. 현금 회수" },
  { html: '1_withdraw_16_complete_contrast.html', title: "09. 완료" },
  { html: '6_keypad_1_keyboard_kr_contrast.html', title: "10. 키보드(한글)" },
  { html: '6_keypad_2_keyboard_en_contrast.html', title: "10. 키보드(영문)" },
  { html: '6_keypad_3_keyboard_symbol_contrast.html', title: "10. 키보드(특수문자)" },
  { html: '6_keypad_4_keypad_3x4_contrast.html', title: "11. 키패드(3x4)" },
  { html: '6_keypad_5_keypad_3x4_won_contrast.html', title: "12. 키패드(금액)" },
  { html: '6_keypad_6_keypad-enter-password_contrast.html', title: "13. 키패드(비밀번호)" },

  /*
    { title: '계좌이체(고대비)' },
    { html: '1_withdraw_4_insert-card_contrast.html', title: "04. 카드 삽입" },
    { html: '3_transfer_10_confirm-amount_contrast.html', title: "10. 이체정보 확인" },
    { title: '기타(고대비)' },
    { html: '5_layout_4_loan-input-phone_contrast.html', title: "04. 휴대폰번호 입력" },
    { html: '5_layout_5_loan_guide_contrast.html', title: "05. 대출 안내" },
    { html: '5_layout_6_confirm_contrast.html', title: "06. 확인" },
    { html: '7_popup_2_help_three_contrast.html', title: "02. 도움말(3개)" },
    { html: '7_popup_4_extend_time_contrast.html', title: "04. 시간 연장" },
    { title: '확대 기능' },

  */
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