import React from 'react';


const SectionTitle4 = ({subtitle, title, description, textAlignment, textColor}) => {
    return (
        <div className={`section-heading ${textAlignment} ${textColor}`}>
            <div className="subtitle"></div>
            <center>
            <h4 className="title" >


Why Your Business Should Be Using Digital Agency Services
            </h4>
            </center>
        
            <p ></p>
        </div>
    )
}

export default SectionTitle4;