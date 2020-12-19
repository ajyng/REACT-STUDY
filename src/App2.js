import React from 'react';

// class Wrapper extends React.Component{
//     render() {
//         return (
//             <section style={ {padding: '4em', background: 'papayawhip'} }>
//                 {this.props.children}
//             </section>
//         );
//     }
// }

const Wrapper = (props) =>
    <section style={ {padding: '4em', background: 'papayawhip'} }>
        {props.children}
    </section>

class Title extends React.Component{
    render() {
        const fontSize = this.props.isBig ? '3em' : '1.5em'; 
        return (
            <div style= {{ fontSize, textAlign: 'center', color: 'palevioletred'} }>
                {this.props.children}
            </div>
        );
    }
}

function App2() {
    const components = <Title>Hello, world!</Title>;
    return (
        <Wrapper children={components} />
    );
}

export default App2;