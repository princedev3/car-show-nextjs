"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import { SearchManufacturer } from './'
import { manufacturers } from '@/constant'
import { useRouter } from 'next/navigation'
//import { URLSearchParams } from 'next/dist/compiled/@edge-runtime/primitives/url'


const SearchButton= ({otherclasses}:{otherclasses:string})=>(
   <button type='submit' className={`-ml-3 z-10  ${otherclasses}` }>
      <Image src="/magnifying-glass.svg" alt="" width={40} height={40} />
  </button>
)

const SearchBar = () => {

  const router = useRouter()

    const [manufacturer,setManufacturer]=useState("")
    const [model,setModel]=useState("")

    const handleSearch = (e:React.FormEvent<HTMLFormElement>)=>{
      e.preventDefault()

      if(manufacturer ==="" && model===""){
        return alert("please fill search bar")
      }
      UpdateSearchParams(model.toLowerCase(),manufacturer.toLowerCase())
    }

    const UpdateSearchParams = (model:string,manufacturer:string)=> {

      const searchParams =new URLSearchParams(window.location.search)

      if(model){
        searchParams.set("model",model)
      }else{
        searchParams.delete("model")
      }
      if(manufacturer){
        searchParams.set("manufacturer",manufacturer)
      }else{
        searchParams.delete("manufacturer")
      }

      const newPathname = `${window.location.pathname}?${searchParams.toString()}`
      router.push(newPathname)

    }
  return (
    <form className='searchbar' onSubmit={handleSearch}>
        <div className="searchbar__item">
            <SearchManufacturer manufacturer={manufacturer} setManufacturer={setManufacturer} />
            <SearchButton  otherclasses={"sm:hidden"} />
        </div>
        <div className="searchbar__item">
          <Image src="/model-icon.png" width={25} height={25} className='absolute w-[20px] h-[20px] ml-4' alt='car model ' /> 
          <input className='searchbar__input' type='text' name='model' value={model} onChange={e=>setModel(e.target.value)} placeholder='Tiguan'/>
          <SearchButton  otherclasses={"sm:hidden"} />
        </div>
        <SearchButton  otherclasses={"max-sm:hidden"} />
    </form>
  )
}

export default SearchBar