import React from 'react'

const EmptyList = ({ todoList }) => {
    return (
        <>
            { todoList.length === 0 && 
                <div className='container'>
                    <p style={{textAlign: 'center', color: "hsl(234, 11%, 52%)"}}>
                        Nothing to see here😒😒
                    </p>
                </div> 
            }
        </>
    )
}

export default EmptyList