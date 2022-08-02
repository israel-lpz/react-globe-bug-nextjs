import dynamic from 'next/dynamic';
import { type FC } from 'react';
const World = dynamic(() => import('../components/World'), { ssr: false });

const Home: FC = () => {
  return (
      <div className='Home d-grid' id={'Home'}>
        <div className={`World`}>
          <World />
        </div>
      </div>
  );
};

export default Home;
