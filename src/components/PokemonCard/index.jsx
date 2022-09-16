import { useEffect, useState } from 'react';
import Image from 'next/image';
import axios from 'axios';
import P from 'prop-types';
import * as Styled from './styles';

import { PokemonsTypes } from '../PokemonsTypes';
import { PokemonName } from '../PokemonName';

export function PokemonCard({ urlPokemon }) {
  const [data, setData] = useState({});
  useEffect(() => {
    const func = async () => {
      const value = await axios(urlPokemon);
      setData(value.data);
    };
    func();
  }, [urlPokemon]);
  const {
    name = '',
    order,
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
      <Image src={frontImg} width="200" height="200" alt="" />
      <PokemonName name={name} order={order} />
      <PokemonsTypes types={types} />
    </Styled.Container>
  );
}

PokemonCard.propTypes = {
  urlPokemon: P.string.isRequired,
};