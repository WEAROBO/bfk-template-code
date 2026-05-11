const fileList = [
  { main: "normal", title: '기본 프로레스' },
  { title: '현장 접수' },
  { html: '1_onsite_1_main.html', title: "01. 메인" },
  { html: '1_onsite_2_delivery.html', title: "02. 배송 방법 선택" },
  { html: '1_onsite_3_weight_before.html', title: "03. 무게 측정 전" },
  { html: '1_onsite_4_weight_after.html', title: "04. 무게 측정 완료" },
  { html: '1_onsite_5_category.html', title: "05. 상품 종류 선택" },
  { html: '1_onsite_6_notice.html', title: "06. 주의사항" },
  { html: '1_onsite_7_disclaimer.html', title: "07. 파손면책 동의" },
  { html: '1_onsite_8_popup_confirm.html', title: "08. 파손면책 동의 확인" },
  { html: '1_onsite_9_price.html', title: "09. 물품 가액 입력" },
  { html: '1_onsite_10_sender_name.html', title: "10. 발신인 이름 입력" },
  { html: '1_onsite_11_sender_phone.html', title: "11. 발신인 전화번호 입력" },
  { html: '1_onsite_12_notification_agree.html', title: "12. 배송 알림 서비스 수신 동의" },
  { html: '1_onsite_13_sender_address.html', title: "13. 발신인 주소 입력" },
  { html: '1_onsite_14_sender_address_select.html', title: "14. 발신인 주소 선택" },
  { html: '1_onsite_15_sender_address_detail.html', title: "15. 발신인 상세주소 입력" },
  { html: '1_onsite_16_receiver_name.html', title: "16. 수신인 이름 입력" },
  { html: '1_onsite_17_receiver_phone.html', title: "17. 수신인 전화번호 입력" },
  { html: '1_onsite_18_receiver_address.html', title: "18. 수신인 주소 입력" },
  { html: '1_onsite_19_receiver_address_select.html', title: "19. 수신인 주소 선택" },
  { html: '1_onsite_20_receiver_address_detail.html', title: "20. 수신인 상세주소 입력" },
  { html: '1_onsite_21_payment_type.html', title: "21. 선불/착불 선택" },
  { html: '1_onsite_22_confirm.html', title: "22. 정보 확인" },
  { html: '1_onsite_23_privacy_agree.html', title: "23. 개인정보 동의" },
  { html: '1_onsite_24_payment_method.html', title: "24. 결제 방법 선택" },
  { html: '1_onsite_25_insert_card.html', title: "25. 카드 투입" },
  { html: '1_onsite_26_reading_card.html', title: "26. 카드 읽는 중" },
  { html: '1_onsite_27_payment_complete.html', title: "27. 결제 완료" },
  { html: '1_onsite_28_receipt.html', title: "28. 영수증 출력" },
  { html: '1_onsite_29_invoice.html', title: "29. 운송장 출력" },
  { html: '1_onsite_30_complete.html', title: "30. 완료" },

  { title: '예약 접수' },
  { html: '2_reserve_1_main.html', title: "01. 메인" },
  { html: '2_reserve_2_input_reservation.html', title: "02. 예약 번호 입력" },
  { html: '2_reserve_3_confirm.html', title: "03. 예약 정보 확인" },
  { html: '2_reserve_4_weight_before.html', title: "04. 무게 측정 전" },
  { html: '2_reserve_5_weight_after.html', title: "05. 무게 측정 완료" },
  { html: '2_reserve_6_confirm.html', title: "06. 정보 확인" },
  { html: '2_reserve_7_privacy_agree.html', title: "07. 개인정보 동의" },
  { html: '2_reserve_8_payment_method.html', title: "08. 결제 방법 선택" },
  { html: '2_reserve_9_insert_card.html', title: "09. 카드 투입" },
  { html: '2_reserve_10_reading_card.html', title: "10. 카드 읽는 중" },
  { html: '2_reserve_11_payment_complete.html', title: "11. 결제 완료" },
  { html: '2_reserve_12_receipt.html', title: "12. 영수증 출력" },
  { html: '2_reserve_13_invoice.html', title: "13. 운송장 출력" },
  { html: '2_reserve_14_complete.html', title: "14. 완료" },  

  { title: '운송장 출력' },
  { html: '3_print_1_main.html', title: "01. 메인" },
  { html: '3_print_2_phone.html', title: "02. 전화번호 입력" },
  { html: '3_print_3_privacy_agree.html', title: "03. 개인정보 수집 및 이용 동의" },
  { html: '3_print_4_auth.html', title: "04. 인증번호 입력" },
  { html: '3_print_5_select.html', title: "05. 운송장 선택" },
  { html: '3_print_6_printing.html', title: "06. 운송장 출력 중" },
  { html: '3_print_7_invoice.html', title: "07. 운송장 출력" },
  { html: '3_print_8_complete.html', title: "08. 완료" },

  { title: '배송 조회' },
  { html: '4_track_1_main.html', title: "01. 메인" },
  { html: '4_track_2_input_invoice.html', title: "02. 운송장 번호 입력" },
  { html: '4_track_3_delivery.html', title: "03. 배송 조회 완료 (기본 정보)" },
 
  { main: "contrast", title: '고대비' },
  { title: '현장 접수 (Contrast)' },
  { html: '1_onsite_1_main_contrast.html', title: "01. 메인" },
  { html: '1_onsite_2_delivery_contrast.html', title: "02. 배송 방법 선택" },
  { html: '1_onsite_3_weight_before_contrast.html', title: "03. 무게 측정 전" },
  { html: '1_onsite_4_weight_after_contrast.html', title: "04. 무게 측정 완료" },
  { html: '1_onsite_5_category_contrast.html', title: "05. 상품 종류 선택" },
  { html: '1_onsite_6_notice_contrast.html', title: "06. 주의사항" },
  { html: '1_onsite_7_disclaimer_contrast.html', title: "07. 파손면책 동의" },
  { html: '1_onsite_8_popup_confirm_contrast.html', title: "08. 파손면책 동의 확인" },
  { html: '1_onsite_9_price_contrast.html', title: "09. 물품 가액 입력" },
  { html: '1_onsite_10_sender_name_contrast.html', title: "10. 발신인 이름 입력" },
  { html: '1_onsite_11_sender_phone_contrast.html', title: "11. 발신인 전화번호 입력" },
  { html: '1_onsite_12_notification_agree_contrast.html', title: "12. 배송 알림 서비스 수신 동의" },
  { html: '1_onsite_13_sender_address_contrast.html', title: "13. 발신인 주소 입력" },
  { html: '1_onsite_14_sender_address_select_contrast.html', title: "14. 발신인 주소 선택" },
  { html: '1_onsite_15_sender_address_detail_contrast.html', title: "15. 발신인 상세주소 입력" },
  { html: '1_onsite_16_receiver_name_contrast.html', title: "16. 수신인 이름 입력" },
  { html: '1_onsite_17_receiver_phone_contrast.html', title: "17. 수신인 전화번호 입력" },
  { html: '1_onsite_18_receiver_address_contrast.html', title: "18. 수신인 주소 입력" },
  { html: '1_onsite_19_receiver_address_select_contrast.html', title: "19. 수신인 주소 선택" },
  { html: '1_onsite_20_receiver_address_detail_contrast.html', title: "20. 수신인 상세주소 입력" },
  { html: '1_onsite_21_payment_type_contrast.html', title: "21. 선불/착불 선택" },
  { html: '1_onsite_22_confirm_contrast.html', title: "22. 정보 확인" },
  { html: '1_onsite_23_privacy_agree_contrast.html', title: "23. 개인정보 동의" },
  { html: '1_onsite_24_payment_method_contrast.html', title: "24. 결제 방법 선택" },
  { html: '1_onsite_25_insert_card_contrast.html', title: "25. 카드 투입" },
  { html: '1_onsite_26_reading_card_contrast.html', title: "26. 카드 읽는 중" },
  { html: '1_onsite_27_payment_complete_contrast.html', title: "27. 결제 완료" },
  { html: '1_onsite_28_receipt_contrast.html', title: "28. 영수증 출력" },
  { html: '1_onsite_29_invoice_contrast.html', title: "29. 운송장 출력" },
  { html: '1_onsite_30_complete_contrast.html', title: "30. 완료" },

  { title: '예약 접수 (Contrast)' },
  { html: '2_reserve_1_main_contrast.html', title: "01. 메인" },
  { html: '2_reserve_2_input_reservation_contrast.html', title: "02. 예약 번호 입력" },
  { html: '2_reserve_3_confirm_contrast.html', title: "03. 예약 정보 확인" },
  { html: '2_reserve_4_weight_before_contrast.html', title: "04. 무게 측정 전" },
  { html: '2_reserve_5_weight_after_contrast.html', title: "05. 무게 측정 완료" },
  { html: '2_reserve_6_confirm_contrast.html', title: "06. 정보 확인" },
  { html: '2_reserve_7_privacy_agree_contrast.html', title: "07. 개인정보 동의" },
  { html: '2_reserve_8_payment_method_contrast.html', title: "08. 결제 방법 선택" },
  { html: '2_reserve_9_insert_card_contrast.html', title: "09. 카드 투입" },
  { html: '2_reserve_10_reading_card_contrast.html', title: "10. 카드 읽는 중" },
  { html: '2_reserve_11_payment_complete_contrast.html', title: "11. 결제 완료" },
  { html: '2_reserve_12_receipt_contrast.html', title: "12. 영수증 출력" },
  { html: '2_reserve_13_invoice_contrast.html', title: "13. 운송장 출력" },
  { html: '2_reserve_14_complete_contrast.html', title: "14. 완료" },

  { title: '운송장 출력 (Contrast)' },
  { html: '3_print_1_main_contrast.html', title: "01. 메인" },
  { html: '3_print_2_phone_contrast.html', title: "02. 전화번호 입력" },
  { html: '3_print_3_privacy_agree_contrast.html', title: "03. 개인정보 수집 및 이용 동의" },
  { html: '3_print_4_auth_contrast.html', title: "04. 인증번호 입력" },
  { html: '3_print_5_select_contrast.html', title: "05. 운송장 선택" },
  { html: '3_print_6_printing_contrast.html', title: "06. 운송장 출력 중" },
  { html: '3_print_7_invoice_contrast.html', title: "07. 운송장 출력" },
  { html: '3_print_8_complete_contrast.html', title: "08. 완료" },

  { title: '배송 조회 (Contrast)' },
  { html: '4_track_1_main_contrast.html', title: "01. 메인" },
  { html: '4_track_2_input_invoice_contrast.html', title: "02. 운송장 번호 입력" },
  { html: '4_track_3_delivery_contrast.html', title: "03. 배송 조회 완료 (기본 정보)" },

  { main: "lower", title: '낮은 화면 회원 프로레스' },
  { title: '현장 접수 (Lower)' },
  { html: '1_onsite_1_main_lower.html', title: "01. 메인" },
  { html: '1_onsite_2_delivery_lower.html', title: "02. 배송 방법 선택" },
  { html: '1_onsite_3_weight_before_lower.html', title: "03. 무게 측정 전" },
  { html: '1_onsite_4_weight_after_lower.html', title: "04. 무게 측정 완료" },
  { html: '1_onsite_5_category_lower.html', title: "05. 상품 종류 선택" },
  { html: '1_onsite_5-1_popup_invalid_lower.html', title: "05-1. 상품 종류 선택 (불가)" }, 
  { html: '1_onsite_6_notice_lower.html', title: "06. 주의사항" },
  { html: '1_onsite_7_disclaimer_lower.html', title: "07. 파손면책 동의" },
  { html: '1_onsite_8_popup_confirm_lower.html', title: "08. 파손면책 동의 확인" },
  { html: '1_onsite_9_price_lower.html', title: "09. 물품 가액 입력" },
  { html: '1_onsite_10_sender_name_lower.html', title: "10. 발신인 이름 입력" },
  { html: '1_onsite_11_sender_phone_lower.html', title: "11. 발신인 전화번호 입력" },
  { html: '1_onsite_12_notification_agree_lower.html', title: "12. 배송 알림 서비스 수신 동의" },
  { html: '1_onsite_13_sender_address_lower.html', title: "13. 발신인 주소 입력" },
  { html: '1_onsite_13-1_popup_guide_lower.html', title: "13-1. 발신인 주소 입력 (가이드)" },
  { html: '1_onsite_14_sender_address_select_lower.html', title: "14. 발신인 주소 선택" },
  { html: '1_onsite_15_sender_address_detail_lower.html', title: "15. 발신인 상세주소 입력" },
  { html: '1_onsite_15-1_popup_set_address_lower.html', title: "15-1. 발신인 상세주소 입력 (팝업)" }, 
  { html: '1_onsite_16_receiver_name_lower.html', title: "16. 수신인 이름 입력" },
  { html: '1_onsite_17_receiver_phone_lower.html', title: "17. 수신인 전화번호 입력" },
  { html: '1_onsite_18_receiver_address_lower.html', title: "18. 수신인 주소 입력" },
  { html: '1_onsite_19_receiver_address_select_lower.html', title: "19. 수신인 주소 선택" },
  { html: '1_onsite_20_receiver_address_detail_lower.html', title: "20. 수신인 상세주소 입력" },
  { html: '1_onsite_21_payment_type_lower.html', title: "21. 선불/착불 선택" },
  { html: '1_onsite_22_confirm_lower.html', title: "22. 정보 확인" },
  { html: '1_onsite_23_privacy_agree_lower.html', title: "23. 개인정보 동의" },
  { html: '1_onsite_24_payment_method_lower.html', title: "24. 결제 방법 선택" },
  { html: '1_onsite_25_insert_card_lower.html', title: "25. 카드 투입" },
  { html: '1_onsite_26_reading_card_lower.html', title: "26. 카드 읽는 중" },
  { html: '1_onsite_27_payment_complete_lower.html', title: "27. 결제 완료" },
  { html: '1_onsite_28_receipt_lower.html', title: "28. 영수증 출력" },
  { html: '1_onsite_29_invoice_lower.html', title: "29. 운송장 출력" },
  { html: '1_onsite_30_complete_lower.html', title: "30. 완료" },

  { title: '예약 접수 (Lower)' },
  { html: '2_reserve_1_main_lower.html', title: "01. 메인" },
  { html: '2_reserve_2_input_reservation_lower.html', title: "02. 예약 번호 입력" },
  { html: '2_reserve_3_confirm_lower.html', title: "03. 예약 정보 확인" },
  { html: '2_reserve_4_weight_before_lower.html', title: "04. 무게 측정 전" },
  { html: '2_reserve_5_weight_after_lower.html', title: "05. 무게 측정 완료" },
  { html: '2_reserve_6_confirm_lower.html', title: "06. 정보 확인" },
  { html: '2_reserve_7_privacy_agree_lower.html', title: "07. 개인정보 동의" },
  { html: '2_reserve_8_payment_method_lower.html', title: "08. 결제 방법 선택" },
  { html: '2_reserve_9_insert_card_lower.html', title: "09. 카드 투입" },
  { html: '2_reserve_10_reading_card_lower.html', title: "10. 카드 읽는 중" },
  { html: '2_reserve_11_payment_complete_lower.html', title: "11. 결제 완료" },
  { html: '2_reserve_12_receipt_lower.html', title: "12. 영수증 출력" },
  { html: '2_reserve_13_invoice_lower.html', title: "13. 운송장 출력" },
  { html: '2_reserve_14_complete_lower.html', title: "14. 완료" },

  { title: '운송장 출력 (Lower)' },
  { html: '3_print_1_main_lower.html', title: "01. 메인" },
  { html: '3_print_2_phone_lower.html', title: "02. 전화번호 입력" },
  { html: '3_print_3_privacy_agree_lower.html', title: "03. 개인정보 수집 및 이용 동의" },
  { html: '3_print_4_auth_lower.html', title: "04. 인증번호 입력" },
  { html: '3_print_5_select_lower.html', title: "05. 운송장 선택" },
  { html: '3_print_6_printing_lower.html', title: "06. 운송장 출력 중" },
  { html: '3_print_7_invoice_lower.html', title: "07. 운송장 출력" },
  { html: '3_print_8_complete_lower.html', title: "08. 완료" },

  { title: '배송 조회 (Lower)' },
  { html: '4_track_1_main_lower.html', title: "01. 메인" },
  { html: '4_track_2_input_invoice_lower.html', title: "02. 운송장 번호 입력" },
  { html: '4_track_3_delivery_lower.html', title: "03. 배송 조회 완료 (기본 정보)" },
  { html: '4_track_3-1_delivery_lower.html', title: "03-1. 배송 조회 완료 (배송현황)" },


  { main: "lower-contrast", title: '낮은 화면 회원 프로레스' },
  { title: '현장 접수 (Lower Contrast)' },
  { html: '1_onsite_1_main_lower-contrast.html', title: "01. 메인" },
  { html: '1_onsite_2_delivery_lower-contrast.html', title: "02. 배송 방법 선택" },
  { html: '1_onsite_3_weight_before_lower-contrast.html', title: "03. 무게 측정 전" },
  { html: '1_onsite_4_weight_after_lower-contrast.html', title: "04. 무게 측정 완료" },
  { html: '1_onsite_5_category_lower-contrast.html', title: "05. 상품 종류 선택" },
  { html: '1_onsite_5-1_popup_invalid_lower-contrast.html', title: "05-1. 상품 종류 선택 (불가)" },
  { html: '1_onsite_6_notice_lower-contrast.html', title: "06. 주의사항" },
  { html: '1_onsite_7_disclaimer_lower-contrast.html', title: "07. 파손면책 동의" },
  { html: '1_onsite_8_popup_confirm_lower-contrast.html', title: "08. 파손면책 동의 확인" },
  { html: '1_onsite_9_price_lower-contrast.html', title: "09. 물품 가액 입력" },
  { html: '1_onsite_10_sender_name_lower-contrast.html', title: "10. 발신인 이름 입력" },
  { html: '1_onsite_11_sender_phone_lower-contrast.html', title: "11. 발신인 전화번호 입력" },
  { html: '1_onsite_12_notification_agree_lower-contrast.html', title: "12. 배송 알림 서비스 수신 동의" },
  { html: '1_onsite_13_sender_address_lower-contrast.html', title: "13. 발신인 주소 입력" },
  { html: '1_onsite_13-1_popup_guide_lower-contrast.html', title: "13-1. 발신인 주소 입력 (가이드)" },
  { html: '1_onsite_14_sender_address_select_lower-contrast.html', title: "14. 발신인 주소 선택" },
  { html: '1_onsite_15_sender_address_detail_lower-contrast.html', title: "15. 발신인 상세주소 입력" },
  { html: '1_onsite_15-1_popup_set_address_lower-contrast.html', title: "15-1. 발신인 상세주소 입력 (팝업)" },
  { html: '1_onsite_16_receiver_name_lower-contrast.html', title: "16. 수신인 이름 입력" },
  { html: '1_onsite_17_receiver_phone_lower-contrast.html', title: "17. 수신인 전화번호 입력" },
  { html: '1_onsite_18_receiver_address_lower-contrast.html', title: "18. 수신인 주소 입력" },
  { html: '1_onsite_19_receiver_address_select_lower-contrast.html', title: "19. 수신인 주소 선택" },
  { html: '1_onsite_20_receiver_address_detail_lower-contrast.html', title: "20. 수신인 상세주소 입력" },
  { html: '1_onsite_21_payment_type_lower-contrast.html', title: "21. 선불/착불 선택" },
  { html: '1_onsite_22_confirm_lower-contrast.html', title: "22. 정보 확인" },
  { html: '1_onsite_23_privacy_agree_lower-contrast.html', title: "23. 개인정보 동의" },
  { html: '1_onsite_24_payment_method_lower-contrast.html', title: "24. 결제 방법 선택" },
  { html: '1_onsite_25_insert_card_lower-contrast.html', title: "25. 카드 투입" },
  { html: '1_onsite_26_reading_card_lower-contrast.html', title: "26. 카드 읽는 중" },
  { html: '1_onsite_27_payment_complete_lower-contrast.html', title: "27. 결제 완료" },
  { html: '1_onsite_28_receipt_lower-contrast.html', title: "28. 영수증 출력" },
  { html: '1_onsite_29_invoice_lower-contrast.html', title: "29. 운송장 출력" },
  { html: '1_onsite_30_complete_lower-contrast.html', title: "30. 완료" },

  { title: '예약 접수 (Lower Contrast)' },
  { html: '2_reserve_1_main_lower-contrast.html', title: "01. 메인" },
  { html: '2_reserve_2_input_reservation_lower-contrast.html', title: "02. 예약 번호 입력" },
  { html: '2_reserve_3_confirm_lower-contrast.html', title: "03. 예약 정보 확인" },
  { html: '2_reserve_4_weight_before_lower-contrast.html', title: "04. 무게 측정 전" },
  { html: '2_reserve_5_weight_after_lower-contrast.html', title: "05. 무게 측정 완료" },
  { html: '2_reserve_6_confirm_lower-contrast.html', title: "06. 정보 확인" },
  { html: '2_reserve_7_privacy_agree_lower-contrast.html', title: "07. 개인정보 동의" },
  { html: '2_reserve_8_payment_method_lower-contrast.html', title: "08. 결제 방법 선택" },
  { html: '2_reserve_9_insert_card_lower-contrast.html', title: "09. 카드 투입" },
  { html: '2_reserve_10_reading_card_lower-contrast.html', title: "10. 카드 읽는 중" },
  { html: '2_reserve_11_payment_complete_lower-contrast.html', title: "11. 결제 완료" },
  { html: '2_reserve_12_receipt_lower-contrast.html', title: "12. 영수증 출력" },
  { html: '2_reserve_13_invoice_lower-contrast.html', title: "13. 운송장 출력" },
  { html: '2_reserve_14_complete_lower-contrast.html', title: "14. 완료" },

  { title: '운송장 출력 (Lower Contrast)' },
  { html: '3_print_1_main_lower-contrast.html', title: "01. 메인" },
  { html: '3_print_2_phone_lower-contrast.html', title: "02. 전화번호 입력" },
  { html: '3_print_3_privacy_agree_lower-contrast.html', title: "03. 개인정보 수집 및 이용 동의" },
  { html: '3_print_4_auth_lower-contrast.html', title: "04. 인증번호 입력" },
  { html: '3_print_5_select_lower-contrast.html', title: "05. 운송장 선택" },
  { html: '3_print_6_printing_lower-contrast.html', title: "06. 운송장 출력 중" },
  { html: '3_print_7_invoice_lower-contrast.html', title: "07. 운송장 출력" },
  { html: '3_print_8_complete_lower-contrast.html', title: "08. 완료" },

  { title: '배송 조회 (Lower Contrast)' },
  { html: '4_track_1_main_lower-contrast.html', title: "01. 메인" },
  { html: '4_track_2_input_invoice_lower-contrast.html', title: "02. 운송장 번호 입력" },
  { html: '4_track_3_delivery_lower-contrast.html', title: "03. 배송 조회 완료 (기본 정보)" },
  { html: '4_track_3-1_delivery_lower-contrast.html', title: "03-1. 배송 조회 완료 (배송현황)" },  


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