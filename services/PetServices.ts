import { Pet } from "../models/Pet"
//criação de uma classe para o serviço de pet, onde serão implementados os métodos para manipulação dos dados dos pets
class PetService {
    private pet: Pet[] = [
      { id: 1, nome: 'Item 1' },
      { id: 2, nome: 'Item 2' },
    ];
    //método para retornar todos os itens da lista de pets
    getAllPet(): Pet[] {
        return this.pet;
      }
      //método para adicionar um novo item à lista de pets, recebendo o nome do item como parâmetro
      addPet(nome: string): void {
        //verifica se o nome do item tem mais de 2 caracteres e se já existe um item com o mesmo nome na lista de pets
        if (nome.length >2 && !this.pet.find(p => p.nome === nome)){
        const newPet: Pet = {//criação de um novo objeto do tipo Pet com um ID único e o nome fornecido
          id: Date.now(), //geração de um ID único para o novo item usando a função Date.now()
          nome: nome,
        };
        this.pet.push(newPet);//adiciona o novo item à lista de pets
      }
    }
    }
    //exportação da instância da classe PetService para ser utilizada em outros arquivos do projeto
    export default new   PetService();