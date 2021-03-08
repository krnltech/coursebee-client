import Head from 'next/head';

const HeadComps = ({ title, iconSource }) => {
  return (  
    <>
      <Head>
        <title>{title}</title>
        <link rel="icon" href={ iconSource }/>
        <link
          rel="stylesheet"
          type="text/css"
          charSet="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
        <link 
          rel="preconnect" 
          href="https://fonts.gstatic.com"
        />
        <link 
          href="https://fonts.googleapis.com/css2?family=Fira+Sans:wght@600&display=swap" 
          rel="stylesheet"
        /> 
      </Head>
    </>
  );
}
 
export default HeadComps;