import React from 'react'
import './RowFlexBox.scss'
import ImageItem from '../ImageItem/ImageItem';

interface ImageItemProps {
    text?: string;
    imageUrl?: string;
}

interface RowFlexBoxProps {
    title: string;
    items: ImageItemProps[];
}

const RowFlexBox: React.FC<RowFlexBoxProps> = React.memo(({ title, items }) => {
    items = items.sort((a, b) => {
        if (a.text && b.text) {
            return a.text.localeCompare(b.text);
        }
        return 0;
    });

    return (
        <div className='row-flex-container'>
            <h3 className='row-flex-text'>{title}</h3>
            <div className='row-flex-box'>
                {items.map((item: ImageItemProps, index: number) => (
                    <div key={index}>
                        <ImageItem text={item.text} imageUrl={item.imageUrl} />
                    </div>
                ))}
            </div>
        </div>
    );
});

export default RowFlexBox
