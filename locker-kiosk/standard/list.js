const fileList = [
  { main: "normal", title: '기본 프로세스' },
  { title: '물품 보관' },
  { html: '1_deposit_1_main.html', title: "01. 메인" },
  { html: '1_deposit_2_caution.html', title: "02. 보관 안내(보이스피싱)" },
  { html: '1_deposit_3_depositor-phone.html', title: "03. 물품 보관자 전화번호 입력" },
  { html: '1_deposit_4_depositor-pw.html', title: "04. 물품 보관자 비밀번호 입력" },
  { html: '1_deposit_5_receiver-phone.html', title: "05. 물품 수령자 전화번호 입력" },
  { html: '1_deposit_6_receiver-phonere.html', title: "06. 물품 수령자 전화번호 재입력" },
  { html: '1_deposit_7_locker.html', title: "07. 보관함 선택" },
  { html: '1_deposit_8_open.html', title: "08. 보관함 열림" },
  { html: '1_deposit_9_complete.html', title: "09. 완료" },

  { title: '물품 보관 (택배기사 비밀번호X)' },
  { html: '2_deposit-nopw_4_popup-pw.html', title: "04. 보관용 비밀번호 팝업" },
  { html: '2_deposit-nopw_5_caution.html', title: "05. 보관용 비밀번호 입력안내" },
  { html: '2_deposit-nopw_6_verification.html', title: "06. 인증번호 발송 및 입력" },
  { html: '2_deposit-nopw_7_company.html', title: "07. 소속회사 선택" },
  { html: '2_deposit-nopw_8_courier-pw.html', title: "08. 보관용 비밀번호 입력" },
  { html: '2_deposit-nopw_9_popup-pw.html', title: "09. 보관용 비밀번호 등록 완료" },

  { title: '물품 찾기 (이용요금X)' },
  { html: '3_pickup_2_locker.html', title: "02. 보관함 선택" },
  { html: '3_pickup_3_depositor-pw.html', title: "03. 비밀번호 입력" },
  { html: '3_pickup_4_payment.html', title: "04. 요금 미발생" },
  { html: '3_pickup_5_open.html', title: "05. 보관함 열림" },
  { html: '3_pickup_6_complete.html', title: "06. 완료" },

  { title: '물품 찾기 (이용요금O, 신용카드 결제)' },
  { html: '4_pickup-card_4_payment.html', title: "04. 요금 발생" },
  { html: '4_pickup-card_5_payment-method.html', title: "05. 결제수단 선택" },
  { html: '4_pickup-card_6_creditcard.html', title: "06. 신용카드 투입" },
  { html: '4_pickup-card_7_progress.html', title: "07. 카드 읽는 중" },
  { html: '4_pickup-card_8_complete.html', title: "08. 결제 완료" },

  { title: '물품 찾기 (이용요금O, SMS 결제)' },
  { html: '5_pickup-sms_4_payment.html', title: "04. 요금 발생" },
  { html: '5_pickup-sms_5_payment-method.html', title: "05. 결제수단 선택" },
  { html: '5_pickup-sms_6_name.html', title: "06. 결제자 이름 입력" },
  { html: '5_pickup-sms_7_phone.html', title: "07. 결제자 전화번호 입력" },
  { html: '5_pickup-sms_8_progress.html', title: "08. SMS 결제 중" },
  { html: '5_pickup-sms_9_complete.html', title: "09. 결제 완료" },

  { title: '기타 화면' },
  { html: '6_popup_4_incorrect-pw.html', title: "01. 비밀번호 불일치" },
  { html: '6_popup_1_extendtime.html', title: "02. 시간 연장" },
  { html: '6_popup_2_notice.html', title: "03. 현금 보관 팝업" },
  { html: '6_popup_3_usagelimit.html', title: "04. 시스템 사용 제한" },
  { html: '6_popup_5_cancel.html', title: "05. 보관 취소 팝업" },
  { html: '6_popup_6_add.html', title: "06. 물품 추가 보관" },

  { main: "contrast", title: '접근성_고대비' },
  { title: '접근성_고대비' },
  { html: '1_deposit_1_main_contrast.html', title: "01. 메인" },
  { html: '1_deposit_2_caution_contrast.html', title: "02. 보관안내(보이스피싱)" },
  { html: '1_deposit_3_depositor-phone_contrast.html', title: "03. 물품 보관자 전화번호 입력" },
  { html: '1_deposit_4_depositor-pw_contrast.html', title: "04. 물품 보관자 비밀번호 입력" },
  { html: '1_deposit_5_receiver-phone_contrast.html', title: "05. 물품 수령인 전화번호 입력" },
  { html: '1_deposit_6_receiver-phonere_contrast.html', title: "06. 물품 수령자 전화번호 재입력" },
  { html: '1_deposit_7_locker_contrast.html', title: "07. 보관함 선택" },
  { html: '1_deposit_8_open_contrast.html', title: "08. 보관함 열림" },
  { html: '1_deposit_9_complete_contrast.html', title: "09. 완료" },
  { html: '1_deposit_10_open_contrast.html', title: "10. 물품 추가 보관" },
  { html: '3_pickup_4_payment_contrast.html', title: "11. 요금 발생" },
  { html: '4_pickup-card_5_payment-method_contrast.html', title: "12. 결제수단 선택" },
  { html: '1_deposit_13_open_contrast.html', title: "13. 신용카드 투입" },
  { html: '5_pickup-sms_6_name_contrast.html', title: "14. 결제자 이름 입력" },
  { html: '4_pickup-card_7_progress_contrast.html', title: "15. 카드 읽는 중" },
  { html: '4_pickup-card_8_complete_contrast.html', title: "16. 결제 완료" },
  { html: '1_deposit_17_complete_contrast.html', title: "17. 완료" },

  { main: "lower", title: '낮은 화면' },
  { title: '접근성_낮은화면' },
  { html: '1_deposit_1_main_lower.html', title: "01. 메인" },
  { html: '6_popup_1_extendtime_lower.html', title: "02. 시간 연장" },
  { html: '1_deposit_2_caution_lower.html', title: "03. 보관 안내(보이스피싱)" },
  { html: '1_deposit_3_depositor-phone_lower.html', title: "04. 물품 보관자 전화번호 입력" },
  { html: '1_deposit_4_depositor-pw_lower.html', title: "05. 물품 보관자 비밀번호 입력" },
  { html: '1_deposit_5_receiver-phone_lower.html', title: "06. 물품 수령자 전화번호 입력" },
  { html: '1_deposit_6_receiver-phonere_lower.html', title: "07. 물품 수령자 전화번호 재입력" },
  { html: '5_pickup-sms_6_name_lower.html', title: "08. 결제자 이름 입력" },
  { html: '1_deposit_7_locker_lower.html', title: "09. 보관함 선택" },
  { html: '1_deposit_8_open_lower.html', title: "10. 보관함 열림" },
  { html: '6_popup_6_add_lower.html', title: "11. 추가 보관 알림" },
  { html: '5_pickup-sms_4_payment_lower.html', title: "12. 요금 발생" },
  { html: '5_pickup-sms_5_payment-method_lower.html', title: "13. 결제수단 선택" },
  { html: '5_pickup-sms_8_progress_lower.html', title: "14. SMS 결제 중" },
  { html: '5_pickup-sms_9_complete_lower.html', title: "15. 결제 완료" },
  { html: '1_deposit_9_complete_lower.html', title: "16. 완료" },

  { main: "lower", title: '접근성_화면확대' },
  { title: '접근성_화면확대' },
  { html: '1_zoom_pickup_1_locker.html', title: "01. 화면확대 적용" },
  { html: '1_zoom_pickup_2_main_contrast.html', title: "02. 화면확대 적용(고대비 ver)" },
];


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