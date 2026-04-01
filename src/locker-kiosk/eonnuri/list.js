const fileList = [
  { main: "normal", title: '기본 프로레스' },
  { title: '공통 화면' },
  { html: '1_common_1_main.html', title: "01. 메인" },
  { html: '1_common_2_popup_extendtime.html', title: "02. 시간 연장" },

  { title: '물품 보관 (택배기사)' },
  { html: '2_deposit_1_caution.html', title: "01. 보관 안내(보이스피싱)" },
  { html: '2_deposit_2_depositor-phone.html', title: "02. 물품 보관자 전화번호 입력" },
  { html: '2_deposit_3_depositor-pw.html', title: "03. 물품 보관자 비밀번호 입력" },
  { html: '2_deposit_4_receiver-phone.html', title: "04. 물품 수령자 전화번호 입력" },
  { html: '2_deposit_5_receiver-phonere.html', title: "05. 물품 수령자 전화번호 재입력" },
  { html: '2_deposit_6_locker.html', title: "06. 보관함 선택" },
  { html: '2_deposit_7_open.html', title: "07. 보관함 열림" },
  { html: '2_deposit_8_continue.html', title: "08. 추가 보관 알림" },
  { html: '2_deposit_9_complete.html', title: "09. 완료" },

  { title: '물품 보관 추가 옵션' },
  { html: '3_option_1-1_popup_notice.html', title: "1-1. 현금 보관 팝업" },
  { html: '3_option_1-2_popup_usagelimit.html', title: "1-2. 시스템 사용 제한" },
  { html: '3_option_2-1_popup-pw.html', title: "2-1. 보관용 비밀번호 안내" },
  { html: '3_option_2-2_guide.html', title: "2-2. 택배기사 등록 안내" },
  { html: '3_option_2-3_verification.html', title: "2-3. 인증번호 입력" },
  { html: '3_option_2-4_company.html', title: "2-4. 택배기사 등록 소속 입력" },
  { html: '3_option_2-5_courier-pw.html', title: "2-5. 택배기사 등록 비밀번호 입력" },
  { html: '3_option_3-1_courier-pw-error.html', title: "3-1. 비밀번호 일치X" },
  { html: '3_option_8-1_popup-cancel.html', title: "8-1. 보관 취소" },

  { title: '물품 찾기 (사용자)' },
  { html: '4_pickup_1_locker.html', title: "01. 보관함 선택" },
  { html: '4_pickup_2_depositor-pw.html', title: "02. 비밀번호 입력" },
  { html: '4_pickup_3_payment.html', title: "03. 요금 결제" },
  { html: '4_pickup_4_open.html', title: "04. 보관함 열림" },
  { html: '4_pickup_5_complete.html', title: "05. 완료" },

  { title: '물품 찾기 추가 옵션' },
  { html: '5_pickup-option_3_payment.html', title: "03. 요금 있음" },
  { html: '5_pickup-option_4-1_creditcard.html', title: "4-1. 신용카드 결제" },
  { html: '5_pickup-option_4-2_progress.html', title: "4-2. 신용카드 결제중" },
  { html: '5_pickup-option_5-1_name.html', title: "5-1. SMS 결제 이름 입력" },
  { html: '5_pickup-option_5-2_phone.html', title: "5-2. SMS 결제 전화번호 입력" },
  { html: '5_pickup-option_5-3_progress.html', title: "5-3. SMS 결제중" },


  { main: "contrast", title: '고대비' },
  { title: '고대비 (Contrast)' },
  { html: '1_common_1_main_contrast.html', title: "01. 메인" },
  { html: '1_common_2_popup_extendtime_contrast.html', title: "02. 시간 연장" },
  { html: '2_deposit_1_caution_contrast.html', title: "01. 보관 안내(보이스피싱)" },
  { html: '2_deposit_2_depositor-phone_contrast.html', title: "02. 물품 보관자 전화번호 입력" },
  { html: '2_deposit_3_depositor-pw_contrast.html', title: "03. 물품 보관자 비밀번호 입력" },
  { html: '2_deposit_4_receiver-phone_contrast.html', title: "04. 물품 수령자 전화번호 입력" },
  { html: '2_deposit_5_receiver-phonere_contrast.html', title: "05. 물품 수령자 전화번호 재입력" },
  { html: '2_deposit_6_locker_contrast.html', title: "06. 보관함 선택" },
  { html: '2_deposit_7_open_contrast.html', title: "07. 보관함 열림" },
  { html: '3_option_8-1_popup-cancel_contrast.html', title: "08. 추가 보관 알림" },
  { html: '4_pickup_5_complete_contrast.html', title: "09. 완료" }, 


  { main: "lower", title: '낮은 화면' },
  { title: '낮은 화면 모드 프로세스' },
  { html: '1_common_1_main_lower.html', title: "01. 메인" },
  { html: '1_common_2_popup_extendtime_lower.html', title: "02. 시간 연장 팝업" },
  { html: '2_deposit_1_caution_lower.html', title: "03. 보관 안내(보이스피싱)" },
  { html: '2_deposit_2_depositor-phone_lower.html', title: "04. 물품 보관자 전화번호 입력" },
  { html: '2_deposit_3_depositor-pw_lower.html', title: "05. 물품 보관자 비밀번호 입력" },
  { html: '2_deposit_4_receiver-phone_lower.html', title: "06. 물품 수령자 전화번호 입력" },
  { html: '2_deposit_5_receiver-phonere_lower.html', title: "07. 물품 수령자 전화번호 재입력" },
  { html: '2_deposit_6_locker_lower.html', title: "08. 보관함 선택" },
  { html: '2_deposit_7_open_lower.html', title: "09. 보관함 열림" },
  { html: '3_option_8-1_popup-cancel_lower.html', title: "10. 보관 취소 팝업" },
  { html: '4_pickup_5_complete_lower.html', title: "11. 완료" },
  { html: '5_pickup-option_3_payment_lower.html', title: "12. 이용 요금" },

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