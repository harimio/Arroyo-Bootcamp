import React from 'react';
import './container.css'

export const Messagess = ({ allMessages, clase }) => {
    return (
        <div>
            {
                allMessages.map((message, key) => (
                    <div className={clase} key={key}>
                        {message.message}
                    </div>
                ))
            }
        </div>
    )
}
