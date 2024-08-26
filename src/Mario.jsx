import React, { useState, useEffect } from 'react';
import Mario_IMG from './assets/mario.png';
import './Mario.css'

export function Mario() {

    const [ mousePosition, setMousePosition] = useState({ x: screen.width / 2, y: screen.height/2 });
    const [ lastMousePosition, setLastMousePosition ] = useState({x : mousePosition.x, y : mousePosition.y});

    useEffect(() => {
      const updateMousePosition = ev => {
        setMousePosition({ x: ev.clientX + 25, y: ev.clientY + 25});
      };

      const updateLastMousePosition = ev => {
        if(mousePosition.x && mousePosition.y) {
            setLastMousePosition({x : mousePosition.x, y : mousePosition.y})
        }
      }

      const updateScroll = ev => {
        setMousePosition({ x: mousePosition.x, y: mousePosition.y});
      };

      window.addEventListener('mousemove', updateMousePosition);
      window.addEventListener('scroll', updateScroll);

      return () => {
        window.removeEventListener('mousemove', updateMousePosition);
        window.addEventListener('scroll', updateScroll);
      };

    }, []);

    return(
        <div>
            <img style={{ left: mousePosition.x + 'px', top: mousePosition.y + 'px'}} className='mario-cursor' src={Mario_IMG}/>
        </div>
    );

}