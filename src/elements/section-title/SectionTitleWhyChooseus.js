import React from 'react';


const SectionTitleWhyChooseus = ({subtitle, title, description, textAlignment, textColor}) => {
    return (
        <div className={`section-heading`}>
            <div className="subtitle"></div>
            <h2 className="title"></h2>
            <p dangerouslySetInnerHTML={{__html: description}}></p>
        </div>
    )
}

export default SectionTitleWhyChooseus;