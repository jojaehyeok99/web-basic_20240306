// kakao 페이지 이동
function onKakaoButtonClickHandler (event){
  window.location.href = "https://developers.kakao.com"
}

const kakaoButtonElement = document.getElementById('kakao-button');
kakaoButtonElement.addEventListener('click', onKakaoButtonClickHandler);

// naver 페이지 이동
function onNaverButtonClickHandler (event){
  window.location.href = "https://developers.naver.com"
}

const naverButtonElement = document.getElementById('naver-button');
naverButtonElement.addEventListener('click', onNaverButtonClickHandler);