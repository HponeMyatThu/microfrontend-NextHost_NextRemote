import dynamic from 'next/dynamic';

const RemoteButton = dynamic(() => import('remote/Button'), { ssr: false });

const Home = () => (
  <div>
    <h1>Host Application</h1>
    <RemoteButton />
  </div>
);

export default Home;
