//리액트 컴포넌트를 만들 땐 리액트를 불러와야 한다
import React, { Component } from 'react';

class Hello extends Component {
    static defaultProps = {
        name: '이름없음'
    };
    render() {
        const { color, name, isSpecial } = this.props;
        return (
            <div style={{ color }}>
                {isSpecial && <b>*</b>}
                안녕하세요 {name}
            </div>
        );
    }
}

// Hello라는 컴포넌트를 내보내겠다는 의미, 다른 컴포넌트에서 불러올 수 있게 됨
export default Hello;