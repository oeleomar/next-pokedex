import { useEffect, useState } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { X } from 'phosphor-react';
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
    <Dialog.Root>
      <Dialog.Trigger>
        <Styled.Container>
          <Styled.ImageContainer className="bg-black">
            <Image src={frontImg} width="150" height="150" alt="" />
          </Styled.ImageContainer>
          <PokemonName name={name} order={idx} />
          <PokemonsTypes types={types} />
        </Styled.Container>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="bg-black/60 inset-0 fixed" />
        <Dialog.Content className="fixed bg-[#2a2634] py-8 px-10 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg w-[480px] shadow-lg shadow-black/25">
          <Dialog.Title className="text-3xl font-black">
            Olá mundo eu sou um modal
          </Dialog.Title>
          <Dialog.Close>
            <button type="button">
              <X size={32} />
            </button>
          </Dialog.Close>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum ea aut
            reiciendis odio unde soluta quas doloremque perferendis harum! Quo
            praesentium non inventore distinctio rerum itaque a ad ipsa odit.
          </p>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

PokemonCard.propTypes = {
  urlPokemon: P.string.isRequired,
  idx: P.number.isRequired,
};
