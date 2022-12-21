import React, {FormEvent, useState} from 'react';
import {BiSearch} from "react-icons/bi";
import {BsYoutube} from "react-icons/bs";
import {useNavigate} from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  const [search, setSearch] = useState<string>('');
  
  // TODO: useEffect로 처음 비디오 목록 출력 하기

  /* 페이지 이동 함수 */
  const clickButton = (path: string) => navigate(path);

  /* 검색어 입력 함수 */
  const changeSearchValue = (e: React.ChangeEvent<HTMLInputElement>) => setSearch(e.target.value);

  /* 검색 함수 */
  const searchValue = (e: FormEvent<HTMLFormElement>) => {
    // TODO: 검색 기능 추가하기
    e.preventDefault();
    navigate(`/search?query=${search}`);
    setSearch('');
  };

  return (
    <header className='flex justify-center items-center h-20 bg-black'>
      <button onClick={() => clickButton('/')} className='flex items-center m-4'>
        <span className='text-red-600 text-5xl'><BsYoutube/></span>
        <p className='ml-2.5 text-white text-3xl font-bold'>Youtube</p>
      </button>

      <form onSubmit={searchValue} className='relative w-full m-4'>
        <input type="text" value={search} placeholder='검색어를 입력해 주세요.' onChange={changeSearchValue} required className='w-full h-10 p-2 rounded-md focus:outline-0'/>
        <button type='submit' className='absolute right-0 h-full mr-2 text-3xl text-black transition-all duration-150 hover:text-gray-500'>
          <BiSearch/>
        </button>
      </form>
    </header>
  );
}
