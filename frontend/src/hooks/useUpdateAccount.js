import { useAuthContext } from './useAuthContext';
import { useState } from 'react';

export const useUpdateAccount = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const { state, dispatch } = useAuthContext();

  const updateAccount = async (data) => {
    setIsLoading(true);
    setError(null);

    const response = await fetch(`/api/user/update/${state.user.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${state.user.token}`,
      },
      body: JSON.stringify(data),
    });

    const json = await response.json();

    if (!response.ok) {
      setIsLoading(false);
      setError(json.error);
    }

    if (response.ok) {
      localStorage.setItem(
        'user',
        JSON.stringify({ ...state.user, ...json })
      );

      dispatch({ type: 'UPDATE_ACCOUNT', payload: json });

      setIsLoading(false);
    }
  };

  return { updateAccount, isLoading, error };
};
