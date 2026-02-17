import { Inter } from 'next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin']})

export default function About() {
    return (
        <div>
            <Link href={"/"}>Home</Link>
              <ul>
                <li> Nama Mahasiswa : Ivansyah Eka Oktaviadi Santoso </li>
                <li> NIM : 2341720126 </li>
                <li> Program Studi : D-IV Teknik Informatika </li> 
              </ul>

        </div>     
    )
}