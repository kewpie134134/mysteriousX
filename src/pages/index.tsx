import type { NextPage } from 'next';
import Head from 'next/head';
import CustomButton from '../components/atoms/CustomButton';
import LightBulb from '../components/atoms/LightBulb';
import CustomInputForm from '../components/atoms/CustomInputForm';

const styles = {
  backgroundColor: '#000',
};

const Home: NextPage = () => {
  return (
    <div style={styles}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body style={styles}></body>
      <CustomButton />
      <LightBulb />
      <CustomInputForm />
    </div>
  );
};

export default Home;
