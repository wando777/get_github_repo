import React, { useState } from 'react';
import axios from 'axios';
import * as S from './styled';
import { useNavigate } from 'react-router-dom';

function Home(props) {
    const [usuario, setUsuario] = useState('');
    const navigate = useNavigate();
    const [ error, setError ] = useState(false); 

    function handleSearch() {
        axios.get(`https://api.github.com/users/${usuario}/repos`).then(res => {
            const repositories = res.data;
            const repositoriesName = [];
            repositories.map((repository) => {
                repositoriesName.push(repository.name);
            });
            // console.log(JSON.stringify(repositoriesName));
            localStorage.setItem('repositoriesName', JSON.stringify(repositoriesName));
            setError(false);
            navigate('/repositories');
        }).catch(err => {
            setError(true);
        });
    }

    return (
        <S.HomeContainer>
            <S.Content>
                <S.Input name="user" id="user" className="userInput" placeholder="User" value={usuario} onChange={e => setUsuario(e.target.value)} />
                <S.Button type="button" onClick={handleSearch}>Search</S.Button>
            </S.Content>
            { error ? <S.errorMsg>An error has been ocurred, please try again.</S.errorMsg> : '' }
        </S.HomeContainer>
    );
}

export default Home;