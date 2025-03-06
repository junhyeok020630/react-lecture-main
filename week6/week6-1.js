/**
 * JSX
 * A syntax extension to JavaScript
 * JavaScript + XML/HTML
 * 
 * Ex) const element = <h1> Hello, world</h1>;
 * 
 * JSX의 역할 : JSX 내부적으로 XML/HTML 코드를 자바스크립트로 변환
 * createElement(type, [props], [...children])
 * 
 * JSX의 장점
 * - 코드가 간결
 *  - JSX : <div> Hello, {name} </div>
 *  - JSX 사용 X : React.createElement('div', null,'Hello,${name}');
 * 
 * - 가독성 향상
 *  - Injection Attack이라 불리는 해킹방법을 방어함으로써 보안성이 올라간다.
 *      const title = response.potentiallyMaliciousInput // title에 잠재적 보안 위험 가능성 코드
 *      const element = <h1> {title} </h1> // JSX 코드에서는 괄호를 사용해 title 변수 사용
 * 
 * JSX 사용법
 * Book.jsx / Library.jsx
 * 
 * * JSX에서 중괄호를 사용하면 반드시 자바스크립트 코드가 들어간다.
 */

// JSX 사용 - 내부적으로는 createElement() 함수 사용
class Hello extends React.Component {
    render() {
        return <div> Hello {this.props.toWhat} </div>
    }
}

ReactDom.render (
    <Hello toWhat = "World" />,
    document.getElementById('root')
);

//자바스크립트만 사용
class Hello extends React.Component {
    render() {
        return React.createElement('div',null,'Hello ${this.props.toWhat}');
    }
}

ReactDom.render (
    React.createElement (Hello, {toWhat : 'World'},nul,
        document.getElementById('root'))
);

