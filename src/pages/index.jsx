import P from 'prop-types';
import { mapData } from './api/mapData';

import { HomeTemplate } from '../templates/HomeTemplate';

export default function Home({ data }) {
  return <HomeTemplate data={data} />;
}

Home.propTypes = {
  data: P.array.isRequired,
};

export async function getStaticProps() {
  const data = await mapData();

  return {
    props: {
      data,
    },
    revalidate: 60 * 60 * 30,
  };
}
