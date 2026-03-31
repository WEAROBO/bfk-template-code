# 파일 구조

```
- src (Kiosk)
  * ATM (업종)
    * Standard
    * (파생) 우리 은행
    * (파생) 신한 은행
  * 무인 발권기 (업종)
    * Standard
    * (파생) 코레일
    * (파생) 한국 도로 공사
  * ...

예) 
src/${업종 name}/${파생 name}/html/...

standard 작업시: src/atm/standard/html/index.html
우리은행   작업시: src/atm/uri_bank/html/index.html


src/atm/standard/
├─html //샘플 코드
│ └─code
├─resources
│ ├─cdn //cdn으로 제공할 css 및 js
│ ├─css //scss컴파일 된 css 및 css.map
│ │ └─**
│ ├─fonts //웹폰트
│ ├─img //svg 아이콘
│ │ └─**
│ ├─js //javascript
│ │ └─**
│ └─scss //scss
│ └─**
└─tokens //디자인 토큰 json
```

# GIT 관리

마스터에는 코드를 넣지않고, 각 업종별 브랜치를 분리하여 관리한다.

  - master: readme.md 파일만 존재한다.
  - ATM: 한 종류에 따라서 브랜치로 분류한다.
    - Standard: ATM의 기본 html 파일들이 들어 있다.
    - 우리 은행(파생): ATM으로 부터 브랜치를 생성하고 파생에 대한 html 파일들이 들어 있다
    - 신한 은행(파생): ATM으로 부터 브랜치를 생성하고 파생에 대한 html 파일들이 들어 있다
  - 무인 발권기
    - Standard
    - 코레일
    - 한국 도로공사
  - ...




# 코딩 스타일 규칙

## Javascript 코딩 규칙

  * 들여쓰기: 두 칸의 공백을 사용한다. 
  * 세미콜론: 모든 구문의 끝에는 세미콜론을 붙인다. 
  * 명명 규칙: 
    * 변수, 함수, 메서드: 소문자 카멜케이스 
    (예: myVariable, calculateSum, getUserData)를 사용한다. 
    * 생성자 함수: 대문자 카멜케이스를 사용한다. 
    (예: MyConstructor) 
    * 상수: 밑줄이 있는 대문자를 사용한다. 
    (예: MAX_VALUE) 
    * boolean 변수/메서드: is, has, can 또는 should를 접두사로 사용한다 
    (예: isAdmin, hasPermission). 
    * private 메서드: 밑줄을. 접두사로 사용한다 
    (예: _privateMethod). 
  * 변수 선언:  
    * 한줄에 하나의 변수를 선언한다. 
    * 변수는 범위 맨 위에 선언한다.  
    * var 대신 const 또는 let을 사용한다. 
  * 주석:  
    * 복잡한 논리나 코드의 명확하지 않은 부분을 설명하려면 주석을 사용한다.  
    * 한 줄 주석에는 //를, JSDoc 스타일의 블록 주석에는 /** ... */를 사용한다. 
  * 공백 
    * 연산자 및 구두점: 연산자(= + - * /) 앞뒤와 쉼표 뒤에 공백을 사용한다. 
    * 함수 호출: 함수 이름과 여는 괄호 사이, 또는 마지막 매개변수와 닫는 괄호 사이에 공백을 사용하지 않는다. 
    * 매개변수를 구분하는 쉼표 뒤에는 공백을 하나 추가한다. 
    
  출처: https://www.w3schools.com/js/js_conventions.asp 

## html 코딩 규칙
  * 문서 유형 선언으로 시작한다. 
```
      예)<!DOCTYPE html>
```
  * 소문자를 사용한다 
    * 태그 
    * 속성 
  * 모든 태그는 열기과 닫기가 존재해야 한다. 
  * 속성값은 따옴표로 묶어서 사용한다. 
  * 이미지 태그는 항상 alt, width, height를 지정한다. 
  * 불필요한 공백을 제거 한다. 
  * html, head, title, body를 생략하지 않는다. 

출처: https://www.w3schools.com/html/html5_syntax.asp 


# css 코딩 규칙
  * 긴 css 규칙은 여러줄에 걸쳐 작성한다. 
  * 선택자와 같은 줄에 괄호를 놓는다. 
  * 여는 괄호 앞에 공백하나를 추가한다. 
  * 들여쓰기에는 공백 2개를 사용한다. 
  * 속성-값 쌍 뒤에는 세미콜론을 사용한다. 
  * 닫는 괄호는 공백없이 새줄에 놓는다. 

출처: https://www.w3schools.com/html/html5_syntax.asp 

## css 클래스 네이밍 규칙(BEM)

  * Block :  
    * 독립된 컴포넌트 
    * 공백이 필요한경우 하이픈을(-) 사용 
    * Block 내부에 block이 존재할 수 있음 
    ```
      예) 
      <header class="header"></header> 
      
      CSS 
      .header{ /*some style*/ } 
    ```
  

  * Element: 
    * Block 내의 하위 요소들 
    * 공백이 필요한경우 하이픈을(-) 사용 
    * Block__element의 형식으로 작성 (under bar 2개) 
    ```
      예) 
      HTML에서 
      <header class="header"> 
        <div. class="header__title"></div> 
        <div. class="header__icon"></div> 
      </header> 
      
      CSS 
      .header{ /*some style*/ } 
      .header__title{ /*some style*/ } 
      .header__icon{ /*some style*/ } 

    ```

  * Modifier: 
    * block이나 element의 상태를 나타내는 이름을 사용 
    * 두개의 하이픈을 사용(--) 
    ```
      예) 

      <button class="button button—primary">main button</button> 

      <button class="button button—sub">sub button</button> 
    ```

  * 최종예시
  ```
  HTML에서 
    <form class="form form--theme-xmas form--simple"> 
      <input class="form__input" type="text" /> 
      <input class="form__submit form__submit--disabled" type="submit" /> 
    </form> 

  CSS 
    .form { } 
    .form--theme-xmas { } 
    .form--simple { } 
    .form__input { } 
    .form__submit { } 
    .form__submit--disabled { } 
  ```

출처: https://getbem.com/naming/ 