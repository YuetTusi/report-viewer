
import React, { FC } from 'react';
import styled from 'styled-components';
import { helper } from '@src/utils/helper';

const MessageBox = styled.cite`
    display:block;
    margin-top:5px;
    font-size: 1.2rem;
    font-style:italic;
    padding: 2px 5px;
    background-color: #ddd;
    border-radius: 2px;
    border:1px solid #d1d8dc;
    max-width:600px;
`;


/**
 * 引用语
 */
const Cite: FC<{ message?: string }> = ({ message }) =>
    helper.isNullOrUndefinedOrEmptyString(message)
        ? null
        : <MessageBox>
            {message}
        </MessageBox>

export default Cite;