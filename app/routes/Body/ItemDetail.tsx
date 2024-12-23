// ItemDetail.tsx
import React from 'react';
import { useParams } from 'react-router-dom';

const ItemDetail = () => {
    const { itemId } = useParams<{ itemId: string }>(); // Get the item ID from the URL

    return (
        <div className="p-4">
            <h2 className="text-2xl font-bold">Clothing Item {itemId}</h2>
            <p>Details about Clothing Item {itemId} go here.</p>
        </div>
    );
};

export default ItemDetail;