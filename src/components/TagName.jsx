import React from 'react';

const TagName = ({ tags }) => {
    return (
        <div className="tags">
            {tags.map((element, index) => {
                return <span key={index}>{element}</span>;
            })}
        </div>
    );
};

export default TagName;
