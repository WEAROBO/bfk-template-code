const fileList = [
  { main: "normal", title: '대구시 관광안내 키오스크' },
  { title: '키오스크 기본' },
  { html: '1_basic_1_main.html', title: "01. 메인" },
  { html: '1_basic_2_slide2.html', title: "02. 사진 슬라이드" },
  { html: '1_basic_3_slide3.html', title: "03. 사진 슬라이드" },

  { title: '관광명소' },
  { html: '1_tourist_1_main.html', title: "01. 메인" },
  { html: '1_tourist_2_introduce.html', title: "02. 소개" },
  { html: '1_tourist_3_info.html', title: "03. 주요 정보" },
  { html: '1_tourist_4_service.html', title: "04. 편의 정보" },
  { html: '1_tourist_5_traffic.html', title: "05. 교통 정보" },
  
  { title: '시티투어' },
  { html: '2_citytour_1_introduce.html', title: "01. 소개" },
  { html: '2_citytour_2_course1.html', title: "02. 순환코스" },
  { html: '2_citytour_2_course2.html', title: "03. 순환코스" },
  { html: '2_citytour_3_theme.html', title: "04. 테마코스" },
  { html: '2_citytour_3_theme_detail.html', title: "05. 테마코스" },
  { html: '2_citytour_4_info.html', title: "06. 이용안내" },
  { html: '2_citytour_5_fee.html', title: "07. 요금안내" },
  { html: '2_citytour_6_precautions.html', title: "08. 유의사항" },
  
  { title: '음식' },
  { html: '3_food_1_10mi.html', title: "01. 음식 메인" },
  { html: '3_food_2_detail.html', title: "02. 음식 상세" },
  { html: '3_food_3_store.html', title: "03. 먹거리 골목" },
  { html: '3_food_4_store_detail.html', title: "04. 먹거리 골목 상세" },
  
  { title: '숙박' },
  { html: '4_hotel_1_main.html', title: "01. 숙박 메인" },
  { html: '4_hotel_2_detail.html', title: "02. 숙소 정보" },
  { html: '4_hotel_3_info.html', title: "03. 주요 정보" },
  { html: '4_hotel_4_traffic.html', title: "04. 교통 정보" },
  
  { title: '주변 교통' },
  { html: '5_traffic_1_basic.html', title: "01. 주변교통(동대구역)" },
  { html: '5_traffic_2_select.html', title: "02. 주변교통 선택" },
  { html: '5_traffic_3_biseulsan.html', title: "03. 주변교통(비슬산)" },
  { html: '5_traffic_4_biseulsan_select.html', title: "04. 주변교통 선택" },
  { html: '5_traffic_5_subway.html', title: "05. 도시철도 전체" },
  { html: '5_traffic_6_line1.html', title: "06. 도시철도 1호선" },
  { html: '5_traffic_7_line2.html', title: "07. 도시철도 2호선" },
  { html: '5_traffic_8_line3.html', title: "08. 도시철도 3호선" },
  { html: '5_traffic_9_line_dk.html', title: "09. 도시철도 대경선" },
  { html: '5_traffic_10_info.html', title: "10. 도시철도 시설정보" },
  
  { title: '편의 시설' },
  { html: '6_amenities_1_main.html', title: "01. 편의 시설 메인" },
  { html: '6_amenities_2_eworld.html', title: "02. 안내소 정보" },
  { html: '6_amenities_3_info.html', title: "03. 주요 정보" },
  { html: '6_amenities_4_traffic.html', title: "04. 교통 정보" },
  { html: '6_amenities_5_interpretation.html', title: "05. 통역서비스" },

  { title: '팝업' },
  { html: '7_popup_1_time.html', title: "01. 시간연장" },
  { html: '7_popup_2_gohome.html', title: "02. 처음으로" },
  { html: '7_popup_3_call_employee.html', title: "03. 직원호출" },


  { main: "lower", title: '낮은 화면 대구시 관광안내 키오스크' },

  { title: '키오스크 기본' },
  { html: '1_basic_1_main_lower.html', title: "01. 메인" },

  { title: '관광명소' },
  { html: '1_tourist_1_main_lower.html', title: "01. 메인" },
  { html: '1_tourist_2-1_introduce_lower.html', title: "02. 소개" },
  { html: '1_tourist_2-2_introduce_lower.html', title: "03. 소개2" },
  { html: '1_tourist_3_info_lower.html', title: "04. 주요 정보" },
  { html: '1_tourist_4_service_lower.html', title: "05. 편의정보" },
  { html: '1_tourist_5_traffic_lower.html', title: "06. 교통정보" },
  
  { title: '시티투어' },
  { html: '2_citytour_1-1_introduce_lower.html', title: "01. 소개1" },
  { html: '2_citytour_1-2_introduce_lower.html', title: "02. 소개2" },
  { html: '2_citytour_2_course1_lower.html', title: "03. 순환코스1" },
  { html: '2_citytour_2_course2_lower.html', title: "04. 순환코스2" },
  { html: '2_citytour_3_theme_lower.html', title: "05. 테마코스1" },
  // 06번 항목은 디자인에서 홀딩중
  { html: '2_citytour_4_info_lower.html', title: "07. 이용안내" },
  { html: '2_citytour_5-1_fee_lower.html', title: "08. 요금안내1" },
  { html: '2_citytour_5-2_fee_lower.html', title: "09. 요금안내2" },
  { html: '2_citytour_6_precautions_lower.html', title: "10. 유의사항" },

  { title: '음식' },
  { html: '3_food_1_10mi_lower.html', title: "01. 음식 메인" },
  { html: '3_food_2_detail_lower.html', title: "02. 음식 상세" },
  { html: '3_food_3_store_lower.html', title: "03. 먹거리 골목" },
  { html: '3_food_4_store_detail_lower.html', title: "먹거리 골목 상세" },

  { title: '숙박' },
  { html: '4_hotel_1_main_lower.html', title: "01. 숙박 메인" },
  { html: '4_hotel_2_detail_lower.html', title: "02. 숙소정보" },
  { html: '4_hotel_3-1_info_lower.html', title: "03. 주요정보1" },
  { html: '4_hotel_3-2_info_lower.html', title: "04. 주요정보2" },
  { html: '4_hotel_4_traffic_lower.html', title: "05. 교통정보" },

  { title: '주변교통' },
  { html: '5_traffic_1_basic_lower.html', title: "01. 주변교통(동대구역)" },
  { html: '5_traffic_2_select_lower.html', title: "02. 주변교통 선택" },
  { html: '5_traffic_3_biseulsan_lower.html', title: "03. 주변교통(비슬산)" },
  { html: '5_traffic_4_biseulsan_select_lower.html', title: "04. 주변교통 선택" },
  { html: '5_traffic_5_subway_lower.html', title: "05. 도시철도 전체" },
  { html: '5_traffic_6_line1_lower.html', title: "06. 도시철도 1호선" },
  { html: '5_traffic_7_line2_lower.html', title: "07. 도시철도 2호선" },
  { html: '5_traffic_8_line3_lower.html', title: "08. 도시철도 3호선" },
  { html: '5_traffic_9_line_dk_lower.html', title: "09. 도시철도 대경선" },
  { html: '5_traffic_10_info_lower.html', title: "10. 도시철도 시설 정보" },

  { title: '편의 시설' },
  { html: '6_amenities_1_main_lower.html', title: "01. 편의 시설 메인" },
  { html: '6_amenities_2_eworld_lower.html', title: "02. 안내소 정보" },
  { html: '6_amenities_3_info_lower.html', title: "03. 주요 정보" },
  { html: '6_amenities_4_traffic_lower.html', title: "04. 교통 정보" },
  { html: '6_amenities_5-1_interpretation_lower.html', title: "05. 통역 서비스1" },
  { html: '6_amenities_5-2_interpretation_lower.html', title: "06. 통역 서비스2" },

  { title: '팝업' },
  { html: '7_popup_1_time_lower.html', title: "01. 시간 연장" },
  { html: '7_popup_2_gohome_lower.html', title: "02. 처음으로" },
  { html: '7_popup_3_call_employee_lower.html', title: "03. 직원호출" },


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
