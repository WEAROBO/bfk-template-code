const dirFileList = [
  '1_deposit_1_main_contrast.html',
  '1_deposit_1_main_lower.html',
  '1_deposit_1_main.html',
  '1_deposit_2_caution_contrast.html',
  '1_deposit_2_caution_lower.html',
  '1_deposit_2_caution.html',
  '1_deposit_3_depositor-phone_contrast.html',
  '1_deposit_3_depositor-phone_lower.html',
  '1_deposit_3_depositor-phone.html',
  '1_deposit_4_depositor-pw_contrast.html',
  '1_deposit_4_depositor-pw_lower.html',
  '1_deposit_4_depositor-pw.html',
  '1_deposit_5_receiver-phone_contrast.html',
  '1_deposit_5_receiver-phone_lower.html',
  '1_deposit_5_receiver-phone.html',
  '1_deposit_6_receiver-phonere_contrast.html',
  '1_deposit_6_receiver-phonere_lower.html',
  '1_deposit_6_receiver-phonere.html',
  '1_deposit_7_locker_contrast.html',
  '1_deposit_7_locker_lower.html',
  '1_deposit_7_locker.html',
  '1_deposit_8_open_contrast.html',
  '1_deposit_8_open_lower.html',
  '1_deposit_8_open.html',
  '1_deposit_9_complete_contrast.html',
  '1_deposit_9_complete_lower.html',
  '1_deposit_9_complete.html',
  '2_deposit-nopw_4_popup-pw_contrast.html',
  '2_deposit-nopw_4_popup-pw_lower.html',
  '2_deposit-nopw_4_popup-pw.html',
  '2_deposit-nopw_5_caution_contrast.html',
  '2_deposit-nopw_5_caution_lower.html',
  '2_deposit-nopw_5_caution.html',
  '2_deposit-nopw_6_verification_contrast.html',
  '2_deposit-nopw_6_verification_lower.html',
  '2_deposit-nopw_6_verification.html',
  '2_deposit-nopw_7_company_contrast.html',
  '2_deposit-nopw_7_company_lower.html',
  '2_deposit-nopw_7_company.html',
  '2_deposit-nopw_8_courier-pw.html',
  '2_deposit-nopw_9_popup-pw.html',
  '3_pickup_2_locker.html',
  '3_pickup_3_depositor-pw.html',
  '3_pickup_4_payment_contrast.html',
  '3_pickup_4_payment.html',
  '3_pickup_5_open.html',
  '3_pickup_6_complete.html',
  '4_pickup-card_4_payment.html',
  '4_pickup-card_5_payment-method_contrast.html',
  '4_pickup-card_5_payment-method.html',
  '4_pickup-card_6_creditcard.html',
  '4_pickup-card_7_progress_contrast.html',
  '4_pickup-card_7_progress.html',
  '4_pickup-card_8_complete_contrast.html',
  '4_pickup-card_8_complete.html',
  '5_pickup-sms_4_payment_lower.html',
  '5_pickup-sms_4_payment.html',
  '5_pickup-sms_5_payment-method_lower.html',
  '5_pickup-sms_5_payment-method.html',
  '5_pickup-sms_6_name_contrast.html',
  '5_pickup-sms_6_name_lower.html',
  '5_pickup-sms_6_name.html',
  '5_pickup-sms_7_phone.html',
  '5_pickup-sms_8_progress_lower.html',
  '5_pickup-sms_8_progress.html',
  '5_pickup-sms_9_complete_lower.html',
  '5_pickup-sms_9_complete.html',
  '6_popup_1_extendtime_contrast.html',
  '6_popup_1_extendtime_lower.html',
  '6_popup_1_extendtime.html',
  '6_popup_2_notice_contrast.html',
  '6_popup_2_notice_lower.html',
  '6_popup_2_notice.html',
  '6_popup_3_usagelimit_contrast.html',
  '6_popup_3_usagelimit_lower.html',
  '6_popup_3_usagelimit.html',
  '6_popup_4_incorrect-pw_contrast.html',
  '6_popup_4_incorrect-pw_lower.html',
  '6_popup_4_incorrect-pw.html',
  '6_popup_5_cancel_contrast.html',
  '6_popup_5_cancel_lower.html',
  '6_popup_5_cancel.html',
  '6_popup_6_add_lower.html',
  '6_popup_6_add.html',
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