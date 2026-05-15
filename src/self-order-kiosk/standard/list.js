const fileList = [

  
  { main: "normal", title: '기본 프로레스' },
  { title: '기본 화면' },
  { html: "1-1_main.html", title: "1. 메인" },
  { html: "1-2_before_select.html", title: "2. 음료 선택 전" },
  { html: "1-3_option.html", title: "3. 음료 선택" },
  { html: "1-4_select.html", title: "4. 음료 선택 완료" },
  { html: "1-5_detail.html", title: "5. 내역 확인" },
  { html: "1-6_select_pay.html", title: "6. 결제 방법 선택" },
  { html: "1-7_insert_card.html", title: "7. 카드 투입" },
  { html: "1-8_reading_card.html", title: "8. 카드 읽는 중" },
  { html: "1-9_pay_complete.html", title: "9. 결제 완료" },
  { html: "1-10_input_point.html", title: "10. 포인트 적립 입력 전" },
  { html: "1-11_input_point_complete.html", title: "11. 포인트 적립 입력 완료" },
  { html: "1-12_cup_out.html", title: "12. 컵 꺼내기" },
  { html: "1-13_ice.html", title: "13. 얼음 받기" },
  { html: "1-14_put_cup.html", title: "14. 컵 놓기" },
  { html: "1-15_brewing.html", title: "15. 음료 추출 중" },
  { html: "1-16_making_complete.html", title: "16. 제조 완료" },
  { html: "1-17_complete.html", title: "17. 완료" },
  { html: "2-4_select.html", title: "4. 한잔이상 음료 선택 완료" },
  { html: "2-5_detail.html", title: "5. 한잔이상 내역 확인" },
  { html: "2-12_cup_out.html", title: "12. 컵 꺼내기" },
  { html: "2-13_ice.html", title: "13. 한잔이상 얼음 받기" },
  { html: "2-14_put_cup.html", title: "14. 한잔이상 컵 놓기" },
  { html: "2-15_brewing.html", title: "15. 한잔이상 음료 추출 중" },
  { html: "2-16_making_complete.html", title: "16. 한잔이상 제조 완료" },
  { html: "2-17_making_next.html", title: "17. 한잔이상 제조 완료" },


  { main: "normal_contrast", title: '기본 프로레스' },
  { title: '기본 화면 고대비' },
  { html: "1-1_main_contrast.html", title: "1. 메인" },
  { html: "1-2_before_select_contrast.html", title: "2. 음료 선택 전" },
  { html: "1-3_option_contrast.html", title: "3. 음료 선택" },
  { html: "1-4_select_contrast.html", title: "4. 음료 선택 완료" },
  { html: "1-5_detail_contrast.html", title: "5. 내역 확인" },
  { html: "1-6_select_pay_contrast.html", title: "6. 결제 방법 선택" },
  { html: "1-7_insert_card_contrast.html", title: "7. 카드 투입" },
  { html: "1-8_reading_card_contrast.html", title: "8. 카드 읽는 중" },
  { html: "1-9_pay_complete_contrast.html", title: "9. 결제 완료" },
  { html: "1-10_input_point_contrast.html", title: "10. 포인트 적립 입력 전" },
  { html: "1-11_input_point_complete_contrast.html", title: "11. 포인트 적립 입력 완료" },
  { html: "1-12_cup_out_contrast.html", title: "12. 컵 꺼내기" },
  { html: "1-13_ice_contrast.html", title: "13. 얼음 받기" },
  { html: "1-14_put_cup_contrast.html", title: "14. 컵 놓기" },
  { html: "1-15_brewing_contrast.html", title: "15. 음료 추출 중" },
  { html: "1-16_making_complete_contrast.html", title: "16. 제조 완료" },
  { html: "1-17_complete_contrast.html", title: "17. 완료" },
  { html: "2-4_select_contrast.html", title: "4. 한잔이상 음료 선택 완료" },
  { html: "2-5_detail_contrast.html", title: "5. 한잔이상 내역 확인" },
  { html: "2-12_cup_out_contrast.html", title: "12. 컵 꺼내기" },
  { html: "2-13_ice_contrast.html", title: "13. 한잔이상 얼음 받기" },
  { html: "2-14_put_cup_contrast.html", title: "14. 한잔이상 컵 놓기" },
  { html: "2-15_brewing_contrast.html", title: "15. 한잔이상 음료 추출 중" },
  { html: "2-16_making_complete_contrast.html", title: "16. 한잔이상 제조 완료" },
  { html: "2-17_making_next_contrast.html", title: "17. 한잔이상 제조 완료" },


  { main: "lower", title: '기본 프로레스' },
  { title: '낮은 화면' },
  { html: "1-1_main_lower.html", title: "1. 메인" },
  { html: "1-2_before_select_lower.html", title: "2. 음료 선택 전" },
  { html: "1-3_option_lower.html", title: "3. 음료 선택" },
  { html: "1-4_select_lower.html", title: "4. 음료 선택 완료" },
  { html: "1-4-1_basket_lower.html", title: "5. 장바구니" },
  { html: "1-5_detail_lower.html", title: "6. 내역 확인" },
  { html: "1-6_select_pay_lower.html", title: "7. 결제 방법 선택" },
  { html: "1-7_insert_card_lower.html", title: "8. 카드 투입" },
  { html: "1-8_reading_card_lower.html", title: "9. 카드 읽는 중" },
  { html: "1-9_pay_complete_lower.html", title: "10. 결제 완료" },
  { html: "1-10_input_point_lower.html", title: "11. 포인트 적립" },
  { html: "1-10-1_input_point_guide_lower.html", title: "12. 포인트 적립 안내" },
  { html: "1-12_cup_out_lower.html", title: "13. 컵 꺼내기" },
  { html: "1-13_ice_lower.html", title: "14. 얼음 받기" },
  { html: "1-14_put_cup_lower.html", title: "15. 컵 놓기" },
  { html: "1-15_brewing_lower.html", title: "16. 음료 추출 중" },
  { html: "1-16_making_complete_lower.html", title: "17. 제조 완료" },
  { html: "1-17_complete_lower.html", title: "18. 완료" },
  { html: "2-4_select_lower.html", title: "4. 한잔이상 음료 선택 완료" },
  { html: "2-4-1_basket_lower.html", title: "5. 한잔이상 장바구니" },
  { html: "2-5_detail_lower.html", title: "6. 한잔이상 내역 확인" },
  { html: "2-12_cup_out_lower.html", title: "13. 한잔이상 컵 꺼내기" },
  { html: "2-13_ice_lower.html", title: "14. 한잔이상 얼음 받기" },
  { html: "2-14_put_cup_lower.html", title: "15. 한잔이상 컵 놓기" },
  { html: "2-15_brewing_lower.html", title: "16. 한잔이상 음료 추출 중" },
  { html: "2-16_making_complete_lower.html", title: "17. 한잔이상 제조 완료" },
  { html: "2-17_making_next_lower.html", title: "18. 한잔이상 처음으로" },


  { main: "lower_contrast", title: '기본 프로레스' },
  { title: '낮은 화면 고대비' },
  { html: "1-1_main_lower_contrast.html", title: "1. 메인" },
  { html: "1-2_before_select_lower_contrast.html", title: "2. 음료 선택 전" },
  { html: "1-3_option_lower_contrast.html", title: "3. 음료 선택" },
  { html: "1-4_select_lower_contrast.html", title: "4. 음료 선택 완료" }, 
  { html: "1-4-1_basket_lower_contrast.html", title: "5. 장바구니" },
  { html: "1-5_detail_lower_contrast.html", title: "6. 내역 확인" },
  { html: "1-6_select_pay_lower_contrast.html", title: "7. 결제 방법 선택" },
  { html: "1-7_insert_card_lower_contrast.html", title: "8. 카드 투입" },
  { html: "1-8_reading_card_lower_contrast.html", title: "9. 카드 읽는 중" },
  { html: "1-9_pay_complete_lower_contrast.html", title: "10. 결제 완료" },
  { html: "1-10_input_point_lower_contrast.html", title: "11. 포인트 적립" },
  { html: "1-10-1_input_point_guide_lower_contrast.html", title: "12. 포인트 적립 안내" },
  { html: "1-12_cup_out_lower_contrast.html", title: "13. 컵 꺼내기" },
  { html: "1-13_ice_lower_contrast.html", title: "14. 얼음 받기" },
  { html: "1-14_put_cup_lower_contrast.html", title: "15. 컵 놓기" },
  { html: "1-15_brewing_lower_contrast.html", title: "16. 음료 추출 중" },
  { html: "1-16_making_complete_lower_contrast.html", title: "17. 제조 완료" },
  { html: "1-17_complete_lower_contrast.html", title: "18. 완료" },
  { html: "2-4_select_lower_contrast.html", title: "4. 한잔이상 음료 선택 완료" },
  { html: "2-4-1_basket_lower_contrast.html", title: "5. 한잔이상 장바구니" },
  { html: "2-5_detail_lower_contrast.html", title: "6. 한잔이상 내역 확인" },
  { html: "2-12_cup_out_lower_contrast.html", title: "13. 한잔이상 컵 꺼내기" },
  { html: "2-13_ice_lower_contrast.html", title: "14. 한잔이상 얼음 받기" },
  { html: "2-14_put_cup_lower_contrast.html", title: "15. 한잔이상 컵 놓기" },
  { html: "2-15_brewing_lower_contrast.html", title: "16. 한잔이상 음료 추출 중" },
  { html: "2-16_making_complete_lower_contrast.html", title: "17. 한잔이상 제조 완료" },
  { html: "2-17_making_next_lower_contrast.html", title: "18. 한잔이상 처음으로" },
  
  
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
    const bodycolor = getComputedStyle(body).backgroundColor
    console.log("bodycolor ", bodycolor)

    const widthScale = iframe.clientWidth / body.scrollWidth;
    const heightScale = iframe.clientHeight / body.scrollHeight;
    const scale = Math.min(widthScale, heightScale);
    // if (iframe.clientHeight > iframe.clientWidth) {
    //   scale = iframe.clientHeight / body.scrollHeight;
    // } else{
    //   scale = iframe.clientWidth / body.scrollWidth;
    // }
    const html = doc.documentElement;

    const contentWidth = Math.max(body.scrollWidth, html.scrollWidth);
    const contentHeight = Math.max(body.scrollHeight, html.scrollHeight);

    console.log("scale", scale)

    console.log("scale", scale)
    body.style.transform = `scale(${scale})`;
    if (iframe.clientHeight > iframe.clientWidth) {
      body.style.transformOrigin = 'center top';
      body.style.width = contentWidth + 'px';
    } else {
      body.style.transformOrigin = 'left top';
      body.style.height = contentHeight + 'px';
    }
    iframe.style.height = contentHeight * scale + 'px';
    iframe.style.width = contentWidth * scale + 'px';
    body.style.overflow = 'hidden';
    body.style.background = '#c4c4c4';
    
    iframe.classList.remove("hide");

    document.getElementsByClassName("iframe_container")[0].style.backgroundColor = bodycolor;
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