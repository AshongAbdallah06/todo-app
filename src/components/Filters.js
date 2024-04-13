import React from 'react'

const Filters = ({ handleShowCompleted, handleShowAll }) => {
    return (
        <section>
            <div className='container filters'>
                <p onClick={handleShowAll}>All</p>
                <p>Active</p>
                <p onClick={handleShowCompleted}>Completed</p>
            </div>

            <section className='reorder'>
                Drag and drop to reorder list
            </section>
        </section>
    )
}

export default Filters