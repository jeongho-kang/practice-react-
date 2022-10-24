import React from "react";
import Book from "./Book"

function Library(props) {
    return (
        <div>
            <Book name="처음만난 파이썬" numOfPage={300}/>
            <Book name="쉽게 배우는 리눅스" numOfPage={500}/>
            <Book name="인텔 프로세서를 위한 시스템 프로그래밍" numOfPage={700}/>

        </div>
    )
}

export default Library;