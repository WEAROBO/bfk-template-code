const fileList = [

  { main: "normal", title: '기본 프로레스' },
  { title: '기본 화면' },
  { html: "1_main.html", title: "1. 메인" },
  { html: "2_item_select.html", title: "2. 상품 선택" },
  { html: "3_item_detail.html", title: "3. 상품 상세정보 확인" },
  { html: "4_select_payment.html", title: "4. 결제 방법 선택" },
  { html: "5_insert_card.html", title: "5. 카드 투입" },
  { html: "6_reading_card.html", title: "6. 카드 읽는 중" },
  { html: "7_complete.html", title: "7. 결제 완료" },
  { html: "8_ready_item.html", title: "8. 상품 준비 중" },
  { html: "9_item_out.html", title: "9. 상품 꺼내기" },
  { html: "10_complete.html", title: "10. 완료" },



  { main: "normal_contrast", title: '기본 프로레스' },
  { title: '기본 화면 고대비' },
  { html: "1_main_contrast.html", title: "1. 메인" },
  { html: "2_item_select_contrast.html", title: "2. 상품 선택" },
  { html: "3_item_detail_contrast.html", title: "3. 상품 상세정보 확인" },
  { html: "4_select_payment_contrast.html", title: "4. 결제 방법 선택" },
  { html: "5_insert_card_contrast.html", title: "5. 카드 투입" },
  { html: "6_reading_card_contrast.html", title: "6. 카드 읽는 중" },
  { html: "7_complete_contrast.html", title: "7. 결제 완료" },
  { html: "8_ready_item_contrast.html", title: "8. 상품 준비 중" },
  { html: "9_item_out_contrast.html", title: "9. 상품 꺼내기" },
  { html: "10_complete_contrast.html", title: "10. 완료" },

  { main: "lower", title: '기본 프로레스' },
  { title: '낮은 화면' },
  { html: "1_main_lower.html", title: "1. 메인" },
  { html: "2_item_select_lower.html", title: "2. 상품 선택" },
  { html: "3_item_detail_lower.html", title: "3. 상품 상세정보 확인" },
  { html: "4_select_payment_lower.html", title: "4. 결제 방법 선택" },
  { html: "5_insert_card_lower.html", title: "5. 카드 투입" },
  { html: "6_reading_card_lower.html", title: "6. 카드 읽는 중" },
  { html: "7_complete_lower.html", title: "7. 결제 완료" },
  { html: "8_ready_item_lower.html", title: "8. 상품 준비 중" },
  { html: "9_item_out_lower.html", title: "9. 상품 꺼내기" },
  { html: "10_complete_lower.html", title: "10. 완료" },

  { main: "lower_contrast", title: '기본 프로레스' },
  { title: '낮은 화면 고대비' },
  { html: "1_main_lower_contrast.html", title: "1. 메인" },
  { html: "2_item_select_lower_contrast.html", title: "2. 상품 선택" },
  { html: "3_item_detail_lower_contrast.html", title: "3. 상품 상세정보 확인" },
  { html: "4_select_payment_lower_contrast.html", title: "4. 결제 방법 선택" },
  { html: "5_insert_card_lower_contrast.html", title: "5. 카드 투입" },
  { html: "6_reading_card_lower_contrast.html", title: "6. 카드 읽는 중" },
  { html: "7_complete_lower_contrast.html", title: "7. 결제 완료" },
  { html: "8_ready_item_lower_contrast.html", title: "8. 상품 준비 중" },
  { html: "9_item_out_lower_contrast.html", title: "9. 상품 꺼내기" },
  { html: "10_complete_lower_contrast.html", title: "10. 완료" },

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