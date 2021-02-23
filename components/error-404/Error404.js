import  Link  from 'next/link'
import { useEffect } from 'react';
import { useRouter } from 'next/router';

import styles from './Error404.module.css';

const Error404comps = () => {

  const router = useRouter(); 

  useEffect(() => {
    setTimeout(() => {
      router.push('/'); //redirect back to the home page
    }, 5000)
  }, [])

  return (
    <div className={styles.notFound}>
      <h1>Ooops...</h1>
      <h2>That page cannot be found :(</h2>
      <p>Going back to the <Link href="/"><a>Homepage</a></Link> is 5 seconds...</p>
    </div>
  );
}
 
export default Error404comps;
