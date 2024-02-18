import styled from 'styled-components';

const getBackgroundColorFn = ({type}) => {
    switch (type) {
        case "error":
            return 'red';
        case "warning":
            return 'orange';
        case "success":
            return "green";
        default:
            return "gray";
    }
}

export const StyledAlert = styled.p`
    line-height: 1.5;
    padding: 10px 20px;
    background-color: gray;
    color: #fff;
    background-color: ${getBackgroundColorFn};
`