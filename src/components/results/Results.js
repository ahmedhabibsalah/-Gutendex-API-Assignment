import React, {useEffect, useMemo, useState} from 'react'
import Pagination from '../pagination/Pagination';
import background from "../hero/images/banner-bg.jpg"

let PageSize = 6;

const Results = () => {

    const [currentPage, setCurrentPage] = useState(1);
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState([]);


    useEffect(() => {
        const Url = "https://gutendex.com/books/"
        fetch(Url)
        .then((response) => response.json())
        .then((json)=> setData(json["results"]))
        .catch((error) => console.log(error));
    }, [])

    useEffect(() => {
        if (data.length !== 0) {
            setIsLoading(false);
          }
          console.log(data);
    }, [data])

    const currentTableData = useMemo(() => {
        const firstPageIndex = (currentPage -1 ) * PageSize;
        const lastPageIndex = firstPageIndex + PageSize;
        return data.slice(firstPageIndex, lastPageIndex);
      }, [currentPage, data]);

    return (
        <>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4 items-center p-4 bg-cover bg-centerbg-no-repeat' style={{backgroundImage:`url(${background})`}}>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        currentTableData.map((user) => (
            <div className='m-4'>
                <div className='w-96 h-96 mt-0.5'>
                    <img
                    className='h-full w-full shadow-md border-none rounded-lg cursor-pointer'
                    src={user.formats["image/jpeg"]}
                    alt={user.title}
                     />
                </div>
                <div className='text-xl w-90 max-h-96 overflow-hidden text-ellipsis font-bold'>
                    <span>
                    {user.title}
                    </span>
                </div>
                <div className='text-xl w-90 max-h-96 overflow-hidden text-ellipsis font-extralight'>
                {user.authors.length > 0 && <span>{user.authors[0].name}</span>}
                </div>
            </div>
          
        ))
      )}
      
   </div>
   <div className='flex justify-center	'style={{backgroundImage:`url(${background})`}}>
      <Pagination
         className="pagination-bar ml-5"
         currentPage={currentPage}
         totalCount={data.length}
         pageSize={PageSize}
         onPageChange={page => setCurrentPage(page)} />
   </div>
</>
    )
}

export default Results
