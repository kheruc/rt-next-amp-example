import { withAmp } from 'next/amp';
import Layout from '../components/layout';

const Index = () => (
  <Layout>
    <h1>Next.js AMP Example</h1>
  </Layout>
);

export default withAmp(Index);
