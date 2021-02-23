import Head from 'next/head';

const HeadComps = ({ title, iconSource }) => {
  return (  
    <>
      <Head>
        <title>{title}</title>
        <link rel="icon" href={ iconSource }/>
      </Head>
    </>
  );
}
 
export default HeadComps;