const dirFileList = [
  '1_washing_1_main_contrast.html',
  '1_washing_1_main_lower.html',
  '1_washing_1_main.html',
  '1_washing_2_phone_contrast.html',
  '1_washing_2_phone_lower.html',
  '1_washing_2_phone.html',
  '1_washing_3_password_contrast.html',
  '1_washing_3_password_lower.html',
  '1_washing_3_password.html',
  '1_washing_4_service_contrast.html',
  '1_washing_4_service_lower.html',
  '1_washing_4_service.html',
  '1_washing_5_machine_contrast.html',
  '1_washing_5_machine_lower.html',
  '1_washing_5_machine.html',
  '1_washing_6_course_contrast.html',
  '1_washing_6_course_lower.html',
  '1_washing_6_course.html',
  '1_washing_7_payment_contrast.html',
  '1_washing_7_payment_lower.html',
  '1_washing_7_payment.html',
  '1_washing_8_method_contrast.html',
  '1_washing_8_method_lower.html',
  '1_washing_8_method.html',
  '1_washing_9_card_contrast.html',
  '1_washing_9_card_lower.html',
  '1_washing_9_card.html',
  '1_washing_10_progress_contrast.html',
  '1_washing_10_progress_lower.html',
  '1_washing_10_progress.html',
  '1_washing_11_complete_contrast.html',
  '1_washing_11_complete_lower.html',
  '1_washing_11_complete.html',
  '1_washing_12_guide_contrast.html',
  '1_washing_12_guide_lower.html',
  '1_washing_12_guide.html',
  '2_dryer_5_machine_contrast.html',
  '2_dryer_5_machine_lower.html',
  '2_dryer_5_machine.html',
  '2_dryer_6_time_contrast.html',
  '2_dryer_6_time_lower.html',
  '2_dryer_6_time.html',
  '2_dryer_12_guide_contrast.html',
  '2_dryer_12_guide_lower.html',
  '2_dryer_12_guide.html',
  '3_charge_1_method_contrast.html',
  '3_charge_1_method_lower.html',
  '3_charge_1_method.html',
  '3_charge_2_amount_contrast.html',
  '3_charge_2_amount_lower.html',
  '3_charge_2_amount.html',
  '3_charge_3_card_contrast.html',
  '3_charge_3_card_lower.html',
  '3_charge_3_card.html',
  '3_charge_4_progress_contrast.html',
  '3_charge_4_progress.html',
  '3_charge_5_complete_contrast.html',
  '3_charge_5_complete_lower.html',
  '3_charge_5_complete.html',
  '3_charge_6_confirm_contrast.html',
  '3_charge_6_confirm_lower.html',
  '3_charge_6_confirm.html',
  '4_charge_3_cash_contrast.html',
  '4_charge_3_cash_lower.html',
  '4_charge_3_cash.html',
  '4_charge_4_complete.html',
  '5_other_1_point_contrast.html',
  '5_other_1_point_lower.html',
  '5_other_1_point.html',
  '5_other_2_receipt_contrast.html',
  '5_other_2_receipt_lower.html',
  '5_other_2_receipt.html',
  '5_other_3_detail_contrast.html',
  '5_other_3_detail_lower.html',
  '5_other_3_detail.html',
  '5_other_4_balance_contrast.html',
  '5_other_4_balance_lower.html',
  '5_other_4_balance.html', 
]

const normalList = []
const contrastList = []
const lowerList = [];
for (let i = 0; i < dirFileList.length; i++) {
  const file = dirFileList[i]
  if (file.indexOf("_contrast") > 0) {
    contrastList.push(file);
  } else if (file.indexOf("_lower") > 0) {
    lowerList.push(file);
  } else {
    normalList.push(file);
  }
}

window.onload = function(){
  const basic_ul = document.getElementById("basic_ul")
  const contrast_ul = document.getElementById("contrast_ul")
  const lower_ul = document.getElementById("lower_ul")


  for (let i = 0; i < normalList.length; i++) {
    const file = normalList[i]
    let li = document.createElement('li');
    let a = document.createElement('a');
    a.href = `./iframe.html?path=${file}`
    a.innerHTML = file
    li.append(a)
    basic_ul.append(li)

    const filename = file.split(".")[0];

    const target_contrast = dirFileList.find((v) => {
      return v == filename + "_contrast.html"
    })
    if (target_contrast) {
      let li = document.createElement('li');
      let a = document.createElement('a');
      a.href = `./iframe.html?path=${target_contrast}`
      a.innerHTML = target_contrast
      li.append(a)
      contrast_ul.append(li)
      contrastList.push(target_contrast)
    } else {
      let li = document.createElement('li');
      let a = document.createElement('a');
      a.href = ``
      a.innerHTML = ""
      li.append(a)
      contrast_ul.append(li)
    }

    const target_lower = dirFileList.find((v) => {
      return v == filename + "_lower.html"
    })
    if (target_lower) {
      let li = document.createElement('li');
      let a = document.createElement('a');
      a.href = `./iframe.html?path=${target_lower}`
      a.innerHTML = target_lower
      li.append(a)
      lower_ul.append(li)
      lowerList.push(target_lower)
    } else {
      let li = document.createElement('li');
      let a = document.createElement('a');
      a.href = ``
      a.innerHTML = ""
      li.append(a)
      lower_ul.append(li)
    }
  }
}
