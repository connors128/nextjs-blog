import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import React, { useHook, useEffect, useState } from 'react';
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'
import Image from 'next/image'
import Socials from '../components/socials'

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

export default function Home({allPostsData }) {

  // useEffect(()=> {
  //   window.onscroll = function() {
  //     var speed = 5.0;
  //     document.body.style.backgroundPosition = (-window.pageXOffset/speed)+"px "+(-window.pageYOffset/speed)+"px";
  //   }
  //   return ()=> { //remove the event listener
  //   }}, [])
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hi, I'm Connor. Final semester student at Texas State University, studying Computer Science.</p>
      </section>
        <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
          <h2 className={utilStyles.headingLg}>About Me</h2>
          <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
              <Date dateString={date} />
              </small>
            </li>
          ))}
          </ul>
        </section>
        <section>
          <Socials/>
        </section>
    </Layout>
  )
}
