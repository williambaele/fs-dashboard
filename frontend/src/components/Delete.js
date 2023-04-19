import React from 'react';
import { useAuthContext } from '../hooks/useAuthContext';
import { useItemsContext } from '../hooks/useItemsContext';

const Delete = ({item}) => {
  const { user } = useAuthContext();
  const { dispatch } = useItemsContext();

  const handleClick = async () => {
    if (!user) {
      return;
    }

    const response = await fetch("/api/items/" + item._id, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    });
    const json = await response.json();

    if (response.ok) {
      dispatch({ type: "DELETE_ITEM", payload: json });
    }
  };
  return (
    <div>
<span className="material-symbols-outlined" onClick={handleClick}>
              delete
            </span>
    </div>
  );
};

export default Delete;
