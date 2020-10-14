import React from 'react';
import './App.css';
import {Link} from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import {PersonIcon} from '@primer/octicons-react'
import {NoteIcon} from '@primer/octicons-react'
import {HomeIcon} from '@primer/octicons-react'
import 'bootstrap/dist/css/bootstrap.min.css';


function Nav() {
        return (
            <nav>
                <Link to='/'>
                <HomeIcon size={24} />
                </Link>
                <ul>
                    <Link to='/signup'>
                    <Button variant='primary'><NoteIcon size={16} />
Sign Up</Button>
                    </Link>
                    <Link to='user'>
                    <Button variant='primary'><PersonIcon size={16} />
User Page</Button>
                    </Link>
                </ul>
            </nav>
  );
}

export default Nav;
