import React from 'react';
import {MenuItem, RetroMenuWrapper} from './styled';
import About from 'assets/gifs/About.gif'
import Blog from 'assets/gifs/Blog.gif'
import Experience from 'assets/gifs/Experience.gif'
import Home from 'assets/gifs/Home.gif'
import {Jumbotron} from 'react-bootstrap';

export const validPaths = [About, Blog, Experience, Home];

export const RetroMenu = () => {
    return (
            <RetroMenuWrapper>
                <ul>     
                        <MenuItem key={0} item={Home}/>
                        <MenuItem key={1} item={About}/>
                        <MenuItem key={2} item={Experience}/>
                        <MenuItem key={3} item={Blog}/>
                </ul>
            </RetroMenuWrapper>
    )
}
