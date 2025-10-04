import React from 'react'
import { cn } from '../../lib/utils'
import ChevronRightIcon from '../icons/ChevronRightIcon'
import Card from '../Cards/Card'
const CardSection = ({movieList,name,className}) => {
    return (
        <div className='sm:p-7 p-3 space-y-4 bg-amdber-600'>
            <div className='flex items-center gap-1 group'>
                <h3 className='sm:text-4xl text-3xl font-bold sm:mb-3'>{name}</h3>
                <ChevronRightIcon className="ml-2 size-5 transition-transform duration-300 group-hover:translate-x-1"/>
            </div>
            <div className = {cn(
                "grid",
                "grid-cols-4",
                "overflow-x-scroll",
                "md:gap-x-85",
                "gap-x-65",
                "lg:gap-x-16",
                "p-4",
                "sm:px-10",
                "scrollbar-hide",
                "sm:bg-neutral-500/15 rounded-4xl",
                className
            )}>
                {
                    movieList.map((movie) => (
                        <Card
                            key={movie.id}
                            id={movie.id}
                            title={movie.title}
                            poster={movie.poster}
                            rating={movie.rating}
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default CardSection     