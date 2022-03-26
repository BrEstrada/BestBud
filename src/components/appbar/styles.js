import styled from 'styled-components';

const AppBarStyles = styled.nav`
    box-shadow: 0 0 2px 1px grey;
    padding: 1rem;
    /* height: 64px; */
    background-color: ${(props) => props.bgcolor || '#transparent'};
    color: ${(props) => props.color || '#black'};
`;

const AppBarItems = styled.ul`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const AppBarItem = styled.li``;

const AppBarItemGroup = styled.li`
    display: flex;
    gap: 0.25rem;
`;

export { AppBarStyles, AppBarItems, AppBarItem, AppBarItemGroup };
