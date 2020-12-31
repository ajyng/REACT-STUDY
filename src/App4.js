import React, { useState, useEffect, useCallback } from 'react';

function PostDetailComponent({ post} ) {
    const { title, content } = post;
    return (
        <div>
            <h1>{title}</h1>
            {content}
        </div>
    );
}

function PostDetail({ postId }) {
    const [post, setPost] = useState(); // undefined

    useEffect( () => {
        setPost({ title: '포스팅 제목', content: `포스팅 내용 ... : ${postId}` });

        // setInterval( () => {}, 1000 );
        // return () => { unmount 시에 호출되는 부분. ex) clearInterval(...) };

    }, [postId]);

    return (
        <div>
            <h1>Post #{postId}</h1>
            {!post && '로딩 중 ...'}
            {post && <PostDetailComponent post={post} />}
        </div>
    );
}


function App2() {
    const [value1, setValue1] = useState(0); // getter, setter
    const [value2, setValue2] = useState(0);
    const [value, setValue] = useState({ value1: 0, vaue2: 0 });
    const [postId, setPostId] = useState(1);

    useEffect( () => {
        console.log('mount, logic #1');
    }, []); // mount 시에만 호출

    useEffect( () => {
        console.log('changed value :', value);
    }, [value]); // value 값이 변경될 시에만 호출


    const onClick = () => {
        setValue( (prevState) => ({ ...prevState, value1:10 }) );
    }

    return (
        <div>
            Hello App2
            <hr />
            {JSON.stringify(value)}
            <button onClick={onClick}>Click!</button>
            <hr />
            <button onClick={ () => setPostId(100) }>100번 글 보기</button>
            <PostDetail postId={postId} />
        </div>
    );
}

export default App2;