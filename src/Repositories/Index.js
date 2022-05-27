import React, { useEffect, useLayoutEffect , useState } from 'react';
import * as S from './styled';

export default function Repositories() {
    const [repositories, setRepositories] = useState([]);

    useEffect(() => {
        let repositoriesName = localStorage.getItem('repositoriesName');
        // console.log(repositoriesName);
        repositoriesName = JSON.parse(repositoriesName);
        setRepositories(repositoriesName);
        // localStorage.clear();
        // console.log(repositoriesName);
    }, []);


    return(
        <S.Container>
            <S.Title>Repositories</S.Title>
            <S.List>
                {repositories.map(repository => {
                    return (
                        <S.ListItem>Repository: { repository }</S.ListItem>
                    )
                })}
            </S.List>
            <S.LinkHome to="/">Back</S.LinkHome>
        </S.Container>
    );
}