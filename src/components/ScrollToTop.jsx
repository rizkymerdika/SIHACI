import React, { useEffect } from 'react'
import {AiOutlineArrowUp} from 'react-icons/ai'

function ScrollToTop() {
    
    function scrollFunction() {
        let myButton = document.getElementById("scroll-top-btn")
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            myButton.style.display = "block"
        } else {
            myButton.style.display = "none"
        }
    }

    window.onscroll = function(){
        scrollFunction()
    }

    function topFunction() {
        document.body.scrollTop = 0
        document.documentElement.scrollTop = 0
    }

  return (
    <button id='scroll-top-btn' onClick={topFunction}><AiOutlineArrowUp size={'100%'}/></button>
  )
}

export default ScrollToTop