import Image from 'next/image'
import React from 'react'
import One from '../../../public/versace.png'
import Two from '../../../public/zara.png'
import Three from '../../../public/gucci.png'
import Four from '../../../public/prada.png'
import Five from '../../../public/ck.png'

const Logo = () => {
  return (
    <div className='grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-5 p-6 bg-black'>
        <div>
        <Image
        src={One}
        alt='logo'
        width={165}
        height={33}
        />
        </div>

        <div>
        <Image
        src={Two}
        alt='Logo'
        width={91}
        height={33}
        />
        </div>

        <div>
        <Image
        src={Three}
        alt='logo'
        width={156}
        height={33}
        />
        </div>

        <div>
        <Image
        src={Four}
        alt='logo'
        width={104}
        height={33}
        />
        </div>

        <div>
        <Image
        src={Five}
        alt='logo'
        width={206}
        height={33}
        />
        </div>

    </div>
  )
}

export default Logo