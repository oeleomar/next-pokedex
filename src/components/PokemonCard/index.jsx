import { useEffect, useState } from 'react';
import Image from 'next/image';
import axios from 'axios';
import P from 'prop-types';
import * as Styled from './styles';

import { PokemonsTypes } from '../PokemonsTypes';
import { PokemonName } from '../PokemonName';

export function PokemonCard({ urlPokemon, idx }) {
  const [data, setData] = useState({});
  useEffect(() => {
    const func = async () => {
      const value = await axios.get(urlPokemon);
      setData(value.data);
    };
    func();
  }, [urlPokemon]);
  const {
    name = '',
    sprites: {
      versions: {
        'generation-v': {
          'black-white': {
            animated: { front_default: frontImg = '' } = {},
          } = {},
        } = {},
      } = {},
    } = {},
    types = [],
  } = data;
  return (
    <Styled.Container>
      <Styled.ImageContainer>
        <Image src={frontImg} width="150" height="150" alt="" />
      </Styled.ImageContainer>
      <PokemonName name={name} order={idx} />
      <PokemonsTypes types={types} />
    </Styled.Container>
  );
}

PokemonCard.propTypes = {
  urlPokemon: P.string.isRequired,
  idx: P.number.isRequired,
};
