import { useEffect, useState } from "react";
import { Replicache } from "replicache";
import { M, mutators } from "../../src/datamodel/mutators";
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'
import { statementOfPurpose } from '../../utils/statement-of-purpose'
import { nanoid } from "nanoid";

import { randUserInfo } from "../../src/datamodel/client-state";
import { Client } from "reps-client";
import ProposalList from '../../src/frontend/proposal-list'
import Nav from '../../src/frontend/nav'
import Footer from '../../src/frontend/footer'
import ApplicantInfo from '../../src/frontend/applicant-info'
import ApplicationForm from '../../src/frontend/application-form'

export default function Home() {
  const [rep, setRep] = useState<Replicache<M> | null>(null);
  const [showApplication, setShowApplication] = useState(false)

  useEffect(() => {
    const [, , roomID] = location.pathname.split("/");

    (async () => {
      const r = new Replicache({
        name: roomID,
        mutators,

        // TODO: Do we need these?
        // TODO: figure out backoff?
        pushDelay: 0,
        requestOptions: {
          maxDelayMs: 0,
          minDelayMs: 0,
        },
        auth: JSON.stringify({
          userID: nanoid(),
          roomID: roomID,
        }),

        // We only use pull to get the base cookie.
        pullInterval: null,
      });

      const workerHost =
        process.env.NEXT_PUBLIC_WORKER_HOST ??
        "wss://reps.trunk.workers.dev";
      const workerURL = `${workerHost}/connect`;
      console.info(`Connecting to worker at ${workerURL}`);
      new Client(r, roomID, workerURL);

      const defaultUserInfo = randUserInfo();
      await r.mutate.initClientState({
        id: await r.clientID,
        defaultUserInfo,
      });
      // r.onSync = (syncing: boolean) => {
      //   if (!syncing) {
      //     r.onSync = null;
      //     r.mutate.initShapes(Array.from({ length: 5 }, () => randomShape()));
      //   }
      // };

      setRep(r);
    })();
  }, []);

  function handleSetShowApplication(state: boolean){
    setShowApplication(state)
  }
  return (
    <div className={styles.container}>
      <Head>
        <title>Hawai‘i People’s Fund</title>
        <meta name="description" content="offline-first collaborative reference manager" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav
        handleSetShowApplication={handleSetShowApplication}
        showApplication={showApplication}
      />
      <main className={styles.main}>
        { showApplication ?
          <ApplicationForm rep={rep}/>
        :
          <ApplicantInfo
            handleSetShowApplication={handleSetShowApplication}
          />
        }
      </main>
      <Footer/>
    </div>
  )
}
