import { useState, useEffect } from 'react';

export default function ListGroup() {
    const [items, setItems] = useState(['Banana', 'Apple', 'Orange', 'Pineapple', 'Grapes']);
    const [selectedIndex, setSelectedIndex] = useState(-1);
    const [lastClicked, setLastClicked] = useState('');

    useEffect(() => {
        document.title = `List Group - ${items.length} items`;
        return () => {
            document.title = 'React App';
        };
    }, [items]);

    useEffect(() => {
        if (lastClicked) {
            console.log(`Last clicked item: ${lastClicked}`);
        }
    }, [lastClicked]);

    const handleClick = (item, index) => {
        setSelectedIndex(index);
        setLastClicked(item);
    };

    const handleRemove = (indexToRemove) => {
        setItems(items.filter((_, index) => index !== indexToRemove));
    };

    return (
        <>
            <h1 className="mb-4">List Group</h1>
            {items.length === 0 && <p>No items found</p>}

            <ul className="list-group">
                {items.map((item, index) => (
                    <li
                        key={index}
                        className={`list-group-item ${selectedIndex === index ? 'active' : ''}`}
                        onClick={() => handleClick(item, index)}
                    >
                        <div className="d-flex justify-content-between align-items-center">
                            {item}
                            <button 
                                className="btn btn-danger btn-sm"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    handleRemove(index);
                                }}
                            >
                                Delete
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
            
            {selectedIndex !== -1 && (
                <div className="mt-3 alert alert-info">
                    Selected item: {items[selectedIndex]}
                </div>
            )}
        </>
    );
}