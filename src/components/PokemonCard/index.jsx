/* eslint-disable no-nested-ternary */
import { useEffect, useState } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { X, GenderFemale, GenderMale } from 'phosphor-react';
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
        <Dialog.Content className="fixed bg-white py-8 px-10 text-zinc-900 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg  shadow-lg shadow-black/25">
          <Dialog.Title className="text-4xl text-center mb-9">
            {data.name ? data.name.charAt(0).toUpperCase() + name.slice(1) : ''}{' '}
            <span className="text-zinc-500">
              {idx <= 9 ? `Nº00${idx}` : idx <= 99 ? `Nº0${idx}` : `Nº${idx}`}
            </span>
          </Dialog.Title>
          <Dialog.Close className="absolute top-[10px] left-[90%]">
            <X size={32} />
          </Dialog.Close>
          <div className="flex items-center">
            <div className="bg-[#f2f2f2] rounded m-5">
              <Image width={320} height={320} src={frontImg} alt="" />
            </div>

            <div className="bg-[#30a7d7] p-4 text-sky-50 h-[250px] w-[320px] rounded-3xl ">
              <div className="flex">
                <div className="flex flex-col w-[220px]">
                  <div>
                    <p className="text-[16px]">Height</p>
                    <p className="text-zinc-900 text-[20px]">
                      {data.height / 10} m
                    </p>
                  </div>
                  <div>
                    <p className="text-[16px]">Weight</p>
                    <p className="text-zinc-900 text-[20px]">
                      {data.weight / 10} kg
                    </p>
                  </div>
                </div>
                <div className="flex flex-col w-[220px]">
                  <div className="">
                    <p className="text-[16px]">Gender</p>
                    <div className="flex text-zinc-900 mt-3">
                      <span className="inline-block">
                        <GenderMale size={25} />
                      </span>
                      <span>
                        <GenderFemale size={25} />
                      </span>
                    </div>
                  </div>
                  <div>
                    <p className="text-[16px]">Abilities</p>
                    <p className="text-zinc-900 text-[20px]">Habilidade</p>
                  </div>
                </div>
              </div>
              <div>
                <p className="text-[20px] mb-3">Type</p>
                <PokemonsTypes types={types} className="mt-2" />
              </div>
            </div>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

PokemonCard.propTypes = {
  urlPokemon: P.string.isRequired,
  idx: P.number.isRequired,
};
