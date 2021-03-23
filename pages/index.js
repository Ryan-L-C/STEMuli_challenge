import Head from 'next/head'
import { Iconly } from 'react-iconly'
import styles from '../styles/Home.module.css'
import Nav from '../components/nav';
import Banner from '../components/banner';
import SmallTimeline from '../components/smallTimeline';

export default function Home() {
  return (
    <Nav >
      <div className={'flex non-mobile:flex-col non-mobile:mx-20 mobile:flex-col mobile:mx-4 space-y-8'}>
        <Banner
          title='Unity Dashboard'
          subtitle='Create Your Product Dashboard in Minutes'
          buttonText='Get Started'
          largeImage={<img src='imgs/unity_dashboard_large.png' />}
          smallImage={<img src='imgs/unity_dashboard_small.png' />}
        />
        <SmallTimeline data={
          [
            { timestamp: new Date(), title: 'Unity UI Kit', subtitle: 'UI Design' },
            { timestamp: new Date(), title: 'Unity UI Kit', subtitle: 'UI Design' },
            { timestamp: new Date(), title: 'Unity UI Kit', subtitle: 'UI Design' },
            { timestamp: new Date(), title: 'Unity UI Kit', subtitle: 'UI Design' }
          ]
        }
        />
      </div>
    </Nav>
  )
}
