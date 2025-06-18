import React, { memo } from 'react'
import './ColumnFlexBox.scss'
import RowFlexBox from '../RowFlexBox/RowFlexBox';

interface ImageItemProps {
    text?: string;
    imageUrl?: string;
}

interface RowFlexBoxProps {
    title: string;
    items: ImageItemProps[];
}

interface ColumnFlexBoxProps {
    items: RowFlexBoxProps[];
    width?: string;
}

const ColumnFlexBox: React.FC<ColumnFlexBoxProps> = memo(({ items, width = '100%' }) => {
    return (
        <div className='column-flex-box' style={{ width }}>
            {items.map((item: RowFlexBoxProps, index: number) => (
                <div key={index} className='column-flex-item'>
                    <RowFlexBox title={item.title} items={item.items} />
                </div>
            ))}
        </div>
    );
});

export default ColumnFlexBox;
