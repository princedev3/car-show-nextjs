"use client"

import { showMoreProp } from '@/types'
import React from 'react'
import { useRouter } from 'next/navigation'
import { CustomButton } from '.'
import { UpdateSearchParams } from '@/utils'

const ShowMore = ({isNext,pageNumber}:showMoreProp) => {
    const router = useRouter()
    const HandleNavigation = ()=> {
        const newLimit = (pageNumber+1)*10
        const newPathName = UpdateSearchParams("limit",String(newLimit))
        router.push(newPathName)
    }
  return (
    <div className='w-full  flex-center gap-5 mt-10'>
            {
                !isNext && (
                    <CustomButton title="show more" btnType='button' containerStyles='bg-primary-blue rounded-full  text-white' handleClick={HandleNavigation}/>
                )
            }
    </div>
  )
}

export default ShowMore