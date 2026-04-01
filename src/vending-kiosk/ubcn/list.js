const fileList = [

  
  { main: "normal", title: '기본 프로레스' },
  { title: '공통화면' },
  { html: "1_common_1_main.html", title: "메인"},
  { html: "1_common_2_time.html", title: "시간연장"},
  { html: "1_common_3_inspection.html", title: "서비스 점검"},

  { title: '구매 프로세스' },
  { html: "2_purchase_1_main.html", title: "상품 구매 메인"},
  { html: "2_purchase_2_menu.html", title: "메뉴 선택"},
  { html: "2_purchase_3_product_detail.html", title: "상품 상세"},
  { html: "2_purchase_4_payment.html", title: "결제수단 선택"},
  { html: "2_purchase_5_payment_card.html", title: "신용카드 투입"},
  { html: "2_purchase_6_progress.html", title: "결제중"},
  { html: "2_purchase_7_pay_complete.html", title: "결제완료"},
  { html: "2_purchase_8_ready.html", title: "상품 준비중"},
  { html: "2_purchase_9_out.html", title: "배출구 열림"},
  { html: "2_purchase_10_complete.html", title: "완료"},

  { title: '추가 화면' },
  { html: "3_add_1_empty_product.html", title: "상품 없을때"},
  { html: "3_add_2_sign.html", title: "전자 서명"},
  { html: "3_add_3_use_coupon.html", title: "쿠폰 사용하기"},
  { html: "3_add_4_coupon_complete.html", title: "쿠폰 적용 후"},
  { html: "3_add_5_pay_error.html", title: "결제 오류"},
  { html: "3_add_6_pay_limit.html", title: "구매 갯수 제한"},


  { main: "contrast", title: '고대비' },
  { title: '공통화면' },
  { html: "1_common_1_main_contrast.html", title: "메인"},
  { html: "1_common_2_time_contrast.html", title: "시간연장"},

  { title: '구매 프로세스' },
  { html: "2_purchase_1_main_contrast.html", title: "상품 구매 메인"},
  { html: "2_purchase_2_menu_contrast.html", title: "메뉴 선택"},
  { html: "2_purchase_3_product_detail_contrast.html", title: "상품 상세"},
  { html: "2_purchase_4_payment_contrast.html", title: "결제수단 선택"},
  { html: "2_purchase_5_payment_card_contrast.html", title: "신용카드 투입"},
  { html: "2_purchase_6_progress_contrast.html", title: "결제중"},
  { html: "2_purchase_7_pay_complete_contrast.html", title: "결제 완료"},
  { html: "2_purchase_8_ready_contrast.html", title: "상품 준비중"},
  { html: "2_purchase_9_out_contrast.html", title: "배출구 열림"},
  { html: "2_purchase_10_complete_contrast.html", title: "완료"},


  { main: "lower", title: '낮은화면' },
  { title: '공통화면' },
  { html: "1_common_1_main_lower.html", title: "메인"},
  { html: "1_common_2_time_lower.html", title: "시간 연장"},

  { title: '구매 프로세스' },
  { html: "2_purchase_1_main_lower.html", title: "상품 구매 메인"},
  { html: "2_purchase_2_menu_lower.html", title: "메뉴 선택"},
  { html: "2_purchase_2-1_basket_lower.html", title: "장바구니"},
  { html: "2_purchase_3_product_detail_lower.html", title: "상품상세"},
  { html: "2_purchase_4_payment_lower.html", title: "결제수단 선택"},
  { html: "2_purchase_5_payment_card_lower.html", title: "신용카드 투입"},
  { html: "2_purchase_6_progress_lower.html", title: "결제중"},
  { html: "2_purchase_7_pay_complete_lower.html", title: "결제 완료"},
  { html: "2_purchase_8_ready_lower.html", title: "상품 준비중"},
  { html: "2_purchase_9_out_lower.html", title: "배출구 열림"},
  { html: "2_purchase_10_complete_lower.html", title: "완료"},


  { main: "magnifier", title: '돋보기' },
  { title: '공통화면' },
  { html: "4_magnifier_1_main.html", title: "메인"},
  { html: "4_magnifier_2_menu.html", title: "상품 구매 메인"},

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