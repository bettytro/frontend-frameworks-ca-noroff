import React from 'react'

const Profilecases = ({ imageRight, children }) => {
    return (
        <section className={`flex gap-12 items-center py-8 md:px-8 px-4 max-w-[1600px] flex-col md:flex-row mx-auto ${imageRight ? 'md:flex-row-reverse' : ''}`}>
            {children}
        </section>
    )
}

export default Profilecases