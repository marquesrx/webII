import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';

const ApiComponent = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://api.adviceslip.com/advice');
        setData(response.data);
      } catch (error) {
        console.error('Erro ao obter dados da API', error);
      }
    };

    fetchData();
  }, []);

  return (
    <View>
      <Text>Dados da API:</Text>
      {data.map((item) => (
        <Text key={item.id}>{item.nome}</Text>
      ))}
    </View>
  );
};

export default ApiComponent;
