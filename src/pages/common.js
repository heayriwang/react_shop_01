import styled, { css } from 'styled-components';

export const Inner = styled.div`
width: 1200px ;
margin: 0 auto;

`

export const BTN = styled.button`
background: transparent;
line-height: 1.2;
padding: 5px 20px;
border: 1px solid #333;
text-transform: uppercase;
font-size: 12px;

${props => props.color && css`
background: ${props.color};
`}

`

export const DEFAULT_SECTION = styled.section`
padding: 100px 0;
text-align: center;

${props => props.gbg && css`
background: #f9f9f9;
`}

${props => props.dbg && css`
background: #333333;
color: #fff;
`}
`