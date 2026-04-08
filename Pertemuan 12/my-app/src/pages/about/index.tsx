import Head from 'next/head'
import Image  from 'next/image'
import { Inter } from 'next/font/google'
import TampilanAbout from '@/view/about'
// import styles from '@/styles/Home.module.css'

const halamanAbout = () => {
    return (
        <>
        <TampilanAbout />
        </>
    );
}

export default halamanAbout;