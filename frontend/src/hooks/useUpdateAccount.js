import { useState } from "react";
// import { useAuthContext } from './useAuthContext'

import axios from "axios";

export const useUpdateAccount = ({ user }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const updateAccount = async (newPseudo) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await axios.patch(`/users/${user.id}`, {
        pseudo: newPseudo,
      });
      setIsLoading(false);
      return response.data;
    } catch (error) {
      setIsLoading(false);
      setError(error.response.data.error);
    }
  };

  return { updateAccount, isLoading, error };
};
