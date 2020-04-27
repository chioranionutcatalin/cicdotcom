import React, {useState, useEffect} from 'react';
import {Content, MenuItem, Www} from './styled';
import About from 'assets/gifs/About.gif'
import Experience from 'assets/gifs/Experience.gif'
import Home from 'assets/gifs/Home.gif'
import Blog from 'assets/gifs/Blog.gif'
import {MainContent} from 'components/retro/MainContent'
import {sections} from 'defs/defs';
import soundof90 from 'assets/sounds/soundof90.mp3'

//inspiration
//https://www.hover.com/blog/10-things-that-used-to-be-on-every-website-that-you-totally-forgot-about/
export const RetroVibe = () => {

    const [section, setSection] = useState('Home');

    useEffect(() => {
        setSection(section)
    }, [section]);

    return (
       <Content>
           <header>
               <hr/>
               <h2>Just a retro/vintage 90s look alike presentation website!?</h2>
               <audio controls>
                   <source src={soundof90} type="audio/mp3"/>
                   <source src={soundof90} type="audio/mp3"/>
                   Your browser does not support the audio element.
               </audio>
               <hr/>
           </header>
           <nav>
               <Www/>
               <div style={{border: '5px dotted rgb(119, 187, 240)'}}>
                   <MenuItem key={0} item={Home} onClick={() => setSection('Home')}/>
                   <MenuItem key={1} item={About} onClick={() => setSection('About')}/>
                   <MenuItem key={2} item={Experience} onClick={() => setSection('Experience')}/>
                   <MenuItem key={3} item={Blog} onClick={() => setSection('Blog')}/>
               </div>
           </nav>
               <main>
                   <MainContent section={section}/>
               </main>
               <footer>

                    <h2>Copyright © 2020 - {new Date().getFullYear()} Chioran Ionut Catalin.</h2>
                   <hr/>
               </footer>
       </Content>
    );
};