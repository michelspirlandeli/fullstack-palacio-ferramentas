import { http } from './config'

export default	{
	listar:()=>{
		return http.get('user')
  },
	salvar:(user)=>{
		return http.post('user',user);
  },
    
	atualizar:(user)=>{
		return http.put('user',user);
  },
	apagar:(user)=>{
		return http.delete('user', { data: user })
	}
}

console.log(data);