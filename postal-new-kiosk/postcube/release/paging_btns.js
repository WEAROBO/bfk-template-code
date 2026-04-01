const htmlList = [
  {
    file: '1_post_1_main.html',
    kr: '1_우편접수_1_메인',
  },
  {
    file: '1_post_2_caution.html',
    kr: '1_우편접수_2_우편물정보기재',
  },
  {
    file: '1_post_3_type.html',
    kr: '1_우편접수_3_일반등기선택',
  },
  {
    file: '1_post_4_delivery.html',
    kr: '1_우편접수_4_등기종류선택',
  },
  {
    file: '1_post_5_service.html',
    kr: '1_우편접수_5_부가서비스선택',
  },
  {
    file: '1_post_6_agree.html',
    kr: '1_우편접수_6_보상안내동의',
  },
  {
    file: '1_post_7_item.html',
    kr: '1_우편접수_7_내용품선택',
  },
  {
    file: '1_post_8_sender_name.html',
    kr: '1_우편접수_8_발송인_이름입력',
  },
  {
    file: '1_post_9_sender_phone.html',
    kr: '1_우편접수_9_발송인_전화번호입력',
  },
  {
    file: '1_post_10_sender_address.html',
    kr: '1_우편접수_10_발송인_주소입력',
  },
  {
    file: '1_post_11_sender_address_zipcode.html',
    kr: '1_우편접수_11_발송인_주소선택',
  },
  {
    file: '1_post_12_sender_address_detail.html',
    kr: '1_우편접수_12_발송인_상세주소입력',
  },
  {
    file: '1_post_13_receiver_name.html',
    kr: '1_우편접수_13_수신인_이름입력',
  },
  {
    file: '1_post_14_receiver_phone.html',
    kr: '1_우편접수_14_수신인_전화번호입력',
  },
  {
    file: '1_post_15_receiver_address.html',
    kr: '1_우편접수_15_수신인_주소입력',
  },
  {
    file: '1_post_16_receiver_address_zipcode.html',
    kr: '1_우편접수_16_수신인_주소선택',
  },
  {
    file: '1_post_17_receiver_address_detail.html',
    kr: '1_우편접수_17_수신인_상세주소입력',
  },
  {
    file: '1_post_18_check.html',
    kr: '1_우편접수_18_입력정보확인',
  },
  {
    file: '1_post_19_addition.html',
    kr: '1_우편접수_19_우편물_추가접수선택',
  },
  {
    file: '1_post_20_place.html',
    kr: '1_우편접수_20_우편물_투입구형',
  },
  '1_post_1_main_contrast.html',
  '1_post_2_caution_contrast.html',
  '1_post_3_type_contrast.html',
  '1_post_4_delivery_contrast.html',
  '1_post_5_service_contrast.html',
  '1_post_6_agree_contrast.html',
  '1_post_7_item_contrast.html',
  '1_post_8_sender_name_contrast.html',
  '1_post_9_sender_phone_contrast.html',
  '1_post_10_sender_address_contrast.html',
  '1_post_11_sender_address_zipcode_contrast.html',
  '1_post_16_receiver_address_zipcode.html',
  '1_post_18_check_contrast.html',
  '1_post_20_place_contrast.html',
  '1_post_21_payment_contrast.html',
  '1_post_21_payment.html',
  '1_post_22_payment_method_contrast.html',
  '1_post_22_payment_method.html',
  '1_post_23_creditcard_contrast.html',
  '1_post_23_creditcard.html',
  '1_post_24_progress_contrast.html',
  '1_post_24_progress.html',
  '1_post_25_receipt_type.html',
  '1_post_26_label.html',
  '1_post_27_place.html',
  '1_post_28_receipt_print_contrast.html',
  '1_post_28_receipt_print.html',
  '1_post_29_complete_contrast.html',
  '1_post_29_complete.html',
  '2_parcel_3_type.html',
  '2_parcel_7_item.html',
  '2_parcel_19_box.html',
  '2_parcel_20_size.html',
  '2_parcel_27_place.html',
  '3_international_2_caution_contrast.html',
  '3_international_2_caution.html',
  '3_international_3_type.html',
  '3_international_4_continent_contrast.html',
  '3_international_4_continent.html',
  '3_international_5_country_contrast.html',
  '3_international_5_country.html',
  '3_international_6_place.html',
  '3_international_7_payment.html',
  '4_quick_2_caution.html',
  '4_quick_3_type.html',
  '4_quick_4_barcode_scan.html',
  '4_quick_5_select.html',
  '5_prepaid_2_caution.html',
  '5_prepaid_3_type.html',
  '5_prepaid_4_barcode_scan.html',
  '5_prepaid_5_check_contrast.html',
  '5_prepaid_5_check.html',
  '5_prepaid_6_sender_phone_contrast.html',
  '5_prepaid_6_sender_phone.html',
  '6_parcelbox_2_select_contrast.html',
  '6_parcelbox_2_select.html',
  '6_parcelbox_3_payment_contrast.html',
  '6_parcelbox_3_payment.html',
  '6_parcelbox_4_payment_method.htm',
]
const nameList = [
  '1_우편접수_4_등기종류선택',
  '1_우편접수_5_부가서비스선택',
  '1_우편접수_6_보상안내동의',
  '1_우편접수_7_내용품선택',
  '1_우편접수_8_발송인_이름입력',
  '1_우편접수_9_발송인_전화번호입력',
  '1_우편접수_10_발송인_주소입력',
  '1_우편접수_11_발송인_주소선택',
  '1_우편접수_12_발송인_상세주소입력',
  '1_우편접수_13_수신인_이름입력',
  '1_우편접수_14_수신인_전화번호입력',
  '1_우편접수_15_수신인_주소입력',
  '1_우편접수_16_수신인_주소선택',
  '1_우편접수_17_수신인_상세주소입력',
  '1_우편접수_18_입력정보확인',
  '1_우편접수_19_우편물_추가접수선택',
  '1_우편접수_20_우편물_투입구형',
  '1_우편접수_21_결제금액확인',
  '1_우편접수_22_결제방법선택',
  '1_우편접수_23_신용카드투입',
  '1_우편접수_24_거래중',
  '1_우편접수_25_영수증발급_방법선택',
  '1_우편접수_26_라벨부착안내',
  '1_우편접수_27_우편물(우편)투입',
  '1_우편접수_28_영수증출력',
  '1_우편접수_29_완료',
  '2_소포접수_3_소포종류선택',
  '2_소포접수_7_내용품선택',
  '2_소포접수_19_상자구매여부선택',
  '2_소포접수_20_소포크기선택',
  '2_소포접수_27_우편물(소포)투입',
  '3_국제우편_2_주의사항',
  '3_국제우편_3_항공선박선택',
  '3_국제우편_4_대륙선택',
  '3_국제우편_5_국가선택',
  '3_국제우편_6_우편물투입',
  '3_국제우편_7_결제금액확인',
  '4_간편사전접수_2_우편물정보기재',
  '4_간편사전접수_3_접수방법선택',
  '4_간편사전접수_4_바코드스캔',
  '4_간편사전접수_5_우편물선택',
  '5_선납우편물_2_우편물정보기재',
  '5_선납우편물_3_우편소포선택',
  '5_선납우편물_4_바코드스캔',
  '5_선납우편물_5_우편물확인',
  '5_선납우편물_6_발송인_전화번호입력',
  '6_소포상자구매_2_소포상자선택',
  '6_소포상자구매_3_결제금액확인',
  '6_소포상자구매_4_결제방법선택',
]
const htmlList_contrast = [
  '1_우편접수_1_메인_contrast',
  '1_우편접수_2_우편물정보기재_contrast',
  '1_우편접수_3_일반등기선택_contrast',
  '1_우편접수_4_등기종류선택_contrast',
  '1_우편접수_5_부가서비스선택_contrast',
  '1_우편접수_6_보상안내동의_contrast',
  '1_우편접수_7_내용품선택_contrast',
  '1_우편접수_8_발송인_이름입력_contrast',
  '1_우편접수_9_발송인_전화번호입력_contrast',
  '1_우편접수_10_발송인_주소입력_contrast',
  '1_우편접수_11_발송인_주소선택_contrast',
  '',
  '',
  '',
  '',
  '',
  '',
  '1_우편접수_18_입력정보확인_contrast',
  '',
  '1_우편접수_20_우편물_투입구형_contrast',
  '1_우편접수_21_결제금액확인_contrast',
  '1_우편접수_22_결제방법선택_contrast',
  '1_우편접수_23_신용카드투입_contrast',
  '1_우편접수_24_거래중_contrast',
  '',
  '',
  '',
  '1_우편접수_28_영수증출력_contrast',
  '1_우편접수_29_완료_contrast',
  '',
  '',
  '',
  '',
  '',
  '3_국제우편_2_주의사항_contrast',
  '',
  '3_국제우편_4_대륙선택_contrast',
  '',
  '3_국제우편_5_국가선택_contrast',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '5_선납우편물_5_우편물확인_contrast',
  '5_선납우편물_6_발송인_전화번호입력_contrast',
  '6_소포상자구매_2_소포상자선택_contrast',
  '6_소포상자구매_3_결제금액확인_contrast',
  '',
]

const dirFileList = [
  '1_post_1_main_contrast.html',
  '1_post_1_main.html',
  '1_post_2_caution_contrast.html',
  '1_post_2_caution.html',
  '1_post_3_type_contrast.html',
  '1_post_3_type.html',
  '1_post_4_delivery_contrast.html',
  '1_post_4_delivery.html',
  '1_post_5_service_contrast.html',
  '1_post_5_service.html',
  '1_post_6_agree.html',
  '1_post_6_agree_contrast.html',
  '1_post_7_item_contrast.html',
  '1_post_7_item.html',
  '1_post_8_sender_name_contrast.html',
  '1_post_8_sender_name.html',
  '1_post_9_sender_phone_contrast.html',
  '1_post_9_sender_phone.html',
  '1_post_10_sender_address_contrast.html',
  '1_post_10_sender_address.html',
  '1_post_11_sender_address_zipcode_contrast.html',
  '1_post_11_sender_address_zipcode.html',
  '1_post_12_sender_address_detail.html',
  '1_post_13_receiver_name.html',
  '1_post_14_receiver_phone.html',
  '1_post_15_receiver_address.html',
  '1_post_16_receiver_address_zipcode.html',
  '1_post_17_receiver_address_detail.html',
  '1_post_18_check_contrast.html',
  '1_post_18_check.html',
  '1_post_19_addition.html',
  '1_post_20_place_contrast.html',
  '1_post_20_place.html',
  '1_post_21_payment_contrast.html',
  '1_post_21_payment.html',
  '1_post_22_payment_method_contrast.html',
  '1_post_22_payment_method.html',
  '1_post_23_creditcard_contrast.html',
  '1_post_23_creditcard.html',
  '1_post_24_progress_contrast.html',
  '1_post_24_progress.html',
  '1_post_25_receipt_type.html',
  '1_post_26_label.html',
  '1_post_27_place.html',
  '1_post_28_receipt_print_contrast.html',
  '1_post_28_receipt_print.html',
  '1_post_29_complete_contrast.html',
  '1_post_29_complete.html',
  '2_parcel_3_type.html',
  '2_parcel_7_item.html',
  '2_parcel_19_box.html',
  '2_parcel_20_size.html',
  '2_parcel_27_place.html',
  '3_international_2_caution_contrast.html',
  '3_international_2_caution.html',
  '3_international_3_type.html',
  '3_international_4_continent_contrast.html',
  '3_international_4_continent.html',
  '3_international_5_country_contrast.html',
  '3_international_5_country.html',
  '3_international_6_place.html',
  '3_international_7_payment.html',
  '4_quick_2_caution.html',
  '4_quick_3_type.html',
  '4_quick_4_barcode_scan.html',
  '4_quick_5_select.html',
  '5_prepaid_2_caution.html',
  '5_prepaid_3_type.html',
  '5_prepaid_4_barcode_scan.html',
  '5_prepaid_5_check_contrast.html',
  '5_prepaid_5_check.html',
  '5_prepaid_6_sender_phone_contrast.html',
  '5_prepaid_6_sender_phone.html',
  '6_parcelbox_2_select_contrast.html',
  '6_parcelbox_2_select.html',
  '6_parcelbox_3_payment_contrast.html',
  '6_parcelbox_3_payment.html',
  '6_parcelbox_4_payment_method.htm',
]
  const normalList = []
  const contrastList = []
  for (let i = 0; i < dirFileList.length; i++) {
    const file = dirFileList[i]
    if (file.indexOf("_contrast") < 0) {
      normalList.push(file);
    } else {
      contrastList.push(file);
    }
  }

window.onload = function(){
  const basic_ul = document.getElementById("basic_ul")
  const contrast_ul = document.getElementById("contrast_ul")

  // for (let i = 0; i < htmlList.length; i++) {
  //   let li = document.createElement('li');
  //   let a = document.createElement('a');
  //   const filename = htmlList[i] + ".html"
  //   a.href = `./iframe.html?path=${filename}`
  //   a.innerHTML = htmlList[i]
  //   li.append(a)
  //   basic_ul.append(li)
  // }
  // for (let i = 0; i < htmlList_contrast.length; i++) {
  //   let li = document.createElement('li');
  //   let a = document.createElement('a');
  //   const filename = htmlList_contrast[i] + ".html"
  //   a.href = `./iframe.html?path=${filename}`
  //   a.innerHTML = htmlList_contrast[i]
  //   li.append(a)
  //   contrast_ul.append(li)
  // }
  // const normalList = []
  // const contrastList = []
  // for (let i = 0; i < dirFileList.length; i++) {
  //   const file = dirFileList[i]
  //   if (file.indexOf("_contrast") < 0) {
  //     normalList.push(file);
  //   }
  // }

  for (let i = 0; i < normalList.length; i++) {
    const file = normalList[i]
    let li = document.createElement('li');
    let a = document.createElement('a');
    a.href = `./iframe.html?path=${file}`
    a.innerHTML = file
    li.append(a)
    basic_ul.append(li)

    const filename = file.split(".")[0];

    const target = dirFileList.find((v) => {
      return v == filename + "_contrast.html"
    })
    if (target) {
      let li = document.createElement('li');
      let a = document.createElement('a');
      a.href = `./iframe.html?path=${target}`
      a.innerHTML = target
      li.append(a)
      contrast_ul.append(li)
      contrastList.push(target)
    } else {
      let li = document.createElement('li');
      let a = document.createElement('a');
      a.href = ``
      a.innerHTML = ""
      li.append(a)
      contrast_ul.append(li)
    }
  }

  // for (let i = 0; i < dirFileList.length; i++) {
  //   const file = dirFileList[i]
  //   let li = document.createElement('li');
  //   let a = document.createElement('a');
  //   const filename = file
  //   a.href = `./iframe.html?path=${filename}`
  //   a.innerHTML = filename
  //   li.append(a)
  //   if (file.indexOf("_contrast") > -1) {
  //     contrast_ul.append(li)
  //   } else {
  //     basic_ul.append(li)
  //   }
  // }

}