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
  '1_post_6_agree_contrast.html',
  '1_post_6_agree.html',
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
  '2_parcel_20_size_contrast.html',
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
  '4_quick_5_select_contrast.html',
  '4_quick_5_select.html',
  '5_prepaid_2_caution.html',
  '5_prepaid_3_type.html',
  '5_prepaid_4_barcode_scan.html',
  '5_prepaid_5_check_contrast.html',
  '5_prepaid_5_check.html',
  '5_prepaid_6_sender_phone_contrast.html',
  '5_prepaid_6_sender_phone.html',
  '7_popup_1_sound_contrast.html',
  '7_popup_1_sound.html',
  '7_popup_2_highcontrast.html',
  '7_popup_2_highcontrast_contrast.html',
  '7_popup_3_zoom_contrast.html',
  '7_popup_3_zoom.html',
  '8_help_1_zoom_contrast.html',
  '8_help_1_zoom.html',
  '8_help_2_magnify.html',

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