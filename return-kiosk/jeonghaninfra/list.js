const fileList = [
  { main: "normal", title: '기본 프로세스' },
  { title: '기본화면' },
  { html: '1_common_1_main.html', title: "01. 메인" },
  { html: '1_common_2_guide.html', title: "02. 시작안내" },
  { html: '1_common_3-1_auth.html', title: "03-1. 소비자인증" },
  { html: '1_common_3-2_success.html', title: "03-2. 소비자인증" },
  { html: '1_common_4_scan.html', title: "04. 컵 바코드 스캔" },
  { html: '1_common_5_add.html', title: "05. 컵 반환 추가 여부" },
  { html: '1_common_6_history.html', title: "06. 반환내역" },
  { html: '1_common_7_complete.html', title: "07. 완료" },

  { main: "contrast", title: '고대비' },
  { title: '기본화면_고대비' },
  { html: '1_common_1_main_contrast.html', title: "01. 메인" },
  { html: '1_common_2_guide_contrast.html', title: "02. 시작안내" },
  { html: '1_common_3-1_auth_contrast.html', title: "03-1. 소비자인증" },
  { html: '1_common_3-2_success_contrast.html', title: "03-2. 소비자인증" },
  { html: '1_common_4_scan_contrast.html', title: "04. 컵 바코드 스캔" },
  { html: '1_common_5_add_contrast.html', title: "05. 컵 반환 추가 여부" },
  { html: '1_common_6_history_contrast.html', title: "06. 반환내역" },
  { html: '1_common_7_complete_contrast.html', title: "07. 완료" },  

  { main: "normal", title: '기본 프로세스' },  
  { title: '기타화면' },
  { html: '2_misc_1_popup_barcode-error.html', title: "01. 바코드 오류" },
  { html: '2_misc_2_popup_auth-failed.html', title: "02. 개인인증 실패" },
  { html: '2_misc_3_popup_returned.html', title: "03. 반환완료된 컵" },
  { html: '2_misc_4_network-error.html', title: "04. 통신장애" },
  { html: '2_misc_5_popup_inquiry.html', title: "05. 직원문의" },
  { html: '2_misc_6_popup_time-extend.html', title: "06. 시간연장" },
  { html: '2_misc_7-1_popup_guide_keypad.html', title: "07-1. 키패드 안내" },
  { html: '2_misc_7-2_popup_guide_keypad.html', title: "07-2. 키패드 안내" },
  { html: '2_misc_8_zoom.html', title: "08. 화면확대" },

  { main: "contrast", title: '고대비' },
  { title: '기타화면_고대비' },
  { html: '2_misc_1_popup_barcode-error_contrast.html', title: "01. 바코드 오류" },
  { html: '2_misc_2_popup_auth-failed_contrast.html', title: "02. 개인인증 실패" },
  { html: '2_misc_3_popup_returned_contrast.html', title: "03. 반환완료된 컵" },
  { html: '2_misc_4_network-error_contrast.html', title: "04. 통신장애" },
  { html: '2_misc_5_popup_inquiry_contrast.html', title: "05. 직원문의" },
  { html: '2_misc_6_popup_time-extend_contrast.html', title: "06. 시간연장" },
  { html: '2_misc_7-1_popup_guide_keypad_contrast.html', title: "07-1. 키패드 안내" },
  { html: '2_misc_7-2_popup_guide_keypad_contrast.html', title: "07-2. 키패드 안내" },
  { html: '2_misc_8_zoom_contrast.html', title: "08. 화면확대" },
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