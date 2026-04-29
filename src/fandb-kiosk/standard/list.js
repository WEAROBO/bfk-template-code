const fileList = [
  { main: "normal", title: '기본 프로레스' },
  { title: '27" 기본 상품 선택형' },
  { html: '1_goods_1_main.html', title: "01. 메인" },
  { html: '1_goods_2_list-all.html', title: "02. 상품 목록(전체)" },
  { html: '1_goods_3_list-topping.html', title: "03. 상품 목록(토핑)" },
  { html: '1_goods_4_confirm.html', title: "04. 내역 확인" },
  { html: '1_goods_5_payment.html', title: "05. 결제 방법 선택" },
  { html: '1_goods_6_card.html', title: "06. 카드 투입" },
  { html: '1_goods_7_progress.html', title: "07. 카드 읽는 중" },
  { html: '1_goods_8_success.html', title: "08. 결제 완료" },
  { html: '1_goods_9_receipt.html', title: "09. 영수증 출력" },
  { html: '1_goods_10_complete.html', title: "10. 완료" },

  { title: '27" 기본 옵션 선택형' },
  { html: '2_option_1_main.html', title: "01. 메인" },
  { html: '2_option_2_list-all.html', title: "02. 상품 목록(전체)" },
  { html: '2_option_3_option.html', title: "03. 옵션 선택" },
  { html: '2_option_4_select.html', title: "04. 상품 선택 후" },
  { html: '2_option_5_popup-cart.html', title: "05. 장바구니" },
  { html: '2_option_6_confirm.html', title: "06. 내역 확인" },
  { html: '2_option_7_payment.html', title: "07. 결제 방법 선택" },
  { html: '2_option_8_card.html', title: "08. 카드 투입" },
  { html: '2_option_9_progress.html', title: "09. 카드 읽는 중" },
  { html: '2_option_10_success.html', title: "10. 결제 완료" },
  { html: '2_option_11_receipt.html', title: "11. 영수증 출력" },
  { html: '2_option_12_complete.html', title: "12. 완료" },

  { main: "contrast", title: '고대비' },
  { title: '27" 고대비 상품 선택형' },
  { html: '1_goods_1_main_contrast.html', title: "01. 메인" },
  { html: '1_goods_2_list-all_contrast.html', title: "02. 상품 목록(전체)" },
  { html: '1_goods_3_list-topping_contrast.html', title: "03. 상품 목록(토핑)" },
  { html: '1_goods_4_confirm_contrast.html', title: "04. 내역 확인" },
  { html: '1_goods_5_payment_contrast.html', title: "05. 결제 방법 선택" },
  { html: '1_goods_6_card_contrast.html', title: "06. 카드 투입" },
  { html: '1_goods_7_progress_contrast.html', title: "07. 카드 읽는 중" },
  { html: '1_goods_8_success_contrast.html', title: "08. 결제 완료" },
  { html: '1_goods_9_receipt_contrast.html', title: "09. 영수증 출력" },
  { html: '1_goods_10_complete_contrast.html', title: "10. 완료" },

  { title: '27" 고대비 옵션 선택형' },
  { html: '2_option_1_main_contrast.html', title: "01. 메인" },
  { html: '2_option_2_list-all_contrast.html', title: "02. 상품 목록(전체)" },
  { html: '2_option_3_option_contrast.html', title: "03. 옵션 선택" },
  { html: '2_option_4_select_contrast.html', title: "04. 상품 선택 후" },
  { html: '2_option_5_popup-cart_contrast.html', title: "05. 장바구니" },
  { html: '2_option_6_confirm_contrast.html', title: "06. 내역 확인" },
  { html: '2_option_7_payment_contrast.html', title: "07. 결제 방법 선택" },
  { html: '2_option_8_card_contrast.html', title: "08. 카드 투입" },
  { html: '2_option_9_progress_contrast.html', title: "09. 카드 읽는 중" },
  { html: '2_option_10_success_contrast.html', title: "10. 결제 완료" },
  { html: '2_option_11_receipt_contrast.html', title: "11. 영수증 출력" },
  { html: '2_option_12_complete_contrast.html', title: "12. 완료" },    

  { main: "lower", title: '화면 내리기' },
  { title: '27" 화면 내리기 상품 선택형' },
  { html: '1_goods_1_main_lower.html', title: "01. 메인" },
  { html: '1_goods_2_list-all_lower.html', title: "02. 상품 목록(전체)" },
  { html: '1_goods_3_list-topping_lower.html', title: "03. 상품 목록(토핑)" },
  { html: '1_goods_4_cart_lower.html', title: "04. 장바구니" },
  { html: '1_goods_4_confirm_lower.html', title: "04. 내역 확인" },
  { html: '1_goods_5_payment_lower.html', title: "05. 결제 방법 선택" },
  { html: '1_goods_6_card_lower.html', title: "06. 카드 투입" },
  { html: '1_goods_7_progress_lower.html', title: "07. 카드 읽는 중" },
  { html: '1_goods_8_success_lower.html', title: "08. 결제 완료" },
  { html: '1_goods_9_receipt_lower.html', title: "09. 영수증 출력" },
  { html: '1_goods_10_complete_lower.html', title: "10. 완료" },

  { title: '27" 화면 내리기 옵션 선택형' },
  { html: '2_option_1_main_lower.html', title: "01. 메인" },
  { html: '2_option_2_list-all_lower.html', title: "02. 상품 목록(전체)" },
  { html: '2_option_3_option_lower.html', title: "03. 옵션 선택" },
  { html: '2_option_4_select_lower.html', title: "04. 상품 선택 후" },
  { html: '2_option_5_popup-cart_lower.html', title: "05. 장바구니" },
  { html: '2_option_6_confirm_lower.html', title: "06. 내역 확인" },
  { html: '2_option_7_payment_lower.html', title: "07. 결제 방법 선택" },
  { html: '2_option_8_card_lower.html', title: "08. 카드 투입" },
  { html: '2_option_9_progress_lower.html', title: "09. 카드 읽는 중" },
  { html: '2_option_10_success_lower.html', title: "10. 결제 완료" },
  { html: '2_option_11_receipt_lower.html', title: "11. 영수증 출력" },
  { html: '2_option_12_complete_lower.html', title: "12. 완료" },

  { main: "zoom", title: '고대비 화면 내리기' },  
  { title: '27" 고대비 화면 내리기 상품 선택형' },
  { html: '1_goods_1_main_lower-contrast.html', title: "01. 메인" },
  { html: '1_goods_2_list-all_lower-contrast.html', title: "02. 상품 목록(전체)" },
  { html: '1_goods_3_list-topping_lower-contrast.html', title: "03. 상품 목록(토핑)" },
  { html: '1_goods_4_cart_lower-contrast.html', title: "04. 장바구니" },
  { html: '1_goods_4_confirm_lower-contrast.html', title: "04. 내역 확인" },
  { html: '1_goods_5_payment_lower-contrast.html', title: "05. 결제 방법 선택" },
  { html: '1_goods_6_card_lower-contrast.html', title: "06. 카드 투입" },
  { html: '1_goods_7_progress_lower-contrast.html', title: "07. 카드 읽는 중" },
  { html: '1_goods_8_success_lower-contrast.html', title: "08. 결제 완료" },
  { html: '1_goods_9_receipt_lower-contrast.html', title: "09. 영수증 출력" },
  { html: '1_goods_10_complete_lower-contrast.html', title: "10. 완료" },

  { title: '27" 고대비 화면 내리기 옵션 선택형' },
  { html: '2_option_1_main_lower-contrast.html', title: "01. 메인" },
  { html: '2_option_2_list-all_lower-contrast.html', title: "02. 상품 목록(전체)" },
  { html: '2_option_3_option_lower-contrast.html', title: "03. 옵션 선택" },
  { html: '2_option_4_select_lower-contrast.html', title: "04. 상품 선택 후" },
  { html: '2_option_5_popup-cart_lower-contrast.html', title: "05. 장바구니" },
  { html: '2_option_6_confirm_lower-contrast.html', title: "06. 내역 확인" },
  { html: '2_option_7_payment_lower-contrast.html', title: "07. 결제 방법 선택" },
  { html: '2_option_8_card_lower-contrast.html', title: "08. 카드 투입" },
  { html: '2_option_9_progress_lower-contrast.html', title: "09. 카드 읽는 중" },
  { html: '2_option_10_success_lower-contrast.html', title: "10. 결제 완료" },
  { html: '2_option_11_receipt_lower-contrast.html', title: "11. 영수증 출력" },
  { html: '2_option_12_complete_lower-contrast.html', title: "12. 완료" },
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