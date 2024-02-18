import PropTypes from 'prop-types';
import { Painting } from "../Painting/Painting";
import React from 'react';

// class PaintingList2 extends React.Component {
//     state = {
//         key: this.props.id,
//         url: this.props.url,
//         title: this.props.title,
//         price: this.props.price,
//         quantity: this.props.quantity,
//         author: this.props.author
//     }
// }

export function PaintingList ({painting}){
    return(
        <ul>
        {painting.map(({id, title, url, quantity, price, author})=>(
            <Painting 
                key={id}
                url={url}
                title={title}
                price={price}
                quantity={quantity}
                author={author}
            />
        ))}
   </ul> 
   )
}

PaintingList.propTypes = {
    painting: PropTypes.array,
}