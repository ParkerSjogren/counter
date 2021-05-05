import React from 'react';
import Counter from './components/Counter'

const TableHeader = () => { 
    return (
        <thead>
            <tr>
                <th>Name</th>
                <th>Value</th>
                <th>Increment</th>
                <th>Decrement</th>
                <th>Delete</th>                
                <th>Remove</th>
            </tr>
        </thead>
    );
}

const TableBody = props => { 
    const rows = props.characterData.map((row, index) => {
        return (
            <tr key={index}>
                <td>{row.name}</td>
                <Counter parm={row} fcn={props.removeCharacter} idx={index}/>
                <td><button onClick={() => props.removeCharacter(index)}>Remove</button></td>
            </tr>
        );
    });

    return <tbody>{rows}</tbody>;
}

const Table = (props) => {
    const { characterData, removeCharacter } = props;
        return (
            <table>
                <TableHeader />
                <TableBody characterData={characterData} removeCharacter={removeCharacter} />
            </table>
        );
}

export default Table;