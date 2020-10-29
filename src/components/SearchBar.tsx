import React, { useState } from 'react';

export interface SearchBarProps {
    onSubmit: (term: string) => void;
 }

const SearchBar: React.FunctionComponent<SearchBarProps> = props => {
    const [searchTerm, setSearchTerm] = useState<string>('');

    const handleSubmit = (e:any) => {
        e.preventDefault();
        props.onSubmit(searchTerm);
    }

    return (
        <div className="ui segment">
            <form className="ui form" onSubmit={handleSubmit}>
                <div className="field">
                    <label>Image Search</label>
                    <input type='text'
                    value={searchTerm}
                    onChange={e => setSearchTerm(e.target.value)} />
                </div>
            </form>
        </div>
    );
}

export default SearchBar;