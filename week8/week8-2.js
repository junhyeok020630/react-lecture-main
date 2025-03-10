/**
 * useMemo()
 * Memorized value를 리턴하는 훅
 * 파라미터로는 Memorized value를 생성하는 create 함수와 의존성 배열을 받는다.
 * 의존성 배열에 들어있는 변수가 변했을 경우에만 새로 create함수를 호출하여 결과값을 반환하며,
 * 그렇지 않은 경우에는 기존 함수의 결과값을 그대로 반환
 * 사용 시 컴포넌트가 다시 렌더링 될때 마다 연산량이 높은 작업의 반복을 피할 수 있다.
 * -> 빠른 렌더링 속도
 * 
 * useMemo()로 전달된 함수는 렌더링이 일어나는 동안 실행
 * 렝더링이 일어나는 도안 실행되어선 안될 작업은 useMemo()에 넣으면 안된다.
 * useMemo() 훅에 의존성 배열을 넣지 않으면 아무런 의미가 없다.
 * 만약 의존성 배열을 넣게 되면 컴포넌트 마운트 시에만 함수 실행
 * 
 * useCallback
 * useMemo와 유사한 역할
 * 값이 아닌 함수를 반환
 * 읮노성 배열을 파라미터로 받음
 * 의존성 배열에 있는 변수 중 하나라도 변경되면 Memorized 콜백 함수 반환
 * 
 * Memoization
 * useMemo와 useCallback 훅에서 나오는 개념
 * 최적화 에서 사용
 * 비용이 높은 함수의 호출결과를 저장, 같은 입력 값이면 함수의 실행이 아닌 저장된 값 반환
 * 
 * useRef
 * 
 * 레퍼런스를 사용하기 위한 훅
 * 특정 컴포넌트에 접근할 수 있는 객체
 * .current 속성은 현재 레퍼런스하고 잇는 엘리먼트
 * 반환된 레퍼런스 객체는 컴포넌트의 라이프타임 전체에 유지
 * 
 * 
 */