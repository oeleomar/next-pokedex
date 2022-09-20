export const theme = {
  animations: {
    shake: `
      {
        0% {
          transform: translateY(0px)
        }
        10%{
          transform: translateY(-5px)
        }
        75% {
          transform: translateY(1px)
        }
        100%{
          transform: translateY(0)
        }
      }
    `,
  },
  colors: {
    pokemonsType: {
      grass: '#9bcc50',
      poison: '#b97fc9',
      fire: '#fd7d24',
      flying: 'linear-gradient(180deg, #3dc7ef 50%, #bdb9b8 50%)',
      water: '#4592c4',
      bug: '#729f3f',
      normal: '#a4acaf',
      eletric: '#eed535',
      ground: 'linear-gradient(180deg, #f7de3f 50%, #ab9842 50%)',
      fairy: '#fdb9e9',
      fighting: '#d56723',
      psychic: '#f366b9',
      rock: '#a38c21',
      steel: '#9eb7b8',
      ice: '#51c4e7',
      ghost: '#7b62a3',
      dark: '#707070',
      dragon: 'linear-gradient(180deg, #53a4cf 50%, #f16e57 50%)',
    },
  },
};
