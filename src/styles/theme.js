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
          transform: translateY(3px)
        }
        100%{
          transform: translateY(0)
        }
      }
    `,
  },
};
