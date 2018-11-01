import { http } from './config'

export default	{
	listar:()=>{
		return http.get('product')
  },
	salvar:(product)=>{
		return http.post('product',product);
  },
    
	atualizar:(product)=>{
		return http.put('product',product);
  },
	apagar:(product)=>{
		return http.delete('product', { data: product })
	}
}

console.log(data);