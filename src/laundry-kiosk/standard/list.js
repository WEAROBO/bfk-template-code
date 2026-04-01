const fileList = [
  { main: "normal", title: '기본 프로세스' },
  { title: '기본 프로세스' },   
  { title: '기존고객 세탁기 27" 기본' },
  { html: '1_washer_1_main.html', title: "01) 메인" },
  { html: '1_washer_2_phone.html', title: "02) 전화번호 입력" },
  { html: '1_washer_3_password.html', title: "03) 비밀번호 입력" },
  { html: '1_washer_4_service.html', title: "04) 서비스 선택" },
  { html: '1_washer_5_machine.html', title: "05) 세탁기 장비 선택" },
  { html: '1_washer_6_course.html', title: "06) 세탁기 코스 선택" },
  { html: '1_washer_7_confirm.html', title: "07) 내역 확인" },
  { html: '1_washer_8_payment.html', title: "08) 결제 방법 선택" },
  { html: '1_washer_9_card.html', title: "09) 카드 투입" },
  { html: '1_washer_10_progress.html', title: "10) 카드 읽는 중" },
  { html: '1_washer_11_complete.html', title: "11) 결제 완료" },
  { html: '1_washer_12_guide.html', title: "12) 완료 및 세탁기 사용법" },

  { title: '기존고객 건조기 27" 기본' },
  { html: '2_dryer_1_main.html', title: "01) 메인" },
  { html: '2_dryer_2_phone.html', title: "02) 전화번호 입력" },
  { html: '2_dryer_3_password.html', title: "03) 비밀번호 입력" },
  { html: '2_dryer_4_service.html', title: "04) 서비스 선택" },
  { html: '2_dryer_5_machine.html', title: "05) 건조기 장비 선택" },
  { html: '2_dryer_6_time.html', title: "06) 건조기 시간 선택" },
  { html: '2_dryer_7_confirm.html', title: "07) 내역 확인" },
  { html: '2_dryer_8_payment.html', title: "08) 결제 방법 선택" },
  { html: '2_dryer_9_card.html', title: "09) 카드 투입" },
  { html: '2_dryer_10_progress.html', title: "10) 카드 읽는 중" },
  { html: '2_dryer_11_complete.html', title: "11) 결제 완료" },
  { html: '2_dryer_12_guide.html', title: "12) 완료 및 건조기 사용법" },

  { title: '기존고객 운동화 세탁 27" 기본' },
  { html: '3_sneakers-wash_1_main_contrast.html', title: "01) 메인" },
  { html: '3_sneakers-wash_2_phone_contrast.html', title: "02) 전화번호 입력" },
  { html: '3_sneakers-wash_3_password_contrast.html', title: "03) 비밀번호 입력" },
  { html: '3_sneakers-wash_4_service_contrast.html', title: "04) 서비스 선택" },
  { html: '3_sneakers-wash_5_caution_contrast.html', title: "05) 운동화 세탁 시 주의사항" },
  { html: '3_sneakers-wash_6_confirm_contrast.html', title: "06) 내역 확인" },
  { html: '3_sneakers-wash_7_payment_contrast.html', title: "07) 결제 방법 선택" },
  { html: '3_sneakers-wash_8_card_contrast.html', title: "08) 카드 투입" },
  { html: '3_sneakers-wash_9_progress_contrast.html', title: "09) 카드 읽는 중" },
  { html: '3_sneakers-wash_10_complete_contrast.html', title: "10) 결제 완료" },
  { html: '3_sneakers-wash_11_guide_contrast.html', title: "11) 완료 및 운동화 세탁기 사용법" },

  { title: '기존고객 운동화 건조 27" 기본' },
  { html: '4_sneakers-dry_1_main.html', title: "01) 메인" },
  { html: '4_sneakers-dry_2_phone.html', title: "02) 전화번호 입력" },
  { html: '4_sneakers-dry_3_password.html', title: "03) 비밀번호 입력" },
  { html: '4_sneakers-dry_4_service.html', title: "04) 서비스 선택" },
  { html: '4_sneakers-dry_5_caution.html', title: "05) 운동화 건조 시 주의사항" },
  { html: '4_sneakers-dry_6_time.html', title: "06) 운동화 건조기 시간설정" },
  { html: '4_sneakers-dry_7_confirm.html', title: "07) 내역 확인" },
  { html: '4_sneakers-dry_8_payment.html', title: "08) 결제 방법 선택" },
  { html: '4_sneakers-dry_9_card.html', title: "09) 카드 투입" },
  { html: '4_sneakers-dry_10_progress.html', title: "10) 카드 읽는 중" },
  { html: '4_sneakers-dry_11_complete.html', title: "11) 결제 완료" },
  { html: '4_sneakers-dry_12_guide.html', title: "12) 완료 및 건조기 사용법" },

  { title: '기존고객 자판기 상품구매 27" 기본' },
  { html: '5_vending_1_main.html', title: "01) 메인" },
  { html: '5_vending_2_phone.html', title: "02) 전화번호 입력" },
  { html: '5_vending_3_password.html', title: "03) 비밀번호 입력" },
  { html: '5_vending_4_service.html', title: "04) 서비스 선택" },
  { html: '5_vending_5_select.html', title: "05) 상품 선택" },
  { html: '5_vending_6_confirm.html', title: "06) 내역 확인" },
  { html: '5_vending_7_payment.html', title: "07) 결제 방법 선택" },
  { html: '5_vending_8_card.html', title: "08) 카드 투입" },
  { html: '5_vending_9_progress.html', title: "09) 카드 읽는 중" },
  { html: '5_vending_10_complete.html', title: "10) 결제 완료" },
  { html: '5_vending_11_guide.html', title: "11) 완료 및 상품 안내" },

  { title: '비회원 회원가입 27" 기본' },
  { html: '6_signup_1_main.html', title: "01) 메인" },
  { html: '6_signup_2_privacy.html', title: "02) 이용 동의" },
  { html: '6_signup_3_phone.html', title: "03) 전화번호 입력" },
  { html: '6_signup_4_password.html', title: "04) 비밀번호 설정" },
  { html: '6_signup_5_repassword.html', title: "05) 비밀번호 재입력" },
  { html: '6_signup_6_complete.html', title: "06) 가입 완료" },

  { title: '포인트 충전 카드 27" 기본' },
  { html: '7_charge_1_amount.html', title: "01) 충전 금액설정" },
  { html: '7_charge_2_payment.html', title: "02) 충전 방법 선택" },
  { html: '7_charge_3_card.html', title: "03) 카드 투입" },
  { html: '7_charge_4_progress.html', title: "04) 카드 읽는 중" },
  { html: '7_charge_5_complete.html', title: "05) 결제 완료" },
  { html: '7_charge_6_confirm.html', title: "06) 충전 완료" },

  { title: '포인트 적용 27" 기본' },
  { html: '8_point_1_set.html', title: "01) 포인트 금액 설정" },
  { html: '8_point_2_confirm.html', title: "02) 포인트 적용 후" },
  { html: '8_point_3_popup-none.html', title: "03) 포인트 없음" },
  { html: '8_point_4_popup-cancel.html', title: "04) 적용 취소" },



  { main: "contrast", title: '고대비' },
  { title: '고대비 프로세스' },    
  { title: '기존고객 세탁기 27" 기본' },
  { html: '1_washer_1_main_contrast.html', title: "01) 메인" },
  { html: '1_washer_2_phone_contrast.html', title: "02) 전화번호 입력" },
  { html: '1_washer_3_password_contrast.html', title: "03) 비밀번호 입력" },
  { html: '1_washer_4_service_contrast.html', title: "04) 서비스 선택" },
  { html: '1_washer_5_machine_contrast.html', title: "05) 세탁기 장비 선택" },
  { html: '1_washer_6_course_contrast.html', title: "06) 세탁기 코스 선택" },
  { html: '1_washer_7_confirm_contrast.html', title: "07) 내역 확인" },
  { html: '1_washer_8_payment_contrast.html', title: "08) 결제 방법 선택" },
  { html: '1_washer_9_card_contrast.html', title: "09) 카드 투입" },
  { html: '1_washer_10_progress_contrast.html', title: "10) 카드 읽는 중" },
  { html: '1_washer_11_complete_contrast.html', title: "11) 결제 완료" },
  { html: '1_washer_12_guide_contrast.html', title: "12) 완료 및 세탁기 사용법" },

  { title: '기존고객 건조기 27" 기본' },
  { html: '2_dryer_1_main_contrast.html', title: "01) 메인" },
  { html: '2_dryer_2_phone_contrast.html', title: "02) 전화번호 입력" },
  { html: '2_dryer_3_password_contrast.html', title: "03) 비밀번호 입력" },
  { html: '2_dryer_4_service_contrast.html', title: "04) 서비스 선택" },
  { html: '2_dryer_5_machine_contrast.html', title: "05) 건조기 장비 선택" },
  { html: '2_dryer_6_time_contrast.html', title: "06) 건조기 시간 선택" },
  { html: '2_dryer_7_confirm_contrast.html', title: "07) 내역 확인" },
  { html: '2_dryer_8_payment_contrast.html', title: "08) 결제 방법 선택" },
  { html: '2_dryer_9_card_contrast.html', title: "09) 카드 투입" },
  { html: '2_dryer_10_progress_contrast.html', title: "10) 카드 읽는 중" },
  { html: '2_dryer_11_complete_contrast.html', title: "11) 결제 완료" },
  { html: '2_dryer_12_guide_contrast.html', title: "12) 완료 및 건조기 사용법" },

  { title: '기존고객 운동화 세탁 27" 기본' },
  { html: '3_sneakers-wash_1_main_contrast.html', title: "01) 메인" },
  { html: '3_sneakers-wash_2_phone_contrast.html', title: "02) 전화번호 입력" },
  { html: '3_sneakers-wash_3_password_contrast.html', title: "03) 비밀번호 입력" },
  { html: '3_sneakers-wash_4_service_contrast.html', title: "04) 서비스 선택" },
  { html: '3_sneakers-wash_5_caution_contrast.html', title: "05) 운동화 세탁 시 주의사항" },
  { html: '3_sneakers-wash_6_confirm_contrast.html', title: "06) 내역 확인" },
  { html: '3_sneakers-wash_7_payment_contrast.html', title: "07) 결제 방법 선택" },
  { html: '3_sneakers-wash_8_card_contrast.html', title: "08) 카드 투입" },
  { html: '3_sneakers-wash_9_progress_contrast.html', title: "09) 카드 읽는 중" },
  { html: '3_sneakers-wash_10_complete_contrast.html', title: "10) 결제 완료" },
  { html: '3_sneakers-wash_11_guide_contrast.html', title: "11) 완료 및 운동화 세탁기 사용법" },

  { title: '기존고객 운동화 건조 27" 기본' },
  { html: '4_sneakers-dry_1_main_contrast.html', title: "01) 메인" },
  { html: '4_sneakers-dry_2_phone_contrast.html', title: "02) 전화번호 입력" },
  { html: '4_sneakers-dry_3_password_contrast.html', title: "03) 비밀번호 입력" },
  { html: '4_sneakers-dry_4_service_contrast.html', title: "04) 서비스 선택" },
  { html: '4_sneakers-dry_5_caution_contrast.html', title: "05) 운동화 건조 시 주의사항" },
  { html: '4_sneakers-dry_6_time_contrast.html', title: "06) 운동화 건조기 시간설정" },
  { html: '4_sneakers-dry_7_confirm_contrast.html', title: "07) 내역 확인" },
  { html: '4_sneakers-dry_8_payment_contrast.html', title: "08) 결제 방법 선택" },
  { html: '4_sneakers-dry_9_card_contrast.html', title: "09) 카드 투입" },
  { html: '4_sneakers-dry_10_progress_contrast.html', title: "10) 카드 읽는 중" },
  { html: '4_sneakers-dry_11_complete_contrast.html', title: "11) 결제 완료" },
  { html: '4_sneakers-dry_12_guide_contrast.html', title: "12) 완료 및 건조기 사용법" },

  { title: '기존고객 자판기 상품구매 27" 기본' },
  { html: '5_vending_1_main_contrast.html', title: "01) 메인" },
  { html: '5_vending_2_phone_contrast.html', title: "02) 전화번호 입력" },
  { html: '5_vending_3_password_contrast.html', title: "03) 비밀번호 입력" },
  { html: '5_vending_4_service_contrast.html', title: "04) 서비스 선택" },
  { html: '5_vending_5_select_contrast.html', title: "05) 상품 선택" },
  { html: '5_vending_6_confirm_contrast.html', title: "06) 내역 확인" },
  { html: '5_vending_7_payment_contrast.html', title: "07) 결제 방법 선택" },
  { html: '5_vending_8_card_contrast.html', title: "08) 카드 투입" },
  { html: '5_vending_9_progress_contrast.html', title: "09) 카드 읽는 중" },
  { html: '5_vending_10_complete_contrast.html', title: "10) 결제 완료" },
  { html: '5_vending_11_guide_contrast.html', title: "11) 완료 및 상품 안내" },

  { title: '비회원 회원가입 27" 기본' },
  { html: '6_signup_1_main_contrast.html', title: "01) 메인" },
  { html: '6_signup_2_privacy_contrast.html', title: "02) 이용 동의" },
  { html: '6_signup_3_phone_contrast.html', title: "03) 전화번호 입력" },
  { html: '6_signup_4_password_contrast.html', title: "04) 비밀번호 설정" },
  { html: '6_signup_5_repassword_contrast.html', title: "05) 비밀번호 재입력" },
  { html: '6_signup_6_complete_contrast.html', title: "06) 가입 완료" },

  { title: '포인트 충전 카드 27" 기본' },
  { html: '7_charge_1_amount_contrast.html', title: "01) 충전 금액설정" },
  { html: '7_charge_2_payment_contrast.html', title: "02) 충전 방법 선택" },
  { html: '7_charge_3_card_contrast.html', title: "03) 카드 투입" },
  { html: '7_charge_4_progress_contrast.html', title: "04) 카드 읽는 중" },
  { html: '7_charge_5_complete_contrast.html', title: "05) 결제 완료" },
  { html: '7_charge_6_confirm_contrast.html', title: "06) 충전 완료" },

  { title: '포인트 적용 27" 기본' },
  { html: '8_point_1_set_contrast.html', title: "01) 포인트 금액 설정" },
  { html: '8_point_2_confirm_contrast.html', title: "02) 포인트 적용 후" },
  { html: '8_point_3_popup-none_contrast.html', title: "03) 포인트 없음" },
  { html: '8_point_4_popup-cancel_contrast.html', title: "04) 적용 취소" },


  { main: "lower", title: '화면 내리기' },
  { title: '화면 내리기 프로세스' },  
  { title: '기존고객 세탁기 27" 기본' },
  { html: '1_washer_1_main_lower.html', title: "01) 메인" },
  { html: '1_washer_2_phone_lower.html', title: "02) 전화번호 입력" },
  { html: '1_washer_3_password_lower.html', title: "03) 비밀번호 입력" },
  { html: '1_washer_4_service_lower.html', title: "04) 서비스 선택" },
  { html: '1_washer_5_machine_lower.html', title: "05) 세탁기 장비 선택" },
  { html: '1_washer_6_course_lower.html', title: "06) 세탁기 코스 선택" },
  { html: '1_washer_7_confirm_lower.html', title: "07) 내역 확인" },
  { html: '1_washer_8_payment_lower.html', title: "08) 결제 방법 선택" },
  { html: '1_washer_9_card_lower.html', title: "09) 카드 투입" },
  { html: '1_washer_10_progress_lower.html', title: "10) 카드 읽는 중" },
  { html: '1_washer_11_complete_lower.html', title: "11) 결제 완료" },
  { html: '1_washer_12_guide_lower.html', title: "12) 완료 및 세탁기 사용법" },

  { title: '기존고객 건조기 27" 기본' },
  { html: '2_dryer_1_main_lower.html', title: "01) 메인" },
  { html: '2_dryer_2_phone_lower.html', title: "02) 전화번호 입력" },
  { html: '2_dryer_3_password_lower.html', title: "03) 비밀번호 입력" },
  { html: '2_dryer_4_service_lower.html', title: "04) 서비스 선택" },
  { html: '2_dryer_5_machine_lower.html', title: "05) 건조기 장비 선택" },
  { html: '2_dryer_6_time_lower.html', title: "06) 건조기 시간 선택" },
  { html: '2_dryer_7_confirm_lower.html', title: "07) 내역 확인" },
  { html: '2_dryer_8_payment_lower.html', title: "08) 결제 방법 선택" },
  { html: '2_dryer_9_card_lower.html', title: "09) 카드 투입" },
  { html: '2_dryer_10_progress_lower.html', title: "10) 카드 읽는 중" },
  { html: '2_dryer_11_complete_lower.html', title: "11) 결제 완료" },
  { html: '2_dryer_12_guide_lower.html', title: "12) 완료 및 건조기 사용법" },

  { title: '기존고객 운동화 세탁 27" 기본' },
  { html: '3_sneakers-wash_1_main_lower.html', title: "01) 메인" },
  { html: '3_sneakers-wash_2_phone_lower.html', title: "02) 전화번호 입력" },
  { html: '3_sneakers-wash_3_password_lower.html', title: "03) 비밀번호 입력" },
  { html: '3_sneakers-wash_4_service_lower.html', title: "04) 서비스 선택" },
  { html: '3_sneakers-wash_5_caution_lower.html', title: "05) 운동화 세탁 시 주의사항" },
  { html: '3_sneakers-wash_6_confirm_lower.html', title: "06) 내역 확인" },
  { html: '3_sneakers-wash_7_payment_lower.html', title: "07) 결제 방법 선택" },
  { html: '3_sneakers-wash_8_card_lower.html', title: "08) 카드 투입" },
  { html: '3_sneakers-wash_9_progress_lower.html', title: "09) 카드 읽는 중" },
  { html: '3_sneakers-wash_10_complete_lower.html', title: "10) 결제 완료" },
  { html: '3_sneakers-wash_11_guide_lower.html', title: "11) 완료 및 운동화 세탁기 사용법" },

  { title: '기존고객 운동화 건조 27" 기본' },
  { html: '4_sneakers-dry_1_main_lower.html', title: "01) 메인" },
  { html: '4_sneakers-dry_2_phone_lower.html', title: "02) 전화번호 입력" },
  { html: '4_sneakers-dry_3_password_lower.html', title: "03) 비밀번호 입력" },
  { html: '4_sneakers-dry_4_service_lower.html', title: "04) 서비스 선택" },
  { html: '4_sneakers-dry_5_caution_lower.html', title: "05) 운동화 건조 시 주의사항" },
  { html: '4_sneakers-dry_6_time_lower.html', title: "06) 운동화 건조기 시간설정" },
  { html: '4_sneakers-dry_7_confirm_lower.html', title: "07) 내역 확인" },
  { html: '4_sneakers-dry_8_payment_lower.html', title: "08) 결제 방법 선택" },
  { html: '4_sneakers-dry_9_card_lower.html', title: "09) 카드 투입" },
  { html: '4_sneakers-dry_10_progress_lower.html', title: "10) 카드 읽는 중" },
  { html: '4_sneakers-dry_11_complete_lower.html', title: "11) 결제 완료" },
  { html: '4_sneakers-dry_12_guide_lower.html', title: "12) 완료 및 건조기 사용법" },

  { title: '기존고객 자판기 상품구매 27" 기본' },
  { html: '5_vending_1_main_lower.html', title: "01) 메인" },
  { html: '5_vending_2_phone_lower.html', title: "02) 전화번호 입력" },
  { html: '5_vending_3_password_lower.html', title: "03) 비밀번호 입력" },
  { html: '5_vending_4_service_lower.html', title: "04) 서비스 선택" },
  { html: '5_vending_5_select_lower.html', title: "05) 상품 선택" },
  { html: '5_vending_6_confirm_lower.html', title: "06) 내역 확인" },
  { html: '5_vending_7_payment_lower.html', title: "07) 결제 방법 선택" },
  { html: '5_vending_8_card_lower.html', title: "08) 카드 투입" },
  { html: '5_vending_9_progress_lower.html', title: "09) 카드 읽는 중" },
  { html: '5_vending_10_complete_lower.html', title: "10) 결제 완료" },
  { html: '5_vending_11_guide_lower.html', title: "11) 완료 및 상품 안내" },

  { title: '비회원 회원가입 27" 기본' },
  { html: '6_signup_1_main_lower.html', title: "01) 메인" },
  { html: '6_signup_2_privacy_lower.html', title: "02) 이용 동의" },
  { html: '6_signup_3_phone_lower.html', title: "03) 전화번호 입력" },
  { html: '6_signup_4_password_lower.html', title: "04) 비밀번호 설정" },
  { html: '6_signup_5_repassword_lower.html', title: "05) 비밀번호 재입력" },
  { html: '6_signup_6_complete_lower.html', title: "06) 가입 완료" },

  { title: '포인트 충전 카드 27" 기본' },
  { html: '7_charge_1_amount_lower.html', title: "01) 충전 금액설정" },
  { html: '7_charge_2_payment_lower.html', title: "02) 충전 방법 선택" },
  { html: '7_charge_3_card_lower.html', title: "03) 카드 투입" },
  { html: '7_charge_4_progress_lower.html', title: "04) 카드 읽는 중" },
  { html: '7_charge_5_complete_lower.html', title: "05) 결제 완료" },
  { html: '7_charge_6_confirm_lower.html', title: "06) 충전 완료" },

  { title: '포인트 적용 27" 기본' },
  { html: '8_point_1_set_lower.html', title: "01) 포인트 금액 설정" },
  { html: '8_point_2_confirm_lower.html', title: "02) 포인트 적용 후" },
  { html: '8_point_3_popup-none_lower.html', title: "03) 포인트 없음" },
  { html: '8_point_4_popup-cancel_lower.html', title: "04) 적용 취소" },


  { main: "zoom", title: '고대비 화면 내리기' }, 
  { title: '고대비 화면 내리기 프로세스' },
  { title: '기존고객 세탁기 27" 기본' },
  { html: '1_washer_1_main_lower-contrast.html', title: "01) 메인" },
  { html: '1_washer_2_phone_lower-contrast.html', title: "02) 전화번호 입력" },
  { html: '1_washer_3_password_lower-contrast.html', title: "03) 비밀번호 입력" },
  { html: '1_washer_4_service_lower-contrast.html', title: "04) 서비스 선택" },
  { html: '1_washer_5_machine_lower-contrast.html', title: "05) 세탁기 장비 선택" },
  { html: '1_washer_6_course_lower-contrast.html', title: "06) 세탁기 코스 선택" },
  { html: '1_washer_7_confirm_lower-contrast.html', title: "07) 내역 확인" },
  { html: '1_washer_8_payment_lower-contrast.html', title: "08) 결제 방법 선택" },
  { html: '1_washer_9_card_lower-contrast.html', title: "09) 카드 투입" },
  { html: '1_washer_10_progress_lower-contrast.html', title: "10) 카드 읽는 중" },
  { html: '1_washer_11_complete_lower-contrast.html', title: "11) 결제 완료" },
  { html: '1_washer_12_guide_lower-contrast.html', title: "12) 완료 및 세탁기 사용법" },

  { title: '기존고객 건조기 27" 기본' },
  { html: '2_dryer_1_main_lower-contrast.html', title: "01) 메인" },
  { html: '2_dryer_2_phone_lower-contrast.html', title: "02) 전화번호 입력" },
  { html: '2_dryer_3_password_lower-contrast.html', title: "03) 비밀번호 입력" },
  { html: '2_dryer_4_service_lower-contrast.html', title: "04) 서비스 선택" },
  { html: '2_dryer_5_machine_lower-contrast.html', title: "05) 건조기 장비 선택" },
  { html: '2_dryer_6_time_lower-contrast.html', title: "06) 건조기 시간 선택" },
  { html: '2_dryer_7_confirm_lower-contrast.html', title: "07) 내역 확인" },
  { html: '2_dryer_8_payment_lower-contrast.html', title: "08) 결제 방법 선택" },
  { html: '2_dryer_9_card_lower-contrast.html', title: "09) 카드 투입" },
  { html: '2_dryer_10_progress_lower-contrast.html', title: "10) 카드 읽는 중" },
  { html: '2_dryer_11_complete_lower-contrast.html', title: "11) 결제 완료" },
  { html: '2_dryer_12_guide_lower-contrast.html', title: "12) 완료 및 건조기 사용법" },

  { title: '기존고객 운동화 세탁 27" 기본' },
  { html: '3_sneakers-wash_1_main_lower-contrast.html', title: "01) 메인" },
  { html: '3_sneakers-wash_2_phone_lower-contrast.html', title: "02) 전화번호 입력" },
  { html: '3_sneakers-wash_3_password_lower-contrast.html', title: "03) 비밀번호 입력" },
  { html: '3_sneakers-wash_4_service_lower-contrast.html', title: "04) 서비스 선택" },
  { html: '3_sneakers-wash_5_caution_lower-contrast.html', title: "05) 운동화 세탁 시 주의사항" },
  { html: '3_sneakers-wash_6_confirm_lower-contrast.html', title: "06) 내역 확인" },
  { html: '3_sneakers-wash_7_payment_lower-contrast.html', title: "07) 결제 방법 선택" },
  { html: '3_sneakers-wash_8_card_lower-contrast.html', title: "08) 카드 투입" },
  { html: '3_sneakers-wash_9_progress_lower-contrast.html', title: "09) 카드 읽는 중" },
  { html: '3_sneakers-wash_10_complete_lower-contrast.html', title: "10) 결제 완료" },
  { html: '3_sneakers-wash_11_guide_lower-contrast.html', title: "11) 완료 및 운동화 세탁기 사용법" },

  { title: '기존고객 운동화 건조 27" 기본' },
  { html: '4_sneakers-dry_1_main_lower-contrast.html', title: "01) 메인" },
  { html: '4_sneakers-dry_2_phone_lower-contrast.html', title: "02) 전화번호 입력" },
  { html: '4_sneakers-dry_3_password_lower-contrast.html', title: "03) 비밀번호 입력" },
  { html: '4_sneakers-dry_4_service_lower-contrast.html', title: "04) 서비스 선택" },
  { html: '4_sneakers-dry_5_caution_lower-contrast.html', title: "05) 운동화 건조 시 주의사항" },
  { html: '4_sneakers-dry_6_time_lower-contrast.html', title: "06) 운동화 건조기 시간설정" },
  { html: '4_sneakers-dry_7_confirm_lower-contrast.html', title: "07) 내역 확인" },
  { html: '4_sneakers-dry_8_payment_lower-contrast.html', title: "08) 결제 방법 선택" },
  { html: '4_sneakers-dry_9_card_lower-contrast.html', title: "09) 카드 투입" },
  { html: '4_sneakers-dry_10_progress_lower-contrast.html', title: "10) 카드 읽는 중" },
  { html: '4_sneakers-dry_11_complete_lower-contrast.html', title: "11) 결제 완료" },
  { html: '4_sneakers-dry_12_guide_lower-contrast.html', title: "12) 완료 및 건조기 사용법" },

  { title: '기존고객 자판기 상품구매 27" 기본' },
  { html: '5_vending_1_main_lower-contrast.html', title: "01) 메인" },
  { html: '5_vending_2_phone_lower-contrast.html', title: "02) 전화번호 입력" },
  { html: '5_vending_3_password_lower-contrast.html', title: "03) 비밀번호 입력" },
  { html: '5_vending_4_service_lower-contrast.html', title: "04) 서비스 선택" },
  { html: '5_vending_5_select_lower-contrast.html', title: "05) 상품 선택" },
  { html: '5_vending_6_confirm_lower-contrast.html', title: "06) 내역 확인" },
  { html: '5_vending_7_payment_lower-contrast.html', title: "07) 결제 방법 선택" },
  { html: '5_vending_8_card_lower-contrast.html', title: "08) 카드 투입" },
  { html: '5_vending_9_progress_lower-contrast.html', title: "09) 카드 읽는 중" },
  { html: '5_vending_10_complete_lower-contrast.html', title: "10) 결제 완료" },
  { html: '5_vending_11_guide_lower-contrast.html', title: "11) 완료 및 상품 안내" },

  { title: '비회원 회원가입 27" 기본' },
  { html: '6_signup_1_main_lower-contrast.html', title: "01) 메인" },
  { html: '6_signup_2_privacy_lower-contrast.html', title: "02) 이용 동의" },
  { html: '6_signup_3_phone_lower-contrast.html', title: "03) 전화번호 입력" },
  { html: '6_signup_4_password_lower-contrast.html', title: "04) 비밀번호 설정" },
  { html: '6_signup_5_repassword_lower-contrast.html', title: "05) 비밀번호 재입력" },
  { html: '6_signup_6_complete_lower-contrast.html', title: "06) 가입 완료" },

  { title: '포인트 충전 카드 27" 기본' },
  { html: '7_charge_1_amount_lower-contrast.html', title: "01) 충전 금액설정" },
  { html: '7_charge_2_payment_lower-contrast.html', title: "02) 충전 방법 선택" },
  { html: '7_charge_3_card_lower-contrast.html', title: "03) 카드 투입" },
  { html: '7_charge_4_progress_lower-contrast.html', title: "04) 카드 읽는 중" },
  { html: '7_charge_5_complete_lower-contrast.html', title: "05) 결제 완료" },
  { html: '7_charge_6_confirm_lower-contrast.html', title: "06) 충전 완료" },

  { title: '포인트 적용 27" 기본' },
  { html: '8_point_1_set_lower-contrast.html', title: "01) 포인트 금액 설정" },
  { html: '8_point_2_confirm_lower-contrast.html', title: "02) 포인트 적용 후" },
  { html: '8_point_3_popup-none_lower-contrast.html', title: "03) 포인트 없음" },
  { html: '8_point_4_popup-cancel_lower-contrast.html', title: "04) 적용 취소" },
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