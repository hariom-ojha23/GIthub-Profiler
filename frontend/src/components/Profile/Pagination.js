import React, { useEffect, useState } from 'react'

const Pagination = (props) => {
    const { start, setStart } = props
    const [totalBox, setTotalBox] = useState(6)

    useEffect(() => {
        if (window.innerWidth < 768) {
            setTotalBox(3)
        }

        const sub = window.addEventListener('resize', () => {
            if (window.innerWidth < 768) {
                setTotalBox(3)
            } else {
                setTotalBox(6)
            }
        })

        return () => sub
    }, [])

    useEffect(() => {
        if (props.page === 1) {
            setStart(props.page)
        }
    }, [props.page, setStart])

    function range(start) {
        const arr = []
        const end = start + totalBox - 1
        for (let i = start; i <= end; i++) {
            if (i <= props.total) {
                arr.push(i)
            }
        }

        return arr
    }

    const onPressNext = () => {
        setStart((x) => x + totalBox)
    }
    const onPressPrev = () => {
        setStart((x) => x - totalBox)
    }

    return (
        <ul className='pagination pagination-lg'>
            <li className={start === 1 ? 'page-item disabled' : 'page-item'}>
                <button className='page-link' onClick={onPressPrev}>
                    &laquo;
                </button>
            </li>
            {range(start).map((x) => (
                <li key={x} className='page-item mx-2'>
                    <button
                        className={
                            props.page === x ? 'page-link active' : 'page-link'
                        }
                        onClick={() => props.setPage(x)}
                    >
                        {x}
                    </button>
                </li>
            ))}
            <li
                className={
                    start === props.total - (props.total % totalBox) + 1
                        ? 'page-item disabled'
                        : 'page-item'
                }
            >
                <button className='page-link' onClick={onPressNext}>
                    &raquo;
                </button>
            </li>
        </ul>
    )
}

export default Pagination
