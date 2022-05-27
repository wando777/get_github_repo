import styledComponents from 'styled-components';

export const HomeContainer = styledComponents.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    jistify-content: center;
    height: 100vh;
`;

export const Content = styledComponents.div`
    widht: 100vw;
    height: 20vh;
    display: flex;  
    align-items: center;
    justify-contente: center;
`;

export const Input = styledComponents.input`
    border: 1px solid #ddd;
    heigh: 1.5rem;
    padding: 0 .5rem;
    border-radius: .50rem 0 0 .50rem;

    &:focus,
    &:active{
        outline: none;
        box-shadow: none;
    }
`;

export const Button = styledComponents.button`
    heigh: 1.5rem;
    border: 1px solid #000;
    color: #000;
    border-radius: 0 .25rem .25rem 0;

    &:focus,
    &:active{
        outline: none;
        box-shadow: none;
    }
`;

export const errorMsg = styledComponents.span`
    display: block;
    font-size: 0.65rem;
    color: red;
    font-weight: 600;
    margin-top: 1rem;
`;