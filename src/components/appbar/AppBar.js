import React from 'react';

import {
    IoEllipsisVertical,
    IoNotificationsOutline,
    IoMailOutline,
    IoPersonCircleOutline,
} from 'react-icons/io5';

import { AppBarItems, AppBarStyles, AppBarItem } from './styles';
import { IconButton } from './../../ui/buttons';
import { Brand } from '../branding';

function AppBar(props) {
    return (
        <AppBarStyles bgcolor="#212121" color="white">
            <AppBarItems>
                <AppBarItem>
                    <Brand iconSize="2.5rem" />
                </AppBarItem>
                <AppBarItem>
                    <IconButton>
                        <IoMailOutline size="1.125rem" color="white" />
                    </IconButton>

                    <IconButton>
                        <IoNotificationsOutline size="1.125rem" color="white" />
                    </IconButton>
                    <IconButton>
                        <IoPersonCircleOutline size="2rem" color="white" />
                    </IconButton>
                    <IconButton>
                        <IoEllipsisVertical size="1.125rem" color="white" />
                    </IconButton>
                </AppBarItem>
            </AppBarItems>
        </AppBarStyles>
    );
}

export default AppBar;
