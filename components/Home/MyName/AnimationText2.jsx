import React from 'react'
import { Fade } from 'react-awesome-reveal'

export default function AnimationText2() {
    return (
        <Fade triggerOnce direction='down' duration={4800}>
            <h2 className=' font-bold text-white text-center block'>
                <div
                    className={`waviy block text-white font-bold text-2xl lg:text-6xl sm:text-4xl md:text-5xl mt-4 px-4`}
                >
                    <span style={{ '--i': 1 }}>I</span>
                    <span style={{ '--i': 2 }}>&nbsp;&nbsp;</span>
                    <span style={{ '--i': 3 }}>a</span>
                    <span style={{ '--i': 4 }}>m</span>
                    <span style={{ '--i': 5 }}>&nbsp;&nbsp;</span>
                    <span style={{ '--i': 6 }}>F</span>
                    <span style={{ '--i': 7 }}>u</span>
                    <span style={{ '--i': 8 }}>l</span>
                    <span style={{ '--i': 9 }}>l</span>
                    <span style={{ '--i': 10 }}>&nbsp;&nbsp;</span>
                    <span style={{ '--i': 11 }}>S</span>
                    <span style={{ '--i': 12 }}>t</span>
                    <span style={{ '--i': 13 }}>a</span>
                    <span style={{ '--i': 14 }}>c</span>
                    <span style={{ '--i': 15 }}>k</span>
                    <span style={{ '--i': 16 }}>&nbsp;&nbsp;</span>
                    <span style={{ '--i': 17 }}>D</span>
                    <span style={{ '--i': 18 }}>e</span>
                    <span style={{ '--i': 19 }}>v</span>
                    <span style={{ '--i': 20 }}>e</span>
                    <span style={{ '--i': 21 }}>l</span>
                    <span style={{ '--i': 22 }}>o</span>
                    <span style={{ '--i': 23 }}>p</span>
                    <span style={{ '--i': 24 }}>e</span>
                    <span style={{ '--i': 25 }}>r</span>
                    <span style={{ '--i': 26 }}>.</span>
                </div>
            </h2>
        </Fade>
    )
}
