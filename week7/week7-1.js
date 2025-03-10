/**
 * 컴포넌트 : 독립적이고 재사용 가능한 코드 비트
 * JavaScript 함수와 동일한 목적을 제공하지만 분리되어 작동하고 HTML을 반환
 * 리액트 컴포넌트는 만들고자 하는 props를 넣으면 해당 속성에 맞춰 화면에 나타날 엘리먼트를 만들어 준다.
 * 
 * 리액트 컴포넌트는 붕어빵 틀 (Class 개념)
 * 리액트 엘리먼트 = 붕어빵(객체)
 * 
 * props
 *  - 여러 개의 property
 *  - 컴포넌트에 전달할 다양한 정보를 담고 있는 자바스크립트 객체
 *  - 모든 리액트 컴포넌트는 props에 관하여 순수 함수처럼 행동한다.
 *  - 리액트 컴포넌트의 props는 바굴 수 없고, 같은 props가 들어오면 항상 같은 엘리먼트 리턴
 * 
 * props 사용법
 *  - 컴포넌트에 전달할 다양한 정보를 담고 있는 자바스크립트 객체
 *  - JSX를 사용하는 경우 키와 값 쌍의 형태로 컴포넌트에 props를 넣을 수 있다.
 */

// JSX 사용
function App(props){
    return (
        <Profile
            name = "소플"
            introduction = "안녕하세요, 소플입니다."
            viewCount={1500}
        />
    );
}

/**
 * 컴포넌트 만들기
 */
// 함수 컴포넌트
function Welcome (props){
    return <H1> 안녕, {props.name}</H1>;
}

// 클래스 컴포넌트
class Welcome extends React.Component {
    render() {
        return <H1>안녕, {props.name}</H1>
    }
}

/**
 * 컴포넌트 이름 짓기
 *  - 컴포넌트의 이름은 항상 대문자로 시작
 *  - 소문자로 시작하는 컴포넌트를 DOM태그로 인식하기 때문에
 */

// 컴포넌트로부터 엘리먼트를 만들고 렌더링

/**
 * 컴포넌트 추출
 *  - 복잡한 컴포넌트를 쪼개서 여러 개의 컴포넌트로 나누는 과정
 *  - 큰 컴포넌트에서 일부를 추출해서 새로운 컴포넌트를 만드는 것
 *  - 재사용성
 */