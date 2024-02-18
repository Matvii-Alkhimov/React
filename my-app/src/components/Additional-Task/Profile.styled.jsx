import styled from "styled-components";

export const ProfileCont = styled.div`
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
    width: 500px;
    height: 600px;
    margin-right: auto;
    margin-left: auto;
    text-align: center;
    box-shadow: 0px 0px 8px black;
    border-radius: 8px;
    padding-top: 30px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export const DescriptionCont = styled.div`
    height: 70%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
`

export const ProfileAvatar = styled.img`
    margin-right: auto;
    margin-left: auto;
    width: 200px;
    height: 200px;
    border-radius: 50%;
    box-shadow: 0px 0px 8px black;
    padding: 10px;
`;

export const ProfileUsername = styled.h3`
    font-size: 25px;
    width: max-content;
    margin: 0 auto 0 auto;
`;

export const ProfileDescription = styled.p`
    color: gray;
    font-size: 20px;
    width: max-content;
    margin: 0 auto 0 auto;
`;

export const StatsList = styled.ul`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 100%);
    list-style: none;
    padding: 0;
    height: 25%;
    margin: 0;
`;

export const StatsItem = styled.li`
    box-shadow: 0px 0px 4px gray;
`

export const StatsText = styled.p`
    font-size: 25px;
    color: gray;
`;

export const StatsValue = styled.p`
    font-size: 27px;
    font-weight: 600;
`;