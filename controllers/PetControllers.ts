import { Pet } from "../models/Pet"
import PetServices from "../services/PetServices"
import { useState, useEffect } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { useCallback } from 'react';
export const usePetController = () => {
    const [pets, setPets] = useState<Pet[]>([]);//estado para armazenar a lista de pets
     useFocusEffect(
    useCallback(() => {
      setPets([...PetServices.getAllPet()]);
    }, [])
  );
     const addPet = (nome: string) => {//função para adicionar um novo pet, recebendo o nome do pet como parâmetro
        PetServices.addPet(nome);
        setPets(PetServices.getAllPet());
      };
      const deletarPet = (id: number) => {
        PetServices.deletarPet(id);
        setPets(PetServices.getAllPet());
      };
    
      return { pets, addPet, deletarPet };//retorna a lista de pets e a função para adicionar 
      // um novo pet para ser utilizada em outros componentes do projeto
    };