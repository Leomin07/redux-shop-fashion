import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

const Search = () => {
  const history = useHistory();
  const [keyword, setKeyword] = useState([]);
  const onSubmit = e => {
    e.preventDefault();
    history.push(`/search/${keyword}`);
  };
  return (
    <>
      <Form className="pt-1" onSubmit={onSubmit}>
        <Form.Control
          type="text"
          placeholder="Search..."
          onChange={e => setKeyword(e.target.value)}
        />
      </Form>
    </>
  );
};

export default Search;
