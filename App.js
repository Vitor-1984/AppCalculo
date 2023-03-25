import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default function App() {
  /*usando hook state para armarzenar nome para ser exibibido*/
  const [nome, setNome] = useState("");
  /*usando hook state para armarzenar nome digitado e linkado com TextInput*/
  const [nomeTxt, setNomeTxt] = useState("");
	
  /*usando hook state para armarzenar o valor e linkado com TextInput para o valor1*/
  const [valor1, setValor1] = useState(0);
  /*usando hook state para armarzenar o valor e linkado com TextInput para o valor2*/
  const [valor2, setValor2] = useState(0);
  /*usando hook state para armarzenar o valor do resultado da operação e que será exibido*/
  const [resultado, setResultado] = useState(0);
  
  /*Função para realizar o calculo da soma de valor1 e valor2*/
  function somar(){
	  //calculando o valor da soma e atribuindo o resultado para a variavel r
	  let r = parseFloat(valor1) + parseFloat(valor2);
	  //alterando o valor do resultado inserindo o valor da variavel r
	  setResultado(r);
  }

  //função que altera o valor da state nome
  function lerNome(){
	  //atribuindo valor da state nomeTxt para a state nome
	  setNome(nomeTxt);
  }
  return (
    <View style={styles.container}>
      
		<Text style={styles.titulo}>Teste</Text>

		  <View style={styles.bloco}>
			  <Text style={styles.label}> Nome: </Text>
			   {/*input do nome*/}
			  <TextInput 
				  style={styles.input}
				  value={nomeTxt}
				  onChangeText={(texto)=>setNomeTxt(texto)}
			  />
			  <TouchableOpacity style={styles.botao} onPress={lerNome}>
				  <Text style={styles.txtBotao}>Enviar</Text>
			  </TouchableOpacity>
			   {/*exibindo o nome*/}
			  <Text style={styles.titulo}>Nome: {nome}</Text>
		  </View>
		
		  <View style={styles.bloco}>
		  	<Text style={styles.label}> Valor 1: </Text>
			    {/*input do valor1*/}
			  <TextInput 
				  style={styles.input}
				  value={valor1}
				  onChangeText={(valor)=>setValor1(valor)}
			  />
		  </View>
		  <View style={styles.bloco}>
		  	<Text style={styles.label}> Valor 2: </Text>
			  {/*input do valor1*/}
			  <TextInput 
				  style={styles.input}
				  value={valor2}
				  onChangeText={(valor)=>setValor2(valor)}
			  />
		  </View>
		  <View style={styles.bloco}> 
		  	<TouchableOpacity style={styles.botao} onPress={somar}>
				  <Text style={styles.txtBotao}>Somar</Text>
			  </TouchableOpacity>
		  </View>
		  <View style={styles.bloco}>
			  {/*exibindo o valor do resultado*/}
		  	<Text style={styles.label}> Resultado: {resultado}</Text>
		  </View>
    </View>
	
  );
}

const styles = StyleSheet.create({
  botao:{
	backgroundColor:'#000',
	alignItems:'center',
	marginTop:20
  },
  txtBotao:{
	color:"#FFF",
	fontSize:30
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
titulo:{
	fontSize:30,
	color:'#F00'
},
label:{
  fontSize:30
},
input:{
	borderWidth:2,
	fontSize:20	
}
});
