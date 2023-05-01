import Image from 'next/image'
import { Inter } from 'next/font/google'
import { NextScript } from 'next/document'
import MainMenu from '@/component/menu/main-menu'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <div className='flex'>
        <MainMenu route="/board/car" title="자동차 게시판 메뉴" content="우리 함께 자동차에 대해서 얘기 나눠봐요!"/>
        <MainMenu route="/board/house" title="부동산 게시판 메뉴" content="맞이하는 집을 생각하며 오늘도 퇴근!"/>
      </div>
    </main>
  )
}