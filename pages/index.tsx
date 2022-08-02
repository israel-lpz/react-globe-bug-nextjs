import dynamic from 'next/dynamic';
import { type FC, useEffect, useState } from 'react';
const World = dynamic(() => import('../components/World'), { ssr: false });
// import World from './World';

const Home: FC = () => {
  // const [World, setWorld] = useState<FC | null>(null);

  // useEffect(() => {
  // 	(async () => {
  // 		const { default: world } = await import('./World');
  // 		console.log(world);
  // 		setWorld(world);
  // 	})();
  // }, []);

  return (
      <div className='Home d-grid' id={'Home'}>
        <div className={`World`}>
          <World />
          {/*{}*/}
          {/*{typeof window !== undefined && <World />}*/}
        </div>
        <div className='Form-Container w-100 h-100'>
          <div className='d-flex align-items-end flex-column w-100 h-100 justify-content-between'>
            <div className='Form'>
              <h1 className={`Form-Title`}>We develop solutions for Industry 4.0</h1>
              <p className={'pt-4'}>
                To develop cyber-physical systems for the Metaverse, Industry 4.0 and our Circular Economy, with a select
                network of partners to guarantee maximum functionality and interoperability between the Real World,
                Internet of Things, Software & Artificial Intelligence, and Distributed Ledger Technologies.
              </p>
              <div className='input-group mt-4 float-end'>
                <input type='text' className='form-control' placeholder={'Enter your e-mail address'} />
                <button className={'ms-4 '}>Subscribe {'>'}</button>
              </div>
            </div>
            <div className='Cards'>
              <div className='row row-cols-1 row-cols-sm-3 row-cols-md-4 gx-5 gy-3'>
                <div className={`col Card`}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={'/icons/home/3D.svg'} alt={''} className={'Image-Card'} />
                  <h2>3D Creators</h2>
                  <p>Make your 3D Dream real with functional development using Unity cross-platform engine.</p>
                </div>
                <div className={`col Card`}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={'/icons/home/web3.svg'} alt={''} className={'Image-Card'} />
                  <h2>Web 3 Integration</h2>
                  <p>
                    With IOTA Frameworks: Decentralized Identities, Wallet, Tokenization, Smart Contracts, Oracles, and
                    Streams.
                  </p>
                </div>
                <div className='col Card'>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={'/icons/home/software.svg'} alt={''} className={'Image-Card'} />
                  <h2>Software & Web Development</h2>
                  <p>
                    Bespoke solutions for your organization using the latest security protocols and process optimization.
                  </p>
                </div>
                <div className='col Card'>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={'/icons/home/deep-learning.svg'} alt={''} className={'Image-Card'} />
                  <h2>Deep Learning Development</h2>
                  <p>Rely on the data collected by artificial vision systems to automate your processes.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Home;
