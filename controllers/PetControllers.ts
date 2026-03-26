import { Pet } from '../models/Pet';
import PetServices from '../services/PetServices';
import { useState, useEffect } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { useCallback } from 'react';

export const usePetController = () => {
  const [pets, setPets] = useState<Pet[]>([]);

  useFocusEffect(
    useCallback(() => {
      setPets([...PetServices.getAllPet()]);
    }, [])
  );

  const addPet = (nome: string) => {
    PetServices.addPet(nome);
    setPets([...PetServices.getAllPet()]);
  };

  const deletarPet = (id: number) => {
    PetServices.deletarPet(id);
    setPets([...PetServices.getAllPet()]);
  };

  return { pets, addPet, deletarPet };
};