const fileList = [
  { main: "normal", title: '기본 프로레스' },
  { title: '우편 접수 (카드 결제)' },
  { html: '1_post_1_main.html', title: "01. 메인" },
  { html: '1_post_2_caution.html', title: "02. 우편물 정보기재" },
  { html: '1_post_3_type.html', title: "03. 일반/등기 선택" },
  { html: '1_post_3-1_number.html', title: "03-1. 우편물 개수 선택(일반우편)" },  
  { html: '1_post_4_delivery.html', title: "04. 등기종류 선택" },
  { html: '1_post_5_service.html', title: "05. 부가서비스 선택" },
  { html: '1_post_5-1_popup.html', title: "05-1. 부가서비스 설명" },
  { html: '1_post_6_agree.html', title: "06. 보상안내 동의" },
  { html: '1_post_7_item.html', title: "07. 내용품 선택" },
  { html: '1_post_8_sender_name.html', title: "08. 발송인 이름입력" },
  { html: '1_post_9_sender_phone.html', title: "09. 발송인 전화번호입력" },
  { html: '1_post_10_sender_address.html', title: "10. 발송인 주소입력" },
  { html: '1_post_11_sender_address_zipcode.html', title: "11. 발송인 주소선택" },
  { html: '1_post_12_sender_address_detail.html', title: "12. 발송인 상세주소입력" },
  { html: '1_post_13_receiver_name.html', title: "13. 수신인 이름입력" },
  { html: '1_post_14_receiver_phone.html', title: "14. 수신인 전화번호입력" },
  { html: '1_post_15_receiver_address.html', title: "15. 수신인 주소입력" },
  { html: '1_post_16_receiver_address_zipcode.html', title: "16. 수신인 주소선택 " },
  { html: '1_post_17_receiver_address_detail.html', title: "17. 수신인 상세주소입력" },
  { html: '1_post_18_check.html', title: "18. 입력정보확인" },
  { html: '1_post_19_addition.html', title: "19. 우편물 추가 접수선택" },
  { html: '1_post_20_place.html', title: "20. 우편물 투입" },
  { html: '1_post_21_photo.html', title: "21. 우편물 투입 확인" },  
  { html: '1_post_22_payment.html', title: "22. 결제금액 확인" },
  { html: '1_post_23_payment_method.html', title: "23. 결제방법 선택" },
  { html: '1_post_24_creditcard.html', title: "24. 신용카드 투입" },
  { html: '1_post_25_progress.html', title: "25. 거래중" },
  { html: '1_post_26_receipt_type.html', title: "26. 영수증발급 방법선택" },
  { html: '1_post_27_label.html', title: "27. 라벨 부착 안내" },
  { html: '1_post_28_place.html', title: "28. 우편물(우편) 투입" },
  { html: '1_post_29_receipt_print.html', title: "29. 영수증 출력" },
  { html: '1_post_30_complete.html', title: "30. 완료" },

  { title: '우편 접수 (핸드폰 소액결제)' },
  { html: '2_post_24_verify_phone.html', title: "24. 전화번호 입력" },
  { html: '2_post_25_identity_number.html', title: "25. 주민등록번호 입력" },
  { html: '2_post_26_agree.html', title: "26. 약관 동의" },
  { html: '2_post_27_popup.html', title: "27. 약관 동의 팝업" },
  { html: '2_post_28_approval_input.html', title: "28. 승인번호 입력" },  

  { title: '소포 접수' },  
  { html: '3_parcel_3_type.html', title: "03. 소포종류 선택" },
  { html: '3_parcel_7_item.html', title: "07. 내용품 선택" },
  { html: '3_parcel_19_box.html', title: "19. 상자구매여부 선택" },
  { html: '3_parcel_20_size.html', title: "20. 소포크기 선택" },
  { html: '3_parcel_27_place.html', title: "27. 우편물(소포) 투입" },  

  { title: '국제 우편' },
  { html: '4_international_2_caution.html', title: "02. 주의사항" },
  { html: '4_international_3_type.html', title: "03. 항공/선박 선택" },
  { html: '4_international_4_continent.html', title: "04. 대륙 선택" },
  { html: '4_international_5_country.html', title: "05. 국가 선택" },
  { html: '4_international_6_place.html', title: "06. 우편물 투입" },
  { html: '4_international_7_payment.html', title: "07. 결제금액 확인" },

  { title: '간편사전 접수' },
  { html: '5_quick_2_caution.html', title: "02. 우편물 정보기재" },
  { html: '5_quick_3_type.html', title: "03. 접수방법 선택" },
  { html: '5_quick_4_barcode_scan.html', title: "04. 바코드 스캔" },
  { html: '5_quick_5_select.html', title: "05. 우편물 선택" },

  { title: '선납 우편물' },
  { html: '6_prepaid_2_caution.html', title: "02. 우편물 정보기재" },
  { html: '6_prepaid_3_type.html', title: "03. 우편/소포 선택" },
  { html: '6_prepaid_4_barcode_scan.html', title: "04. 바코드 스캔" },
  { html: '6_prepaid_5_check.html', title: "05. 우편물 확인" },
  { html: '6_prepaid_6_sender_phone.html', title: "06. 발송인 전화번호 입력" },

  { title: '도움기능' },
  { html: '7_help_1_popup_volume.html', title: "01. 음량조절 팝업" },  
  { html: '7_help_2_popup_zoom.html', title: "02. 돋보기 활성화" },
  { html: '7_help_3_magnify_main.html', title: "03. 돋보기 적용 (메인)" },
  { html: '7_help_4_magnify_caution.html', title: "04. 돋보기 적용 (주의사항)" },
 
  { main: "contrast", title: '고대비' },
  { title: '고대비 주요화면' },
  { html: '7_help_1_popup_volume_contrast.html', title: "01. 음량조절 팝업" },    
  { html: '7_help_2_popup_zoom_contrast.html', title: "01. 활성화 팝업 (고대비)" },  
  { html: '1_post_1_main_contrast.html', title: "01. 메인" },
  { html: '1_post_2_caution_contrast.html', title: "02. 우편물 정보기재" },
  { html: '1_post_3_type_contrast.html', title: "03. 일반/등기 선택" },
  { html: '1_post_6_agree_contrast.html', title: "06. 접수 금지물품 확인" },
  { html: '1_post_7_item_contrast.html', title: "07. 내용품 선택" },
  { html: '1_post_8_sender_name_contrast.html', title: "08. 발송인 이름입력" },
  { html: '1_post_9_sender_phone_contrast.html', title: "09. 발송인 전화번호입력" },
  { html: '1_post_10_sender_address_contrast.html', title: "10. 발송인 주소입력" },
  { html: '1_post_11_sender_address_zipcode_contrast.html', title: "11. 발송인 주소선택" },
  { html: '1_post_18_check_contrast.html', title: "18. 입력정보확인" },
  { html: '1_post_20_place_contrast.html', title: "20. 우편물 투입" },
  { html: '1_post_22_payment_contrast.html', title: "21. 결제금액 확인" },
  { html: '1_post_23_payment_method_contrast.html', title: "22. 결제방법 선택" },
  { html: '1_post_24_creditcard_contrast.html', title: "23. 신용카드 투입" },
  { html: '1_post_25_progress_contrast.html', title: "24. 거래중" },
  { html: '1_post_29_receipt_print_contrast.html', title: "28. 영수증 출력" },
  { html: '1_post_30_complete_contrast.html', title: "29. 완료" },

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