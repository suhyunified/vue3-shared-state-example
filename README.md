# 발단
Vue3로 넘어오면서 composition api 사용이 가능해짐에 따라 Vuex를 더이상 쓰지 않아도 된다는 말을 들었다.  
Vue2에서는 필수적인 라이브러리였는데, 그렇다면 Vue3에선 어떻게 상태관리를 하는것인지 궁금해졌다.  
그래서 composition api를 사용하여 `여러 컴포넌트에서 공유할 수 있는 state`를 만들어보기로 했다.  
.  
.  
# 프로젝트 구성
Vue3 + Vite  
.  
.  
# 목표
1. composition api를 사용하여 state 공유하기  
2. 상품 정보를 저장하기 위한 관리 페이지 개발  

.  
.  
# 기능 정의
1. 페이지는 크게 `입력 페이지`와 `상품 설명 페이지`로 나누어진다.
2. `입력 페이지`에서는 상품에 관련된 정보를 수정할 수 있다.
4. `입력 페이지`에는 `상품 설명 설정`그룹과 `상품 판매설정` 그룹으로 나누어져있다.
5. 각 그룹별로 입력폼과 `저장 버튼`이 있다.
6. 두 그룹을 `동시에 저장할 수 있는 버튼`이 있다.
7. `저장 버튼`은 내용 변경이 감지되었을 때만 활성화된다.
8. `상품 설명 페이지`에서는 상품 정보를 확인할 수 있다.
9. `입력 페이지`에서 저장이 완료되면, 변경된 내용이 `상품 설명 페이지`에 반영된다.
# 주요 개념
### ref
```js
  const isLoading = ref(true)
  console.log(isLoading)    // { value: true }
```
ref는 내부에 값을 가지면서 반응적이고 변경가능한 객체(reactive object)를 반환합니다.    
.  
### computed
```js
const product = ref({ name:'cookie' })
const productName = computed(() => product.value.name)
console.log(productName)   // { value: 'cookie'}
```
computed는 다른 반응형 요소(reactive property)와 동일한 값을 생성하는 reactive object 입니다.  
.  
.  
# 만들기
