import styled from 'styled-components';

const FullScreenBox = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: #bbb;
    opacity: 0.4;
    cursor: wait;
`;

const CenterBox = styled.div`
    display: block;
    width: 20px;
    height: 25px;
    position: absolute;
    left: 50%;
    top: 50%;
    margin-left: -10px;
    margin-top: -12px;
`;

export { FullScreenBox, CenterBox };
