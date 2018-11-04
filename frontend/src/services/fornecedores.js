import { http } from './config'

export default	{
	listar:()=>{
		return http.get('fornecedores')
  },
	salvar:(fornecedores)=>{
		return http.post('fornecedores',fornecedores);
  },
    
	atualizar:(fornecedores)=>{
		return http.put('fornecedores',fornecedores);
  },
	apagar:(fornecedores)=>{
		return http.delete('fornecedores', { data: fornecedores })
	}
}

console.log(data);