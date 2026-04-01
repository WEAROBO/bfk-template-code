const dirFileList = [
  '1_withdraw_1_main.html',
  '1_withdraw_1_main_contrast.html',
  '1_withdraw_2_select_contrast.html',
  '1_withdraw_2_select.html',
  '1_withdraw_3_caution_contrast.html',
  '1_withdraw_3_caution.html',
  '1_withdraw_4_insert-card_contrast.html',
  '1_withdraw_4_insert-card.html',
  '1_withdraw_5_scanning-card.html',
  '1_withdraw_6_caution-voice-phishing.html',
  '1_withdraw_7_enter-password_contrast.html',
  '1_withdraw_7_enter-password.html',
  '1_withdraw_8_select-amount.html',
  '1_withdraw_9_select-denomination.html',
  '1_withdraw_10_confirm-amount_contrast.html',
  '1_withdraw_10_confirm-amount.html',
  '1_withdraw_11_progress_contrast.html',
  '1_withdraw_11_progress.html',
  '1_withdraw_12_counting-cash.html',
  '1_withdraw_13_receipt_contrast.html',
  '1_withdraw_13_receipt.html',
  '1_withdraw_14_take-card.html',
  '1_withdraw_14_take-receipt.html',
  '1_withdraw_15_take-cash_contrast.html',
  '1_withdraw_15_take-cash.html',
  '1_withdraw_16_complete_contrast.html',
  '1_withdraw_16_complete.html',
  '2_deposit_2_select.html',
  '2_deposit_7_insert-cash.html',
  '2_deposit_9_confirm-amount.html',
  '3_transfer_7_select.html',
  '3_transfer_8_enter-account-number.html',
  '3_transfer_9_enter-transfer-amount.html',
  '3_transfer_10_confirm-amount_contrast.html',
  '3_transfer_10_confirm-amount.html',
  '4_inquiry_2_select.html',
  '4_inquiry_7_balance.html',
  '5_layout_1_select-bank.html',
  '5_layout_2_loan.html',
  '5_layout_4_loan-input-phone_contrast.html',
  '5_layout_4_loan-input-phone.html',
  '5_layout_5_loan_guide_contrast.html',
  '5_layout_5_loan_guide.html',
  '5_layout_6_confirm_contrast.html',
  '5_layout_6_confirm.html',
  '5_layout_7_cancel.html',
  '6_keypad_1_keyboard_kr_contrast.html',
  '6_keypad_1_keyboard_kr.html',
  '6_keypad_2_keyboard_en_contrast.html',
  '6_keypad_2_keyboard_en.html',
  '6_keypad_3_keyboard_symbol_contrast.html',
  '6_keypad_3_keyboard_symbol.html',
  '6_keypad_4_keypad_3x4_contrast.html',
  '6_keypad_4_keypad_3x4.html',
  '6_keypad_5_keypad_3x4_won_contrast.html',
  '6_keypad_5_keypad_3x4_won.html',
  '6_keypad_6_keypad-enter-password_contrast.html',
  '6_keypad_6_keypad-enter-password.html',
  '7_popup_1_cancel.html',
  '7_popup_2_help_three_contrast.html',
  '7_popup_2_help_three.html',
  '7_popup_3_help_two.html',
  '7_popup_4_extend_time_contrast.html',
  '7_popup_4_extend_time.html',
  '7_popup_5_sound_contrast.html',
  '7_popup_5_sound.html',
  '8_help_1_zoom.html',
  '8_help_2_zoom-bar.html',
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