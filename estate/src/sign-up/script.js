const ID = 'userIdentity';
const PASSWORD = '1234';
const EMAIL = 'email@email.com';
const AUTH_NUMBER = '1010';

let id = '', password = '', passwordCheck = '', email = '', authNumber = '';
let isDuplicate = true, isEmail = false, isDuplicateEmail = true, isEqualAuthNumber = false;

const idInputElement = document.getElementById('id');
const passwordInputElement = document.getElementById('password');
const passwordCheckInputElement = document.getElementById('password-check');
const emailInputElement = document.getElementById('email');
const authNumberInputElement = document.getElementById('auth-number');

const checkDuplicateButtonElement = document.getElementById('check-duplication-button');
const checkEmailButtonElement = document.getElementById('check-email-button');
const checkAuthNumberButtonElement = document.getElementById('check-auth-number-button');

const idMessageElement = document.getElementById('id-message');
const emailMessageElement = document.getElementById('email-message');
const authNumberMessageElement = document.getElementById('auth-number-message');

const signUpButtonElement = document.getElementById('sign-up-button');
const signInLinkElement = document.getElementById('sign-in-link');

// 아이디
function onIdInputHandler (event) {
  id = event.target.value;
  isDuplicate = false;

  if (id) checkDuplicateButtonElement.className ='input-primary-button';
  else checkDuplicateButtonElement.className = 'input-disable-button';
}

idInputElement.addEventListener('input', function(event) {
  onIdInputHandler(event);
  setSignUpButton();
});

// 비밀번호
function onPasswordInputHandler (event){
  password = event.target.value;
}

passwordInputElement.addEventListener('input', function(event) {
  onPasswordInputHandler(event);
  setSignUpButton();
});

// 비밀번호 확인
function onPasswordCheckInputHandler(event){
  passwordCheck = event.target.value;
}

passwordCheckInputElement.addEventListener('input', function(event) {
  onPasswordCheckInputHandler(event);
  setSignUpButton();
});

// 이메일
function onEmailInputHandler (event) {
  email = event.target.value;
  isEmail = false;
  isDuplicateEmail = true;

  if (email) checkEmailButtonElement.className ='input-primary-button';
  else checkEmailButtonElement.className = 'input-disable-button';
}

emailInputElement.addEventListener('input', function(event) {
  onEmailInputHandler(event);
  setSignUpButton();
});

// 인증번호
function onAuthNumberInputHandler (event) {
  authNumber = event.target.value;
  isEqualAuthNumber = false;

  if (authNumber) checkAuthNumberButtonElement.className ='input-primary-button';
  else checkAuthNumberButtonElement.className = 'input-disable-button';
}

authNumberInputElement.addEventListener('input', function(event) {
  onAuthNumberInputHandler(event);
  setSignUpButton();
});

// 아이디 중복확인 작업
function onCheckDuplicateClickHandler (event) {
  if(!id) return; //아이디가 입력되지 않았을 때 아이디 중복 확인 

  isDuplicate = id === ID;
  if(isDuplicate) {
    idMessageElement.className = 'input-message error';
    idMessageElement.textContent = '이미 사용중인 아이디 입니다.';
    return;
  }
  
  idMessageElement.className = 'input-message primary';
  idMessageElement.textContent = '사용 가능한 아이디 입니다.';
}

checkDuplicateButtonElement.addEventListener('click', function(event) {
  onCheckDuplicateClickHandler(event);
  setSignUpButton();
});

// 이메일 인증 작업
function onCheckEmailClickHandler (event) {
  if(!email) return;

  // 이메일 형식 검증 작업
  const emailReg = /^[a-zA-Z0-9]*@([-.]?[a-zA-Z0-9])*\.[a-zA-Z]{2,4}$/;
  isEmail = emailReg.test(email); // 이메일 정규식 검증
  if(!isEmail){
    emailMessageElement.className = 'input-message error';
    emailMessageElement.textContent = '이메일 형식이 아닙니다.';
    return;
  }

  isDuplicateEmail = email === EMAIL;
  if(isDuplicateEmail) {
    emailMessageElement.className = 'input-message error';
    emailMessageElement.textContent = '이미 사용중인 이메일 입니다.';
    return;
  }
  
  emailMessageElement.className = 'input-message primary';
  emailMessageElement.textContent = '인증번호가 전송되었습니다.';
}

checkEmailButtonElement.addEventListener('click', function(event) {
  onCheckEmailClickHandler(event);
  setSignUpButton();
});

// 인증번호 확인 작업
function onCheckAuthNumberClickHandler (event) {
  if(!authNumber) return;

  isEqualAuthNumber = authNumber === AUTH_NUMBER;
  if(!isEqualAuthNumber){
    authNumberMessageElement.className = 'input-message error';
    authNumberMessageElement.textContent = '인증번호가 일치하지 않습니다.';
    return;
  }

  authNumberMessageElement.className = 'input-message primary';
  authNumberMessageElement.textContent = '인증번호가 확인되었습니다.';
}

checkAuthNumberButtonElement.addEventListener('click', function(event) {
  onCheckAuthNumberClickHandler(event);
  setSignUpButton();
});

// 회원가입창에서 로그인창으로 넘어가기
function onSignInLinkClickHandler (event){
  window.location.href = '../sign-in';
}

signInLinkElement.addEventListener('click', onSignInLinkClickHandler);

// 아이디, 아이디 중복확인, 비밀번호, 비밀번호 확인, 
// 이메일, 이메일 확인, 인증번호, 인증번호 확인 모두 O일때 primary로 변경

function setSignUpButton (){
  // 아이디와 이메일은 중복이 되지않아야지 true -> 변수명 앞에 !
  const isPrimaryButton = 
      id && password && passwordCheck && email && authNumber && 
      !isDuplicate && isEmail && !isDuplicateEmail && isEqualAuthNumber;

  if (isPrimaryButton) signUpButtonElement.className = 'primary-button full-width';
  else signUpButtonElement.className = 'disable-button full-width';
}